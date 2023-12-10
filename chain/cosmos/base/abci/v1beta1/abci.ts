/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Block } from "../../../../tendermint/types/block";

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height: string;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gas_wanted: string;
  /** Amount of gas consumed by transaction. */
  gas_used: string;
  /** The request transaction bytes. */
  tx:
    | Any
    | undefined;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: Event[];
}

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msg_index: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key: string;
  value: string;
}

/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gas_wanted: string;
  /** GasUsed is the amount of gas actually consumed. */
  gas_used: string;
}

/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   *
   * @deprecated
   */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msg_responses: Any[];
}

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gas_info: GasInfo | undefined;
  result: Result | undefined;
}

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @deprecated
 */
export interface MsgData {
  msg_type: string;
  data: Uint8Array;
}

/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  /**
   * data field is deprecated and not populated.
   *
   * @deprecated
   */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msg_responses: Any[];
}

/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  total_count: string;
  /** Count of txs in current page */
  count: string;
  /** Index of current page, start from 1 */
  page_number: string;
  /** Count of total pages */
  page_total: string;
  /** Max count txs per page */
  limit: string;
  /** List of txs in current page */
  txs: TxResponse[];
}

/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResult {
  /** Count of all blocks */
  total_count: string;
  /** Count of blocks in current page */
  count: string;
  /** Index of current page, start from 1 */
  page_number: string;
  /** Count of total pages */
  page_total: string;
  /** Max count blocks per page */
  limit: string;
  /** List of blocks in current page */
  blocks: Block[];
}

function createBaseTxResponse(): TxResponse {
  return {
    height: "0",
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    raw_log: "",
    logs: [],
    info: "",
    gas_wanted: "0",
    gas_used: "0",
    tx: undefined,
    timestamp: "",
    events: [],
  };
}

