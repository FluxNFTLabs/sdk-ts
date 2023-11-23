/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, ValidatorSigningInfo } from "./slashing";

/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params:
    | Params
    | undefined;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signing_infos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missed_blocks: ValidatorMissedBlocks[];
}

/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validator_signing_info: ValidatorSigningInfo | undefined;
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missed_blocks: MissedBlock[];
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: string;
  /** missed is the missed status. */
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, signing_infos: [], missed_blocks: [] };
}

export const GenesisState = {
  $type: "cosmos.slashing.v1beta1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signing_infos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missed_blocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
      signing_infos: globalThis.Array.isArray(object?.signing_infos)
        ? object.signing_infos.map((e: any) => SigningInfo.fromJSON(e))
        : [],
      missed_blocks: globalThis.Array.isArray(object?.missed_blocks)
        ? object.missed_blocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.signing_infos?.length) {
      obj.signing_infos = message.signing_infos.map((e) => SigningInfo.toJSON(e));
    }
    if (message.missed_blocks?.length) {
      obj.missed_blocks = message.missed_blocks.map((e) => ValidatorMissedBlocks.toJSON(e));
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
    message.signing_infos = object.signing_infos?.map((e) => SigningInfo.fromPartial(e)) || [];
    message.missed_blocks = object.missed_blocks?.map((e) => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSigningInfo(): SigningInfo {
  return { address: "", validator_signing_info: undefined };
}

export const SigningInfo = {
  $type: "cosmos.slashing.v1beta1.SigningInfo" as const,

  encode(message: SigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validator_signing_info !== undefined) {
      ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
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

          message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      validator_signing_info: isSet(object.validator_signing_info)
        ? ValidatorSigningInfo.fromJSON(object.validator_signing_info)
        : undefined,
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.validator_signing_info !== undefined) {
      obj.validator_signing_info = ValidatorSigningInfo.toJSON(message.validator_signing_info);
    }
    return obj;
  },

  create(base?: DeepPartial<SigningInfo>): SigningInfo {
    return SigningInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validator_signing_info =
      (object.validator_signing_info !== undefined && object.validator_signing_info !== null)
        ? ValidatorSigningInfo.fromPartial(object.validator_signing_info)
        : undefined;
    return message;
  },
};

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return { address: "", missed_blocks: [] };
}

export const ValidatorMissedBlocks = {
  $type: "cosmos.slashing.v1beta1.ValidatorMissedBlocks" as const,

  encode(message: ValidatorMissedBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missed_blocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
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

          message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      missed_blocks: globalThis.Array.isArray(object?.missed_blocks)
        ? object.missed_blocks.map((e: any) => MissedBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.missed_blocks?.length) {
      obj.missed_blocks = message.missed_blocks.map((e) => MissedBlock.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missed_blocks = object.missed_blocks?.map((e) => MissedBlock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMissedBlock(): MissedBlock {
  return { index: "0", missed: false };
}

export const MissedBlock = {
  $type: "cosmos.slashing.v1beta1.MissedBlock" as const,

  encode(message: MissedBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.missed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? globalThis.String(object.index) : "0",
      missed: isSet(object.missed) ? globalThis.Boolean(object.missed) : false,
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    if (message.index !== "0") {
      obj.index = message.index;
    }
    if (message.missed === true) {
      obj.missed = message.missed;
    }
    return obj;
  },

  create(base?: DeepPartial<MissedBlock>): MissedBlock {
    return MissedBlock.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index ?? "0";
    message.missed = object.missed ?? false;
    return message;
  },
};

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
