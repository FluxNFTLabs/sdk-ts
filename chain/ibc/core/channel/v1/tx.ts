/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Height } from "../../client/v1/client";
import { Channel, Packet, Params, State, stateFromJSON, stateToJSON } from "./channel";
import { ErrorReceipt, Upgrade, UpgradeFields } from "./upgrade";

/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}

export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  port_id: string;
  channel: Channel | undefined;
  signer: string;
}

/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channel_id: string;
  version: string;
}

/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  port_id: string;
  /**
   * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
   *
   * @deprecated
   */
  previous_channel_id: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel: Channel | undefined;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
  version: string;
  channel_id: string;
}

/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}

/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}

/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  port_id: string;
  channel_id: string;
  signer: string;
}

/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}

/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
  counterparty_upgrade_sequence: string;
}

/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}

/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet: Packet | undefined;
  proof_commitment: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}

/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet | undefined;
  proof_unreceived: Uint8Array;
  proof_height: Height | undefined;
  next_sequence_recv: string;
  signer: string;
}

/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}

/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet | undefined;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: Height | undefined;
  next_sequence_recv: string;
  signer: string;
  counterparty_upgrade_sequence: string;
}

/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
  result: ResponseResultType;
}

/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet | undefined;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}

/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
  port_id: string;
  channel_id: string;
  fields: UpgradeFields | undefined;
  signer: string;
}

/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
  upgrade: Upgrade | undefined;
  upgrade_sequence: string;
}

/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
  port_id: string;
  channel_id: string;
  proposed_upgrade_connection_hops: string[];
  counterparty_upgrade_fields: UpgradeFields | undefined;
  counterparty_upgrade_sequence: string;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
  upgrade: Upgrade | undefined;
  upgrade_sequence: string;
  result: ResponseResultType;
}

/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
  port_id: string;
  channel_id: string;
  counterparty_upgrade: Upgrade | undefined;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
  result: ResponseResultType;
}

/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
  port_id: string;
  channel_id: string;
  counterparty_channel_state: State;
  counterparty_upgrade: Upgrade | undefined;
  proof_channel: Uint8Array;
  proof_upgrade: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
  result: ResponseResultType;
}

/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
  port_id: string;
  channel_id: string;
  counterparty_channel_state: State;
  counterparty_upgrade_sequence: string;
  proof_channel: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {
}

/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
  port_id: string;
  channel_id: string;
  counterparty_channel: Channel | undefined;
  proof_channel: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {
}

/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
  port_id: string;
  channel_id: string;
  error_receipt: ErrorReceipt | undefined;
  proof_error_receipt: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {
}

/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the channel parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
  port_id: string;
  channel_id: string;
  limit: string;
  signer: string;
}

/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
  /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
  total_pruned_sequences: string;
  /** Number of sequences left after pruning. */
  total_remaining_sequences: string;
}

function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return { port_id: "", channel: undefined, signer: "" };
}

