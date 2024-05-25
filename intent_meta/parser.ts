import { FISQueryInstruction, FISQueryRequest, queryActionFromJSON } from "../chain/flux/astromesh/v1beta1/query";
import { Plane, planeFromJSON } from "../chain/flux/astromesh/v1beta1/tx";
import { Schema, SchemaFISQuery, SchemaPrompt, StrategyMetadata } from "../chain/flux/strategy/v1beta1/strategy";
import { MsgTriggerStrategies } from "../chain/flux/strategy/v1beta1/tx";

function deepClone(a: any): any {
    return JSON.parse(JSON.stringify(a))
}

function replacePlaceholders(template, values) {
    return template.replace(/\${(\w+)}/g, (_, key: string) => values[key] || '');
}

/*
  Pending Todo: input address by plane?
  E.g query order of an address (calculated from programId and some seeds) => need to support equation eval() with input params
*/

function compileTriggerMsg(
  luxSender: string,
  intentId: string,
  action: string, 
  prompt: SchemaPrompt, 
  userInput: Object,
  defaultConst: Object,
): MsgTriggerStrategies {
  // fill input into query + convert compiled query to fis query
  let query = deepClone(prompt.query) as SchemaFISQuery
  let knownVars = {...userInput, ...defaultConst}

  let fisQuery = FISQueryRequest.create({
    instructions: [],
  })
  for(let ix of query.instructions) {
    // replace vars within queries
    for(let i = 0; i < ix.input.length; i++) {
      console.log(ix.input[i])
      ix.input[i] = replacePlaceholders(Buffer.from(ix.input[i]).toString(), knownVars)
    }

    fisQuery.instructions.push(FISQueryInstruction.create({
      plane: planeFromJSON(ix.plane),
      action: queryActionFromJSON(ix.action),
      address: ix.address,
      input: ix.input,
    }))
  }

  let strategyInput = {
    [action]: {...userInput},
  }
  return MsgTriggerStrategies.create({
    sender: luxSender,
    ids: [intentId],
    inputs: [Buffer.from(JSON.stringify(strategyInput))],
    queries: [fisQuery],
  })
}

let metadata = Schema.create({
  groups: [
    {
      name: "deposit/transfer helper",
      prompts: {
        deposit: {
          template: "deposit \${amount} \${denom} equally from bank to all planes",
          query: {
            instructions: [
              {
                plane: "COMSOS",
                action: "COSMOS_ASTROMESH_TRANSFER",
                "address": null,
                "input": [
                  new Uint8Array(Buffer.from("${addressEvm}")),
                  new Uint8Array(Buffer.from("${denom}")),
                ]
              }
            ]
          }
        }
      }
    }
  ]
});

(async() => {
  let consts = {
    wallet: 'lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx',
  }
  let inputVars = {
    denom: "usdt",
    amount: '30000000',
  }
  let triggerMsg = compileTriggerMsg(
    'lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx',
    '9eb83888b44a71f3a1630676aa1f3052deb142bb7661e64a71b7b77938088dd7',
    'deposit_equally',
    metadata.groups[0].prompts.deposit,
    inputVars,
    consts
  )

  console.log(triggerMsg)
})()
