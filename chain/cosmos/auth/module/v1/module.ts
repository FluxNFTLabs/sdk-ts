/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** Module is the config object for the auth module. */
export interface Module {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32_prefix: string;
  /** module_account_permissions are module account permissions. */
  module_account_permissions: ModuleAccountPermission[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}

/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
  /** account is the name of the module. */
  account: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions: string[];
}

function createBaseModule(): Module {
  return { bech32_prefix: "", module_account_permissions: [], authority: "" };
}

export const Module = {
  $type: "cosmos.auth.module.v1.Module" as const,

  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32_prefix !== "") {
      writer.uint32(10).string(message.bech32_prefix);
    }
    for (const v of message.module_account_permissions) {
      ModuleAccountPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bech32_prefix = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.module_account_permissions.push(ModuleAccountPermission.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.authority = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Module {
    return {
      bech32_prefix: isSet(object.bech32_prefix) ? globalThis.String(object.bech32_prefix) : "",
      module_account_permissions: globalThis.Array.isArray(object?.module_account_permissions)
        ? object.module_account_permissions.map((e: any) => ModuleAccountPermission.fromJSON(e))
        : [],
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.bech32_prefix !== undefined) {
      obj.bech32_prefix = message.bech32_prefix;
    }
    if (message.module_account_permissions?.length) {
      obj.module_account_permissions = message.module_account_permissions.map((e) => ModuleAccountPermission.toJSON(e));
    }
    if (message.authority !== undefined) {
      obj.authority = message.authority;
    }
    return obj;
  },

  create(base?: DeepPartial<Module>): Module {
    return Module.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.bech32_prefix = object.bech32_prefix ?? "";
    message.module_account_permissions =
      object.module_account_permissions?.map((e) => ModuleAccountPermission.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};

function createBaseModuleAccountPermission(): ModuleAccountPermission {
  return { account: "", permissions: [] };
}

export const ModuleAccountPermission = {
  $type: "cosmos.auth.module.v1.ModuleAccountPermission" as const,

  encode(message: ModuleAccountPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccountPermission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccountPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ModuleAccountPermission {
    return {
      account: isSet(object.account) ? globalThis.String(object.account) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ModuleAccountPermission): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = message.account;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions;
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleAccountPermission>): ModuleAccountPermission {
    return ModuleAccountPermission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModuleAccountPermission>): ModuleAccountPermission {
    const message = createBaseModuleAccountPermission();
    message.account = object.account ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
