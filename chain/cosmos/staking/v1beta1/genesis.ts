/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking";

/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to deposit. */
  params:
    | Params
    | undefined;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  last_total_power: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  last_validator_powers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbonding_delegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  exported: boolean;
}

/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    last_total_power: new Uint8Array(0),
    last_validator_powers: [],
    validators: [],
    delegations: [],
    unbonding_delegations: [],
    redelegations: [],
    exported: false,
  };
}

export const GenesisState = {
  $type: "cosmos.staking.v1beta1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.last_total_power.length !== 0) {
      writer.uint32(18).bytes(message.last_total_power);
    }
    for (const v of message.last_validator_powers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbonding_delegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.last_total_power = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validators.push(Validator.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.unbonding_delegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.exported = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      last_total_power: isSet(object.last_total_power) ? bytesFromBase64(object.last_total_power) : new Uint8Array(0),
      last_validator_powers: Array.isArray(object?.last_validator_powers)
        ? object.last_validator_powers.map((e: any) => LastValidatorPower.fromJSON(e))
        : [],
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      unbonding_delegations: Array.isArray(object?.unbonding_delegations)
        ? object.unbonding_delegations.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => Redelegation.fromJSON(e))
        : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.last_total_power.length !== 0) {
      obj.last_total_power = base64FromBytes(message.last_total_power);
    }
    if (message.last_validator_powers?.length) {
      obj.last_validator_powers = message.last_validator_powers.map((e) => LastValidatorPower.toJSON(e));
    }
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => Validator.toJSON(e));
    }
    if (message.delegations?.length) {
      obj.delegations = message.delegations.map((e) => Delegation.toJSON(e));
    }
    if (message.unbonding_delegations?.length) {
      obj.unbonding_delegations = message.unbonding_delegations.map((e) => UnbondingDelegation.toJSON(e));
    }
    if (message.redelegations?.length) {
      obj.redelegations = message.redelegations.map((e) => Redelegation.toJSON(e));
    }
    if (message.exported === true) {
      obj.exported = message.exported;
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.last_total_power = object.last_total_power ?? new Uint8Array(0);
    message.last_validator_powers = object.last_validator_powers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbonding_delegations = object.unbonding_delegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    return message;
  },
};

function createBaseLastValidatorPower(): LastValidatorPower {
  return { address: "", power: "0" };
}

export const LastValidatorPower = {
  $type: "cosmos.staking.v1beta1.LastValidatorPower" as const,

  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== "0") {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
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
          if (tag !== 16) {
            break;
          }

          message.power = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LastValidatorPower {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? String(object.power) : "0",
    };
  },

  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.power !== "0") {
      obj.power = message.power;
    }
    return obj;
  },

  create(base?: DeepPartial<LastValidatorPower>): LastValidatorPower {
    return LastValidatorPower.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power ?? "0";
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
