import { Schema, SchemaPrompt, StrategyMetadata } from "../chain/flux/strategy/v1beta1/strategy";
import { MsgTriggerStrategies } from "../chain/flux/strategy/v1beta1/tx";

function deepClone(a: any): any {
    return JSON.parse(JSON.stringify(a))
}

function replacePlaceholders(template, values) {
    return template.replace(/\${(\w+)}/g, (_, key: string) => values[key] || '');
}

function interprete(action: string, prompt: SchemaPrompt, input: Map<string, any>): MsgTriggerStrategies {
  // fill input into query
  // convert query to fis query
  return MsgTriggerStrategies.create({})
}

/*
Pending Todo: input address by plane?
E.g query order of an address (calculated from programId and some seeds)
*/

let metadata = Schema.create({
  groups: [
    {
      name: "deposit/transfer helper",
      prompts: {
        "deposit": {
          template: "deposit \${amount} \${denom} equally from bank to all planes",
          query: {
            instructions: [
              {
                plane: "0",
                action: "2",
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
})

// intent creator => define schema
// metadata:
//   intent image: url
//   name: "intent name"
//   description: "Defi user joins this"
//   tags: [#defi, #nft]
let metadataJson = `
{
    "groups": [
      {
        "name": "deposit/transfer helper",
        "prompts": {
          "deposit": {
            "template": "deposit \${amount} \${denom} equally from bank to all planes",
            "query": {
              "instructions": [
                {
                  "plane": 0,
                  "action": 2,
                  "address": null,
                  "input": [
                    "\${wallet}",
                    "\${denom}"
                  ]
                }
              ]
            }
          },
          "withdraw": {
            "template": "withdraw \${denom} from all planes to cosmos bank"
          }
        }
      },
      {
        "name": "DeFi helper",
        "prompts": {
          "provide_liquidity": {
            "template": "provide \${amountA} \${denomA} and \${amountB} \${denomB} to liquidity pool. We cannot try this for now"
          }
        }
      }
    ]
}
`;

(async() => {
    // fill order => global vars => input vars => default fields => queries
    let metadata = JSON.parse(metadataJson)
    let template = metadata.groups[0].prompts[0]
    let filled_fields = {
        amount: "100",
        denom: 'lux',
    }
    let globalVars = { wallet: 'lux123456789', ...filled_fields}
    let abstractionDefaultFields = deepClone(template.defaults)
    for(let k in abstractionDefaultFields) {
        abstractionDefaultFields[k] = replacePlaceholders(abstractionDefaultFields[k], globalVars)
    }

    let abstractionObject = {
        ...abstractionDefaultFields,
        ...filled_fields,
    }

    let actual_queries = template.query

    let knownVars = {
        ...abstractionObject,
        ...globalVars,
    }

    let query = deepClone(actual_queries)
    for(let ix of query.instructions) {
        // TODO: Replace other fields
        for (let i = 0; i < ix.input.length; i++) {
            ix.input[i] = replacePlaceholders(ix.input[i], knownVars)
        }
    }

    console.log("abstraction object:", JSON.stringify(abstractionObject, null, '  '))
    console.log("query:", JSON.stringify(query, null, '  '))
})()
