/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ResponseBeginBlock, ResponseDeliverTx, ResponseEndBlock } from "../abci/types";
import { ConsensusParams } from "../types/params";
import { BlockID } from "../types/types";
import { ValidatorSet } from "../types/validator";
import { Consensus } from "../version/types";

/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
  deliverTxs: ResponseDeliverTx[];
  endBlock: ResponseEndBlock | undefined;
  beginBlock: ResponseBeginBlock | undefined;
}

/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
  validatorSet: ValidatorSet | undefined;
  lastHeightChanged: string;
}

/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
  consensusParams: ConsensusParams | undefined;
  lastHeightChanged: string;
}

export interface ABCIResponsesInfo {
  abciResponses: ABCIResponses | undefined;
  height: string;
}

export interface Version {
  consensus: Consensus | undefined;
  software: string;
}

export interface State {
  version:
    | Version
    | undefined;
  /** immutable */
  chainId: string;
  initialHeight: string;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  lastBlockHeight: string;
  lastBlockId: BlockID | undefined;
  lastBlockTime:
    | Date
    | undefined;
  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   */
  nextValidators: ValidatorSet | undefined;
  validators: ValidatorSet | undefined;
  lastValidators: ValidatorSet | undefined;
  lastHeightValidatorsChanged: string;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensusParams: ConsensusParams | undefined;
  lastHeightConsensusParamsChanged: string;
  /** Merkle root of the results from executing prev block */
  lastResultsHash: Uint8Array;
  /** the latest AppHash we've received from calling abci.Commit() */
  appHash: Uint8Array;
}

function createBaseABCIResponses(): ABCIResponses {
  return { deliverTxs: [], endBlock: undefined, beginBlock: undefined };
}

