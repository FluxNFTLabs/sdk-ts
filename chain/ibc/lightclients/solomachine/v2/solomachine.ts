/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Channel } from "../../../core/channel/v1/channel";
import { ConnectionEnd } from "../../../core/connection/v1/connection";

/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}

export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}

export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";
    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";
    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";
    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";
    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: string;
  /** frozen sequence of the solo machine */
  is_frozen: boolean;
  consensus_state:
    | ConsensusState
    | undefined;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal: boolean;
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
  /** sequence to update solo machine public key at */
  sequence: string;
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
  client_id: string;
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
  data_type: DataType;
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
  sequence: string;
  timestamp: string;
  diversifier: string;
  /** type of the data used */
  data_type: DataType;
  /** marshaled data */
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

/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  client_state: Any | undefined;
}

/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensus_state: Any | undefined;
}

/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection: ConnectionEnd | undefined;
}

/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel: Channel | undefined;
}

/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}

/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}

/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}

/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
  path: Uint8Array;
  next_seq_recv: string;
}

function createBaseClientState(): ClientState {
  return { sequence: "0", is_frozen: false, consensus_state: undefined, allow_update_after_proposal: false };
}

export const ClientState = {
  $type: "ibc.lightclients.solomachine.v2.ClientState" as const,

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
    if (message.allow_update_after_proposal === true) {
      writer.uint32(32).bool(message.allow_update_after_proposal);
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
        case 4:
          if (tag !== 32) {
            break;
          }

          message.allow_update_after_proposal = reader.bool();
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
      allow_update_after_proposal: isSet(object.allow_update_after_proposal)
        ? globalThis.Boolean(object.allow_update_after_proposal)
        : false,
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.is_frozen === true) {
      obj.is_frozen = message.is_frozen;
    }
    if (message.consensus_state !== undefined) {
      obj.consensus_state = ConsensusState.toJSON(message.consensus_state);
    }
    if (message.allow_update_after_proposal === true) {
      obj.allow_update_after_proposal = message.allow_update_after_proposal;
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
    message.allow_update_after_proposal = object.allow_update_after_proposal ?? false;
    return message;
  },
};

function createBaseConsensusState(): ConsensusState {
  return { public_key: undefined, diversifier: "", timestamp: "0" };
}

export const ConsensusState = {
  $type: "ibc.lightclients.solomachine.v2.ConsensusState" as const,

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
    if (message.diversifier !== "") {
      obj.diversifier = message.diversifier;
    }
    if (message.timestamp !== "0") {
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
  return {
    sequence: "0",
    timestamp: "0",
    signature: new Uint8Array(0),
    new_public_key: undefined,
    new_diversifier: "",
  };
}

export const Header = {
  $type: "ibc.lightclients.solomachine.v2.Header" as const,

  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== "0") {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.new_public_key !== undefined) {
      Any.encode(message.new_public_key, writer.uint32(34).fork()).ldelim();
    }
    if (message.new_diversifier !== "") {
      writer.uint32(42).string(message.new_diversifier);
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

          message.signature = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.new_public_key = Any.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
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
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      new_public_key: isSet(object.new_public_key) ? Any.fromJSON(object.new_public_key) : undefined,
      new_diversifier: isSet(object.new_diversifier) ? globalThis.String(object.new_diversifier) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.timestamp !== "0") {
      obj.timestamp = message.timestamp;
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.new_public_key !== undefined) {
      obj.new_public_key = Any.toJSON(message.new_public_key);
    }
    if (message.new_diversifier !== "") {
      obj.new_diversifier = message.new_diversifier;
    }
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.sequence = object.sequence ?? "0";
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
  return { client_id: "", sequence: "0", signature_one: undefined, signature_two: undefined };
}

