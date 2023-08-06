const rootTypes = {
  "EIP712Domain": [
    {
      Name: "name",
          Type: "string",
    },
    {
      Name: "version",
          Type: "string",
    },
    {
      Name: "chainId",
          Type: "uint256",
    },
    {
      Name: "verifyingContract",
          Type: "string",
    },
    {
      Name: "salt",
          Type: "string",
    },
  ],
  "Tx": [
    {Name: "account_number", Type: "string"},
    {Name: "chain_id", Type: "string"},
    {Name: "fee", Type: "Fee"},
    {Name: "memo", Type: "string"},
    {Name: "msgs", Type: "Msg[]"},
    {Name: "sequence", Type: "string"},
    {Name: "timeout_height", Type: "string"},
  ],
  "Fee": [
    {Name: "amount", Type: "Coin[]"},
    {Name: "gas", Type: "string"},
  ],
  "Coin": [
    {Name: "denom", Type: "string"},
    {Name: "amount", Type: "string"},
  ],
  "Msg": [
    {Name: "type", Type: "string"},
    {Name: "value", Type: "MsgValue"},
  ],
}

const msg= {
  msgs: [
    {
      "type": "cosmos-sdk/MsgSend",
      "value": {
        "amount": [
          {
            "amount": "77",
            "denom": "lux"
          }
        ],
        "from_address": "lux1cml96vmptgw99syqrrz8az79xer2pcgp209sv4",
        "to_address": "lux1jcltmuhplrdcwp7stlr4hlhlhgd4htqhu86cqx"
      }
    }
  ]
}

interface Eip712Types {
  [key: string]: any
}
let eip712Types: Eip712Types = {
  tx: [],
}

function walkNestedJSON(jsonObj: any, parentKey: string = ''): void {
  // iterate json object
  for (const key in jsonObj) {
    const value = jsonObj[key]
    // handle array field
    if (Array.isArray(value)) {
      const childKey = 'Type' + key.charAt(0).toUpperCase() + key.slice(1)
      eip712Types[childKey] = []
      eip712Types[parentKey].push({
        name: key,
        type: childKey + '[]',
      })
      walkNestedJSON(value[0], childKey)
      continue
    }

    // handle object field
    if (!Array.isArray(value) && typeof value === 'object') {
      const childKey = 'Type' + key.charAt(0).toUpperCase() + key.slice(1)
      eip712Types[childKey] = []
      eip712Types[parentKey].push({
        name: key,
        type: childKey,
      })
      walkNestedJSON(value, childKey)
      continue
    }


    // handle primary field
    console.log('primary', key, value)
    eip712Types[parentKey].push({
      name: key,
      type: typeof value,
    })
  }
}

walkNestedJSON(msg, 'tx')
console.log(eip712Types)
