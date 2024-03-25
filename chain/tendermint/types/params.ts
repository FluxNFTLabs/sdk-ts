/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block: BlockParams | undefined;
  evidence: EvidenceParams | undefined;
  validator: ValidatorParams | undefined;
  version: VersionParams | undefined;
  abci: ABCIParams | undefined;
}

/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: string;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: string;
}

/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   *
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: string;
  /**
   * Max age of evidence, in time.
   *
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration:
    | Duration
    | undefined;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: string;
}

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pub_key_types: string[];
}

/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  app: string;
}

/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  block_max_bytes: string;
  block_max_gas: string;
}

/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
  /**
   * vote_extensions_enable_height configures the first height during which
   * vote extensions will be enabled. During this specified height, and for all
   * subsequent heights, precommit messages that do not contain valid extension data
   * will be considered invalid. Prior to this height, vote extensions will not
   * be used or accepted by validators on the network.
   *
   * Once enabled, vote extensions will be created by the application in ExtendVote,
   * passed to the application for validation in VerifyVoteExtension and given
   * to the application to use when proposing a block during PrepareProposal.
   */
  vote_extensions_enable_height: string;
}

function createBaseConsensusParams(): ConsensusParams {
  return { block: undefined, evidence: undefined, validator: undefined, version: undefined, abci: undefined };
}

export const ConsensusParams = {
  $type: "tendermint.types.ConsensusParams" as const,

  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    if (message.abci !== undefined) {
      ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.block = BlockParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validator = ValidatorParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = VersionParams.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.abci = ABCIParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusParams {
    return {
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined,
      abci: isSet(object.abci) ? ABCIParams.fromJSON(object.abci) : undefined,
    };
  },

  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    if (message.block !== undefined) {
      obj.block = BlockParams.toJSON(message.block);
    }
    if (message.evidence !== undefined) {
      obj.evidence = EvidenceParams.toJSON(message.evidence);
    }
    if (message.validator !== undefined) {
      obj.validator = ValidatorParams.toJSON(message.validator);
    }
    if (message.version !== undefined) {
      obj.version = VersionParams.toJSON(message.version);
    }
    if (message.abci !== undefined) {
      obj.abci = ABCIParams.toJSON(message.abci);
    }
    return obj;
  },

  create(base?: DeepPartial<ConsensusParams>): ConsensusParams {
    return ConsensusParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = (object.block !== undefined && object.block !== null)
      ? BlockParams.fromPartial(object.block)
      : undefined;
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? EvidenceParams.fromPartial(object.evidence)
      : undefined;
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? ValidatorParams.fromPartial(object.validator)
      : undefined;
    message.version = (object.version !== undefined && object.version !== null)
      ? VersionParams.fromPartial(object.version)
      : undefined;
    message.abci = (object.abci !== undefined && object.abci !== null)
      ? ABCIParams.fromPartial(object.abci)
      : undefined;
    return message;
  },
};

function createBaseBlockParams(): BlockParams {
  return { max_bytes: "0", max_gas: "0" };
}

export const BlockParams = {
  $type: "tendermint.types.BlockParams" as const,

  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_bytes !== "0") {
      writer.uint32(8).int64(message.max_bytes);
    }
    if (message.max_gas !== "0") {
      writer.uint32(16).int64(message.max_gas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.max_bytes = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max_gas = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockParams {
    return {
      max_bytes: isSet(object.max_bytes) ? globalThis.String(object.max_bytes) : "0",
      max_gas: isSet(object.max_gas) ? globalThis.String(object.max_gas) : "0",
    };
  },

  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    if (message.max_bytes !== undefined) {
      obj.max_bytes = message.max_bytes;
    }
    if (message.max_gas !== undefined) {
      obj.max_gas = message.max_gas;
    }
    return obj;
  },

  create(base?: DeepPartial<BlockParams>): BlockParams {
    return BlockParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.max_bytes = object.max_bytes ?? "0";
    message.max_gas = object.max_gas ?? "0";
    return message;
  },
};

function createBaseEvidenceParams(): EvidenceParams {
  return { max_age_num_blocks: "0", max_age_duration: undefined, max_bytes: "0" };
}

