/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface BlockStoreState {
  base: string;
  height: string;
}

function createBaseBlockStoreState(): BlockStoreState {
  return { base: "0", height: "0" };
}

export const BlockStoreState = {
  $type: "tendermint.store.BlockStoreState" as const,

  encode(message: BlockStoreState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "0") {
      writer.uint32(8).int64(message.base);
    }
    if (message.height !== "0") {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStoreState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStoreState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.base = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): BlockStoreState {
    return {
      base: isSet(object.base) ? String(object.base) : "0",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: BlockStoreState): unknown {
    const obj: any = {};
    if (message.base !== "0") {
      obj.base = message.base;
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<BlockStoreState>): BlockStoreState {
    return BlockStoreState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlockStoreState>): BlockStoreState {
    const message = createBaseBlockStoreState();
    message.base = object.base ?? "0";
    message.height = object.height ?? "0";
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