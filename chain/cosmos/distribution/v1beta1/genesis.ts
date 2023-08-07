/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../base/v1beta1/coin";
import {
  DelegatorStartingInfo,
  FeePool,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorCurrentRewards,
  ValidatorHistoricalRewards,
  ValidatorSlashEvent,
} from "./distribution";

/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}

/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the outstanding rewards of a validator. */
  outstanding_rewards: DecCoin[];
}

/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission | undefined;
}

/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: string;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards | undefined;
}

/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards | undefined;
}

/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info: DelegatorStartingInfo | undefined;
}

/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occurred. */
  height: string;
  /** period is the period of the slash event. */
  period: string;
  /** validator_slash_event describes the slash event. */
  validator_slash_event: ValidatorSlashEvent | undefined;
}

/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params:
    | Params
    | undefined;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool:
    | FeePool
    | undefined;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commissions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecord[];
}

function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return { delegator_address: "", withdraw_address: "" };
}

export const DelegatorWithdrawInfo = {
  $type: "cosmos.distribution.v1beta1.DelegatorWithdrawInfo" as const,

  encode(message: DelegatorWithdrawInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.withdraw_address !== "") {
      writer.uint32(18).string(message.withdraw_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.withdraw_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegatorWithdrawInfo {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : "",
    };
  },

  toJSON(message: DelegatorWithdrawInfo): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.withdraw_address !== "") {
      obj.withdraw_address = message.withdraw_address;
    }
    return obj;
  },

  create(base?: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegator_address = object.delegator_address ?? "";
    message.withdraw_address = object.withdraw_address ?? "";
    return message;
  },
};

function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return { validator_address: "", outstanding_rewards: [] };
}

export const ValidatorOutstandingRewardsRecord = {
  $type: "cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord" as const,

  encode(message: ValidatorOutstandingRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.outstanding_rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorOutstandingRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards)
        ? object.outstanding_rewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorOutstandingRewardsRecord): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.outstanding_rewards?.length) {
      obj.outstanding_rewards = message.outstanding_rewards.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.outstanding_rewards = object.outstanding_rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return { validator_address: "", accumulated: undefined };
}

export const ValidatorAccumulatedCommissionRecord = {
  $type: "cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord" as const,

  encode(message: ValidatorAccumulatedCommissionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined,
    };
  },

  toJSON(message: ValidatorAccumulatedCommissionRecord): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.accumulated !== undefined) {
      obj.accumulated = ValidatorAccumulatedCommission.toJSON(message.accumulated);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validator_address = object.validator_address ?? "";
    message.accumulated = (object.accumulated !== undefined && object.accumulated !== null)
      ? ValidatorAccumulatedCommission.fromPartial(object.accumulated)
      : undefined;
    return message;
  },
};

function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return { validator_address: "", period: "0", rewards: undefined };
}

export const ValidatorHistoricalRewardsRecord = {
  $type: "cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord" as const,

  encode(message: ValidatorHistoricalRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.period !== "0") {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.period = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorHistoricalRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      period: isSet(object.period) ? String(object.period) : "0",
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined,
    };
  },

  toJSON(message: ValidatorHistoricalRewardsRecord): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.period !== "0") {
      obj.period = message.period;
    }
    if (message.rewards !== undefined) {
      obj.rewards = ValidatorHistoricalRewards.toJSON(message.rewards);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.period = object.period ?? "0";
    message.rewards = (object.rewards !== undefined && object.rewards !== null)
      ? ValidatorHistoricalRewards.fromPartial(object.rewards)
      : undefined;
    return message;
  },
};

function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return { validator_address: "", rewards: undefined };
}

export const ValidatorCurrentRewardsRecord = {
  $type: "cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord" as const,

  encode(message: ValidatorCurrentRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorCurrentRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined,
    };
  },

  toJSON(message: ValidatorCurrentRewardsRecord): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.rewards !== undefined) {
      obj.rewards = ValidatorCurrentRewards.toJSON(message.rewards);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.rewards = (object.rewards !== undefined && object.rewards !== null)
      ? ValidatorCurrentRewards.fromPartial(object.rewards)
      : undefined;
    return message;
  },
};

function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return { delegator_address: "", validator_address: "", starting_info: undefined };
}

export const DelegatorStartingInfoRecord = {
  $type: "cosmos.distribution.v1beta1.DelegatorStartingInfoRecord" as const,

  encode(message: DelegatorStartingInfoRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.starting_info !== undefined) {
      DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegatorStartingInfoRecord {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined,
    };
  },

  toJSON(message: DelegatorStartingInfoRecord): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.starting_info !== undefined) {
      obj.starting_info = DelegatorStartingInfo.toJSON(message.starting_info);
    }
    return obj;
  },

  create(base?: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.starting_info = (object.starting_info !== undefined && object.starting_info !== null)
      ? DelegatorStartingInfo.fromPartial(object.starting_info)
      : undefined;
    return message;
  },
};

