/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface BitArray {
  bits: string;
  elems: string[];
}

function createBaseBitArray(): BitArray {
  return { bits: "0", elems: [] };
}

export const BitArray = {
  encode(message: BitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bits !== "0") {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bits = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag === 16) {
            message.elems.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BitArray {
    return {
      bits: isSet(object.bits) ? String(object.bits) : "0",
      elems: Array.isArray(object?.elems) ? object.elems.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BitArray): unknown {
    const obj: any = {};
    if (message.bits !== "0") {
      obj.bits = message.bits;
    }
    if (message.elems?.length) {
      obj.elems = message.elems;
    }
    return obj;
  },

  create(base?: DeepPartial<BitArray>): BitArray {
    return BitArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BitArray>): BitArray {
    const message = createBaseBitArray();
    message.bits = object.bits ?? "0";
    message.elems = object.elems?.map((e) => e) || [];
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