export const Misbehaviour = {
  $type: "ibc.lightclients.solomachine.v2.Misbehaviour" as const,

  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.sequence !== "0") {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signature_one !== undefined) {
      SignatureAndData.encode(message.signature_one, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature_two !== undefined) {
      SignatureAndData.encode(message.signature_two, writer.uint32(34).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.client_id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature_one = SignatureAndData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
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
      client_id: isSet(object.client_id) ? globalThis.String(object.client_id) : "",
      sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0",
      signature_one: isSet(object.signature_one) ? SignatureAndData.fromJSON(object.signature_one) : undefined,
      signature_two: isSet(object.signature_two) ? SignatureAndData.fromJSON(object.signature_two) : undefined,
    };
  },

  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    if (message.client_id !== "") {
      obj.client_id = message.client_id;
    }
    if (message.sequence !== "0") {
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
    message.client_id = object.client_id ?? "";
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
  return { signature: new Uint8Array(0), data_type: 0, data: new Uint8Array(0), timestamp: "0" };
}

export const SignatureAndData = {
  $type: "ibc.lightclients.solomachine.v2.SignatureAndData" as const,

  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.data_type !== 0) {
      writer.uint32(16).int32(message.data_type);
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
          if (tag !== 16) {
            break;
          }

          message.data_type = reader.int32() as any;
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
      data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.data_type !== 0) {
      obj.data_type = dataTypeToJSON(message.data_type);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.timestamp !== "0") {
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
    message.data_type = object.data_type ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return { signature_data: new Uint8Array(0), timestamp: "0" };
}

export const TimestampedSignatureData = {
  $type: "ibc.lightclients.solomachine.v2.TimestampedSignatureData" as const,

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
    if (message.signature_data.length !== 0) {
      obj.signature_data = base64FromBytes(message.signature_data);
    }
    if (message.timestamp !== "0") {
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
  return { sequence: "0", timestamp: "0", diversifier: "", data_type: 0, data: new Uint8Array(0) };
}

export const SignBytes = {
  $type: "ibc.lightclients.solomachine.v2.SignBytes" as const,

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
    if (message.data_type !== 0) {
      writer.uint32(32).int32(message.data_type);
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
          if (tag !== 32) {
            break;
          }

          message.data_type = reader.int32() as any;
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
      data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.timestamp !== "0") {
      obj.timestamp = message.timestamp;
    }
    if (message.diversifier !== "") {
      obj.diversifier = message.diversifier;
    }
    if (message.data_type !== 0) {
      obj.data_type = dataTypeToJSON(message.data_type);
    }
    if (message.data.length !== 0) {
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
    message.data_type = object.data_type ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHeaderData(): HeaderData {
  return { new_pub_key: undefined, new_diversifier: "" };
}

export const HeaderData = {
  $type: "ibc.lightclients.solomachine.v2.HeaderData" as const,

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
    if (message.new_diversifier !== "") {
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

function createBaseClientStateData(): ClientStateData {
  return { path: new Uint8Array(0), client_state: undefined };
}

export const ClientStateData = {
  $type: "ibc.lightclients.solomachine.v2.ClientStateData" as const,

  encode(message: ClientStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.client_state = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
    };
  },

  toJSON(message: ClientStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.client_state !== undefined) {
      obj.client_state = Any.toJSON(message.client_state);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientStateData>): ClientStateData {
    return ClientStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.client_state = (object.client_state !== undefined && object.client_state !== null)
      ? Any.fromPartial(object.client_state)
      : undefined;
    return message;
  },
};

function createBaseConsensusStateData(): ConsensusStateData {
  return { path: new Uint8Array(0), consensus_state: undefined };
}

export const ConsensusStateData = {
  $type: "ibc.lightclients.solomachine.v2.ConsensusStateData" as const,

  encode(message: ConsensusStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.consensus_state = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
    };
  },

  toJSON(message: ConsensusStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.consensus_state !== undefined) {
      obj.consensus_state = Any.toJSON(message.consensus_state);
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusStateData>): ConsensusStateData {
    return ConsensusStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.consensus_state = (object.consensus_state !== undefined && object.consensus_state !== null)
      ? Any.fromPartial(object.consensus_state)
      : undefined;
    return message;
  },
};

function createBaseConnectionStateData(): ConnectionStateData {
  return { path: new Uint8Array(0), connection: undefined };
}

export const ConnectionStateData = {
  $type: "ibc.lightclients.solomachine.v2.ConnectionStateData" as const,

  encode(message: ConnectionStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectionStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
    };
  },

  toJSON(message: ConnectionStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.connection !== undefined) {
      obj.connection = ConnectionEnd.toJSON(message.connection);
    }
    return obj;
  },

  create(base?: DeepPartial<ConnectionStateData>): ConnectionStateData {
    return ConnectionStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? ConnectionEnd.fromPartial(object.connection)
      : undefined;
    return message;
  },
};

function createBaseChannelStateData(): ChannelStateData {
  return { path: new Uint8Array(0), channel: undefined };
}

export const ChannelStateData = {
  $type: "ibc.lightclients.solomachine.v2.ChannelStateData" as const,

  encode(message: ChannelStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = Channel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
    };
  },

  toJSON(message: ChannelStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.channel !== undefined) {
      obj.channel = Channel.toJSON(message.channel);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelStateData>): ChannelStateData {
    return ChannelStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.channel = (object.channel !== undefined && object.channel !== null)
      ? Channel.fromPartial(object.channel)
      : undefined;
    return message;
  },
};

function createBasePacketCommitmentData(): PacketCommitmentData {
  return { path: new Uint8Array(0), commitment: new Uint8Array(0) };
}

export const PacketCommitmentData = {
  $type: "ibc.lightclients.solomachine.v2.PacketCommitmentData" as const,

  encode(message: PacketCommitmentData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commitment = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketCommitmentData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(0),
    };
  },

  toJSON(message: PacketCommitmentData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.commitment.length !== 0) {
      obj.commitment = base64FromBytes(message.commitment);
    }
    return obj;
  },

  create(base?: DeepPartial<PacketCommitmentData>): PacketCommitmentData {
    return PacketCommitmentData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketCommitmentData>): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array(0);
    message.commitment = object.commitment ?? new Uint8Array(0);
    return message;
  },
};

