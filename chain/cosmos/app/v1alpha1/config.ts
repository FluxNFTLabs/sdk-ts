/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface Config {
  /** modules are the module configurations for the app. */
  modules: ModuleConfig[];
  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is global (not module specific).
   */
  golang_bindings: GolangBinding[];
}

/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfig {
  /**
   * name is the unique name of the module within the app. It should be a name
   * that persists between different versions of a module so that modules
   * can be smoothly upgraded to new versions.
   *
   * For example, for the module cosmos.bank.module.v1.Module, we may chose
   * to simply name the module "bank" in the app. When we upgrade to
   * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
   * and the framework knows that the v2 module should receive all the same state
   * that the v1 module had. Note: modules should provide info on which versions
   * they can migrate from in the ModuleDescriptor.can_migration_from field.
   */
  name: string;
  /**
   * config is the config object for the module. Module config messages should
   * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
   */
  config:
    | Any
    | undefined;
  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is module specific.
   */
  golang_bindings: GolangBinding[];
}

/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */
export interface GolangBinding {
  /** interface_type is the interface type which will be bound to a specific implementation type */
  interface_type: string;
  /** implementation is the implementing type which will be supplied when an input of type interface is requested */
  implementation: string;
}

function createBaseConfig(): Config {
  return { modules: [], golang_bindings: [] };
}

export const Config = {
  $type: "cosmos.app.v1alpha1.Config" as const,

  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      ModuleConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.golang_bindings) {
      GolangBinding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.golang_bindings.push(GolangBinding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Config {
    return {
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => ModuleConfig.fromJSON(e)) : [],
      golang_bindings: Array.isArray(object?.golang_bindings)
        ? object.golang_bindings.map((e: any) => GolangBinding.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    if (message.modules?.length) {
      obj.modules = message.modules.map((e) => ModuleConfig.toJSON(e));
    }
    if (message.golang_bindings?.length) {
      obj.golang_bindings = message.golang_bindings.map((e) => GolangBinding.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Config>): Config {
    return Config.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Config>): Config {
    const message = createBaseConfig();
    message.modules = object.modules?.map((e) => ModuleConfig.fromPartial(e)) || [];
    message.golang_bindings = object.golang_bindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModuleConfig(): ModuleConfig {
  return { name: "", config: undefined, golang_bindings: [] };
}

export const ModuleConfig = {
  $type: "cosmos.app.v1alpha1.ModuleConfig" as const,

  encode(message: ModuleConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.golang_bindings) {
      GolangBinding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.config = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.golang_bindings.push(GolangBinding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      config: isSet(object.config) ? Any.fromJSON(object.config) : undefined,
      golang_bindings: Array.isArray(object?.golang_bindings)
        ? object.golang_bindings.map((e: any) => GolangBinding.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.config !== undefined) {
      obj.config = Any.toJSON(message.config);
    }
    if (message.golang_bindings?.length) {
      obj.golang_bindings = message.golang_bindings.map((e) => GolangBinding.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleConfig>): ModuleConfig {
    return ModuleConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModuleConfig>): ModuleConfig {
    const message = createBaseModuleConfig();
    message.name = object.name ?? "";
    message.config = (object.config !== undefined && object.config !== null)
      ? Any.fromPartial(object.config)
      : undefined;
    message.golang_bindings = object.golang_bindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGolangBinding(): GolangBinding {
  return { interface_type: "", implementation: "" };
}

export const GolangBinding = {
  $type: "cosmos.app.v1alpha1.GolangBinding" as const,

  encode(message: GolangBinding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interface_type !== "") {
      writer.uint32(10).string(message.interface_type);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GolangBinding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.interface_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.implementation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GolangBinding {
    return {
      interface_type: isSet(object.interface_type) ? String(object.interface_type) : "",
      implementation: isSet(object.implementation) ? String(object.implementation) : "",
    };
  },

  toJSON(message: GolangBinding): unknown {
    const obj: any = {};
    if (message.interface_type !== "") {
      obj.interface_type = message.interface_type;
    }
    if (message.implementation !== "") {
      obj.implementation = message.implementation;
    }
    return obj;
  },

  create(base?: DeepPartial<GolangBinding>): GolangBinding {
    return GolangBinding.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GolangBinding>): GolangBinding {
    const message = createBaseGolangBinding();
    message.interface_type = object.interface_type ?? "";
    message.implementation = object.implementation ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