export const EvidenceParams = {
  $type: "tendermint.types.EvidenceParams" as const,

  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_age_num_blocks !== "0") {
      writer.uint32(8).int64(message.max_age_num_blocks);
    }
    if (message.max_age_duration !== undefined) {
      Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.max_bytes !== "0") {
      writer.uint32(24).int64(message.max_bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.max_age_num_blocks = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max_age_duration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_bytes = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EvidenceParams {
    return {
      max_age_num_blocks: isSet(object.max_age_num_blocks) ? globalThis.String(object.max_age_num_blocks) : "0",
      max_age_duration: isSet(object.max_age_duration) ? Duration.fromJSON(object.max_age_duration) : undefined,
      max_bytes: isSet(object.max_bytes) ? globalThis.String(object.max_bytes) : "0",
    };
  },

  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    if (message.max_age_num_blocks !== undefined) {
      obj.max_age_num_blocks = message.max_age_num_blocks;
    }
    if (message.max_age_duration !== undefined) {
      obj.max_age_duration = Duration.toJSON(message.max_age_duration);
    }
    if (message.max_bytes !== undefined) {
      obj.max_bytes = message.max_bytes;
    }
    return obj;
  },

  create(base?: DeepPartial<EvidenceParams>): EvidenceParams {
    return EvidenceParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.max_age_num_blocks = object.max_age_num_blocks ?? "0";
    message.max_age_duration = (object.max_age_duration !== undefined && object.max_age_duration !== null)
      ? Duration.fromPartial(object.max_age_duration)
      : undefined;
    message.max_bytes = object.max_bytes ?? "0";
    return message;
  },
};

function createBaseValidatorParams(): ValidatorParams {
  return { pub_key_types: [] };
}

export const ValidatorParams = {
  $type: "tendermint.types.ValidatorParams" as const,

  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pub_key_types) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pub_key_types.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorParams {
    return {
      pub_key_types: globalThis.Array.isArray(object?.pub_key_types)
        ? object.pub_key_types.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pub_key_types?.length) {
      obj.pub_key_types = message.pub_key_types;
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorParams>): ValidatorParams {
    return ValidatorParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pub_key_types = object.pub_key_types?.map((e) => e) || [];
    return message;
  },
};

function createBaseVersionParams(): VersionParams {
  return { app: "0" };
}

export const VersionParams = {
  $type: "tendermint.types.VersionParams" as const,

  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app !== "0") {
      writer.uint32(8).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.app = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersionParams {
    return { app: isSet(object.app) ? globalThis.String(object.app) : "0" };
  },

  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    if (message.app !== undefined) {
      obj.app = message.app;
    }
    return obj;
  },

  create(base?: DeepPartial<VersionParams>): VersionParams {
    return VersionParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.app = object.app ?? "0";
    return message;
  },
};

function createBaseHashedParams(): HashedParams {
  return { block_max_bytes: "0", block_max_gas: "0" };
}

export const HashedParams = {
  $type: "tendermint.types.HashedParams" as const,

  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block_max_bytes !== "0") {
      writer.uint32(8).int64(message.block_max_bytes);
    }
    if (message.block_max_gas !== "0") {
      writer.uint32(16).int64(message.block_max_gas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.block_max_bytes = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.block_max_gas = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HashedParams {
    return {
      block_max_bytes: isSet(object.block_max_bytes) ? globalThis.String(object.block_max_bytes) : "0",
      block_max_gas: isSet(object.block_max_gas) ? globalThis.String(object.block_max_gas) : "0",
    };
  },

  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    if (message.block_max_bytes !== undefined) {
      obj.block_max_bytes = message.block_max_bytes;
    }
    if (message.block_max_gas !== undefined) {
      obj.block_max_gas = message.block_max_gas;
    }
    return obj;
  },

  create(base?: DeepPartial<HashedParams>): HashedParams {
    return HashedParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.block_max_bytes = object.block_max_bytes ?? "0";
    message.block_max_gas = object.block_max_gas ?? "0";
    return message;
  },
};

function createBaseABCIParams(): ABCIParams {
  return { vote_extensions_enable_height: "0" };
}

export const ABCIParams = {
  $type: "tendermint.types.ABCIParams" as const,

  encode(message: ABCIParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote_extensions_enable_height !== "0") {
      writer.uint32(8).int64(message.vote_extensions_enable_height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vote_extensions_enable_height = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ABCIParams {
    return {
      vote_extensions_enable_height: isSet(object.vote_extensions_enable_height)
        ? globalThis.String(object.vote_extensions_enable_height)
        : "0",
    };
  },

  toJSON(message: ABCIParams): unknown {
    const obj: any = {};
    if (message.vote_extensions_enable_height !== undefined) {
      obj.vote_extensions_enable_height = message.vote_extensions_enable_height;
    }
    return obj;
  },

  create(base?: DeepPartial<ABCIParams>): ABCIParams {
    return ABCIParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ABCIParams>): ABCIParams {
    const message = createBaseABCIParams();
    message.vote_extensions_enable_height = object.vote_extensions_enable_height ?? "0";
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
