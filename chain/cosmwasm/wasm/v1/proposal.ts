/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AccessConfig } from "./types";

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission:
    | AccessConfig
    | undefined;
  /** UnpinCode code on upload, optional */
  unpin_code: boolean;
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash: Uint8Array;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface InstantiateContract2Proposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  run_as: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fix_msg: boolean;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  code_id: string;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  new_admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  code_ids: string[];
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @deprecated
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  code_ids: string[];
}

/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  code_id: string;
  /** InstantiatePermission to apply to the set of code ids */
  instantiate_permission: AccessConfig | undefined;
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @deprecated
 */
export interface UpdateInstantiateConfigProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  access_config_updates: AccessConfigUpdate[];
}

/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @deprecated
 */
export interface StoreAndInstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiate_permission:
    | AccessConfig
    | undefined;
  /** UnpinCode code on upload, optional */
  unpin_code: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  code_hash: Uint8Array;
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(0),
    instantiate_permission: undefined,
    unpin_code: false,
    source: "",
    builder: "",
    code_hash: new Uint8Array(0),
  };
}

export const StoreCodeProposal = {
  $type: "cosmwasm.wasm.v1.StoreCodeProposal" as const,

  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(64).bool(message.unpin_code);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(90).bytes(message.code_hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.run_as = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.wasm_byte_code = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.unpin_code = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.source = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.builder = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.code_hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(0),
      instantiate_permission: isSet(object.instantiate_permission)
        ? AccessConfig.fromJSON(object.instantiate_permission)
        : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array(0),
    };
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.run_as !== "") {
      obj.run_as = message.run_as;
    }
    if (message.wasm_byte_code.length !== 0) {
      obj.wasm_byte_code = base64FromBytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      obj.instantiate_permission = AccessConfig.toJSON(message.instantiate_permission);
    }
    if (message.unpin_code === true) {
      obj.unpin_code = message.unpin_code;
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.builder !== "") {
      obj.builder = message.builder;
    }
    if (message.code_hash.length !== 0) {
      obj.code_hash = base64FromBytes(message.code_hash);
    }
    return obj;
  },

  create(base?: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    return StoreCodeProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.wasm_byte_code = object.wasm_byte_code ?? new Uint8Array(0);
    message.instantiate_permission =
      (object.instantiate_permission !== undefined && object.instantiate_permission !== null)
        ? AccessConfig.fromPartial(object.instantiate_permission)
        : undefined;
    message.unpin_code = object.unpin_code ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.code_hash = object.code_hash ?? new Uint8Array(0);
    return message;
  },
};

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: "0",
    label: "",
    msg: new Uint8Array(0),
    funds: [],
  };
}

export const InstantiateContractProposal = {
  $type: "cosmwasm.wasm.v1.InstantiateContractProposal" as const,

  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.code_id !== "0") {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.run_as = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.code_id = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.label = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.funds.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? String(object.code_id) : "0",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.run_as !== "") {
      obj.run_as = message.run_as;
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.code_id !== "0") {
      obj.code_id = message.code_id;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.funds?.length) {
      obj.funds = message.funds.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    return InstantiateContractProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.admin = object.admin ?? "";
    message.code_id = object.code_id ?? "0";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array(0);
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInstantiateContract2Proposal(): InstantiateContract2Proposal {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: "0",
    label: "",
    msg: new Uint8Array(0),
    funds: [],
    salt: new Uint8Array(0),
    fix_msg: false,
  };
}

export const InstantiateContract2Proposal = {
  $type: "cosmwasm.wasm.v1.InstantiateContract2Proposal" as const,

  encode(message: InstantiateContract2Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.code_id !== "0") {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fix_msg === true) {
      writer.uint32(80).bool(message.fix_msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContract2Proposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContract2Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.run_as = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.code_id = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.label = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.funds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.salt = reader.bytes();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.fix_msg = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstantiateContract2Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      code_id: isSet(object.code_id) ? String(object.code_id) : "0",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(0),
      fix_msg: isSet(object.fix_msg) ? Boolean(object.fix_msg) : false,
    };
  },

  toJSON(message: InstantiateContract2Proposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.run_as !== "") {
      obj.run_as = message.run_as;
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.code_id !== "0") {
      obj.code_id = message.code_id;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.funds?.length) {
      obj.funds = message.funds.map((e) => Coin.toJSON(e));
    }
    if (message.salt.length !== 0) {
      obj.salt = base64FromBytes(message.salt);
    }
    if (message.fix_msg === true) {
      obj.fix_msg = message.fix_msg;
    }
    return obj;
  },

  create(base?: DeepPartial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    return InstantiateContract2Proposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.admin = object.admin ?? "";
    message.code_id = object.code_id ?? "0";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array(0);
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array(0);
    message.fix_msg = object.fix_msg ?? false;
    return message;
  },
};

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return { title: "", description: "", contract: "", code_id: "0", msg: new Uint8Array(0) };
}

