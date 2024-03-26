/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState, Params } from "./channel";

/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  send_sequences: PacketSequence[];
  recv_sequences: PacketSequence[];
  ack_sequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  next_channel_sequence: string;
  params: Params | undefined;
}

/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  port_id: string;
  channel_id: string;
  sequence: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    send_sequences: [],
    recv_sequences: [],
    ack_sequences: [],
    next_channel_sequence: "0",
    params: undefined,
  };
}

export const GenesisState = {
  $type: "ibc.core.channel.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.send_sequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recv_sequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ack_sequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.next_channel_sequence !== "0") {
      writer.uint32(64).uint64(message.next_channel_sequence);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.send_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recv_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ack_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.next_channel_sequence = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      channels: globalThis.Array.isArray(object?.channels)
        ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e))
        : [],
      acknowledgements: globalThis.Array.isArray(object?.acknowledgements)
        ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e))
        : [],
      commitments: globalThis.Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => PacketState.fromJSON(e))
        : [],
      receipts: globalThis.Array.isArray(object?.receipts)
        ? object.receipts.map((e: any) => PacketState.fromJSON(e))
        : [],
      send_sequences: globalThis.Array.isArray(object?.send_sequences)
        ? object.send_sequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
      recv_sequences: globalThis.Array.isArray(object?.recv_sequences)
        ? object.recv_sequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
      ack_sequences: globalThis.Array.isArray(object?.ack_sequences)
        ? object.ack_sequences.map((e: any) => PacketSequence.fromJSON(e))
        : [],
      next_channel_sequence: isSet(object.next_channel_sequence)
        ? globalThis.String(object.next_channel_sequence)
        : "0",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => IdentifiedChannel.toJSON(e));
    }
    if (message.acknowledgements?.length) {
      obj.acknowledgements = message.acknowledgements.map((e) => PacketState.toJSON(e));
    }
    if (message.commitments?.length) {
      obj.commitments = message.commitments.map((e) => PacketState.toJSON(e));
    }
    if (message.receipts?.length) {
      obj.receipts = message.receipts.map((e) => PacketState.toJSON(e));
    }
    if (message.send_sequences?.length) {
      obj.send_sequences = message.send_sequences.map((e) => PacketSequence.toJSON(e));
    }
    if (message.recv_sequences?.length) {
      obj.recv_sequences = message.recv_sequences.map((e) => PacketSequence.toJSON(e));
    }
    if (message.ack_sequences?.length) {
      obj.ack_sequences = message.ack_sequences.map((e) => PacketSequence.toJSON(e));
    }
    if (message.next_channel_sequence !== undefined) {
      obj.next_channel_sequence = message.next_channel_sequence;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map((e) => PacketState.fromPartial(e)) || [];
    message.send_sequences = object.send_sequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.recv_sequences = object.recv_sequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.ack_sequences = object.ack_sequences?.map((e) => PacketSequence.fromPartial(e)) || [];
    message.next_channel_sequence = object.next_channel_sequence ?? "0";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBasePacketSequence(): PacketSequence {
  return { port_id: "", channel_id: "", sequence: "0" };
}

export const PacketSequence = {
  $type: "ibc.core.channel.v1.PacketSequence" as const,

  encode(message: PacketSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== "0") {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.port_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel_id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketSequence {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
    };
  },

  toJSON(message: PacketSequence): unknown {
    const obj: any = {};
    if (message.port_id !== undefined) {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== undefined) {
      obj.channel_id = message.channel_id;
    }
    if (message.sequence !== undefined) {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<PacketSequence>): PacketSequence {
    return PacketSequence.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence ?? "0";
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
