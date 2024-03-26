/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { Counterparty, Params, Version } from "./connection";

/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  client_id: string;
  counterparty: Counterparty | undefined;
  version: Version | undefined;
  delay_period: string;
  signer: string;
}

/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}

/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
  client_id: string;
  /**
   * Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC.
   *
   * @deprecated
   */
  previous_connection_id: string;
  client_state: Any | undefined;
  counterparty: Counterparty | undefined;
  delay_period: string;
  counterparty_versions: Version[];
  proof_height:
    | Height
    | undefined;
  /**
   * proof of the initialization the connection on Chain A: `UNINITIALIZED ->
   * INIT`
   */
  proof_init: Uint8Array;
  /** proof of client state included in message */
  proof_client: Uint8Array;
  /** proof of client consensus state */
  proof_consensus: Uint8Array;
  consensus_height: Height | undefined;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  host_consensus_state_proof: Uint8Array;
}

/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}

/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connection_id: string;
  counterparty_connection_id: string;
  version: Version | undefined;
  client_state: Any | undefined;
  proof_height:
    | Height
    | undefined;
  /**
   * proof of the initialization the connection on Chain B: `UNINITIALIZED ->
   * TRYOPEN`
   */
  proof_try: Uint8Array;
  /** proof of client state included in message */
  proof_client: Uint8Array;
  /** proof of client consensus state */
  proof_consensus: Uint8Array;
  consensus_height: Height | undefined;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  host_consensus_state_proof: Uint8Array;
}

/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}

/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connection_id: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proof_ack: Uint8Array;
  proof_height: Height | undefined;
  signer: string;
}

/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}

/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the connection parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return { client_id: "", counterparty: undefined, version: undefined, delay_period: "0", signer: "" };
}