export const MsgChannelOpenInit = {
  $type: "ibc.core.channel.v1.MsgChannelOpenInit" as const,

  encode(message: MsgChannelOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
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

          message.channel = Channel.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInit {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel !== undefined) {
      obj.channel = Channel.toJSON(message.channel);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    return MsgChannelOpenInit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.port_id = object.port_id ?? "";
    message.channel = (object.channel !== undefined && object.channel !== null)
      ? Channel.fromPartial(object.channel)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return { channel_id: "", version: "" };
}

export const MsgChannelOpenInitResponse = {
  $type: "ibc.core.channel.v1.MsgChannelOpenInitResponse" as const,

  encode(message: MsgChannelOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel_id !== "") {
      writer.uint32(10).string(message.channel_id);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channel_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInitResponse {
    return {
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
    };
  },

  toJSON(message: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    message.channel_id = object.channel_id ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    port_id: "",
    previous_channel_id: "",
    channel: undefined,
    counterparty_version: "",
    proof_init: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelOpenTry = {
  $type: "ibc.core.channel.v1.MsgChannelOpenTry" as const,

  encode(message: MsgChannelOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.previous_channel_id !== "") {
      writer.uint32(18).string(message.previous_channel_id);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty_version !== "") {
      writer.uint32(34).string(message.counterparty_version);
    }
    if (message.proof_init.length !== 0) {
      writer.uint32(42).bytes(message.proof_init);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
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

          message.previous_channel_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.channel = Channel.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty_version = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_init = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenTry {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      previous_channel_id: isSet(object.previous_channel_id) ? globalThis.String(object.previous_channel_id) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      counterparty_version: isSet(object.counterparty_version) ? globalThis.String(object.counterparty_version) : "",
      proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.previous_channel_id !== "") {
      obj.previous_channel_id = message.previous_channel_id;
    }
    if (message.channel !== undefined) {
      obj.channel = Channel.toJSON(message.channel);
    }
    if (message.counterparty_version !== "") {
      obj.counterparty_version = message.counterparty_version;
    }
    if (message.proof_init.length !== 0) {
      obj.proof_init = base64FromBytes(message.proof_init);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    return MsgChannelOpenTry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.port_id = object.port_id ?? "";
    message.previous_channel_id = object.previous_channel_id ?? "";
    message.channel = (object.channel !== undefined && object.channel !== null)
      ? Channel.fromPartial(object.channel)
      : undefined;
    message.counterparty_version = object.counterparty_version ?? "";
    message.proof_init = object.proof_init ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return { version: "", channel_id: "" };
}

export const MsgChannelOpenTryResponse = {
  $type: "ibc.core.channel.v1.MsgChannelOpenTryResponse" as const,

  encode(message: MsgChannelOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenTryResponse {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
    };
  },

  toJSON(message: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    message.version = object.version ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    port_id: "",
    channel_id: "",
    counterparty_channel_id: "",
    counterparty_version: "",
    proof_try: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelOpenAck = {
  $type: "ibc.core.channel.v1.MsgChannelOpenAck" as const,

  encode(message: MsgChannelOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.counterparty_channel_id !== "") {
      writer.uint32(26).string(message.counterparty_channel_id);
    }
    if (message.counterparty_version !== "") {
      writer.uint32(34).string(message.counterparty_version);
    }
    if (message.proof_try.length !== 0) {
      writer.uint32(42).bytes(message.proof_try);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
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
          if (tag !== 26) {
            break;
          }

          message.counterparty_channel_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty_version = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_try = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenAck {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      counterparty_channel_id: isSet(object.counterparty_channel_id)
        ? globalThis.String(object.counterparty_channel_id)
        : "",
      counterparty_version: isSet(object.counterparty_version) ? globalThis.String(object.counterparty_version) : "",
      proof_try: isSet(object.proof_try) ? bytesFromBase64(object.proof_try) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.counterparty_channel_id !== "") {
      obj.counterparty_channel_id = message.counterparty_channel_id;
    }
    if (message.counterparty_version !== "") {
      obj.counterparty_version = message.counterparty_version;
    }
    if (message.proof_try.length !== 0) {
      obj.proof_try = base64FromBytes(message.proof_try);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    return MsgChannelOpenAck.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_channel_id = object.counterparty_channel_id ?? "";
    message.counterparty_version = object.counterparty_version ?? "";
    message.proof_try = object.proof_try ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}

export const MsgChannelOpenAckResponse = {
  $type: "ibc.core.channel.v1.MsgChannelOpenAckResponse" as const,

  encode(_: MsgChannelOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelOpenAckResponse {
    return {};
  },

  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
};

function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return { port_id: "", channel_id: "", proof_ack: new Uint8Array(0), proof_height: undefined, signer: "" };
}

export const MsgChannelOpenConfirm = {
  $type: "ibc.core.channel.v1.MsgChannelOpenConfirm" as const,

  encode(message: MsgChannelOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.proof_ack.length !== 0) {
      writer.uint32(26).bytes(message.proof_ack);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
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
          if (tag !== 26) {
            break;
          }

          message.proof_ack = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenConfirm {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      proof_ack: isSet(object.proof_ack) ? bytesFromBase64(object.proof_ack) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.proof_ack.length !== 0) {
      obj.proof_ack = base64FromBytes(message.proof_ack);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.proof_ack = object.proof_ack ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}

export const MsgChannelOpenConfirmResponse = {
  $type: "ibc.core.channel.v1.MsgChannelOpenConfirmResponse" as const,

  encode(_: MsgChannelOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    return {};
  },

  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
};

function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return { port_id: "", channel_id: "", signer: "" };
}

export const MsgChannelCloseInit = {
  $type: "ibc.core.channel.v1.MsgChannelCloseInit" as const,

  encode(message: MsgChannelCloseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
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
          if (tag !== 26) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseInit {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    return MsgChannelCloseInit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}

export const MsgChannelCloseInitResponse = {
  $type: "ibc.core.channel.v1.MsgChannelCloseInitResponse" as const,

  encode(_: MsgChannelCloseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelCloseInitResponse {
    return {};
  },

  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
};

function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    port_id: "",
    channel_id: "",
    proof_init: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
    counterparty_upgrade_sequence: "0",
  };
}

export const MsgChannelCloseConfirm = {
  $type: "ibc.core.channel.v1.MsgChannelCloseConfirm" as const,

  encode(message: MsgChannelCloseConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.proof_init.length !== 0) {
      writer.uint32(26).bytes(message.proof_init);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      writer.uint32(48).uint64(message.counterparty_upgrade_sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
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
          if (tag !== 26) {
            break;
          }

          message.proof_init = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.counterparty_upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseConfirm {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
      counterparty_upgrade_sequence: isSet(object.counterparty_upgrade_sequence)
        ? globalThis.String(object.counterparty_upgrade_sequence)
        : "0",
    };
  },

  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.proof_init.length !== 0) {
      obj.proof_init = base64FromBytes(message.proof_init);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      obj.counterparty_upgrade_sequence = message.counterparty_upgrade_sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.proof_init = object.proof_init ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    message.counterparty_upgrade_sequence = object.counterparty_upgrade_sequence ?? "0";
    return message;
  },
};

function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}

export const MsgChannelCloseConfirmResponse = {
  $type: "ibc.core.channel.v1.MsgChannelCloseConfirmResponse" as const,

  encode(_: MsgChannelCloseConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    return {};
  },

  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
};

function createBaseMsgRecvPacket(): MsgRecvPacket {
  return { packet: undefined, proof_commitment: new Uint8Array(0), proof_height: undefined, signer: "" };
}

export const MsgRecvPacket = {
  $type: "ibc.core.channel.v1.MsgRecvPacket" as const,

  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof_commitment.length !== 0) {
      writer.uint32(18).bytes(message.proof_commitment);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet = Packet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof_commitment = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proof_commitment: isSet(object.proof_commitment) ? bytesFromBase64(object.proof_commitment) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    if (message.packet !== undefined) {
      obj.packet = Packet.toJSON(message.packet);
    }
    if (message.proof_commitment.length !== 0) {
      obj.proof_commitment = base64FromBytes(message.proof_commitment);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    return MsgRecvPacket.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.proof_commitment = object.proof_commitment ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return { result: 0 };
}

export const MsgRecvPacketResponse = {
  $type: "ibc.core.channel.v1.MsgRecvPacketResponse" as const,

  encode(message: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacketResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: undefined,
    proof_unreceived: new Uint8Array(0),
    proof_height: undefined,
    next_sequence_recv: "0",
    signer: "",
  };
}

export const MsgTimeout = {
  $type: "ibc.core.channel.v1.MsgTimeout" as const,

  encode(message: MsgTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof_unreceived.length !== 0) {
      writer.uint32(18).bytes(message.proof_unreceived);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    if (message.next_sequence_recv !== "0") {
      writer.uint32(32).uint64(message.next_sequence_recv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet = Packet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof_unreceived = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.next_sequence_recv = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTimeout {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      next_sequence_recv: isSet(object.next_sequence_recv) ? globalThis.String(object.next_sequence_recv) : "0",
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    if (message.packet !== undefined) {
      obj.packet = Packet.toJSON(message.packet);
    }
    if (message.proof_unreceived.length !== 0) {
      obj.proof_unreceived = base64FromBytes(message.proof_unreceived);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.next_sequence_recv !== "0") {
      obj.next_sequence_recv = message.next_sequence_recv;
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTimeout>): MsgTimeout {
    return MsgTimeout.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.proof_unreceived = object.proof_unreceived ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.next_sequence_recv = object.next_sequence_recv ?? "0";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return { result: 0 };
}

export const MsgTimeoutResponse = {
  $type: "ibc.core.channel.v1.MsgTimeoutResponse" as const,

  encode(message: MsgTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgTimeoutResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: undefined,
    proof_unreceived: new Uint8Array(0),
    proof_close: new Uint8Array(0),
    proof_height: undefined,
    next_sequence_recv: "0",
    signer: "",
    counterparty_upgrade_sequence: "0",
  };
}

export const MsgTimeoutOnClose = {
  $type: "ibc.core.channel.v1.MsgTimeoutOnClose" as const,

  encode(message: MsgTimeoutOnClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof_unreceived.length !== 0) {
      writer.uint32(18).bytes(message.proof_unreceived);
    }
    if (message.proof_close.length !== 0) {
      writer.uint32(26).bytes(message.proof_close);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    if (message.next_sequence_recv !== "0") {
      writer.uint32(40).uint64(message.next_sequence_recv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      writer.uint32(56).uint64(message.counterparty_upgrade_sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet = Packet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof_unreceived = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof_close = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.next_sequence_recv = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.counterparty_upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnClose {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(0),
      proof_close: isSet(object.proof_close) ? bytesFromBase64(object.proof_close) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      next_sequence_recv: isSet(object.next_sequence_recv) ? globalThis.String(object.next_sequence_recv) : "0",
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
      counterparty_upgrade_sequence: isSet(object.counterparty_upgrade_sequence)
        ? globalThis.String(object.counterparty_upgrade_sequence)
        : "0",
    };
  },

  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    if (message.packet !== undefined) {
      obj.packet = Packet.toJSON(message.packet);
    }
    if (message.proof_unreceived.length !== 0) {
      obj.proof_unreceived = base64FromBytes(message.proof_unreceived);
    }
    if (message.proof_close.length !== 0) {
      obj.proof_close = base64FromBytes(message.proof_close);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.next_sequence_recv !== "0") {
      obj.next_sequence_recv = message.next_sequence_recv;
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      obj.counterparty_upgrade_sequence = message.counterparty_upgrade_sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.proof_unreceived = object.proof_unreceived ?? new Uint8Array(0);
    message.proof_close = object.proof_close ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.next_sequence_recv = object.next_sequence_recv ?? "0";
    message.signer = object.signer ?? "";
    message.counterparty_upgrade_sequence = object.counterparty_upgrade_sequence ?? "0";
    return message;
  },
};

function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return { result: 0 };
}

export const MsgTimeoutOnCloseResponse = {
  $type: "ibc.core.channel.v1.MsgTimeoutOnCloseResponse" as const,

  encode(message: MsgTimeoutOnCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnCloseResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(0),
    proof_acked: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgAcknowledgement = {
  $type: "ibc.core.channel.v1.MsgAcknowledgement" as const,

  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proof_acked.length !== 0) {
      writer.uint32(26).bytes(message.proof_acked);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet = Packet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.acknowledgement = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof_acked = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgement {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(0),
      proof_acked: isSet(object.proof_acked) ? bytesFromBase64(object.proof_acked) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    if (message.packet !== undefined) {
      obj.packet = Packet.toJSON(message.packet);
    }
    if (message.acknowledgement.length !== 0) {
      obj.acknowledgement = base64FromBytes(message.acknowledgement);
    }
    if (message.proof_acked.length !== 0) {
      obj.proof_acked = base64FromBytes(message.proof_acked);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    return MsgAcknowledgement.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = (object.packet !== undefined && object.packet !== null)
      ? Packet.fromPartial(object.packet)
      : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array(0);
    message.proof_acked = object.proof_acked ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return { result: 0 };
}

export const MsgAcknowledgementResponse = {
  $type: "ibc.core.channel.v1.MsgAcknowledgementResponse" as const,

  encode(message: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgementResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgChannelUpgradeInit(): MsgChannelUpgradeInit {
  return { port_id: "", channel_id: "", fields: undefined, signer: "" };
}

export const MsgChannelUpgradeInit = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeInit" as const,

  encode(message: MsgChannelUpgradeInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInit();
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
          if (tag !== 26) {
            break;
          }

          message.fields = UpgradeFields.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeInit {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      fields: isSet(object.fields) ? UpgradeFields.fromJSON(object.fields) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeInit): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.fields !== undefined) {
      obj.fields = UpgradeFields.toJSON(message.fields);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeInit>): MsgChannelUpgradeInit {
    return MsgChannelUpgradeInit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeInit>): MsgChannelUpgradeInit {
    const message = createBaseMsgChannelUpgradeInit();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.fields = (object.fields !== undefined && object.fields !== null)
      ? UpgradeFields.fromPartial(object.fields)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeInitResponse(): MsgChannelUpgradeInitResponse {
  return { upgrade: undefined, upgrade_sequence: "0" };
}

export const MsgChannelUpgradeInitResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeInitResponse" as const,

  encode(message: MsgChannelUpgradeInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgrade_sequence !== "0") {
      writer.uint32(16).uint64(message.upgrade_sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.upgrade = Upgrade.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeInitResponse {
    return {
      upgrade: isSet(object.upgrade) ? Upgrade.fromJSON(object.upgrade) : undefined,
      upgrade_sequence: isSet(object.upgrade_sequence) ? globalThis.String(object.upgrade_sequence) : "0",
    };
  },

  toJSON(message: MsgChannelUpgradeInitResponse): unknown {
    const obj: any = {};
    if (message.upgrade !== undefined) {
      obj.upgrade = Upgrade.toJSON(message.upgrade);
    }
    if (message.upgrade_sequence !== "0") {
      obj.upgrade_sequence = message.upgrade_sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeInitResponse>): MsgChannelUpgradeInitResponse {
    return MsgChannelUpgradeInitResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeInitResponse>): MsgChannelUpgradeInitResponse {
    const message = createBaseMsgChannelUpgradeInitResponse();
    message.upgrade = (object.upgrade !== undefined && object.upgrade !== null)
      ? Upgrade.fromPartial(object.upgrade)
      : undefined;
    message.upgrade_sequence = object.upgrade_sequence ?? "0";
    return message;
  },
};

function createBaseMsgChannelUpgradeTry(): MsgChannelUpgradeTry {
  return {
    port_id: "",
    channel_id: "",
    proposed_upgrade_connection_hops: [],
    counterparty_upgrade_fields: undefined,
    counterparty_upgrade_sequence: "0",
    proof_channel: new Uint8Array(0),
    proof_upgrade: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeTry = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeTry" as const,

  encode(message: MsgChannelUpgradeTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    for (const v of message.proposed_upgrade_connection_hops) {
      writer.uint32(26).string(v!);
    }
    if (message.counterparty_upgrade_fields !== undefined) {
      UpgradeFields.encode(message.counterparty_upgrade_fields, writer.uint32(34).fork()).ldelim();
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      writer.uint32(40).uint64(message.counterparty_upgrade_sequence);
    }
    if (message.proof_channel.length !== 0) {
      writer.uint32(50).bytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      writer.uint32(58).bytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(66).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeTry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTry();
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
          if (tag !== 26) {
            break;
          }

          message.proposed_upgrade_connection_hops.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty_upgrade_fields = UpgradeFields.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.counterparty_upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_channel = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proof_upgrade = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTry {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      proposed_upgrade_connection_hops: globalThis.Array.isArray(object?.proposed_upgrade_connection_hops)
        ? object.proposed_upgrade_connection_hops.map((e: any) => globalThis.String(e))
        : [],
      counterparty_upgrade_fields: isSet(object.counterparty_upgrade_fields)
        ? UpgradeFields.fromJSON(object.counterparty_upgrade_fields)
        : undefined,
      counterparty_upgrade_sequence: isSet(object.counterparty_upgrade_sequence)
        ? globalThis.String(object.counterparty_upgrade_sequence)
        : "0",
      proof_channel: isSet(object.proof_channel) ? bytesFromBase64(object.proof_channel) : new Uint8Array(0),
      proof_upgrade: isSet(object.proof_upgrade) ? bytesFromBase64(object.proof_upgrade) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeTry): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.proposed_upgrade_connection_hops?.length) {
      obj.proposed_upgrade_connection_hops = message.proposed_upgrade_connection_hops;
    }
    if (message.counterparty_upgrade_fields !== undefined) {
      obj.counterparty_upgrade_fields = UpgradeFields.toJSON(message.counterparty_upgrade_fields);
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      obj.counterparty_upgrade_sequence = message.counterparty_upgrade_sequence;
    }
    if (message.proof_channel.length !== 0) {
      obj.proof_channel = base64FromBytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      obj.proof_upgrade = base64FromBytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeTry>): MsgChannelUpgradeTry {
    return MsgChannelUpgradeTry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeTry>): MsgChannelUpgradeTry {
    const message = createBaseMsgChannelUpgradeTry();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.proposed_upgrade_connection_hops = object.proposed_upgrade_connection_hops?.map((e) => e) || [];
    message.counterparty_upgrade_fields =
      (object.counterparty_upgrade_fields !== undefined && object.counterparty_upgrade_fields !== null)
        ? UpgradeFields.fromPartial(object.counterparty_upgrade_fields)
        : undefined;
    message.counterparty_upgrade_sequence = object.counterparty_upgrade_sequence ?? "0";
    message.proof_channel = object.proof_channel ?? new Uint8Array(0);
    message.proof_upgrade = object.proof_upgrade ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeTryResponse(): MsgChannelUpgradeTryResponse {
  return { upgrade: undefined, upgrade_sequence: "0", result: 0 };
}

export const MsgChannelUpgradeTryResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeTryResponse" as const,

  encode(message: MsgChannelUpgradeTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgrade_sequence !== "0") {
      writer.uint32(16).uint64(message.upgrade_sequence);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeTryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.upgrade = Upgrade.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTryResponse {
    return {
      upgrade: isSet(object.upgrade) ? Upgrade.fromJSON(object.upgrade) : undefined,
      upgrade_sequence: isSet(object.upgrade_sequence) ? globalThis.String(object.upgrade_sequence) : "0",
      result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0,
    };
  },

  toJSON(message: MsgChannelUpgradeTryResponse): unknown {
    const obj: any = {};
    if (message.upgrade !== undefined) {
      obj.upgrade = Upgrade.toJSON(message.upgrade);
    }
    if (message.upgrade_sequence !== "0") {
      obj.upgrade_sequence = message.upgrade_sequence;
    }
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeTryResponse>): MsgChannelUpgradeTryResponse {
    return MsgChannelUpgradeTryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeTryResponse>): MsgChannelUpgradeTryResponse {
    const message = createBaseMsgChannelUpgradeTryResponse();
    message.upgrade = (object.upgrade !== undefined && object.upgrade !== null)
      ? Upgrade.fromPartial(object.upgrade)
      : undefined;
    message.upgrade_sequence = object.upgrade_sequence ?? "0";
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgChannelUpgradeAck(): MsgChannelUpgradeAck {
  return {
    port_id: "",
    channel_id: "",
    counterparty_upgrade: undefined,
    proof_channel: new Uint8Array(0),
    proof_upgrade: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeAck = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeAck" as const,

  encode(message: MsgChannelUpgradeAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.counterparty_upgrade !== undefined) {
      Upgrade.encode(message.counterparty_upgrade, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof_channel.length !== 0) {
      writer.uint32(34).bytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      writer.uint32(42).bytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAck();
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
          if (tag !== 26) {
            break;
          }

          message.counterparty_upgrade = Upgrade.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_channel = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_upgrade = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeAck {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      counterparty_upgrade: isSet(object.counterparty_upgrade)
        ? Upgrade.fromJSON(object.counterparty_upgrade)
        : undefined,
      proof_channel: isSet(object.proof_channel) ? bytesFromBase64(object.proof_channel) : new Uint8Array(0),
      proof_upgrade: isSet(object.proof_upgrade) ? bytesFromBase64(object.proof_upgrade) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeAck): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.counterparty_upgrade !== undefined) {
      obj.counterparty_upgrade = Upgrade.toJSON(message.counterparty_upgrade);
    }
    if (message.proof_channel.length !== 0) {
      obj.proof_channel = base64FromBytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      obj.proof_upgrade = base64FromBytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeAck>): MsgChannelUpgradeAck {
    return MsgChannelUpgradeAck.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeAck>): MsgChannelUpgradeAck {
    const message = createBaseMsgChannelUpgradeAck();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_upgrade = (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null)
      ? Upgrade.fromPartial(object.counterparty_upgrade)
      : undefined;
    message.proof_channel = object.proof_channel ?? new Uint8Array(0);
    message.proof_upgrade = object.proof_upgrade ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeAckResponse(): MsgChannelUpgradeAckResponse {
  return { result: 0 };
}

export const MsgChannelUpgradeAckResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeAckResponse" as const,

  encode(message: MsgChannelUpgradeAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeAckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeAckResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgChannelUpgradeAckResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeAckResponse>): MsgChannelUpgradeAckResponse {
    return MsgChannelUpgradeAckResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeAckResponse>): MsgChannelUpgradeAckResponse {
    const message = createBaseMsgChannelUpgradeAckResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgChannelUpgradeConfirm(): MsgChannelUpgradeConfirm {
  return {
    port_id: "",
    channel_id: "",
    counterparty_channel_state: 0,
    counterparty_upgrade: undefined,
    proof_channel: new Uint8Array(0),
    proof_upgrade: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeConfirm = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeConfirm" as const,

  encode(message: MsgChannelUpgradeConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.counterparty_channel_state !== 0) {
      writer.uint32(24).int32(message.counterparty_channel_state);
    }
    if (message.counterparty_upgrade !== undefined) {
      Upgrade.encode(message.counterparty_upgrade, writer.uint32(34).fork()).ldelim();
    }
    if (message.proof_channel.length !== 0) {
      writer.uint32(42).bytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      writer.uint32(50).bytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(66).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeConfirm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirm();
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

          message.counterparty_channel_state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty_upgrade = Upgrade.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_channel = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_upgrade = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeConfirm {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      counterparty_channel_state: isSet(object.counterparty_channel_state)
        ? stateFromJSON(object.counterparty_channel_state)
        : 0,
      counterparty_upgrade: isSet(object.counterparty_upgrade)
        ? Upgrade.fromJSON(object.counterparty_upgrade)
        : undefined,
      proof_channel: isSet(object.proof_channel) ? bytesFromBase64(object.proof_channel) : new Uint8Array(0),
      proof_upgrade: isSet(object.proof_upgrade) ? bytesFromBase64(object.proof_upgrade) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeConfirm): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.counterparty_channel_state !== 0) {
      obj.counterparty_channel_state = stateToJSON(message.counterparty_channel_state);
    }
    if (message.counterparty_upgrade !== undefined) {
      obj.counterparty_upgrade = Upgrade.toJSON(message.counterparty_upgrade);
    }
    if (message.proof_channel.length !== 0) {
      obj.proof_channel = base64FromBytes(message.proof_channel);
    }
    if (message.proof_upgrade.length !== 0) {
      obj.proof_upgrade = base64FromBytes(message.proof_upgrade);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeConfirm>): MsgChannelUpgradeConfirm {
    return MsgChannelUpgradeConfirm.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeConfirm>): MsgChannelUpgradeConfirm {
    const message = createBaseMsgChannelUpgradeConfirm();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_channel_state = object.counterparty_channel_state ?? 0;
    message.counterparty_upgrade = (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null)
      ? Upgrade.fromPartial(object.counterparty_upgrade)
      : undefined;
    message.proof_channel = object.proof_channel ?? new Uint8Array(0);
    message.proof_upgrade = object.proof_upgrade ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeConfirmResponse(): MsgChannelUpgradeConfirmResponse {
  return { result: 0 };
}

export const MsgChannelUpgradeConfirmResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse" as const,

  encode(message: MsgChannelUpgradeConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeConfirmResponse {
    return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgChannelUpgradeConfirmResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = responseResultTypeToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeConfirmResponse>): MsgChannelUpgradeConfirmResponse {
    return MsgChannelUpgradeConfirmResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeConfirmResponse>): MsgChannelUpgradeConfirmResponse {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgChannelUpgradeOpen(): MsgChannelUpgradeOpen {
  return {
    port_id: "",
    channel_id: "",
    counterparty_channel_state: 0,
    counterparty_upgrade_sequence: "0",
    proof_channel: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeOpen = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeOpen" as const,

  encode(message: MsgChannelUpgradeOpen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.counterparty_channel_state !== 0) {
      writer.uint32(24).int32(message.counterparty_channel_state);
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      writer.uint32(32).uint64(message.counterparty_upgrade_sequence);
    }
    if (message.proof_channel.length !== 0) {
      writer.uint32(42).bytes(message.proof_channel);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeOpen {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpen();
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

          message.counterparty_channel_state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.counterparty_upgrade_sequence = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_channel = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeOpen {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      counterparty_channel_state: isSet(object.counterparty_channel_state)
        ? stateFromJSON(object.counterparty_channel_state)
        : 0,
      counterparty_upgrade_sequence: isSet(object.counterparty_upgrade_sequence)
        ? globalThis.String(object.counterparty_upgrade_sequence)
        : "0",
      proof_channel: isSet(object.proof_channel) ? bytesFromBase64(object.proof_channel) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeOpen): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.counterparty_channel_state !== 0) {
      obj.counterparty_channel_state = stateToJSON(message.counterparty_channel_state);
    }
    if (message.counterparty_upgrade_sequence !== "0") {
      obj.counterparty_upgrade_sequence = message.counterparty_upgrade_sequence;
    }
    if (message.proof_channel.length !== 0) {
      obj.proof_channel = base64FromBytes(message.proof_channel);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeOpen>): MsgChannelUpgradeOpen {
    return MsgChannelUpgradeOpen.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeOpen>): MsgChannelUpgradeOpen {
    const message = createBaseMsgChannelUpgradeOpen();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_channel_state = object.counterparty_channel_state ?? 0;
    message.counterparty_upgrade_sequence = object.counterparty_upgrade_sequence ?? "0";
    message.proof_channel = object.proof_channel ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeOpenResponse(): MsgChannelUpgradeOpenResponse {
  return {};
}

export const MsgChannelUpgradeOpenResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeOpenResponse" as const,

  encode(_: MsgChannelUpgradeOpenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeOpenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelUpgradeOpenResponse {
    return {};
  },

  toJSON(_: MsgChannelUpgradeOpenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeOpenResponse>): MsgChannelUpgradeOpenResponse {
    return MsgChannelUpgradeOpenResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelUpgradeOpenResponse>): MsgChannelUpgradeOpenResponse {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
};

function createBaseMsgChannelUpgradeTimeout(): MsgChannelUpgradeTimeout {
  return {
    port_id: "",
    channel_id: "",
    counterparty_channel: undefined,
    proof_channel: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeTimeout = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeTimeout" as const,

  encode(message: MsgChannelUpgradeTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.counterparty_channel !== undefined) {
      Channel.encode(message.counterparty_channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof_channel.length !== 0) {
      writer.uint32(34).bytes(message.proof_channel);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeTimeout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeout();
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
          if (tag !== 26) {
            break;
          }

          message.counterparty_channel = Channel.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_channel = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTimeout {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      counterparty_channel: isSet(object.counterparty_channel)
        ? Channel.fromJSON(object.counterparty_channel)
        : undefined,
      proof_channel: isSet(object.proof_channel) ? bytesFromBase64(object.proof_channel) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeTimeout): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.counterparty_channel !== undefined) {
      obj.counterparty_channel = Channel.toJSON(message.counterparty_channel);
    }
    if (message.proof_channel.length !== 0) {
      obj.proof_channel = base64FromBytes(message.proof_channel);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeTimeout>): MsgChannelUpgradeTimeout {
    return MsgChannelUpgradeTimeout.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeTimeout>): MsgChannelUpgradeTimeout {
    const message = createBaseMsgChannelUpgradeTimeout();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_channel = (object.counterparty_channel !== undefined && object.counterparty_channel !== null)
      ? Channel.fromPartial(object.counterparty_channel)
      : undefined;
    message.proof_channel = object.proof_channel ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeTimeoutResponse(): MsgChannelUpgradeTimeoutResponse {
  return {};
}

export const MsgChannelUpgradeTimeoutResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse" as const,

  encode(_: MsgChannelUpgradeTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelUpgradeTimeoutResponse {
    return {};
  },

  toJSON(_: MsgChannelUpgradeTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeTimeoutResponse>): MsgChannelUpgradeTimeoutResponse {
    return MsgChannelUpgradeTimeoutResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelUpgradeTimeoutResponse>): MsgChannelUpgradeTimeoutResponse {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
};

function createBaseMsgChannelUpgradeCancel(): MsgChannelUpgradeCancel {
  return {
    port_id: "",
    channel_id: "",
    error_receipt: undefined,
    proof_error_receipt: new Uint8Array(0),
    proof_height: undefined,
    signer: "",
  };
}

export const MsgChannelUpgradeCancel = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeCancel" as const,

  encode(message: MsgChannelUpgradeCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.error_receipt !== undefined) {
      ErrorReceipt.encode(message.error_receipt, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof_error_receipt.length !== 0) {
      writer.uint32(34).bytes(message.proof_error_receipt);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeCancel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancel();
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
          if (tag !== 26) {
            break;
          }

          message.error_receipt = ErrorReceipt.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proof_error_receipt = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.proof_height = Height.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeCancel {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      error_receipt: isSet(object.error_receipt) ? ErrorReceipt.fromJSON(object.error_receipt) : undefined,
      proof_error_receipt: isSet(object.proof_error_receipt)
        ? bytesFromBase64(object.proof_error_receipt)
        : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgChannelUpgradeCancel): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.error_receipt !== undefined) {
      obj.error_receipt = ErrorReceipt.toJSON(message.error_receipt);
    }
    if (message.proof_error_receipt.length !== 0) {
      obj.proof_error_receipt = base64FromBytes(message.proof_error_receipt);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeCancel>): MsgChannelUpgradeCancel {
    return MsgChannelUpgradeCancel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChannelUpgradeCancel>): MsgChannelUpgradeCancel {
    const message = createBaseMsgChannelUpgradeCancel();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.error_receipt = (object.error_receipt !== undefined && object.error_receipt !== null)
      ? ErrorReceipt.fromPartial(object.error_receipt)
      : undefined;
    message.proof_error_receipt = object.proof_error_receipt ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgChannelUpgradeCancelResponse(): MsgChannelUpgradeCancelResponse {
  return {};
}

export const MsgChannelUpgradeCancelResponse = {
  $type: "ibc.core.channel.v1.MsgChannelUpgradeCancelResponse" as const,

  encode(_: MsgChannelUpgradeCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelUpgradeCancelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChannelUpgradeCancelResponse {
    return {};
  },

  toJSON(_: MsgChannelUpgradeCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChannelUpgradeCancelResponse>): MsgChannelUpgradeCancelResponse {
    return MsgChannelUpgradeCancelResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChannelUpgradeCancelResponse>): MsgChannelUpgradeCancelResponse {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  $type: "ibc.core.channel.v1.MsgUpdateParams" as const,

  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  $type: "ibc.core.channel.v1.MsgUpdateParamsResponse" as const,

  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgPruneAcknowledgements(): MsgPruneAcknowledgements {
  return { port_id: "", channel_id: "", limit: "0", signer: "" };
}

export const MsgPruneAcknowledgements = {
  $type: "ibc.core.channel.v1.MsgPruneAcknowledgements" as const,

  encode(message: MsgPruneAcknowledgements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.limit !== "0") {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAcknowledgements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgements();
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

          message.limit = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPruneAcknowledgements {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      limit: isSet(object.limit) ? globalThis.String(object.limit) : "0",
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgPruneAcknowledgements): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.limit !== "0") {
      obj.limit = message.limit;
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPruneAcknowledgements>): MsgPruneAcknowledgements {
    return MsgPruneAcknowledgements.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPruneAcknowledgements>): MsgPruneAcknowledgements {
    const message = createBaseMsgPruneAcknowledgements();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.limit = object.limit ?? "0";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgPruneAcknowledgementsResponse(): MsgPruneAcknowledgementsResponse {
  return { total_pruned_sequences: "0", total_remaining_sequences: "0" };
}

export const MsgPruneAcknowledgementsResponse = {
  $type: "ibc.core.channel.v1.MsgPruneAcknowledgementsResponse" as const,

  encode(message: MsgPruneAcknowledgementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_pruned_sequences !== "0") {
      writer.uint32(8).uint64(message.total_pruned_sequences);
    }
    if (message.total_remaining_sequences !== "0") {
      writer.uint32(16).uint64(message.total_remaining_sequences);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total_pruned_sequences = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_remaining_sequences = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPruneAcknowledgementsResponse {
    return {
      total_pruned_sequences: isSet(object.total_pruned_sequences)
        ? globalThis.String(object.total_pruned_sequences)
        : "0",
      total_remaining_sequences: isSet(object.total_remaining_sequences)
        ? globalThis.String(object.total_remaining_sequences)
        : "0",
    };
  },

  toJSON(message: MsgPruneAcknowledgementsResponse): unknown {
    const obj: any = {};
    if (message.total_pruned_sequences !== "0") {
      obj.total_pruned_sequences = message.total_pruned_sequences;
    }
    if (message.total_remaining_sequences !== "0") {
      obj.total_remaining_sequences = message.total_remaining_sequences;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPruneAcknowledgementsResponse>): MsgPruneAcknowledgementsResponse {
    return MsgPruneAcknowledgementsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPruneAcknowledgementsResponse>): MsgPruneAcknowledgementsResponse {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    message.total_pruned_sequences = object.total_pruned_sequences ?? "0";
    message.total_remaining_sequences = object.total_remaining_sequences ?? "0";
    return message;
  },
};

/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit(
    request: DeepPartial<MsgChannelOpenInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry(request: DeepPartial<MsgChannelOpenTry>, metadata?: grpc.Metadata): Promise<MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck(request: DeepPartial<MsgChannelOpenAck>, metadata?: grpc.Metadata): Promise<MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm(
    request: DeepPartial<MsgChannelOpenConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit(
    request: DeepPartial<MsgChannelCloseInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  ChannelCloseConfirm(
    request: DeepPartial<MsgChannelCloseConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose(request: DeepPartial<MsgTimeoutOnClose>, metadata?: grpc.Metadata): Promise<MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(
    request: DeepPartial<MsgAcknowledgement>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAcknowledgementResponse>;
  /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  ChannelUpgradeInit(
    request: DeepPartial<MsgChannelUpgradeInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeInitResponse>;
  /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  ChannelUpgradeTry(
    request: DeepPartial<MsgChannelUpgradeTry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeTryResponse>;
  /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  ChannelUpgradeAck(
    request: DeepPartial<MsgChannelUpgradeAck>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeAckResponse>;
  /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  ChannelUpgradeConfirm(
    request: DeepPartial<MsgChannelUpgradeConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeConfirmResponse>;
  /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  ChannelUpgradeOpen(
    request: DeepPartial<MsgChannelUpgradeOpen>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeOpenResponse>;
  /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  ChannelUpgradeTimeout(
    request: DeepPartial<MsgChannelUpgradeTimeout>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeTimeoutResponse>;
  /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  ChannelUpgradeCancel(
    request: DeepPartial<MsgChannelUpgradeCancel>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeCancelResponse>;
  /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  UpdateChannelParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse>;
  /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  PruneAcknowledgements(
    request: DeepPartial<MsgPruneAcknowledgements>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPruneAcknowledgementsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
    this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
    this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
    this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
    this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
    this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Timeout = this.Timeout.bind(this);
    this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
    this.ChannelUpgradeInit = this.ChannelUpgradeInit.bind(this);
    this.ChannelUpgradeTry = this.ChannelUpgradeTry.bind(this);
    this.ChannelUpgradeAck = this.ChannelUpgradeAck.bind(this);
    this.ChannelUpgradeConfirm = this.ChannelUpgradeConfirm.bind(this);
    this.ChannelUpgradeOpen = this.ChannelUpgradeOpen.bind(this);
    this.ChannelUpgradeTimeout = this.ChannelUpgradeTimeout.bind(this);
    this.ChannelUpgradeCancel = this.ChannelUpgradeCancel.bind(this);
    this.UpdateChannelParams = this.UpdateChannelParams.bind(this);
    this.PruneAcknowledgements = this.PruneAcknowledgements.bind(this);
  }

  ChannelOpenInit(
    request: DeepPartial<MsgChannelOpenInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenInitResponse> {
    return this.rpc.unary(MsgChannelOpenInitDesc, MsgChannelOpenInit.fromPartial(request), metadata);
  }

  ChannelOpenTry(
    request: DeepPartial<MsgChannelOpenTry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenTryResponse> {
    return this.rpc.unary(MsgChannelOpenTryDesc, MsgChannelOpenTry.fromPartial(request), metadata);
  }

  ChannelOpenAck(
    request: DeepPartial<MsgChannelOpenAck>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenAckResponse> {
    return this.rpc.unary(MsgChannelOpenAckDesc, MsgChannelOpenAck.fromPartial(request), metadata);
  }

  ChannelOpenConfirm(
    request: DeepPartial<MsgChannelOpenConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelOpenConfirmResponse> {
    return this.rpc.unary(MsgChannelOpenConfirmDesc, MsgChannelOpenConfirm.fromPartial(request), metadata);
  }

  ChannelCloseInit(
    request: DeepPartial<MsgChannelCloseInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelCloseInitResponse> {
    return this.rpc.unary(MsgChannelCloseInitDesc, MsgChannelCloseInit.fromPartial(request), metadata);
  }

  ChannelCloseConfirm(
    request: DeepPartial<MsgChannelCloseConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelCloseConfirmResponse> {
    return this.rpc.unary(MsgChannelCloseConfirmDesc, MsgChannelCloseConfirm.fromPartial(request), metadata);
  }

  RecvPacket(request: DeepPartial<MsgRecvPacket>, metadata?: grpc.Metadata): Promise<MsgRecvPacketResponse> {
    return this.rpc.unary(MsgRecvPacketDesc, MsgRecvPacket.fromPartial(request), metadata);
  }

  Timeout(request: DeepPartial<MsgTimeout>, metadata?: grpc.Metadata): Promise<MsgTimeoutResponse> {
    return this.rpc.unary(MsgTimeoutDesc, MsgTimeout.fromPartial(request), metadata);
  }

  TimeoutOnClose(
    request: DeepPartial<MsgTimeoutOnClose>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTimeoutOnCloseResponse> {
    return this.rpc.unary(MsgTimeoutOnCloseDesc, MsgTimeoutOnClose.fromPartial(request), metadata);
  }

  Acknowledgement(
    request: DeepPartial<MsgAcknowledgement>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAcknowledgementResponse> {
    return this.rpc.unary(MsgAcknowledgementDesc, MsgAcknowledgement.fromPartial(request), metadata);
  }

  ChannelUpgradeInit(
    request: DeepPartial<MsgChannelUpgradeInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeInitResponse> {
    return this.rpc.unary(MsgChannelUpgradeInitDesc, MsgChannelUpgradeInit.fromPartial(request), metadata);
  }

  ChannelUpgradeTry(
    request: DeepPartial<MsgChannelUpgradeTry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeTryResponse> {
    return this.rpc.unary(MsgChannelUpgradeTryDesc, MsgChannelUpgradeTry.fromPartial(request), metadata);
  }

  ChannelUpgradeAck(
    request: DeepPartial<MsgChannelUpgradeAck>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeAckResponse> {
    return this.rpc.unary(MsgChannelUpgradeAckDesc, MsgChannelUpgradeAck.fromPartial(request), metadata);
  }

  ChannelUpgradeConfirm(
    request: DeepPartial<MsgChannelUpgradeConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeConfirmResponse> {
    return this.rpc.unary(MsgChannelUpgradeConfirmDesc, MsgChannelUpgradeConfirm.fromPartial(request), metadata);
  }

  ChannelUpgradeOpen(
    request: DeepPartial<MsgChannelUpgradeOpen>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeOpenResponse> {
    return this.rpc.unary(MsgChannelUpgradeOpenDesc, MsgChannelUpgradeOpen.fromPartial(request), metadata);
  }

  ChannelUpgradeTimeout(
    request: DeepPartial<MsgChannelUpgradeTimeout>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeTimeoutResponse> {
    return this.rpc.unary(MsgChannelUpgradeTimeoutDesc, MsgChannelUpgradeTimeout.fromPartial(request), metadata);
  }

  ChannelUpgradeCancel(
    request: DeepPartial<MsgChannelUpgradeCancel>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChannelUpgradeCancelResponse> {
    return this.rpc.unary(MsgChannelUpgradeCancelDesc, MsgChannelUpgradeCancel.fromPartial(request), metadata);
  }

  UpdateChannelParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateChannelParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }

  PruneAcknowledgements(
    request: DeepPartial<MsgPruneAcknowledgements>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPruneAcknowledgementsResponse> {
    return this.rpc.unary(MsgPruneAcknowledgementsDesc, MsgPruneAcknowledgements.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "ibc.core.channel.v1.Msg" };

export const MsgChannelOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelOpenInitResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenTry.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelOpenTryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenAck.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelOpenAckResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelOpenConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelOpenConfirmResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelCloseInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelCloseInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelCloseInitResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelCloseConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelCloseConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelCloseConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelCloseConfirmResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgRecvPacketDesc: UnaryMethodDefinitionish = {
  methodName: "RecvPacket",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRecvPacket.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgRecvPacketResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTimeoutDesc: UnaryMethodDefinitionish = {
  methodName: "Timeout",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTimeout.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTimeoutResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTimeoutOnCloseDesc: UnaryMethodDefinitionish = {
  methodName: "TimeoutOnClose",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTimeoutOnClose.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTimeoutOnCloseResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "Acknowledgement",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAcknowledgement.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAcknowledgementResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeInitDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeInitResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeTryDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeTry.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeTryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeAckDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeAck.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeAckResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeConfirmResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeOpenDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeOpen",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeOpen.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeOpenResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeTimeoutDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeTimeout",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeTimeout.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeTimeoutResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgChannelUpgradeCancelDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUpgradeCancel",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChannelUpgradeCancel.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChannelUpgradeCancelResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateChannelParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateChannelParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateParamsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgPruneAcknowledgementsDesc: UnaryMethodDefinitionish = {
  methodName: "PruneAcknowledgements",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPruneAcknowledgements.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgPruneAcknowledgementsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
