/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/** AccessType permission types */
export enum AccessType {
  /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
  ACCESS_TYPE_UNSPECIFIED = 0,
  /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
  ACCESS_TYPE_NOBODY = 1,
  /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
  ACCESS_TYPE_EVERYBODY = 3,
  /** ACCESS_TYPE_ANY_OF_ADDRESSES - AccessTypeAnyOfAddresses allow any of the addresses */
  ACCESS_TYPE_ANY_OF_ADDRESSES = 4,
  UNRECOGNIZED = -1,
}

export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case 4:
    case "ACCESS_TYPE_ANY_OF_ADDRESSES":
      return AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}

export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return "ACCESS_TYPE_ANY_OF_ADDRESSES";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** ContractCodeHistoryOperationType actions that caused a code change */
export enum ContractCodeHistoryOperationType {
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
  /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
  CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
  UNRECOGNIZED = -1,
}

export function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}

export function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    case ContractCodeHistoryOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** AccessTypeParam */
export interface AccessTypeParam {
  value: AccessType;
}

/** AccessConfig access control type. */
export interface AccessConfig {
  permission: AccessType;
  addresses: string[];
}

/** Params defines the set of wasm parameters. */
export interface Params {
  codeUploadAccess: AccessConfig | undefined;
  instantiateDefaultPermission: AccessType;
}

/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
  /** InstantiateConfig access control to apply on contract creation, optional */
  instantiateConfig: AccessConfig | undefined;
}

/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
  /** CodeID is the reference to the stored Wasm code */
  codeId: string;
  /** Creator address who initially instantiated the contract */
  creator: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a contract instance. */
  label: string;
  /** Created Tx position when the contract was instantiated. */
  created: AbsoluteTxPosition | undefined;
  ibcPortId: string;
  /**
   * Extension is an extension point to store custom metadata within the
   * persistence model.
   */
  extension: Any | undefined;
}

/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
  operation: ContractCodeHistoryOperationType;
  /** CodeID is the reference to the stored WASM code */
  codeId: string;
  /** Updated Tx position when the operation was executed. */
  updated: AbsoluteTxPosition | undefined;
  msg: Uint8Array;
}

/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: string;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */
  txIndex: string;
}

/** Model is a struct that holds a KV pair */
export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  key: Uint8Array;
  /** base64-encode raw value */
  value: Uint8Array;
}

function createBaseAccessTypeParam(): AccessTypeParam {
  return { value: 0 };
}

