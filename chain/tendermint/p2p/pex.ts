/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NetAddress } from "./types";

export interface PexRequest {
}

export interface PexAddrs {
  addrs: NetAddress[];
}

export interface Message {
  pex_request?: PexRequest | undefined;
  pex_addrs?: PexAddrs | undefined;
}

function createBasePexRequest(): PexRequest {
  return {};
}

export const PexRequest = {
  $type: "tendermint.p2p.PexRequest" as const,

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
  $type: "tendermint.p2p.PexAddrs" as const,

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
  return { pex_request: undefined, pex_addrs: undefined };
}

export const Message = {
  $type: "tendermint.p2p.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pex_request !== undefined) {
      PexRequest.encode(message.pex_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.pex_addrs !== undefined) {
      PexAddrs.encode(message.pex_addrs, writer.uint32(18).fork()).ldelim();
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

          message.pex_request = PexRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pex_addrs = PexAddrs.decode(reader, reader.uint32());
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
      pex_request: isSet(object.pex_request) ? PexRequest.fromJSON(object.pex_request) : undefined,
      pex_addrs: isSet(object.pex_addrs) ? PexAddrs.fromJSON(object.pex_addrs) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.pex_request !== undefined) {
      obj.pex_request = PexRequest.toJSON(message.pex_request);
    }
    if (message.pex_addrs !== undefined) {
      obj.pex_addrs = PexAddrs.toJSON(message.pex_addrs);
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.pex_request = (object.pex_request !== undefined && object.pex_request !== null)
      ? PexRequest.fromPartial(object.pex_request)
      : undefined;
    message.pex_addrs = (object.pex_addrs !== undefined && object.pex_addrs !== null)
      ? PexAddrs.fromPartial(object.pex_addrs)
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
