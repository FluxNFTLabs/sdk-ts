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
  isFrozen: boolean;
  consensusState:
    | ConsensusState
    | undefined;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allowUpdateAfterProposal: boolean;
}

/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey:
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
  newPublicKey: Any | undefined;
  newDiversifier: string;
}

/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  clientId: string;
  sequence: string;
  signatureOne: SignatureAndData | undefined;
  signatureTwo: SignatureAndData | undefined;
}

/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: string;
}

/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: string;
}

/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: string;
  timestamp: string;
  diversifier: string;
  /** type of the data used */
  dataType: DataType;
  /** marshaled data */
  data: Uint8Array;
}

/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey:
    | Any
    | undefined;
  /** header diversifier */
  newDiversifier: string;
}

/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  clientState: Any | undefined;
}

/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensusState: Any | undefined;
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
  nextSeqRecv: string;
}

function createBaseClientState(): ClientState {
  return { sequence: "0", isFrozen: false, consensusState: undefined, allowUpdateAfterProposal: false };
}

export const ClientState = {
  $type: "ibc.lightclients.solomachine.v2.ClientState" as const,

  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
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

          message.isFrozen = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.allowUpdateAfterProposal = reader.bool();
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
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
      isFrozen: isSet(object.isFrozen) ? Boolean(object.isFrozen) : false,
      consensusState: isSet(object.consensusState) ? ConsensusState.fromJSON(object.consensusState) : undefined,
      allowUpdateAfterProposal: isSet(object.allowUpdateAfterProposal)
        ? Boolean(object.allowUpdateAfterProposal)
        : false,
    };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.isFrozen === true) {
      obj.isFrozen = message.isFrozen;
    }
    if (message.consensusState !== undefined) {
      obj.consensusState = ConsensusState.toJSON(message.consensusState);
    }
    if (message.allowUpdateAfterProposal === true) {
      obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal;
    }
    return obj;
  },

  create(base?: DeepPartial<ClientState>): ClientState {
    return ClientState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.sequence = object.sequence ?? "0";
    message.isFrozen = object.isFrozen ?? false;
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? ConsensusState.fromPartial(object.consensusState)
      : undefined;
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },
};

function createBaseConsensusState(): ConsensusState {
  return { publicKey: undefined, diversifier: "", timestamp: "0" };
}