export const MsgConnectionOpenInit = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenInit" as const,

  encode(message: MsgConnectionOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.delay_period !== "0") {
      writer.uint32(32).uint64(message.delay_period);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
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
          if (tag !== 18) {
            break;
          }

          message.counterparty = Counterparty.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = Version.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.delay_period = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): MsgConnectionOpenInit {
    return {
      client_id: isSet(object.client_id) ? globalThis.String(object.client_id) : "",
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      delay_period: isSet(object.delay_period) ? globalThis.String(object.delay_period) : "0",
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgConnectionOpenInit): unknown {
    const obj: any = {};
    if (message.client_id !== undefined) {
      obj.client_id = message.client_id;
    }
    if (message.counterparty !== undefined) {
      obj.counterparty = Counterparty.toJSON(message.counterparty);
    }
    if (message.version !== undefined) {
      obj.version = Version.toJSON(message.version);
    }
    if (message.delay_period !== undefined) {
      obj.delay_period = message.delay_period;
    }
    if (message.signer !== undefined) {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenInit>): MsgConnectionOpenInit {
    return MsgConnectionOpenInit.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenInit>): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.client_id = object.client_id ?? "";
    message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
      ? Counterparty.fromPartial(object.counterparty)
      : undefined;
    message.version = (object.version !== undefined && object.version !== null)
      ? Version.fromPartial(object.version)
      : undefined;
    message.delay_period = object.delay_period ?? "0";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}

export const MsgConnectionOpenInitResponse = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenInitResponse" as const,

  encode(_: MsgConnectionOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();
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

  fromJSON(_: any): MsgConnectionOpenInitResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse {
    return MsgConnectionOpenInitResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    client_id: "",
    previous_connection_id: "",
    client_state: undefined,
    counterparty: undefined,
    delay_period: "0",
    counterparty_versions: [],
    proof_height: undefined,
    proof_init: new Uint8Array(0),
    proof_client: new Uint8Array(0),
    proof_consensus: new Uint8Array(0),
    consensus_height: undefined,
    signer: "",
    host_consensus_state_proof: new Uint8Array(0),
  };
}

export const MsgConnectionOpenTry = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenTry" as const,

  encode(message: MsgConnectionOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.previous_connection_id !== "") {
      writer.uint32(18).string(message.previous_connection_id);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delay_period !== "0") {
      writer.uint32(40).uint64(message.delay_period);
    }
    for (const v of message.counterparty_versions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
    }
    if (message.proof_init.length !== 0) {
      writer.uint32(66).bytes(message.proof_init);
    }
    if (message.proof_client.length !== 0) {
      writer.uint32(74).bytes(message.proof_client);
    }
    if (message.proof_consensus.length !== 0) {
      writer.uint32(82).bytes(message.proof_consensus);
    }
    if (message.consensus_height !== undefined) {
      Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    if (message.host_consensus_state_proof.length !== 0) {
      writer.uint32(106).bytes(message.host_consensus_state_proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();
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
          if (tag !== 18) {
            break;
          }

          message.previous_connection_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.client_state = Any.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.counterparty = Counterparty.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.delay_period = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.counterparty_versions.push(Version.decode(reader, reader.uint32()));
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

          message.proof_init = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.proof_client = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.proof_consensus = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.consensus_height = Height.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.host_consensus_state_proof = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConnectionOpenTry {
    return {
      client_id: isSet(object.client_id) ? globalThis.String(object.client_id) : "",
      previous_connection_id: isSet(object.previous_connection_id)
        ? globalThis.String(object.previous_connection_id)
        : "",
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delay_period: isSet(object.delay_period) ? globalThis.String(object.delay_period) : "0",
      counterparty_versions: globalThis.Array.isArray(object?.counterparty_versions)
        ? object.counterparty_versions.map((e: any) => Version.fromJSON(e))
        : [],
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(0),
      proof_client: isSet(object.proof_client) ? bytesFromBase64(object.proof_client) : new Uint8Array(0),
      proof_consensus: isSet(object.proof_consensus) ? bytesFromBase64(object.proof_consensus) : new Uint8Array(0),
      consensus_height: isSet(object.consensus_height) ? Height.fromJSON(object.consensus_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
      host_consensus_state_proof: isSet(object.host_consensus_state_proof)
        ? bytesFromBase64(object.host_consensus_state_proof)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgConnectionOpenTry): unknown {
    const obj: any = {};
    if (message.client_id !== undefined) {
      obj.client_id = message.client_id;
    }
    if (message.previous_connection_id !== undefined) {
      obj.previous_connection_id = message.previous_connection_id;
    }
    if (message.client_state !== undefined) {
      obj.client_state = Any.toJSON(message.client_state);
    }
    if (message.counterparty !== undefined) {
      obj.counterparty = Counterparty.toJSON(message.counterparty);
    }
    if (message.delay_period !== undefined) {
      obj.delay_period = message.delay_period;
    }
    if (message.counterparty_versions?.length) {
      obj.counterparty_versions = message.counterparty_versions.map((e) => Version.toJSON(e));
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.proof_init !== undefined) {
      obj.proof_init = base64FromBytes(message.proof_init);
    }
    if (message.proof_client !== undefined) {
      obj.proof_client = base64FromBytes(message.proof_client);
    }
    if (message.proof_consensus !== undefined) {
      obj.proof_consensus = base64FromBytes(message.proof_consensus);
    }
    if (message.consensus_height !== undefined) {
      obj.consensus_height = Height.toJSON(message.consensus_height);
    }
    if (message.signer !== undefined) {
      obj.signer = message.signer;
    }
    if (message.host_consensus_state_proof !== undefined) {
      obj.host_consensus_state_proof = base64FromBytes(message.host_consensus_state_proof);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    return MsgConnectionOpenTry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.client_id = object.client_id ?? "";
    message.previous_connection_id = object.previous_connection_id ?? "";
    message.client_state = (object.client_state !== undefined && object.client_state !== null)
      ? Any.fromPartial(object.client_state)
      : undefined;
    message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
      ? Counterparty.fromPartial(object.counterparty)
      : undefined;
    message.delay_period = object.delay_period ?? "0";
    message.counterparty_versions = object.counterparty_versions?.map((e) => Version.fromPartial(e)) || [];
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.proof_init = object.proof_init ?? new Uint8Array(0);
    message.proof_client = object.proof_client ?? new Uint8Array(0);
    message.proof_consensus = object.proof_consensus ?? new Uint8Array(0);
    message.consensus_height = (object.consensus_height !== undefined && object.consensus_height !== null)
      ? Height.fromPartial(object.consensus_height)
      : undefined;
    message.signer = object.signer ?? "";
    message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}

export const MsgConnectionOpenTryResponse = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenTryResponse" as const,

  encode(_: MsgConnectionOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();
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

  fromJSON(_: any): MsgConnectionOpenTryResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse {
    return MsgConnectionOpenTryResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connection_id: "",
    counterparty_connection_id: "",
    version: undefined,
    client_state: undefined,
    proof_height: undefined,
    proof_try: new Uint8Array(0),
    proof_client: new Uint8Array(0),
    proof_consensus: new Uint8Array(0),
    consensus_height: undefined,
    signer: "",
    host_consensus_state_proof: new Uint8Array(0),
  };
}

export const MsgConnectionOpenAck = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenAck" as const,

  encode(message: MsgConnectionOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.counterparty_connection_id !== "") {
      writer.uint32(18).string(message.counterparty_connection_id);
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
    }
    if (message.proof_try.length !== 0) {
      writer.uint32(50).bytes(message.proof_try);
    }
    if (message.proof_client.length !== 0) {
      writer.uint32(58).bytes(message.proof_client);
    }
    if (message.proof_consensus.length !== 0) {
      writer.uint32(66).bytes(message.proof_consensus);
    }
    if (message.consensus_height !== undefined) {
      Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    if (message.host_consensus_state_proof.length !== 0) {
      writer.uint32(90).bytes(message.host_consensus_state_proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.counterparty_connection_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = Version.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.client_state = Any.decode(reader, reader.uint32());
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

          message.proof_try = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proof_client = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.proof_consensus = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.consensus_height = Height.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.host_consensus_state_proof = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConnectionOpenAck {
    return {
      connection_id: isSet(object.connection_id) ? globalThis.String(object.connection_id) : "",
      counterparty_connection_id: isSet(object.counterparty_connection_id)
        ? globalThis.String(object.counterparty_connection_id)
        : "",
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      proof_try: isSet(object.proof_try) ? bytesFromBase64(object.proof_try) : new Uint8Array(0),
      proof_client: isSet(object.proof_client) ? bytesFromBase64(object.proof_client) : new Uint8Array(0),
      proof_consensus: isSet(object.proof_consensus) ? bytesFromBase64(object.proof_consensus) : new Uint8Array(0),
      consensus_height: isSet(object.consensus_height) ? Height.fromJSON(object.consensus_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
      host_consensus_state_proof: isSet(object.host_consensus_state_proof)
        ? bytesFromBase64(object.host_consensus_state_proof)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgConnectionOpenAck): unknown {
    const obj: any = {};
    if (message.connection_id !== undefined) {
      obj.connection_id = message.connection_id;
    }
    if (message.counterparty_connection_id !== undefined) {
      obj.counterparty_connection_id = message.counterparty_connection_id;
    }
    if (message.version !== undefined) {
      obj.version = Version.toJSON(message.version);
    }
    if (message.client_state !== undefined) {
      obj.client_state = Any.toJSON(message.client_state);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.proof_try !== undefined) {
      obj.proof_try = base64FromBytes(message.proof_try);
    }
    if (message.proof_client !== undefined) {
      obj.proof_client = base64FromBytes(message.proof_client);
    }
    if (message.proof_consensus !== undefined) {
      obj.proof_consensus = base64FromBytes(message.proof_consensus);
    }
    if (message.consensus_height !== undefined) {
      obj.consensus_height = Height.toJSON(message.consensus_height);
    }
    if (message.signer !== undefined) {
      obj.signer = message.signer;
    }
    if (message.host_consensus_state_proof !== undefined) {
      obj.host_consensus_state_proof = base64FromBytes(message.host_consensus_state_proof);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    return MsgConnectionOpenAck.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connection_id = object.connection_id ?? "";
    message.counterparty_connection_id = object.counterparty_connection_id ?? "";
    message.version = (object.version !== undefined && object.version !== null)
      ? Version.fromPartial(object.version)
      : undefined;
    message.client_state = (object.client_state !== undefined && object.client_state !== null)
      ? Any.fromPartial(object.client_state)
      : undefined;
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.proof_try = object.proof_try ?? new Uint8Array(0);
    message.proof_client = object.proof_client ?? new Uint8Array(0);
    message.proof_consensus = object.proof_consensus ?? new Uint8Array(0);
    message.consensus_height = (object.consensus_height !== undefined && object.consensus_height !== null)
      ? Height.fromPartial(object.consensus_height)
      : undefined;
    message.signer = object.signer ?? "";
    message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}

export const MsgConnectionOpenAckResponse = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenAckResponse" as const,

  encode(_: MsgConnectionOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();
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

  fromJSON(_: any): MsgConnectionOpenAckResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse {
    return MsgConnectionOpenAckResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return { connection_id: "", proof_ack: new Uint8Array(0), proof_height: undefined, signer: "" };
}

export const MsgConnectionOpenConfirm = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenConfirm" as const,

  encode(message: MsgConnectionOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.proof_ack.length !== 0) {
      writer.uint32(18).bytes(message.proof_ack);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof_ack = reader.bytes();
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

  fromJSON(object: any): MsgConnectionOpenConfirm {
    return {
      connection_id: isSet(object.connection_id) ? globalThis.String(object.connection_id) : "",
      proof_ack: isSet(object.proof_ack) ? bytesFromBase64(object.proof_ack) : new Uint8Array(0),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
    };
  },

  toJSON(message: MsgConnectionOpenConfirm): unknown {
    const obj: any = {};
    if (message.connection_id !== undefined) {
      obj.connection_id = message.connection_id;
    }
    if (message.proof_ack !== undefined) {
      obj.proof_ack = base64FromBytes(message.proof_ack);
    }
    if (message.proof_height !== undefined) {
      obj.proof_height = Height.toJSON(message.proof_height);
    }
    if (message.signer !== undefined) {
      obj.signer = message.signer;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm {
    return MsgConnectionOpenConfirm.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connection_id = object.connection_id ?? "";
    message.proof_ack = object.proof_ack ?? new Uint8Array(0);
    message.proof_height = (object.proof_height !== undefined && object.proof_height !== null)
      ? Height.fromPartial(object.proof_height)
      : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}

export const MsgConnectionOpenConfirmResponse = {
  $type: "ibc.core.connection.v1.MsgConnectionOpenConfirmResponse" as const,

  encode(_: MsgConnectionOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();
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

  fromJSON(_: any): MsgConnectionOpenConfirmResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse {
    return MsgConnectionOpenConfirmResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { signer: "", params: undefined };
}

export const MsgUpdateParams = {
  $type: "ibc.core.connection.v1.MsgUpdateParams" as const,

  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
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

          message.signer = reader.string();
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
      signer: isSet(object.signer) ? globalThis.String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.signer !== undefined) {
      obj.signer = message.signer;
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
    message.signer = object.signer ?? "";
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
  $type: "ibc.core.connection.v1.MsgUpdateParamsResponse" as const,

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

/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  ConnectionOpenInit(
    request: DeepPartial<MsgConnectionOpenInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  ConnectionOpenTry(
    request: DeepPartial<MsgConnectionOpenTry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  ConnectionOpenAck(
    request: DeepPartial<MsgConnectionOpenAck>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  ConnectionOpenConfirm(
    request: DeepPartial<MsgConnectionOpenConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenConfirmResponse>;
  /**
   * UpdateConnectionParams defines a rpc handler method for
   * MsgUpdateParams.
   */
  UpdateConnectionParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
    this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
    this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
    this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
    this.UpdateConnectionParams = this.UpdateConnectionParams.bind(this);
  }

  ConnectionOpenInit(
    request: DeepPartial<MsgConnectionOpenInit>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenInitResponse> {
    return this.rpc.unary(MsgConnectionOpenInitDesc, MsgConnectionOpenInit.fromPartial(request), metadata);
  }

  ConnectionOpenTry(
    request: DeepPartial<MsgConnectionOpenTry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenTryResponse> {
    return this.rpc.unary(MsgConnectionOpenTryDesc, MsgConnectionOpenTry.fromPartial(request), metadata);
  }

  ConnectionOpenAck(
    request: DeepPartial<MsgConnectionOpenAck>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenAckResponse> {
    return this.rpc.unary(MsgConnectionOpenAckDesc, MsgConnectionOpenAck.fromPartial(request), metadata);
  }

  ConnectionOpenConfirm(
    request: DeepPartial<MsgConnectionOpenConfirm>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConnectionOpenConfirmResponse> {
    return this.rpc.unary(MsgConnectionOpenConfirmDesc, MsgConnectionOpenConfirm.fromPartial(request), metadata);
  }

  UpdateConnectionParams(
    request: DeepPartial<MsgUpdateParams>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateConnectionParamsDesc, MsgUpdateParams.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "ibc.core.connection.v1.Msg" };

export const MsgConnectionOpenInitDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenInit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgConnectionOpenInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgConnectionOpenInitResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgConnectionOpenTryDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenTry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgConnectionOpenTry.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgConnectionOpenTryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgConnectionOpenAckDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenAck",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgConnectionOpenAck.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgConnectionOpenAckResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgConnectionOpenConfirmDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionOpenConfirm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgConnectionOpenConfirm.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgConnectionOpenConfirmResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateConnectionParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateConnectionParams",
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
