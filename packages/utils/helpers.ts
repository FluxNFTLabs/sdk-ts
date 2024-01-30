import * as GoogleProtobufAny from '../../chain/google/protobuf/any'

export const createAnyMessage = (msg: { type: string; value: Uint8Array }) => {
  const message = GoogleProtobufAny.Any.create()
  message.type_url = `${msg.type.startsWith('/') ? '' : '/'}${msg.type}`
  message.value = msg.value

  return message
}

export const createAny = (value: any, type: string) => {
  const message = GoogleProtobufAny.Any.create()
  message.type_url = type
  message.value = value

  return message
}
