/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface SimpleEntry {
  symbol: string;
  decimal: string;
  value: string;
  timestamp: string;
}

function createBaseSimpleEntry(): SimpleEntry {
  return { symbol: "", decimal: "0", value: "", timestamp: "0" };
}

export const SimpleEntry = {
  $type: "flux.oracle.v1beta1.SimpleEntry" as const,

  encode(message: SimpleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.decimal !== "0") {
      writer.uint32(16).int64(message.decimal);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.timestamp !== "0") {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.decimal = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timestamp = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimpleEntry {
    return {
      symbol: isSet(object.symbol) ? globalThis.String(object.symbol) : "",
      decimal: isSet(object.decimal) ? globalThis.String(object.decimal) : "0",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: SimpleEntry): unknown {
    const obj: any = {};
    if (message.symbol !== undefined) {
      obj.symbol = message.symbol;
    }
    if (message.decimal !== undefined) {
      obj.decimal = message.decimal;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create(base?: DeepPartial<SimpleEntry>): SimpleEntry {
    return SimpleEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SimpleEntry>): SimpleEntry {
    const message = createBaseSimpleEntry();
    message.symbol = object.symbol ?? "";
    message.decimal = object.decimal ?? "0";
    message.value = object.value ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