export const ConsensusState = {
  $type: "ibc.lightclients.solomachine.v2.ConsensusState" as const,

  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
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

          message.publicKey = Any.decode(reader, reader.uint32());
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
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    if (message.publicKey !== undefined) {
      obj.publicKey = Any.toJSON(message.publicKey);
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
    message.publicKey = (object.publicKey !== undefined && object.publicKey !== null)
      ? Any.fromPartial(object.publicKey)
      : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseHeader(): Header {
  return { sequence: "0", timestamp: "0", signature: new Uint8Array(0), newPublicKey: undefined, newDiversifier: "" };
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
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
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

          message.newPublicKey = Any.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newDiversifier = reader.string();
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
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      newPublicKey: isSet(object.newPublicKey) ? Any.fromJSON(object.newPublicKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : "",
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
    if (message.newPublicKey !== undefined) {
      obj.newPublicKey = Any.toJSON(message.newPublicKey);
    }
    if (message.newDiversifier !== "") {
      obj.newDiversifier = message.newDiversifier;
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
    message.newPublicKey = (object.newPublicKey !== undefined && object.newPublicKey !== null)
      ? Any.fromPartial(object.newPublicKey)
      : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};

function createBaseMisbehaviour(): Misbehaviour {
  return { clientId: "", sequence: "0", signatureOne: undefined, signatureTwo: undefined };
}

export const Misbehaviour = {
  $type: "ibc.lightclients.solomachine.v2.Misbehaviour" as const,

  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== "0") {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
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

          message.clientId = reader.string();
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

          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
      signatureOne: isSet(object.signatureOne) ? SignatureAndData.fromJSON(object.signatureOne) : undefined,
      signatureTwo: isSet(object.signatureTwo) ? SignatureAndData.fromJSON(object.signatureTwo) : undefined,
    };
  },

  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    if (message.clientId !== "") {
      obj.clientId = message.clientId;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.signatureOne !== undefined) {
      obj.signatureOne = SignatureAndData.toJSON(message.signatureOne);
    }
    if (message.signatureTwo !== undefined) {
      obj.signatureTwo = SignatureAndData.toJSON(message.signatureTwo);
    }
    return obj;
  },

  create(base?: DeepPartial<Misbehaviour>): Misbehaviour {
    return Misbehaviour.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence ?? "0";
    message.signatureOne = (object.signatureOne !== undefined && object.signatureOne !== null)
      ? SignatureAndData.fromPartial(object.signatureOne)
      : undefined;
    message.signatureTwo = (object.signatureTwo !== undefined && object.signatureTwo !== null)
      ? SignatureAndData.fromPartial(object.signatureTwo)
      : undefined;
    return message;
  },
};

function createBaseSignatureAndData(): SignatureAndData {
  return { signature: new Uint8Array(0), dataType: 0, data: new Uint8Array(0), timestamp: "0" };
}

export const SignatureAndData = {
  $type: "ibc.lightclients.solomachine.v2.SignatureAndData" as const,

  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
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

          message.dataType = reader.int32() as any;
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
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.dataType !== 0) {
      obj.dataType = dataTypeToJSON(message.dataType);
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
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return { signatureData: new Uint8Array(0), timestamp: "0" };
}

export const TimestampedSignatureData = {
  $type: "ibc.lightclients.solomachine.v2.TimestampedSignatureData" as const,

  encode(message: TimestampedSignatureData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
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

          message.signatureData = reader.bytes();
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
      signatureData: isSet(object.signatureData) ? bytesFromBase64(object.signatureData) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    if (message.signatureData.length !== 0) {
      obj.signatureData = base64FromBytes(message.signatureData);
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
    message.signatureData = object.signatureData ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseSignBytes(): SignBytes {
  return { sequence: "0", timestamp: "0", diversifier: "", dataType: 0, data: new Uint8Array(0) };
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
    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
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

          message.dataType = reader.int32() as any;
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
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
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
    if (message.dataType !== 0) {
      obj.dataType = dataTypeToJSON(message.dataType);
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
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseHeaderData(): HeaderData {
  return { newPubKey: undefined, newDiversifier: "" };
}

export const HeaderData = {
  $type: "ibc.lightclients.solomachine.v2.HeaderData" as const,

  encode(message: HeaderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
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

          message.newPubKey = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newDiversifier = reader.string();
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
      newPubKey: isSet(object.newPubKey) ? Any.fromJSON(object.newPubKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : "",
    };
  },

  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    if (message.newPubKey !== undefined) {
      obj.newPubKey = Any.toJSON(message.newPubKey);
    }
    if (message.newDiversifier !== "") {
      obj.newDiversifier = message.newDiversifier;
    }
    return obj;
  },

  create(base?: DeepPartial<HeaderData>): HeaderData {
    return HeaderData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    message.newPubKey = (object.newPubKey !== undefined && object.newPubKey !== null)
      ? Any.fromPartial(object.newPubKey)
      : undefined;
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};

function createBaseClientStateData(): ClientStateData {
  return { path: new Uint8Array(0), clientState: undefined };
}

export const ClientStateData = {
  $type: "ibc.lightclients.solomachine.v2.ClientStateData" as const,

  encode(message: ClientStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
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

          message.clientState = Any.decode(reader, reader.uint32());
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
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
    };
  },

  toJSON(message: ClientStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.clientState !== undefined) {
      obj.clientState = Any.toJSON(message.clientState);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientStateData>): ClientStateData {
    return ClientStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.clientState = (object.clientState !== undefined && object.clientState !== null)
      ? Any.fromPartial(object.clientState)
      : undefined;
    return message;
  },
};

function createBaseConsensusStateData(): ConsensusStateData {
  return { path: new Uint8Array(0), consensusState: undefined };
}

export const ConsensusStateData = {
  $type: "ibc.lightclients.solomachine.v2.ConsensusStateData" as const,

  encode(message: ConsensusStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
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

          message.consensusState = Any.decode(reader, reader.uint32());
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
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
    };
  },

  toJSON(message: ConsensusStateData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.consensusState !== undefined) {
      obj.consensusState = Any.toJSON(message.consensusState);
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusStateData>): ConsensusStateData {
    return ConsensusStateData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array(0);
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? Any.fromPartial(object.consensusState)
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
  return { path: new Uint8Array(0), nextSeqRecv: "0" };
}

export const NextSequenceRecvData = {
  $type: "ibc.lightclients.solomachine.v2.NextSequenceRecvData" as const,

  encode(message: NextSequenceRecvData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.nextSeqRecv !== "0") {
      writer.uint32(16).uint64(message.nextSeqRecv);
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

          message.nextSeqRecv = longToString(reader.uint64() as Long);
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
      nextSeqRecv: isSet(object.nextSeqRecv) ? String(object.nextSeqRecv) : "0",
    };
  },

  toJSON(message: NextSequenceRecvData): unknown {
    const obj: any = {};
    if (message.path.length !== 0) {
      obj.path = base64FromBytes(message.path);
    }
    if (message.nextSeqRecv !== "0") {
      obj.nextSeqRecv = message.nextSeqRecv;
    }
    return obj;
  },

  create(base?: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    return NextSequenceRecvData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array(0);
    message.nextSeqRecv = object.nextSeqRecv ?? "0";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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