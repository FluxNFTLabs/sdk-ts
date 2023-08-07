/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pub_key: Any | undefined;
  account_number: string;
  sequence: string;
}

/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  base_account: BaseAccount | undefined;
  name: string;
  permissions: string[];
}

/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredential {
  /** module_name is the name of the module used for address derivation (passed into address.Module). */
  module_name: string;
  /**
   * derivation_keys is for deriving a module account address (passed into address.Module)
   * adding more keys creates sub-account addresses (passed into address.Derive)
   */
  derivation_keys: Uint8Array[];
}

/** Params defines the parameters for the auth module. */
export interface Params {
  max_memo_characters: string;
  tx_sig_limit: string;
  tx_size_cost_per_byte: string;
  sig_verify_cost_ed25519: string;
  sig_verify_cost_secp256k1: string;
}

function createBaseBaseAccount(): BaseAccount {
  return { address: "", pub_key: undefined, account_number: "0", sequence: "0" };
}

export const BaseAccount = {
  $type: "cosmos.auth.v1beta1.BaseAccount" as const,

  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.account_number !== "0") {
      writer.uint32(24).uint64(message.account_number);
    }
    if (message.sequence !== "0") {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pub_key = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.account_number = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BaseAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
      account_number: isSet(object.account_number) ? String(object.account_number) : "0",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
    };
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pub_key !== undefined) {
      obj.pub_key = Any.toJSON(message.pub_key);
    }
    if (message.account_number !== "0") {
      obj.account_number = message.account_number;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<BaseAccount>): BaseAccount {
    return BaseAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? Any.fromPartial(object.pub_key)
      : undefined;
    message.account_number = object.account_number ?? "0";
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseModuleAccount(): ModuleAccount {
  return { base_account: undefined, name: "", permissions: [] };
}

export const ModuleAccount = {
  $type: "cosmos.auth.v1beta1.ModuleAccount" as const,

  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.base_account = BaseAccount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleAccount {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    if (message.base_account !== undefined) {
      obj.base_account = BaseAccount.toJSON(message.base_account);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions;
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleAccount>): ModuleAccount {
    return ModuleAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.base_account = (object.base_account !== undefined && object.base_account !== null)
      ? BaseAccount.fromPartial(object.base_account)
      : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseModuleCredential(): ModuleCredential {
  return { module_name: "", derivation_keys: [] };
}

export const ModuleCredential = {
  $type: "cosmos.auth.v1beta1.ModuleCredential" as const,

  encode(message: ModuleCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    for (const v of message.derivation_keys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleCredential {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.derivation_keys.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleCredential {
    return {
      module_name: isSet(object.module_name) ? String(object.module_name) : "",
      derivation_keys: Array.isArray(object?.derivation_keys)
        ? object.derivation_keys.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ModuleCredential): unknown {
    const obj: any = {};
    if (message.module_name !== "") {
      obj.module_name = message.module_name;
    }
    if (message.derivation_keys?.length) {
      obj.derivation_keys = message.derivation_keys.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleCredential>): ModuleCredential {
    return ModuleCredential.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential {
    const message = createBaseModuleCredential();
    message.module_name = object.module_name ?? "";
    message.derivation_keys = object.derivation_keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return {
    max_memo_characters: "0",
    tx_sig_limit: "0",
    tx_size_cost_per_byte: "0",
    sig_verify_cost_ed25519: "0",
    sig_verify_cost_secp256k1: "0",
  };
}

export const Params = {
  $type: "cosmos.auth.v1beta1.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_memo_characters !== "0") {
      writer.uint32(8).uint64(message.max_memo_characters);
    }
    if (message.tx_sig_limit !== "0") {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }
    if (message.tx_size_cost_per_byte !== "0") {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }
    if (message.sig_verify_cost_ed25519 !== "0") {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }
    if (message.sig_verify_cost_secp256k1 !== "0") {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
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
          if (tag !== 8) {
            break;
          }

          message.max_memo_characters = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.tx_sig_limit = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.tx_size_cost_per_byte = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sig_verify_cost_ed25519 = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sig_verify_cost_secp256k1 = longToString(reader.uint64() as Long);
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
      max_memo_characters: isSet(object.max_memo_characters) ? String(object.max_memo_characters) : "0",
      tx_sig_limit: isSet(object.tx_sig_limit) ? String(object.tx_sig_limit) : "0",
      tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? String(object.tx_size_cost_per_byte) : "0",
      sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? String(object.sig_verify_cost_ed25519) : "0",
      sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1)
        ? String(object.sig_verify_cost_secp256k1)
        : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.max_memo_characters !== "0") {
      obj.max_memo_characters = message.max_memo_characters;
    }
    if (message.tx_sig_limit !== "0") {
      obj.tx_sig_limit = message.tx_sig_limit;
    }
    if (message.tx_size_cost_per_byte !== "0") {
      obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte;
    }
    if (message.sig_verify_cost_ed25519 !== "0") {
      obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519;
    }
    if (message.sig_verify_cost_secp256k1 !== "0") {
      obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_memo_characters = object.max_memo_characters ?? "0";
    message.tx_sig_limit = object.tx_sig_limit ?? "0";
    message.tx_size_cost_per_byte = object.tx_size_cost_per_byte ?? "0";
    message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 ?? "0";
    message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 ?? "0";
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