export const AccessTypeParam = {
  $type: "cosmwasm.wasm.v1.AccessTypeParam" as const,

  encode(message: AccessTypeParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTypeParam {
    return { value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0 };
  },

  toJSON(message: AccessTypeParam): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = accessTypeToJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<AccessTypeParam>): AccessTypeParam {
    return AccessTypeParam.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAccessConfig(): AccessConfig {
  return { permission: 0, addresses: [] };
}

export const AccessConfig = {
  $type: "cosmwasm.wasm.v1.AccessConfig" as const,

  encode(message: AccessConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.permission = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessConfig {
    return {
      permission: isSet(object.permission) ? accessTypeFromJSON(object.permission) : 0,
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AccessConfig): unknown {
    const obj: any = {};
    if (message.permission !== 0) {
      obj.permission = accessTypeToJSON(message.permission);
    }
    if (message.addresses?.length) {
      obj.addresses = message.addresses;
    }
    return obj;
  },

  create(base?: DeepPartial<AccessConfig>): AccessConfig {
    return AccessConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessConfig>): AccessConfig {
    const message = createBaseAccessConfig();
    message.permission = object.permission ?? 0;
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return { codeUploadAccess: undefined, instantiateDefaultPermission: 0 };
}

export const Params = {
  $type: "cosmwasm.wasm.v1.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeUploadAccess !== undefined) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.instantiateDefaultPermission = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      codeUploadAccess: isSet(object.codeUploadAccess) ? AccessConfig.fromJSON(object.codeUploadAccess) : undefined,
      instantiateDefaultPermission: isSet(object.instantiateDefaultPermission)
        ? accessTypeFromJSON(object.instantiateDefaultPermission)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.codeUploadAccess !== undefined) {
      obj.codeUploadAccess = AccessConfig.toJSON(message.codeUploadAccess);
    }
    if (message.instantiateDefaultPermission !== 0) {
      obj.instantiateDefaultPermission = accessTypeToJSON(message.instantiateDefaultPermission);
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.codeUploadAccess = (object.codeUploadAccess !== undefined && object.codeUploadAccess !== null)
      ? AccessConfig.fromPartial(object.codeUploadAccess)
      : undefined;
    message.instantiateDefaultPermission = object.instantiateDefaultPermission ?? 0;
    return message;
  },
};

function createBaseCodeInfo(): CodeInfo {
  return { codeHash: new Uint8Array(0), creator: "", instantiateConfig: undefined };
}

export const CodeInfo = {
  $type: "cosmwasm.wasm.v1.CodeInfo" as const,

  encode(message: CodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== undefined) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.codeHash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      instantiateConfig: isSet(object.instantiateConfig) ? AccessConfig.fromJSON(object.instantiateConfig) : undefined,
    };
  },

  toJSON(message: CodeInfo): unknown {
    const obj: any = {};
    if (message.codeHash.length !== 0) {
      obj.codeHash = base64FromBytes(message.codeHash);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.instantiateConfig !== undefined) {
      obj.instantiateConfig = AccessConfig.toJSON(message.instantiateConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<CodeInfo>): CodeInfo {
    return CodeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array(0);
    message.creator = object.creator ?? "";
    message.instantiateConfig = (object.instantiateConfig !== undefined && object.instantiateConfig !== null)
      ? AccessConfig.fromPartial(object.instantiateConfig)
      : undefined;
    return message;
  },
};

function createBaseContractInfo(): ContractInfo {
  return { codeId: "0", creator: "", admin: "", label: "", created: undefined, ibcPortId: "", extension: undefined };
}

export const ContractInfo = {
  $type: "cosmwasm.wasm.v1.ContractInfo" as const,

  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeId !== "0") {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    if (message.extension !== undefined) {
      Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.label = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ibcPortId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.extension = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? String(object.codeId) : "0",
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      extension: isSet(object.extension) ? Any.fromJSON(object.extension) : undefined,
    };
  },

  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.created !== undefined) {
      obj.created = AbsoluteTxPosition.toJSON(message.created);
    }
    if (message.ibcPortId !== "") {
      obj.ibcPortId = message.ibcPortId;
    }
    if (message.extension !== undefined) {
      obj.extension = Any.toJSON(message.extension);
    }
    return obj;
  },

  create(base?: DeepPartial<ContractInfo>): ContractInfo {
    return ContractInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId ?? "0";
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.created = (object.created !== undefined && object.created !== null)
      ? AbsoluteTxPosition.fromPartial(object.created)
      : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    message.extension = (object.extension !== undefined && object.extension !== null)
      ? Any.fromPartial(object.extension)
      : undefined;
    return message;
  },
};

function createBaseContractCodeHistoryEntry(): ContractCodeHistoryEntry {
  return { operation: 0, codeId: "0", updated: undefined, msg: new Uint8Array(0) };
}

export const ContractCodeHistoryEntry = {
  $type: "cosmwasm.wasm.v1.ContractCodeHistoryEntry" as const,

  encode(message: ContractCodeHistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.codeId !== "0") {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCodeHistoryEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.msg = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractCodeHistoryEntry {
    return {
      operation: isSet(object.operation) ? contractCodeHistoryOperationTypeFromJSON(object.operation) : 0,
      codeId: isSet(object.codeId) ? String(object.codeId) : "0",
      updated: isSet(object.updated) ? AbsoluteTxPosition.fromJSON(object.updated) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
    };
  },

  toJSON(message: ContractCodeHistoryEntry): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation);
    }
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    if (message.updated !== undefined) {
      obj.updated = AbsoluteTxPosition.toJSON(message.updated);
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    return obj;
  },

  create(base?: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry {
    return ContractCodeHistoryEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry {
    const message = createBaseContractCodeHistoryEntry();
    message.operation = object.operation ?? 0;
    message.codeId = object.codeId ?? "0";
    message.updated = (object.updated !== undefined && object.updated !== null)
      ? AbsoluteTxPosition.fromPartial(object.updated)
      : undefined;
    message.msg = object.msg ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return { blockHeight: "0", txIndex: "0" };
}

export const AbsoluteTxPosition = {
  $type: "cosmwasm.wasm.v1.AbsoluteTxPosition" as const,

  encode(message: AbsoluteTxPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeight !== "0") {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.txIndex !== "0") {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.txIndex = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : "0",
    };
  },

  toJSON(message: AbsoluteTxPosition): unknown {
    const obj: any = {};
    if (message.blockHeight !== "0") {
      obj.blockHeight = message.blockHeight;
    }
    if (message.txIndex !== "0") {
      obj.txIndex = message.txIndex;
    }
    return obj;
  },

  create(base?: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    return AbsoluteTxPosition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight ?? "0";
    message.txIndex = object.txIndex ?? "0";
    return message;
  },
};

function createBaseModel(): Model {
  return { key: new Uint8Array(0), value: new Uint8Array(0) };
}

export const Model = {
  $type: "cosmwasm.wasm.v1.Model" as const,

  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<Model>): Model {
    return Model.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Model>): Model {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
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