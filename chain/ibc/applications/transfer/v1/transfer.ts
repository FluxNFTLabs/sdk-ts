/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  base_denom: string;
}

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled: boolean;
}

function createBaseDenomTrace(): DenomTrace {
  return { path: "", base_denom: "" };
}

export const DenomTrace = {
  $type: "ibc.applications.transfer.v1.DenomTrace" as const,

  encode(message: DenomTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.base_denom !== "") {
      writer.uint32(18).string(message.base_denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.base_denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomTrace {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      base_denom: isSet(object.base_denom) ? globalThis.String(object.base_denom) : "",
    };
  },

  toJSON(message: DenomTrace): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.base_denom !== "") {
      obj.base_denom = message.base_denom;
    }
    return obj;
  },

  create(base?: DeepPartial<DenomTrace>): DenomTrace {
    return DenomTrace.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DenomTrace>): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.base_denom = object.base_denom ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { send_enabled: false, receive_enabled: false };
}

export const Params = {
  $type: "ibc.applications.transfer.v1.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.send_enabled === true) {
      writer.uint32(8).bool(message.send_enabled);
    }
    if (message.receive_enabled === true) {
      writer.uint32(16).bool(message.receive_enabled);
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

          message.send_enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.receive_enabled = reader.bool();
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
      send_enabled: isSet(object.send_enabled) ? globalThis.Boolean(object.send_enabled) : false,
      receive_enabled: isSet(object.receive_enabled) ? globalThis.Boolean(object.receive_enabled) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.send_enabled === true) {
      obj.send_enabled = message.send_enabled;
    }
    if (message.receive_enabled === true) {
      obj.receive_enabled = message.receive_enabled;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.send_enabled = object.send_enabled ?? false;
    message.receive_enabled = object.receive_enabled ?? false;
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
