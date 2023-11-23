/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { LightBlock, Vote } from "./types";
import { Validator } from "./validator";

export interface Evidence {
  duplicate_vote_evidence?: DuplicateVoteEvidence | undefined;
  light_client_attack_evidence?: LightClientAttackEvidence | undefined;
}

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  vote_a: Vote | undefined;
  vote_b: Vote | undefined;
  total_voting_power: string;
  validator_power: string;
  timestamp: Date | undefined;
}

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflicting_block: LightBlock | undefined;
  common_height: string;
  byzantine_validators: Validator[];
  total_voting_power: string;
  timestamp: Date | undefined;
}

export interface EvidenceList {
  evidence: Evidence[];
}

function createBaseEvidence(): Evidence {
  return { duplicate_vote_evidence: undefined, light_client_attack_evidence: undefined };
}

export const Evidence = {
  $type: "tendermint.types.Evidence" as const,

  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Evidence {
    return {
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence)
        ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence)
        : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence)
        ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence)
        : undefined,
    };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    if (message.duplicate_vote_evidence !== undefined) {
      obj.duplicate_vote_evidence = DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence);
    }
    if (message.light_client_attack_evidence !== undefined) {
      obj.light_client_attack_evidence = LightClientAttackEvidence.toJSON(message.light_client_attack_evidence);
    }
    return obj;
  },

  create(base?: DeepPartial<Evidence>): Evidence {
    return Evidence.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicate_vote_evidence =
      (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null)
        ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence)
        : undefined;
    message.light_client_attack_evidence =
      (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null)
        ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence)
        : undefined;
    return message;
  },
};

function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return { vote_a: undefined, vote_b: undefined, total_voting_power: "0", validator_power: "0", timestamp: undefined };
}

export const DuplicateVoteEvidence = {
  $type: "tendermint.types.DuplicateVoteEvidence" as const,

  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote_a !== undefined) {
      Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_b !== undefined) {
      Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }
    if (message.total_voting_power !== "0") {
      writer.uint32(24).int64(message.total_voting_power);
    }
    if (message.validator_power !== "0") {
      writer.uint32(32).int64(message.validator_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vote_a = Vote.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vote_b = Vote.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_voting_power = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.validator_power = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      vote_a: isSet(object.vote_a) ? Vote.fromJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? globalThis.String(object.total_voting_power) : "0",
      validator_power: isSet(object.validator_power) ? globalThis.String(object.validator_power) : "0",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    if (message.vote_a !== undefined) {
      obj.vote_a = Vote.toJSON(message.vote_a);
    }
    if (message.vote_b !== undefined) {
      obj.vote_b = Vote.toJSON(message.vote_b);
    }
    if (message.total_voting_power !== "0") {
      obj.total_voting_power = message.total_voting_power;
    }
    if (message.validator_power !== "0") {
      obj.validator_power = message.validator_power;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.vote_a = (object.vote_a !== undefined && object.vote_a !== null)
      ? Vote.fromPartial(object.vote_a)
      : undefined;
    message.vote_b = (object.vote_b !== undefined && object.vote_b !== null)
      ? Vote.fromPartial(object.vote_b)
      : undefined;
    message.total_voting_power = object.total_voting_power ?? "0";
    message.validator_power = object.validator_power ?? "0";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflicting_block: undefined,
    common_height: "0",
    byzantine_validators: [],
    total_voting_power: "0",
    timestamp: undefined,
  };
}

export const LightClientAttackEvidence = {
  $type: "tendermint.types.LightClientAttackEvidence" as const,

  encode(message: LightClientAttackEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflicting_block !== undefined) {
      LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }
    if (message.common_height !== "0") {
      writer.uint32(16).int64(message.common_height);
    }
    for (const v of message.byzantine_validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.total_voting_power !== "0") {
      writer.uint32(32).int64(message.total_voting_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.common_height = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total_voting_power = longToString(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? globalThis.String(object.common_height) : "0",
      byzantine_validators: globalThis.Array.isArray(object?.byzantine_validators)
        ? object.byzantine_validators.map((e: any) => Validator.fromJSON(e))
        : [],
      total_voting_power: isSet(object.total_voting_power) ? globalThis.String(object.total_voting_power) : "0",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    if (message.conflicting_block !== undefined) {
      obj.conflicting_block = LightBlock.toJSON(message.conflicting_block);
    }
    if (message.common_height !== "0") {
      obj.common_height = message.common_height;
    }
    if (message.byzantine_validators?.length) {
      obj.byzantine_validators = message.byzantine_validators.map((e) => Validator.toJSON(e));
    }
    if (message.total_voting_power !== "0") {
      obj.total_voting_power = message.total_voting_power;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    return LightClientAttackEvidence.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflicting_block = (object.conflicting_block !== undefined && object.conflicting_block !== null)
      ? LightBlock.fromPartial(object.conflicting_block)
      : undefined;
    message.common_height = object.common_height ?? "0";
    message.byzantine_validators = object.byzantine_validators?.map((e) => Validator.fromPartial(e)) || [];
    message.total_voting_power = object.total_voting_power ?? "0";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseEvidenceList(): EvidenceList {
  return { evidence: [] };
}

export const EvidenceList = {
  $type: "tendermint.types.EvidenceList" as const,

  encode(message: EvidenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EvidenceList {
    return {
      evidence: globalThis.Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : [],
    };
  },

  toJSON(message: EvidenceList): unknown {
    const obj: any = {};
    if (message.evidence?.length) {
      obj.evidence = message.evidence.map((e) => Evidence.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<EvidenceList>): EvidenceList {
    return EvidenceList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