export const MigrateContractProposal = {
  $type: "cosmwasm.wasm.v1.MigrateContractProposal" as const,

  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.code_id !== "0") {
      writer.uint32(40).uint64(message.code_id);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.code_id = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      code_id: isSet(object.code_id) ? String(object.code_id) : "0",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
    };
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    if (message.code_id !== "0") {
      obj.code_id = message.code_id;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    return obj;
  },

  create(base?: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    return MigrateContractProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.code_id = object.code_id ?? "0";
    message.msg = object.msg ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSudoContractProposal(): SudoContractProposal {
  return { title: "", description: "", contract: "", msg: new Uint8Array(0) };
}

export const SudoContractProposal = {
  $type: "cosmwasm.wasm.v1.SudoContractProposal" as const,

  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contract = reader.string();
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

  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
    };
  },

  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    return obj;
  },

  create(base?: DeepPartial<SudoContractProposal>): SudoContractProposal {
    return SudoContractProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array(0);
    return message;
  },
};

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return { title: "", description: "", run_as: "", contract: "", msg: new Uint8Array(0), funds: [] };
}

export const ExecuteContractProposal = {
  $type: "cosmwasm.wasm.v1.ExecuteContractProposal" as const,

  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.run_as = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.funds.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.run_as !== "") {
      obj.run_as = message.run_as;
    }
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.funds?.length) {
      obj.funds = message.funds.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal {
    return ExecuteContractProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array(0);
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return { title: "", description: "", new_admin: "", contract: "" };
}

export const UpdateAdminProposal = {
  $type: "cosmwasm.wasm.v1.UpdateAdminProposal" as const,

  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_admin = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.new_admin !== "") {
      obj.new_admin = message.new_admin;
    }
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    return UpdateAdminProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.new_admin = object.new_admin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseClearAdminProposal(): ClearAdminProposal {
  return { title: "", description: "", contract: "" };
}

export const ClearAdminProposal = {
  $type: "cosmwasm.wasm.v1.ClearAdminProposal" as const,

  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    return obj;
  },

  create(base?: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
    return ClearAdminProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBasePinCodesProposal(): PinCodesProposal {
  return { title: "", description: "", code_ids: [] };
}

export const PinCodesProposal = {
  $type: "cosmwasm.wasm.v1.PinCodesProposal" as const,

  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.code_ids.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.code_ids?.length) {
      obj.code_ids = message.code_ids;
    }
    return obj;
  },

  create(base?: DeepPartial<PinCodesProposal>): PinCodesProposal {
    return PinCodesProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return { title: "", description: "", code_ids: [] };
}

export const UnpinCodesProposal = {
  $type: "cosmwasm.wasm.v1.UnpinCodesProposal" as const,

  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.code_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.code_ids.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.code_ids.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      code_ids: Array.isArray(object?.code_ids) ? object.code_ids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.code_ids?.length) {
      obj.code_ids = message.code_ids;
    }
    return obj;
  },

  create(base?: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    return UnpinCodesProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return { code_id: "0", instantiate_permission: undefined };
}

