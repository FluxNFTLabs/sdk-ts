/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Height } from "../../../core/client/v1/client";

/** Wasm light client's Client state */
export interface ClientState {
  /**
   * bytes encoding the client state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
  checksum: Uint8Array;
  latest_height: Height | undefined;
}

/** Wasm light client's ConsensusState */
export interface ConsensusState {
  /**
   * bytes encoding the consensus state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
}

/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessage {
  data: Uint8Array;
}

function createBaseClientState(): ClientState {
  return { data: new Uint8Array(0), checksum: new Uint8Array(0), latest_height: undefined };
}

export const ClientState = {
  $type: "ibc.lightclients.wasm.v1.ClientState" as const,

  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.latest_height !== undefined) {
      Height.encode(message.latest_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.checksum = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.latest_height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientState {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(0),
      latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined,
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.checksum.length !== 0) {
      obj.checksum = base64FromBytes(message.checksum);
    }
    if (message.latest_height !== undefined) {
      obj.latest_height = Height.toJSON(message.latest_height);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientState>): ClientState {
    return ClientState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.data = object.data ?? new Uint8Array(0);
    message.checksum = object.checksum ?? new Uint8Array(0);
    message.latest_height = (object.latest_height !== undefined && object.latest_height !== null)
      ? Height.fromPartial(object.latest_height)
      : undefined;
    return message;
  },
};

function createBaseConsensusState(): ConsensusState {
  return { data: new Uint8Array(0) };
}

export const ConsensusState = {
  $type: "ibc.lightclients.wasm.v1.ConsensusState" as const,

  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusState {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusState>): ConsensusState {
    return ConsensusState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseClientMessage(): ClientMessage {
  return { data: new Uint8Array(0) };
}

export const ClientMessage = {
  $type: "ibc.lightclients.wasm.v1.ClientMessage" as const,

  encode(message: ClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientMessage {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientMessage>): ClientMessage {
    return ClientMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientMessage>): ClientMessage {
    const message = createBaseClientMessage();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
