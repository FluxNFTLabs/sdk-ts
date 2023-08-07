/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { EventDataRoundState } from "../types/events";
import { Message } from "./types";

/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg: Message | undefined;
  peer_id: string;
}

/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration: Duration | undefined;
  height: string;
  round: number;
  step: number;
}

/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: string;
}

export interface WALMessage {
  event_data_round_state?: EventDataRoundState | undefined;
  msg_info?: MsgInfo | undefined;
  timeout_info?: TimeoutInfo | undefined;
  end_height?: EndHeight | undefined;
}

/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time: Date | undefined;
  msg: WALMessage | undefined;
}

function createBaseMsgInfo(): MsgInfo {
  return { msg: undefined, peer_id: "" };
}

export const MsgInfo = {
  $type: "tendermint.consensus.MsgInfo" as const,

  encode(message: MsgInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peer_id !== "") {
      writer.uint32(18).string(message.peer_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msg = Message.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.peer_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInfo {
    return {
      msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
      peer_id: isSet(object.peer_id) ? String(object.peer_id) : "",
    };
  },

  toJSON(message: MsgInfo): unknown {
    const obj: any = {};
    if (message.msg !== undefined) {
      obj.msg = Message.toJSON(message.msg);
    }
    if (message.peer_id !== "") {
      obj.peer_id = message.peer_id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgInfo>): MsgInfo {
    return MsgInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgInfo>): MsgInfo {
    const message = createBaseMsgInfo();
    message.msg = (object.msg !== undefined && object.msg !== null) ? Message.fromPartial(object.msg) : undefined;
    message.peer_id = object.peer_id ?? "";
    return message;
  },
};

function createBaseTimeoutInfo(): TimeoutInfo {
  return { duration: undefined, height: "0", round: 0, step: 0 };
}

export const TimeoutInfo = {
  $type: "tendermint.consensus.TimeoutInfo" as const,

  encode(message: TimeoutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== "0") {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeoutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.round = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.step = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeoutInfo {
    return {
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      height: isSet(object.height) ? String(object.height) : "0",
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0,
    };
  },

  toJSON(message: TimeoutInfo): unknown {
    const obj: any = {};
    if (message.duration !== undefined) {
      obj.duration = Duration.toJSON(message.duration);
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.round !== 0) {
      obj.round = Math.round(message.round);
    }
    if (message.step !== 0) {
      obj.step = Math.round(message.step);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeoutInfo>): TimeoutInfo {
    return TimeoutInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeoutInfo>): TimeoutInfo {
    const message = createBaseTimeoutInfo();
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    message.height = object.height ?? "0";
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    return message;
  },
};

function createBaseEndHeight(): EndHeight {
  return { height: "0" };
}

export const EndHeight = {
  $type: "tendermint.consensus.EndHeight" as const,

  encode(message: EndHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndHeight();
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

  fromJSON(object: any): EndHeight {
    return { height: isSet(object.height) ? String(object.height) : "0" };
  },

  toJSON(message: EndHeight): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<EndHeight>): EndHeight {
    return EndHeight.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EndHeight>): EndHeight {
    const message = createBaseEndHeight();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseWALMessage(): WALMessage {
  return { event_data_round_state: undefined, msg_info: undefined, timeout_info: undefined, end_height: undefined };
}

export const WALMessage = {
  $type: "tendermint.consensus.WALMessage" as const,

  encode(message: WALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event_data_round_state !== undefined) {
      EventDataRoundState.encode(message.event_data_round_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.msg_info !== undefined) {
      MsgInfo.encode(message.msg_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeout_info !== undefined) {
      TimeoutInfo.encode(message.timeout_info, writer.uint32(26).fork()).ldelim();
    }
    if (message.end_height !== undefined) {
      EndHeight.encode(message.end_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event_data_round_state = EventDataRoundState.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg_info = MsgInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeout_info = TimeoutInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.end_height = EndHeight.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WALMessage {
    return {
      event_data_round_state: isSet(object.event_data_round_state)
        ? EventDataRoundState.fromJSON(object.event_data_round_state)
        : undefined,
      msg_info: isSet(object.msg_info) ? MsgInfo.fromJSON(object.msg_info) : undefined,
      timeout_info: isSet(object.timeout_info) ? TimeoutInfo.fromJSON(object.timeout_info) : undefined,
      end_height: isSet(object.end_height) ? EndHeight.fromJSON(object.end_height) : undefined,
    };
  },

  toJSON(message: WALMessage): unknown {
    const obj: any = {};
    if (message.event_data_round_state !== undefined) {
      obj.event_data_round_state = EventDataRoundState.toJSON(message.event_data_round_state);
    }
    if (message.msg_info !== undefined) {
      obj.msg_info = MsgInfo.toJSON(message.msg_info);
    }
    if (message.timeout_info !== undefined) {
      obj.timeout_info = TimeoutInfo.toJSON(message.timeout_info);
    }
    if (message.end_height !== undefined) {
      obj.end_height = EndHeight.toJSON(message.end_height);
    }
    return obj;
  },

  create(base?: DeepPartial<WALMessage>): WALMessage {
    return WALMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WALMessage>): WALMessage {
    const message = createBaseWALMessage();
    message.event_data_round_state =
      (object.event_data_round_state !== undefined && object.event_data_round_state !== null)
        ? EventDataRoundState.fromPartial(object.event_data_round_state)
        : undefined;
    message.msg_info = (object.msg_info !== undefined && object.msg_info !== null)
      ? MsgInfo.fromPartial(object.msg_info)
      : undefined;
    message.timeout_info = (object.timeout_info !== undefined && object.timeout_info !== null)
      ? TimeoutInfo.fromPartial(object.timeout_info)
      : undefined;
    message.end_height = (object.end_height !== undefined && object.end_height !== null)
      ? EndHeight.fromPartial(object.end_height)
      : undefined;
    return message;
  },
};

function createBaseTimedWALMessage(): TimedWALMessage {
  return { time: undefined, msg: undefined };
}

export const TimedWALMessage = {
  $type: "tendermint.consensus.TimedWALMessage" as const,

  encode(message: TimedWALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg = WALMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedWALMessage {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: TimedWALMessage): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.msg !== undefined) {
      obj.msg = WALMessage.toJSON(message.msg);
    }
    return obj;
  },

  create(base?: DeepPartial<TimedWALMessage>): TimedWALMessage {
    return TimedWALMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimedWALMessage>): TimedWALMessage {
    const message = createBaseTimedWALMessage();
    message.time = object.time ?? undefined;
    message.msg = (object.msg !== undefined && object.msg !== null) ? WALMessage.fromPartial(object.msg) : undefined;
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