function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return { validator_address: "", height: "0", period: "0", validator_slash_event: undefined };
}

export const ValidatorSlashEventRecord = {
  $type: "cosmos.distribution.v1beta1.ValidatorSlashEventRecord" as const,

  encode(message: ValidatorSlashEventRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.height !== "0") {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== "0") {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validator_slash_event !== undefined) {
      ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.period = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlashEventRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      height: isSet(object.height) ? String(object.height) : "0",
      period: isSet(object.period) ? String(object.period) : "0",
      validator_slash_event: isSet(object.validator_slash_event)
        ? ValidatorSlashEvent.fromJSON(object.validator_slash_event)
        : undefined,
    };
  },

  toJSON(message: ValidatorSlashEventRecord): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.period !== "0") {
      obj.period = message.period;
    }
    if (message.validator_slash_event !== undefined) {
      obj.validator_slash_event = ValidatorSlashEvent.toJSON(message.validator_slash_event);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validator_address = object.validator_address ?? "";
    message.height = object.height ?? "0";
    message.period = object.period ?? "0";
    message.validator_slash_event =
      (object.validator_slash_event !== undefined && object.validator_slash_event !== null)
        ? ValidatorSlashEvent.fromPartial(object.validator_slash_event)
        : undefined;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    fee_pool: undefined,
    delegator_withdraw_infos: [],
    previous_proposer: "",
    outstanding_rewards: [],
    validator_accumulated_commissions: [],
    validator_historical_rewards: [],
    validator_current_rewards: [],
    delegator_starting_infos: [],
    validator_slash_events: [],
  };
}

export const GenesisState = {
  $type: "cosmos.distribution.v1beta1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee_pool !== undefined) {
      FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegator_withdraw_infos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previous_proposer !== "") {
      writer.uint32(34).string(message.previous_proposer);
    }
    for (const v of message.outstanding_rewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validator_accumulated_commissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validator_historical_rewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validator_current_rewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegator_starting_infos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validator_slash_events) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
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

          message.fee_pool = FeePool.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.previous_proposer = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.validator_accumulated_commissions.push(
            ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
      fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos)
        ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e))
        : [],
      previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards)
        ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e))
        : [],
      validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions)
        ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e))
        : [],
      validator_historical_rewards: Array.isArray(object?.validator_historical_rewards)
        ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e))
        : [],
      validator_current_rewards: Array.isArray(object?.validator_current_rewards)
        ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e))
        : [],
      delegator_starting_infos: Array.isArray(object?.delegator_starting_infos)
        ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e))
        : [],
      validator_slash_events: Array.isArray(object?.validator_slash_events)
        ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.fee_pool !== undefined) {
      obj.fee_pool = FeePool.toJSON(message.fee_pool);
    }
    if (message.delegator_withdraw_infos?.length) {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map((e) => DelegatorWithdrawInfo.toJSON(e));
    }
    if (message.previous_proposer !== "") {
      obj.previous_proposer = message.previous_proposer;
    }
    if (message.outstanding_rewards?.length) {
      obj.outstanding_rewards = message.outstanding_rewards.map((e) => ValidatorOutstandingRewardsRecord.toJSON(e));
    }
    if (message.validator_accumulated_commissions?.length) {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map((e) =>
        ValidatorAccumulatedCommissionRecord.toJSON(e)
      );
    }
    if (message.validator_historical_rewards?.length) {
      obj.validator_historical_rewards = message.validator_historical_rewards.map((e) =>
        ValidatorHistoricalRewardsRecord.toJSON(e)
      );
    }
    if (message.validator_current_rewards?.length) {
      obj.validator_current_rewards = message.validator_current_rewards.map((e) =>
        ValidatorCurrentRewardsRecord.toJSON(e)
      );
    }
    if (message.delegator_starting_infos?.length) {
      obj.delegator_starting_infos = message.delegator_starting_infos.map((e) => DelegatorStartingInfoRecord.toJSON(e));
    }
    if (message.validator_slash_events?.length) {
      obj.validator_slash_events = message.validator_slash_events.map((e) => ValidatorSlashEventRecord.toJSON(e));
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
    message.fee_pool = (object.fee_pool !== undefined && object.fee_pool !== null)
      ? FeePool.fromPartial(object.fee_pool)
      : undefined;
    message.delegator_withdraw_infos =
      object.delegator_withdraw_infos?.map((e) => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previous_proposer = object.previous_proposer ?? "";
    message.outstanding_rewards =
      object.outstanding_rewards?.map((e) => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validator_accumulated_commissions =
      object.validator_accumulated_commissions?.map((e) => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validator_historical_rewards =
      object.validator_historical_rewards?.map((e) => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validator_current_rewards =
      object.validator_current_rewards?.map((e) => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegator_starting_infos =
      object.delegator_starting_infos?.map((e) => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validator_slash_events =
      object.validator_slash_events?.map((e) => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
};

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
