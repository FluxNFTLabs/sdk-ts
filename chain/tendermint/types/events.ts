/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface EventDataRoundState {
  height: string;
  round: number;
  step: string;
}

function createBaseEventDataRoundState(): EventDataRoundState {
  return { height: "0", round: 0, step: "" };
}

export const EventDataRoundState = {
  $type: "tendermint.types.EventDataRoundState" as const,

  encode(message: EventDataRoundState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== "") {
      writer.uint32(26).string(message.step);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDataRoundState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDataRoundState();
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

          message.round = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.step = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventDataRoundState {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? String(object.step) : "",
    };
  },

  toJSON(message: EventDataRoundState): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.round !== 0) {
      obj.round = Math.round(message.round);
    }
    if (message.step !== "") {
      obj.step = message.step;
    }
    return obj;
  },

  create(base?: DeepPartial<EventDataRoundState>): EventDataRoundState {
    return EventDataRoundState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventDataRoundState>): EventDataRoundState {
    const message = createBaseEventDataRoundState();
    message.height = object.height ?? "0";
    message.round = object.round ?? 0;
    message.step = object.step ?? "";
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