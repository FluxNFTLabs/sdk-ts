interface Eip712Types {
  [key: string]: any
}

export const deepSortObject = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Base case: return non-object values as-is
  }

  if (Array.isArray(obj)) {
    // If it's an array, sort each element recursively
    return obj.map(deepSortObject);
  }

  // For objects, sort the keys and create a new object with sorted keys and sorted values
  const sortedObj: any = {};
  Object.keys(obj).sort().forEach((key) => {
    sortedObj[key] = deepSortObject(obj[key]);
  });

  return sortedObj;
}

function walkNestedJSON(rootTypes: Eip712Types, jsonObj: any, parentKey: string = ''): void {
  // iterate json object
  for (const key in jsonObj) {
    const value = jsonObj[key]
    // handle array field
    if (Array.isArray(value)) {
      const childKey = 'Type' + key.charAt(0).toUpperCase() + key.slice(1)
      rootTypes[childKey] = []
      rootTypes[parentKey].push({
        name: key,
        type: childKey + '[]',
      })
      walkNestedJSON(rootTypes, value[0], childKey)
      continue
    }

    // handle object field
    if (!Array.isArray(value) && typeof value === 'object') {
      const childKey = 'Type' + key.charAt(0).toUpperCase() + key.slice(1)
      rootTypes[childKey] = []
      rootTypes[parentKey].push({
        name: key,
        type: childKey,
      })
      walkNestedJSON(rootTypes, value, childKey)
      continue
    }

    // handle primary field
    rootTypes[parentKey].push({
      name: key,
      type: typeof value,
    })
  }
}

export const extractEIP712Types = (tx: any): any => {
  let rootTypes: Eip712Types = {
    'EIP712Domain': [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'version',
        type: 'string',
      },
      {
        name: 'chainId',
        type: 'uint256',
      },
      {
        name: 'verifyingContract',
        type: 'string',
      },
      {
        name: 'salt',
        type: 'string',
      },
    ],
    'Tx': [
      {name: 'account_number', type: 'string'},
      {name: 'chain_id', type: 'string'},
      {name: 'fee', type: 'Fee'},
      {name: 'memo', type: 'string'},
      {name: 'msgs', type: 'Msg[]'},
      {name: 'sequence', type: 'string'},
      {name: 'timeout_height', type: 'string'},
    ],
    'Fee': [
      {name: 'feePayer', type: 'string'},
      {name: 'amount', type: 'Coin[]'},
      {name: 'gas', type: 'string'},
    ],
    'Coin': [
      {name: 'denom', type: 'string'},
      {name: 'amount', type: 'string'},
    ],
    'Msg': [
      {name: 'type', type: 'string'},
      {name: 'value', type: 'MsgValue'},
    ],
    MsgsPlaceHolder: [],
  }

  walkNestedJSON(rootTypes, tx['msgs'], 'MsgsPlaceHolder')

  // cleanup
  delete rootTypes['MsgsPlaceHolder']
  delete rootTypes['Type0']
  rootTypes['MsgValue'] = rootTypes['TypeValue']
  delete rootTypes['TypeValue']

  return deepSortObject(rootTypes)
}
