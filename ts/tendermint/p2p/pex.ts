/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NetAddress } from "./types";

export interface PexRequest {
}

export interface PexAddrs {
  addrs: NetAddress[];
}

export interface Message {
  pexRequest?: PexRequest | undefined;
  pexAddrs?: PexAddrs | undefined;
}

function createBasePexRequest(): PexRequest {
  return {};
}

export const PexRequest = {
  encode(_: PexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexRequest();
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

  fromJSON(_: any): PexRequest {
    return {};
  },

  toJSON(_: PexRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PexRequest>): PexRequest {
    return PexRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<PexRequest>): PexRequest {
    const message = createBasePexRequest();
    return message;
  },
};

function createBasePexAddrs(): PexAddrs {
  return { addrs: [] };
}

export const PexAddrs = {
  encode(message: PexAddrs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addrs) {
      NetAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PexAddrs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePexAddrs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addrs.push(NetAddress.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PexAddrs {
    return { addrs: Array.isArray(object?.addrs) ? object.addrs.map((e: any) => NetAddress.fromJSON(e)) : [] };
  },

  toJSON(message: PexAddrs): unknown {
    const obj: any = {};
    if (message.addrs?.length) {
      obj.addrs = message.addrs.map((e) => NetAddress.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PexAddrs>): PexAddrs {
    return PexAddrs.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PexAddrs>): PexAddrs {
    const message = createBasePexAddrs();
    message.addrs = object.addrs?.map((e) => NetAddress.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return { pexRequest: undefined, pexAddrs: undefined };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pexRequest !== undefined) {
      PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.pexAddrs !== undefined) {
      PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
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

          message.pexRequest = PexRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pexAddrs = PexAddrs.decode(reader, reader.uint32());
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
      pexRequest: isSet(object.pexRequest) ? PexRequest.fromJSON(object.pexRequest) : undefined,
      pexAddrs: isSet(object.pexAddrs) ? PexAddrs.fromJSON(object.pexAddrs) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.pexRequest !== undefined) {
      obj.pexRequest = PexRequest.toJSON(message.pexRequest);
    }
    if (message.pexAddrs !== undefined) {
      obj.pexAddrs = PexAddrs.toJSON(message.pexAddrs);
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.pexRequest = (object.pexRequest !== undefined && object.pexRequest !== null)
      ? PexRequest.fromPartial(object.pexRequest)
      : undefined;
    message.pexAddrs = (object.pexAddrs !== undefined && object.pexAddrs !== null)
      ? PexAddrs.fromPartial(object.pexAddrs)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