export const TxResponse = {
  $type: "cosmos.base.abci.v1beta1.TxResponse" as const,

  encode(message: TxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.raw_log !== "") {
      writer.uint32(50).string(message.raw_log);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (message.gas_wanted !== "0") {
      writer.uint32(72).int64(message.gas_wanted);
    }
    if (message.gas_used !== "0") {
      writer.uint32(80).int64(message.gas_used);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
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

          message.txhash = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codespace = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.raw_log = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.info = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.gas_wanted = longToString(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.gas_used = longToString(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tx = Any.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.timestamp = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxResponse {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      txhash: isSet(object.txhash) ? globalThis.String(object.txhash) : "",
      codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : "",
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      data: isSet(object.data) ? globalThis.String(object.data) : "",
      raw_log: isSet(object.raw_log) ? globalThis.String(object.raw_log) : "",
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? globalThis.String(object.info) : "",
      gas_wanted: isSet(object.gas_wanted) ? globalThis.String(object.gas_wanted) : "0",
      gas_used: isSet(object.gas_used) ? globalThis.String(object.gas_used) : "0",
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "",
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.txhash !== "") {
      obj.txhash = message.txhash;
    }
    if (message.codespace !== "") {
      obj.codespace = message.codespace;
    }
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.raw_log !== "") {
      obj.raw_log = message.raw_log;
    }
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => ABCIMessageLog.toJSON(e));
    }
    if (message.info !== "") {
      obj.info = message.info;
    }
    if (message.gas_wanted !== "0") {
      obj.gas_wanted = message.gas_wanted;
    }
    if (message.gas_used !== "0") {
      obj.gas_used = message.gas_used;
    }
    if (message.tx !== undefined) {
      obj.tx = Any.toJSON(message.tx);
    }
    if (message.timestamp !== "") {
      obj.timestamp = message.timestamp;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TxResponse>): TxResponse {
    return TxResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    message.height = object.height ?? "0";
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.raw_log = object.raw_log ?? "";
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    message.gas_wanted = object.gas_wanted ?? "0";
    message.gas_used = object.gas_used ?? "0";
    message.tx = (object.tx !== undefined && object.tx !== null) ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseABCIMessageLog(): ABCIMessageLog {
  return { msg_index: 0, log: "", events: [] };
}

export const ABCIMessageLog = {
  $type: "cosmos.base.abci.v1beta1.ABCIMessageLog" as const,

  encode(message: ABCIMessageLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg_index !== 0) {
      writer.uint32(8).uint32(message.msg_index);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msg_index = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.log = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(StringEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ABCIMessageLog {
    return {
      msg_index: isSet(object.msg_index) ? globalThis.Number(object.msg_index) : 0,
      log: isSet(object.log) ? globalThis.String(object.log) : "",
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromJSON(e)) : [],
    };
  },

  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    if (message.msg_index !== 0) {
      obj.msg_index = Math.round(message.msg_index);
    }
    if (message.log !== "") {
      obj.log = message.log;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => StringEvent.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    return ABCIMessageLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msg_index = object.msg_index ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => StringEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStringEvent(): StringEvent {
  return { type: "", attributes: [] };
}

export const StringEvent = {
  $type: "cosmos.base.abci.v1beta1.StringEvent" as const,

  encode(message: StringEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringEvent {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<StringEvent>): StringEvent {
    return StringEvent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { key: "", value: "" };
}

export const Attribute = {
  $type: "cosmos.base.abci.v1beta1.Attribute" as const,

  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<Attribute>): Attribute {
    return Attribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGasInfo(): GasInfo {
  return { gas_wanted: "0", gas_used: "0" };
}

export const GasInfo = {
  $type: "cosmos.base.abci.v1beta1.GasInfo" as const,

  encode(message: GasInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gas_wanted !== "0") {
      writer.uint32(8).uint64(message.gas_wanted);
    }
    if (message.gas_used !== "0") {
      writer.uint32(16).uint64(message.gas_used);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gas_wanted = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gas_used = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GasInfo {
    return {
      gas_wanted: isSet(object.gas_wanted) ? globalThis.String(object.gas_wanted) : "0",
      gas_used: isSet(object.gas_used) ? globalThis.String(object.gas_used) : "0",
    };
  },

  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    if (message.gas_wanted !== "0") {
      obj.gas_wanted = message.gas_wanted;
    }
    if (message.gas_used !== "0") {
      obj.gas_used = message.gas_used;
    }
    return obj;
  },

  create(base?: DeepPartial<GasInfo>): GasInfo {
    return GasInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    message.gas_wanted = object.gas_wanted ?? "0";
    message.gas_used = object.gas_used ?? "0";
    return message;
  },
};

function createBaseResult(): Result {
  return { data: new Uint8Array(0), log: "", events: [], msg_responses: [] };
}

export const Result = {
  $type: "cosmos.base.abci.v1beta1.Result" as const,

  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msg_responses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
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

          message.log = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.msg_responses.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Result {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      log: isSet(object.log) ? globalThis.String(object.log) : "",
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      msg_responses: globalThis.Array.isArray(object?.msg_responses)
        ? object.msg_responses.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.log !== "") {
      obj.log = message.log;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    if (message.msg_responses?.length) {
      obj.msg_responses = message.msg_responses.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Result>): Result {
    return Result.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array(0);
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.msg_responses = object.msg_responses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSimulationResponse(): SimulationResponse {
  return { gas_info: undefined, result: undefined };
}

export const SimulationResponse = {
  $type: "cosmos.base.abci.v1beta1.SimulationResponse" as const,

  encode(message: SimulationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gas_info !== undefined) {
      GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gas_info = GasInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = Result.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulationResponse {
    return {
      gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    if (message.gas_info !== undefined) {
      obj.gas_info = GasInfo.toJSON(message.gas_info);
    }
    if (message.result !== undefined) {
      obj.result = Result.toJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<SimulationResponse>): SimulationResponse {
    return SimulationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    message.gas_info = (object.gas_info !== undefined && object.gas_info !== null)
      ? GasInfo.fromPartial(object.gas_info)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseMsgData(): MsgData {
  return { msg_type: "", data: new Uint8Array(0) };
}

export const MsgData = {
  $type: "cosmos.base.abci.v1beta1.MsgData" as const,

  encode(message: MsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg_type !== "") {
      writer.uint32(10).string(message.msg_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msg_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgData {
    return {
      msg_type: isSet(object.msg_type) ? globalThis.String(object.msg_type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgData): unknown {
    const obj: any = {};
    if (message.msg_type !== "") {
      obj.msg_type = message.msg_type;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgData>): MsgData {
    return MsgData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msg_type = object.msg_type ?? "";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTxMsgData(): TxMsgData {
  return { data: [], msg_responses: [] };
}

export const TxMsgData = {
  $type: "cosmos.base.abci.v1beta1.TxMsgData" as const,

  encode(message: TxMsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msg_responses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(MsgData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg_responses.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxMsgData {
    return {
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromJSON(e)) : [],
      msg_responses: globalThis.Array.isArray(object?.msg_responses)
        ? object.msg_responses.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TxMsgData): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => MsgData.toJSON(e));
    }
    if (message.msg_responses?.length) {
      obj.msg_responses = message.msg_responses.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TxMsgData>): TxMsgData {
    return TxMsgData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
    message.msg_responses = object.msg_responses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchTxsResult(): SearchTxsResult {
  return { total_count: "0", count: "0", page_number: "0", page_total: "0", limit: "0", txs: [] };
}

export const SearchTxsResult = {
  $type: "cosmos.base.abci.v1beta1.SearchTxsResult" as const,

  encode(message: SearchTxsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_count !== "0") {
      writer.uint32(8).uint64(message.total_count);
    }
    if (message.count !== "0") {
      writer.uint32(16).uint64(message.count);
    }
    if (message.page_number !== "0") {
      writer.uint32(24).uint64(message.page_number);
    }
    if (message.page_total !== "0") {
      writer.uint32(32).uint64(message.page_total);
    }
    if (message.limit !== "0") {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total_count = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_number = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page_total = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.limit = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchTxsResult {
    return {
      total_count: isSet(object.total_count) ? globalThis.String(object.total_count) : "0",
      count: isSet(object.count) ? globalThis.String(object.count) : "0",
      page_number: isSet(object.page_number) ? globalThis.String(object.page_number) : "0",
      page_total: isSet(object.page_total) ? globalThis.String(object.page_total) : "0",
      limit: isSet(object.limit) ? globalThis.String(object.limit) : "0",
      txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    if (message.total_count !== "0") {
      obj.total_count = message.total_count;
    }
    if (message.count !== "0") {
      obj.count = message.count;
    }
    if (message.page_number !== "0") {
      obj.page_number = message.page_number;
    }
    if (message.page_total !== "0") {
      obj.page_total = message.page_total;
    }
    if (message.limit !== "0") {
      obj.limit = message.limit;
    }
    if (message.txs?.length) {
      obj.txs = message.txs.map((e) => TxResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SearchTxsResult>): SearchTxsResult {
    return SearchTxsResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    message.total_count = object.total_count ?? "0";
    message.count = object.count ?? "0";
    message.page_number = object.page_number ?? "0";
    message.page_total = object.page_total ?? "0";
    message.limit = object.limit ?? "0";
    message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchBlocksResult(): SearchBlocksResult {
  return { total_count: "0", count: "0", page_number: "0", page_total: "0", limit: "0", blocks: [] };
}

export const SearchBlocksResult = {
  $type: "cosmos.base.abci.v1beta1.SearchBlocksResult" as const,

  encode(message: SearchBlocksResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_count !== "0") {
      writer.uint32(8).int64(message.total_count);
    }
    if (message.count !== "0") {
      writer.uint32(16).int64(message.count);
    }
    if (message.page_number !== "0") {
      writer.uint32(24).int64(message.page_number);
    }
    if (message.page_total !== "0") {
      writer.uint32(32).int64(message.page_total);
    }
    if (message.limit !== "0") {
      writer.uint32(40).int64(message.limit);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchBlocksResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchBlocksResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total_count = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page_number = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page_total = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.limit = longToString(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.blocks.push(Block.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchBlocksResult {
    return {
      total_count: isSet(object.total_count) ? globalThis.String(object.total_count) : "0",
      count: isSet(object.count) ? globalThis.String(object.count) : "0",
      page_number: isSet(object.page_number) ? globalThis.String(object.page_number) : "0",
      page_total: isSet(object.page_total) ? globalThis.String(object.page_total) : "0",
      limit: isSet(object.limit) ? globalThis.String(object.limit) : "0",
      blocks: globalThis.Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchBlocksResult): unknown {
    const obj: any = {};
    if (message.total_count !== "0") {
      obj.total_count = message.total_count;
    }
    if (message.count !== "0") {
      obj.count = message.count;
    }
    if (message.page_number !== "0") {
      obj.page_number = message.page_number;
    }
    if (message.page_total !== "0") {
      obj.page_total = message.page_total;
    }
    if (message.limit !== "0") {
      obj.limit = message.limit;
    }
    if (message.blocks?.length) {
      obj.blocks = message.blocks.map((e) => Block.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SearchBlocksResult>): SearchBlocksResult {
    return SearchBlocksResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SearchBlocksResult>): SearchBlocksResult {
    const message = createBaseSearchBlocksResult();
    message.total_count = object.total_count ?? "0";
    message.count = object.count ?? "0";
    message.page_number = object.page_number ?? "0";
    message.page_total = object.page_total ?? "0";
    message.limit = object.limit ?? "0";
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
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