export const ABCIResponses = {
  encode(message: ABCIResponses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deliverTxs) {
      ResponseDeliverTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deliverTxs.push(ResponseDeliverTx.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ABCIResponses {
    return {
      deliverTxs: Array.isArray(object?.deliverTxs)
        ? object.deliverTxs.map((e: any) => ResponseDeliverTx.fromJSON(e))
        : [],
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined,
    };
  },

  toJSON(message: ABCIResponses): unknown {
    const obj: any = {};
    if (message.deliverTxs?.length) {
      obj.deliverTxs = message.deliverTxs.map((e) => ResponseDeliverTx.toJSON(e));
    }
    if (message.endBlock !== undefined) {
      obj.endBlock = ResponseEndBlock.toJSON(message.endBlock);
    }
    if (message.beginBlock !== undefined) {
      obj.beginBlock = ResponseBeginBlock.toJSON(message.beginBlock);
    }
    return obj;
  },

  create(base?: DeepPartial<ABCIResponses>): ABCIResponses {
    return ABCIResponses.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ABCIResponses>): ABCIResponses {
    const message = createBaseABCIResponses();
    message.deliverTxs = object.deliverTxs?.map((e) => ResponseDeliverTx.fromPartial(e)) || [];
    message.endBlock = (object.endBlock !== undefined && object.endBlock !== null)
      ? ResponseEndBlock.fromPartial(object.endBlock)
      : undefined;
    message.beginBlock = (object.beginBlock !== undefined && object.beginBlock !== null)
      ? ResponseBeginBlock.fromPartial(object.beginBlock)
      : undefined;
    return message;
  },
};

function createBaseValidatorsInfo(): ValidatorsInfo {
  return { validatorSet: undefined, lastHeightChanged: "0" };
}

export const ValidatorsInfo = {
  encode(message: ValidatorsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastHeightChanged !== "0") {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lastHeightChanged = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorsInfo {
    return {
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? String(object.lastHeightChanged) : "0",
    };
  },

  toJSON(message: ValidatorsInfo): unknown {
    const obj: any = {};
    if (message.validatorSet !== undefined) {
      obj.validatorSet = ValidatorSet.toJSON(message.validatorSet);
    }
    if (message.lastHeightChanged !== "0") {
      obj.lastHeightChanged = message.lastHeightChanged;
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorsInfo>): ValidatorsInfo {
    return ValidatorsInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ValidatorsInfo>): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
      ? ValidatorSet.fromPartial(object.validatorSet)
      : undefined;
    message.lastHeightChanged = object.lastHeightChanged ?? "0";
    return message;
  },
};

function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
  return { consensusParams: undefined, lastHeightChanged: "0" };
}

export const ConsensusParamsInfo = {
  encode(message: ConsensusParamsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastHeightChanged !== "0") {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParamsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lastHeightChanged = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusParamsInfo {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? String(object.lastHeightChanged) : "0",
    };
  },

  toJSON(message: ConsensusParamsInfo): unknown {
    const obj: any = {};
    if (message.consensusParams !== undefined) {
      obj.consensusParams = ConsensusParams.toJSON(message.consensusParams);
    }
    if (message.lastHeightChanged !== "0") {
      obj.lastHeightChanged = message.lastHeightChanged;
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo {
    return ConsensusParamsInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
      ? ConsensusParams.fromPartial(object.consensusParams)
      : undefined;
    message.lastHeightChanged = object.lastHeightChanged ?? "0";
    return message;
  },
};

function createBaseABCIResponsesInfo(): ABCIResponsesInfo {
  return { abciResponses: undefined, height: "0" };
}

export const ABCIResponsesInfo = {
  encode(message: ABCIResponsesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abciResponses !== undefined) {
      ABCIResponses.encode(message.abciResponses, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== "0") {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponsesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.abciResponses = ABCIResponses.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): ABCIResponsesInfo {
    return {
      abciResponses: isSet(object.abciResponses) ? ABCIResponses.fromJSON(object.abciResponses) : undefined,
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: ABCIResponsesInfo): unknown {
    const obj: any = {};
    if (message.abciResponses !== undefined) {
      obj.abciResponses = ABCIResponses.toJSON(message.abciResponses);
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<ABCIResponsesInfo>): ABCIResponsesInfo {
    return ABCIResponsesInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ABCIResponsesInfo>): ABCIResponsesInfo {
    const message = createBaseABCIResponsesInfo();
    message.abciResponses = (object.abciResponses !== undefined && object.abciResponses !== null)
      ? ABCIResponses.fromPartial(object.abciResponses)
      : undefined;
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseVersion(): Version {
  return { consensus: undefined, software: "" };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.consensus = Consensus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.software = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
      software: isSet(object.software) ? String(object.software) : "",
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.consensus !== undefined) {
      obj.consensus = Consensus.toJSON(message.consensus);
    }
    if (message.software !== "") {
      obj.software = message.software;
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.consensus = (object.consensus !== undefined && object.consensus !== null)
      ? Consensus.fromPartial(object.consensus)
      : undefined;
    message.software = object.software ?? "";
    return message;
  },
};

function createBaseState(): State {
  return {
    version: undefined,
    chainId: "",
    initialHeight: "0",
    lastBlockHeight: "0",
    lastBlockId: undefined,
    lastBlockTime: undefined,
    nextValidators: undefined,
    validators: undefined,
    lastValidators: undefined,
    lastHeightValidatorsChanged: "0",
    consensusParams: undefined,
    lastHeightConsensusParamsChanged: "0",
    lastResultsHash: new Uint8Array(0),
    appHash: new Uint8Array(0),
  };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.initialHeight !== "0") {
      writer.uint32(112).int64(message.initialHeight);
    }
    if (message.lastBlockHeight !== "0") {
      writer.uint32(24).int64(message.lastBlockHeight);
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.nextValidators !== undefined) {
      ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
    }
    if (message.validators !== undefined) {
      ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastValidators !== undefined) {
      ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastHeightValidatorsChanged !== "0") {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastHeightConsensusParamsChanged !== "0") {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = Version.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.initialHeight = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lastBlockHeight = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.nextValidators = ValidatorSet.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.validators = ValidatorSet.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.lastValidators = ValidatorSet.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.lastHeightValidatorsChanged = longToString(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.lastHeightConsensusParamsChanged = longToString(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastResultsHash = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.appHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      initialHeight: isSet(object.initialHeight) ? String(object.initialHeight) : "0",
      lastBlockHeight: isSet(object.lastBlockHeight) ? String(object.lastBlockHeight) : "0",
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged)
        ? String(object.lastHeightValidatorsChanged)
        : "0",
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged)
        ? String(object.lastHeightConsensusParamsChanged)
        : "0",
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(0),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.version !== undefined) {
      obj.version = Version.toJSON(message.version);
    }
    if (message.chainId !== "") {
      obj.chainId = message.chainId;
    }
    if (message.initialHeight !== "0") {
      obj.initialHeight = message.initialHeight;
    }
    if (message.lastBlockHeight !== "0") {
      obj.lastBlockHeight = message.lastBlockHeight;
    }
    if (message.lastBlockId !== undefined) {
      obj.lastBlockId = BlockID.toJSON(message.lastBlockId);
    }
    if (message.lastBlockTime !== undefined) {
      obj.lastBlockTime = message.lastBlockTime.toISOString();
    }
    if (message.nextValidators !== undefined) {
      obj.nextValidators = ValidatorSet.toJSON(message.nextValidators);
    }
    if (message.validators !== undefined) {
      obj.validators = ValidatorSet.toJSON(message.validators);
    }
    if (message.lastValidators !== undefined) {
      obj.lastValidators = ValidatorSet.toJSON(message.lastValidators);
    }
    if (message.lastHeightValidatorsChanged !== "0") {
      obj.lastHeightValidatorsChanged = message.lastHeightValidatorsChanged;
    }
    if (message.consensusParams !== undefined) {
      obj.consensusParams = ConsensusParams.toJSON(message.consensusParams);
    }
    if (message.lastHeightConsensusParamsChanged !== "0") {
      obj.lastHeightConsensusParamsChanged = message.lastHeightConsensusParamsChanged;
    }
    if (message.lastResultsHash.length !== 0) {
      obj.lastResultsHash = base64FromBytes(message.lastResultsHash);
    }
    if (message.appHash.length !== 0) {
      obj.appHash = base64FromBytes(message.appHash);
    }
    return obj;
  },

  create(base?: DeepPartial<State>): State {
    return State.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = createBaseState();
    message.version = (object.version !== undefined && object.version !== null)
      ? Version.fromPartial(object.version)
      : undefined;
    message.chainId = object.chainId ?? "";
    message.initialHeight = object.initialHeight ?? "0";
    message.lastBlockHeight = object.lastBlockHeight ?? "0";
    message.lastBlockId = (object.lastBlockId !== undefined && object.lastBlockId !== null)
      ? BlockID.fromPartial(object.lastBlockId)
      : undefined;
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    message.nextValidators = (object.nextValidators !== undefined && object.nextValidators !== null)
      ? ValidatorSet.fromPartial(object.nextValidators)
      : undefined;
    message.validators = (object.validators !== undefined && object.validators !== null)
      ? ValidatorSet.fromPartial(object.validators)
      : undefined;
    message.lastValidators = (object.lastValidators !== undefined && object.lastValidators !== null)
      ? ValidatorSet.fromPartial(object.lastValidators)
      : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged ?? "0";
    message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
      ? ConsensusParams.fromPartial(object.consensusParams)
      : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged ?? "0";
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array(0);
    message.appHash = object.appHash ?? new Uint8Array(0);
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