export const AccessConfigUpdate = {
  $type: "cosmwasm.wasm.v1.AccessConfigUpdate" as const,

  encode(message: AccessConfigUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code_id !== "0") {
      writer.uint32(8).uint64(message.code_id);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfigUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessConfigUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessConfigUpdate {
    return {
      code_id: isSet(object.code_id) ? String(object.code_id) : "0",
      instantiate_permission: isSet(object.instantiate_permission)
        ? AccessConfig.fromJSON(object.instantiate_permission)
        : undefined,
    };
  },

  toJSON(message: AccessConfigUpdate): unknown {
    const obj: any = {};
    if (message.code_id !== "0") {
      obj.code_id = message.code_id;
    }
    if (message.instantiate_permission !== undefined) {
      obj.instantiate_permission = AccessConfig.toJSON(message.instantiate_permission);
    }
    return obj;
  },

  create(base?: DeepPartial<AccessConfigUpdate>): AccessConfigUpdate {
    return AccessConfigUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessConfigUpdate>): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.code_id = object.code_id ?? "0";
    message.instantiate_permission =
      (object.instantiate_permission !== undefined && object.instantiate_permission !== null)
        ? AccessConfig.fromPartial(object.instantiate_permission)
        : undefined;
    return message;
  },
};

function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return { title: "", description: "", access_config_updates: [] };
}

export const UpdateInstantiateConfigProposal = {
  $type: "cosmwasm.wasm.v1.UpdateInstantiateConfigProposal" as const,

  encode(message: UpdateInstantiateConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.access_config_updates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInstantiateConfigProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstantiateConfigProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.access_config_updates.push(AccessConfigUpdate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInstantiateConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      access_config_updates: Array.isArray(object?.access_config_updates)
        ? object.access_config_updates.map((e: any) => AccessConfigUpdate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateInstantiateConfigProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.access_config_updates?.length) {
      obj.access_config_updates = message.access_config_updates.map((e) => AccessConfigUpdate.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    return UpdateInstantiateConfigProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.access_config_updates = object.access_config_updates?.map((e) => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStoreAndInstantiateContractProposal(): StoreAndInstantiateContractProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(0),
    instantiate_permission: undefined,
    unpin_code: false,
    admin: "",
    label: "",
    msg: new Uint8Array(0),
    funds: [],
    source: "",
    builder: "",
    code_hash: new Uint8Array(0),
  };
}

export const StoreAndInstantiateContractProposal = {
  $type: "cosmwasm.wasm.v1.StoreAndInstantiateContractProposal" as const,

  encode(message: StoreAndInstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }
    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpin_code === true) {
      writer.uint32(48).bool(message.unpin_code);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.code_hash.length !== 0) {
      writer.uint32(106).bytes(message.code_hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreAndInstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreAndInstantiateContractProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.run_as = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.wasm_byte_code = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.unpin_code = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.label = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.funds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.source = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.builder = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.code_hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreAndInstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      run_as: isSet(object.run_as) ? String(object.run_as) : "",
      wasm_byte_code: isSet(object.wasm_byte_code) ? bytesFromBase64(object.wasm_byte_code) : new Uint8Array(0),
      instantiate_permission: isSet(object.instantiate_permission)
        ? AccessConfig.fromJSON(object.instantiate_permission)
        : undefined,
      unpin_code: isSet(object.unpin_code) ? Boolean(object.unpin_code) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      code_hash: isSet(object.code_hash) ? bytesFromBase64(object.code_hash) : new Uint8Array(0),
    };
  },

  toJSON(message: StoreAndInstantiateContractProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.run_as !== "") {
      obj.run_as = message.run_as;
    }
    if (message.wasm_byte_code.length !== 0) {
      obj.wasm_byte_code = base64FromBytes(message.wasm_byte_code);
    }
    if (message.instantiate_permission !== undefined) {
      obj.instantiate_permission = AccessConfig.toJSON(message.instantiate_permission);
    }
    if (message.unpin_code === true) {
      obj.unpin_code = message.unpin_code;
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.funds?.length) {
      obj.funds = message.funds.map((e) => Coin.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.builder !== "") {
      obj.builder = message.builder;
    }
    if (message.code_hash.length !== 0) {
      obj.code_hash = base64FromBytes(message.code_hash);
    }
    return obj;
  },

  create(base?: DeepPartial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    return StoreAndInstantiateContractProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.wasm_byte_code = object.wasm_byte_code ?? new Uint8Array(0);
    message.instantiate_permission =
      (object.instantiate_permission !== undefined && object.instantiate_permission !== null)
        ? AccessConfig.fromPartial(object.instantiate_permission)
        : undefined;
    message.unpin_code = object.unpin_code ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array(0);
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.code_hash = object.code_hash ?? new Uint8Array(0);
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
