/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";

/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: string;
  /** frozen sequence of the solo machine */
  is_frozen: boolean;
  consensus_state: ConsensusState | undefined;
}

/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  public_key:
    | Any
    | undefined;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: string;
}

/** Header defines a solo machine consensus header */
export interface Header {
  timestamp: string;
  signature: Uint8Array;
  new_public_key: Any | undefined;
  new_diversifier: string;
}

/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  sequence: string;
  signature_one: SignatureAndData | undefined;
  signature_two: SignatureAndData | undefined;
}

/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  path: Uint8Array;
  data: Uint8Array;
  timestamp: string;
}

/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signature_data: Uint8Array;
  timestamp: string;
}

/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  /** the sequence number */
  sequence: string;
  /** the proof timestamp */
  timestamp: string;
  /** the public key diversifier */
  diversifier: string;
  /** the standardised path bytes */
  path: Uint8Array;
  /** the marshaled data bytes */
  data: Uint8Array;
}

/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  new_pub_key:
    | Any
    | undefined;
  /** header diversifier */
  new_diversifier: string;
}

function createBaseClientState(): ClientState {
  return { sequence: "0", is_frozen: false, consensus_state: undefined };
}

export const ClientState = {
  $type: "ibc.lightclients.solomachine.v3.ClientState" as const,

  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.is_frozen === true) {
      writer.uint32(16).bool(message.is_frozen);
    }
    if (message.consensus_state !== undefined) {
      ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.is_frozen = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.consensus_state = ConsensusState.decode(reader, reader.uint32());
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
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
      is_frozen: isSet(object.is_frozen) ? globalThis.Boolean(object.is_frozen) : false,
      consensus_state: isSet(object.consensus_state) ? ConsensusState.fromJSON(object.consensus_state) : undefined,
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    if (message.sequence !== undefined) {
      obj.sequence = message.sequence;
    }
    if (message.is_frozen !== undefined) {
      obj.is_frozen = message.is_frozen;
    }
    if (message.consensus_state !== undefined) {
      obj.consensus_state = ConsensusState.toJSON(message.consensus_state);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientState>): ClientState {
    return ClientState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.sequence = object.sequence ?? "0";
    message.is_frozen = object.is_frozen ?? false;
    message.consensus_state = (object.consensus_state !== undefined && object.consensus_state !== null)
      ? ConsensusState.fromPartial(object.consensus_state)
      : undefined;
    return message;
  },
};

function createBaseConsensusState(): ConsensusState {
  return { public_key: undefined, diversifier: "", timestamp: "0" };
}

