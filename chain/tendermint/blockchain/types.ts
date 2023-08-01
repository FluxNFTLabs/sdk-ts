/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../types/block";

/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: string;
}

/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
  height: string;
}

/** BlockResponse returns block to the requested */
export interface BlockResponse {
  block: Block | undefined;
}

/** StatusRequest requests the status of a peer. */
export interface StatusRequest {
}

/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
  height: string;
  base: string;
}

export interface Message {
  blockRequest?: BlockRequest | undefined;
  noBlockResponse?: NoBlockResponse | undefined;
  blockResponse?: BlockResponse | undefined;
  statusRequest?: StatusRequest | undefined;
  statusResponse?: StatusResponse | undefined;
}

function createBaseBlockRequest(): BlockRequest {
  return { height: "0" };
}

export const BlockRequest = {
  $type: "tendermint.blockchain.BlockRequest" as const,

  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockRequest {
    return { height: isSet(object.height) ? String(object.height) : "0" };
  },

  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<BlockRequest>): BlockRequest {
    return BlockRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseNoBlockResponse(): NoBlockResponse {
  return { height: "0" };
}

export const NoBlockResponse = {
  $type: "tendermint.blockchain.NoBlockResponse" as const,

  encode(message: NoBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NoBlockResponse {
    return { height: isSet(object.height) ? String(object.height) : "0" };
  },

  toJSON(message: NoBlockResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<NoBlockResponse>): NoBlockResponse {
    return NoBlockResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NoBlockResponse>): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseBlockResponse(): BlockResponse {
  return { block: undefined };
}

export const BlockResponse = {
  $type: "tendermint.blockchain.BlockResponse" as const,

  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.block = Block.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockResponse {
    return { block: isSet(object.block) ? Block.fromJSON(object.block) : undefined };
  },

  toJSON(message: BlockResponse): unknown {
    const obj: any = {};
    if (message.block !== undefined) {
      obj.block = Block.toJSON(message.block);
    }
    return obj;
  },

  create(base?: DeepPartial<BlockResponse>): BlockResponse {
    return BlockResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlockResponse>): BlockResponse {
    const message = createBaseBlockResponse();
    message.block = (object.block !== undefined && object.block !== null) ? Block.fromPartial(object.block) : undefined;
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest = {
  $type: "tendermint.blockchain.StatusRequest" as const,

  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StatusRequest {
    return {};
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<StatusRequest>): StatusRequest {
    return StatusRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return { height: "0", base: "0" };
}

export const StatusResponse = {
  $type: "tendermint.blockchain.StatusResponse" as const,

  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    if (message.base !== "0") {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.base = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      base: isSet(object.base) ? String(object.base) : "0",
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.base !== "0") {
      obj.base = message.base;
    }
    return obj;
  },

  create(base?: DeepPartial<StatusResponse>): StatusResponse {
    return StatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.height = object.height ?? "0";
    message.base = object.base ?? "0";
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    blockRequest: undefined,
    noBlockResponse: undefined,
    blockResponse: undefined,
    statusRequest: undefined,
    statusResponse: undefined,
  };
}

export const Message = {
  $type: "tendermint.blockchain.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockRequest !== undefined) {
      BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.noBlockResponse !== undefined) {
      NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockResponse !== undefined) {
      BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.statusRequest !== undefined) {
      StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.statusResponse !== undefined) {
      StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockRequest = BlockRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.noBlockResponse = NoBlockResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockResponse = BlockResponse.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.statusRequest = StatusRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statusResponse = StatusResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      blockRequest: isSet(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
      noBlockResponse: isSet(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
      blockResponse: isSet(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
      statusRequest: isSet(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
      statusResponse: isSet(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.blockRequest !== undefined) {
      obj.blockRequest = BlockRequest.toJSON(message.blockRequest);
    }
    if (message.noBlockResponse !== undefined) {
      obj.noBlockResponse = NoBlockResponse.toJSON(message.noBlockResponse);
    }
    if (message.blockResponse !== undefined) {
      obj.blockResponse = BlockResponse.toJSON(message.blockResponse);
    }
    if (message.statusRequest !== undefined) {
      obj.statusRequest = StatusRequest.toJSON(message.statusRequest);
    }
    if (message.statusResponse !== undefined) {
      obj.statusResponse = StatusResponse.toJSON(message.statusResponse);
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.blockRequest = (object.blockRequest !== undefined && object.blockRequest !== null)
      ? BlockRequest.fromPartial(object.blockRequest)
      : undefined;
    message.noBlockResponse = (object.noBlockResponse !== undefined && object.noBlockResponse !== null)
      ? NoBlockResponse.fromPartial(object.noBlockResponse)
      : undefined;
    message.blockResponse = (object.blockResponse !== undefined && object.blockResponse !== null)
      ? BlockResponse.fromPartial(object.blockResponse)
      : undefined;
    message.statusRequest = (object.statusRequest !== undefined && object.statusRequest !== null)
      ? StatusRequest.fromPartial(object.statusRequest)
      : undefined;
    message.statusResponse = (object.statusResponse !== undefined && object.statusResponse !== null)
      ? StatusResponse.fromPartial(object.statusResponse)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
