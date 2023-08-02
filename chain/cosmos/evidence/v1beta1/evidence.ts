/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  /** height is the equivocation height. */
  height: string;
  /** time is the equivocation time. */
  time:
    | Date
    | undefined;
  /** power is the equivocation validator power. */
  power: string;
  /** consensus_address is the equivocation validator consensus address. */
  consensusAddress: string;
}

function createBaseEquivocation(): Equivocation {
  return { height: "0", time: undefined, power: "0", consensusAddress: "" };
}

export const Equivocation = {
  $type: "cosmos.evidence.v1beta1.Equivocation" as const,

  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== "0") {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
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
          if (tag !== 18) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.power = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.consensusAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      power: isSet(object.power) ? String(object.power) : "0",
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : "",
    };
  },

  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.power !== "0") {
      obj.power = message.power;
    }
    if (message.consensusAddress !== "") {
      obj.consensusAddress = message.consensusAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<Equivocation>): Equivocation {
    return Equivocation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height ?? "0";
    message.time = object.time ?? undefined;
    message.power = object.power ?? "0";
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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