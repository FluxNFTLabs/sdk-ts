/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** Module is the config object of the crisis module. */
export interface Module {
  /** fee_collector_name is the name of the FeeCollector ModuleAccount. */
  feeCollectorName: string;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}

function createBaseModule(): Module {
  return { feeCollectorName: "", authority: "" };
}

export const Module = {
  $type: "cosmos.crisis.module.v1.Module" as const,

  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeCollectorName !== "") {
      writer.uint32(10).string(message.feeCollectorName);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
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

          message.feeCollectorName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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
      feeCollectorName: isSet(object.feeCollectorName) ? String(object.feeCollectorName) : "",
      authority: isSet(object.authority) ? String(object.authority) : "",
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.feeCollectorName !== "") {
      obj.feeCollectorName = message.feeCollectorName;
    }
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    return obj;
  },

  create(base?: DeepPartial<Module>): Module {
    return Module.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.feeCollectorName = object.feeCollectorName ?? "";
    message.authority = object.authority ?? "";
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