export const ConsensusState = {
  $type: "ibc.lightclients.solomachine.v3.ConsensusState" as const,

  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== "0") {
      writer.uint32(24).uint64(message.timestamp);
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

          message.public_key = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diversifier = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): ConsensusState {
    return {
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      diversifier: isSet(object.diversifier) ? globalThis.String(object.diversifier) : "",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    if (message.public_key !== undefined) {
      obj.public_key = Any.toJSON(message.public_key);
    }
    if (message.diversifier !== undefined) {
      obj.diversifier = message.diversifier;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusState>): ConsensusState {
    return ConsensusState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.public_key = (object.public_key !== undefined && object.public_key !== null)
      ? Any.fromPartial(object.public_key)
      : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseHeader(): Header {
  return { timestamp: "0", signature: new Uint8Array(0), new_public_key: undefined, new_diversifier: "" };
}

export const Header = {
  $type: "ibc.lightclients.solomachine.v3.Header" as const,

  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== "0") {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.new_public_key !== undefined) {
      Any.encode(message.new_public_key, writer.uint32(26).fork()).ldelim();
    }
    if (message.new_diversifier !== "") {
      writer.uint32(34).string(message.new_diversifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_public_key = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.new_diversifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      new_public_key: isSet(object.new_public_key) ? Any.fromJSON(object.new_public_key) : undefined,
      new_diversifier: isSet(object.new_diversifier) ? globalThis.String(object.new_diversifier) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    if (message.signature !== undefined) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.new_public_key !== undefined) {
      obj.new_public_key = Any.toJSON(message.new_public_key);
    }
    if (message.new_diversifier !== undefined) {
      obj.new_diversifier = message.new_diversifier;
    }
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.timestamp = object.timestamp ?? "0";
    message.signature = object.signature ?? new Uint8Array(0);
    message.new_public_key = (object.new_public_key !== undefined && object.new_public_key !== null)
      ? Any.fromPartial(object.new_public_key)
      : undefined;
    message.new_diversifier = object.new_diversifier ?? "";
    return message;
  },
};

function createBaseMisbehaviour(): Misbehaviour {
  return { sequence: "0", signature_one: undefined, signature_two: undefined };
}

export const Misbehaviour = {
  $type: "ibc.lightclients.solomachine.v3.Misbehaviour" as const,

  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.signature_one !== undefined) {
      SignatureAndData.encode(message.signature_one, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature_two !== undefined) {
      SignatureAndData.encode(message.signature_two, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature_one = SignatureAndData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature_two = SignatureAndData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Misbehaviour {
    return {
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
      signature_one: isSet(object.signature_one) ? SignatureAndData.fromJSON(object.signature_one) : undefined,
      signature_two: isSet(object.signature_two) ? SignatureAndData.fromJSON(object.signature_two) : undefined,
    };
  },

  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    if (message.sequence !== undefined) {
      obj.sequence = message.sequence;
    }
    if (message.signature_one !== undefined) {
      obj.signature_one = SignatureAndData.toJSON(message.signature_one);
    }
    if (message.signature_two !== undefined) {
      obj.signature_two = SignatureAndData.toJSON(message.signature_two);
    }
    return obj;
  },

  create(base?: DeepPartial<Misbehaviour>): Misbehaviour {
    return Misbehaviour.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.sequence = object.sequence ?? "0";
    message.signature_one = (object.signature_one !== undefined && object.signature_one !== null)
      ? SignatureAndData.fromPartial(object.signature_one)
      : undefined;
    message.signature_two = (object.signature_two !== undefined && object.signature_two !== null)
      ? SignatureAndData.fromPartial(object.signature_two)
      : undefined;
    return message;
  },
};

function createBaseSignatureAndData(): SignatureAndData {
  return { signature: new Uint8Array(0), path: new Uint8Array(0), data: new Uint8Array(0), timestamp: "0" };
}

export const SignatureAndData = {
  $type: "ibc.lightclients.solomachine.v3.SignatureAndData" as const,

  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.path.length !== 0) {
      writer.uint32(18).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== "0") {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = reader.bytes();
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

  fromJSON(object: any): SignatureAndData {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    if (message.signature !== undefined) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.path !== undefined) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.data !== undefined) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create(base?: DeepPartial<SignatureAndData>): SignatureAndData {
    return SignatureAndData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array(0);
    message.path = object.path ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return { signature_data: new Uint8Array(0), timestamp: "0" };
}

export const TimestampedSignatureData = {
  $type: "ibc.lightclients.solomachine.v3.TimestampedSignatureData" as const,

  encode(message: TimestampedSignatureData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature_data.length !== 0) {
      writer.uint32(10).bytes(message.signature_data);
    }
    if (message.timestamp !== "0") {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signature_data = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): TimestampedSignatureData {
    return {
      signature_data: isSet(object.signature_data) ? bytesFromBase64(object.signature_data) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    if (message.signature_data !== undefined) {
      obj.signature_data = base64FromBytes(message.signature_data);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create(base?: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    return TimestampedSignatureData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signature_data = object.signature_data ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseSignBytes(): SignBytes {
  return { sequence: "0", timestamp: "0", diversifier: "", path: new Uint8Array(0), data: new Uint8Array(0) };
}

export const SignBytes = {
  $type: "ibc.lightclients.solomachine.v3.SignBytes" as const,

  encode(message: SignBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== "0") {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.path.length !== 0) {
      writer.uint32(34).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.diversifier = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): SignBytes {
    return {
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
      diversifier: isSet(object.diversifier) ? globalThis.String(object.diversifier) : "",
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    if (message.sequence !== undefined) {
      obj.sequence = message.sequence;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp;
    }
    if (message.diversifier !== undefined) {
      obj.diversifier = message.diversifier;
    }
    if (message.path !== undefined) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.data !== undefined) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<SignBytes>): SignBytes {
    return SignBytes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    message.sequence = object.sequence ?? "0";
    message.timestamp = object.timestamp ?? "0";
    message.diversifier = object.diversifier ?? "";
    message.path = object.path ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHeaderData(): HeaderData {
  return { new_pub_key: undefined, new_diversifier: "" };
}

export const HeaderData = {
  $type: "ibc.lightclients.solomachine.v3.HeaderData" as const,

  encode(message: HeaderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.new_pub_key !== undefined) {
      Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.new_diversifier !== "") {
      writer.uint32(18).string(message.new_diversifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.new_pub_key = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.new_diversifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderData {
    return {
      new_pub_key: isSet(object.new_pub_key) ? Any.fromJSON(object.new_pub_key) : undefined,
      new_diversifier: isSet(object.new_diversifier) ? globalThis.String(object.new_diversifier) : "",
    };
  },

  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    if (message.new_pub_key !== undefined) {
      obj.new_pub_key = Any.toJSON(message.new_pub_key);
    }
    if (message.new_diversifier !== undefined) {
      obj.new_diversifier = message.new_diversifier;
    }
    return obj;
  },

  create(base?: DeepPartial<HeaderData>): HeaderData {
    return HeaderData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    message.new_pub_key = (object.new_pub_key !== undefined && object.new_pub_key !== null)
      ? Any.fromPartial(object.new_pub_key)
      : undefined;
    message.new_diversifier = object.new_diversifier ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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