function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return { path: new Uint8Array(0), acknowledgement: new Uint8Array(0) };
}

export const PacketAcknowledgementData = {
  $type: "ibc.lightclients.solomachine.v2.PacketAcknowledgementData" as const,

  encode(message: PacketAcknowledgementData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.acknowledgement = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketAcknowledgementData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(0),
    };
  },

  toJSON(message: PacketAcknowledgementData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      obj.acknowledgement = base64FromBytes(message.acknowledgement);
    }
    return obj;
  },

  create(base?: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData {
    return PacketAcknowledgementData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array(0);
    message.acknowledgement = object.acknowledgement ?? new Uint8Array(0);
    return message;
  },
};

function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return { path: new Uint8Array(0) };
}

export const PacketReceiptAbsenceData = {
  $type: "ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData" as const,

  encode(message: PacketReceiptAbsenceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketReceiptAbsenceData {
    return { path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0) };
  },

  toJSON(message: PacketReceiptAbsenceData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    return obj;
  },

  create(base?: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array(0);
    return message;
  },
};

function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return { path: new Uint8Array(0), next_seq_recv: "0" };
}

export const NextSequenceRecvData = {
  $type: "ibc.lightclients.solomachine.v2.NextSequenceRecvData" as const,

  encode(message: NextSequenceRecvData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.next_seq_recv !== "0") {
      writer.uint32(16).uint64(message.next_seq_recv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.next_seq_recv = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NextSequenceRecvData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(0),
      next_seq_recv: isSet(object.next_seq_recv) ? globalThis.String(object.next_seq_recv) : "0",
    };
  },

  toJSON(message: NextSequenceRecvData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.next_seq_recv !== "0") {
      obj.next_seq_recv = message.next_seq_recv;
    }
    return obj;
  },

  create(base?: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    return NextSequenceRecvData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array(0);
    message.next_seq_recv = object.next_seq_recv ?? "0";
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
