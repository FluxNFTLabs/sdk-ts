/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { Header } from "../../../tendermint/types/types";
import { Coin } from "../../base/v1beta1/coin";

/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}

export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Infraction indicates the infraction a validator commited. */
export enum Infraction {
  /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
  INFRACTION_UNSPECIFIED = 0,
  /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
  INFRACTION_DOUBLE_SIGN = 1,
  /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
  INFRACTION_DOWNTIME = 2,
  UNRECOGNIZED = -1,
}

export function infractionFromJSON(object: any): Infraction {
  switch (object) {
    case 0:
    case "INFRACTION_UNSPECIFIED":
      return Infraction.INFRACTION_UNSPECIFIED;
    case 1:
    case "INFRACTION_DOUBLE_SIGN":
      return Infraction.INFRACTION_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_DOWNTIME":
      return Infraction.INFRACTION_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Infraction.UNRECOGNIZED;
  }
}

export function infractionToJSON(object: Infraction): string {
  switch (object) {
    case Infraction.INFRACTION_UNSPECIFIED:
      return "INFRACTION_UNSPECIFIED";
    case Infraction.INFRACTION_DOUBLE_SIGN:
      return "INFRACTION_DOUBLE_SIGN";
    case Infraction.INFRACTION_DOWNTIME:
      return "INFRACTION_DOWNTIME";
    case Infraction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header | undefined;
  valset: Validator[];
}

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate: string;
}

/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates:
    | CommissionRates
    | undefined;
  /** update_time is the last time the commission rate was changed. */
  update_time: Date | undefined;
}

/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  security_contact: string;
  /** details define other optional details. */
  details: string;
}

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensus_pubkey:
    | Any
    | undefined;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares: string;
  /** description defines the description terms for the validator. */
  description:
    | Description
    | undefined;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbonding_height: string;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbonding_time:
    | Date
    | undefined;
  /** commission defines the commission parameters. */
  commission:
    | Commission
    | undefined;
  /**
   * min_self_delegation is the validator's self declared minimum self delegation.
   *
   * Since: cosmos-sdk 0.46
   */
  min_self_delegation: string;
  /** strictly positive if this validator's unbonding has been stopped by external modules */
  unbonding_on_hold_ref_count: string;
  /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
  unbonding_ids: string[];
}

/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegator_address: string;
  validator_address: string;
}

/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
}

/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** shares define the delegation shares received. */
  shares: string;
}

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validator_address: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creation_height: string;
  /** completion_time is the unix time for unbonding completion. */
  completion_time:
    | Date
    | undefined;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
  /** Incrementing id that uniquely identifies this entry */
  unbonding_id: string;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbonding_on_hold_ref_count: string;
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creation_height: string;
  /** completion_time defines the unix time for redelegation completion. */
  completion_time:
    | Date
    | undefined;
  /** initial_balance defines the initial balance when redelegation started. */
  initial_balance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  shares_dst: string;
  /** Incrementing id that uniquely identifies this entry */
  unbonding_id: string;
  /** Strictly positive if this entry's unbonding has been stopped by external modules */
  unbonding_on_hold_ref_count: string;
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validator_src_address: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validator_dst_address: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}

/** Params defines the parameters for the x/staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time:
    | Duration
    | undefined;
  /** max_validators is the maximum number of validators. */
  max_validators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  max_entries: number;
  /** historical_entries is the number of historical entries to persist. */
  historical_entries: number;
  /** bond_denom defines the bondable coin denomination. */
  bond_denom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  min_commission_rate: string;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation | undefined;
  balance: Coin | undefined;
}

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegation_entry: RedelegationEntry | undefined;
  balance: string;
}

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation | undefined;
  entries: RedelegationEntryResponse[];
}

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  not_bonded_tokens: string;
  bonded_tokens: string;
}

/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */
export interface ValidatorUpdates {
  updates: ValidatorUpdate[];
}

function createBaseHistoricalInfo(): HistoricalInfo {
  return { header: undefined, valset: [] };
}

export const HistoricalInfo = {
  $type: "cosmos.staking.v1beta1.HistoricalInfo" as const,

  encode(message: HistoricalInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valset.push(Validator.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoricalInfo {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromJSON(e)) : [],
    };
  },

  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = Header.toJSON(message.header);
    }
    if (message.valset?.length) {
      obj.valset = message.valset.map((e) => Validator.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<HistoricalInfo>): HistoricalInfo {
    return HistoricalInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommissionRates(): CommissionRates {
  return { rate: "", max_rate: "", max_change_rate: "" };
}

export const CommissionRates = {
  $type: "cosmos.staking.v1beta1.CommissionRates" as const,

  encode(message: CommissionRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.max_rate !== "") {
      writer.uint32(18).string(message.max_rate);
    }
    if (message.max_change_rate !== "") {
      writer.uint32(26).string(message.max_change_rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rate = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max_rate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.max_change_rate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommissionRates {
    return {
      rate: isSet(object.rate) ? String(object.rate) : "",
      max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
      max_change_rate: isSet(object.max_change_rate) ? String(object.max_change_rate) : "",
    };
  },

  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    if (message.rate !== "") {
      obj.rate = message.rate;
    }
    if (message.max_rate !== "") {
      obj.max_rate = message.max_rate;
    }
    if (message.max_change_rate !== "") {
      obj.max_change_rate = message.max_change_rate;
    }
    return obj;
  },

  create(base?: DeepPartial<CommissionRates>): CommissionRates {
    return CommissionRates.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = createBaseCommissionRates();
    message.rate = object.rate ?? "";
    message.max_rate = object.max_rate ?? "";
    message.max_change_rate = object.max_change_rate ?? "";
    return message;
  },
};

function createBaseCommission(): Commission {
  return { commission_rates: undefined, update_time: undefined };
}

export const Commission = {
  $type: "cosmos.staking.v1beta1.Commission" as const,

  encode(message: Commission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission_rates !== undefined) {
      CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(toTimestamp(message.update_time), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commission_rates = CommissionRates.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Commission {
    return {
      commission_rates: isSet(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
    };
  },

  toJSON(message: Commission): unknown {
    const obj: any = {};
    if (message.commission_rates !== undefined) {
      obj.commission_rates = CommissionRates.toJSON(message.commission_rates);
    }
    if (message.update_time !== undefined) {
      obj.update_time = message.update_time.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Commission>): Commission {
    return Commission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = createBaseCommission();
    message.commission_rates = (object.commission_rates !== undefined && object.commission_rates !== null)
      ? CommissionRates.fromPartial(object.commission_rates)
      : undefined;
    message.update_time = object.update_time ?? undefined;
    return message;
  },
};

function createBaseDescription(): Description {
  return { moniker: "", identity: "", website: "", security_contact: "", details: "" };
}

export const Description = {
  $type: "cosmos.staking.v1beta1.Description" as const,

  encode(message: Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.security_contact !== "") {
      writer.uint32(34).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moniker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.website = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.security_contact = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.details = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Description {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : "",
    };
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.security_contact !== "") {
      obj.security_contact = message.security_contact;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create(base?: DeepPartial<Description>): Description {
    return Description.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Description>): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseValidator(): Validator {
  return {
    operator_address: "",
    consensus_pubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegator_shares: "",
    description: undefined,
    unbonding_height: "0",
    unbonding_time: undefined,
    commission: undefined,
    min_self_delegation: "",
    unbonding_on_hold_ref_count: "0",
    unbonding_ids: [],
  };
}

export const Validator = {
  $type: "cosmos.staking.v1beta1.Validator" as const,

  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator_address !== "") {
      writer.uint32(10).string(message.operator_address);
    }
    if (message.consensus_pubkey !== undefined) {
      Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegator_shares !== "") {
      writer.uint32(50).string(message.delegator_shares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbonding_height !== "0") {
      writer.uint32(64).int64(message.unbonding_height);
    }
    if (message.unbonding_time !== undefined) {
      Timestamp.encode(toTimestamp(message.unbonding_time), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.min_self_delegation !== "") {
      writer.uint32(90).string(message.min_self_delegation);
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      writer.uint32(96).int64(message.unbonding_on_hold_ref_count);
    }
    writer.uint32(106).fork();
    for (const v of message.unbonding_ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.consensus_pubkey = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.jailed = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokens = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.delegator_shares = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = Description.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.unbonding_height = longToString(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.unbonding_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.commission = Commission.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.min_self_delegation = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.unbonding_on_hold_ref_count = longToString(reader.int64() as Long);
          continue;
        case 13:
          if (tag === 104) {
            message.unbonding_ids.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbonding_ids.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
      consensus_pubkey: isSet(object.consensus_pubkey) ? Any.fromJSON(object.consensus_pubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbonding_height: isSet(object.unbonding_height) ? String(object.unbonding_height) : "0",
      unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count)
        ? String(object.unbonding_on_hold_ref_count)
        : "0",
      unbonding_ids: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    if (message.operator_address !== "") {
      obj.operator_address = message.operator_address;
    }
    if (message.consensus_pubkey !== undefined) {
      obj.consensus_pubkey = Any.toJSON(message.consensus_pubkey);
    }
    if (message.jailed === true) {
      obj.jailed = message.jailed;
    }
    if (message.status !== 0) {
      obj.status = bondStatusToJSON(message.status);
    }
    if (message.tokens !== "") {
      obj.tokens = message.tokens;
    }
    if (message.delegator_shares !== "") {
      obj.delegator_shares = message.delegator_shares;
    }
    if (message.description !== undefined) {
      obj.description = Description.toJSON(message.description);
    }
    if (message.unbonding_height !== "0") {
      obj.unbonding_height = message.unbonding_height;
    }
    if (message.unbonding_time !== undefined) {
      obj.unbonding_time = message.unbonding_time.toISOString();
    }
    if (message.commission !== undefined) {
      obj.commission = Commission.toJSON(message.commission);
    }
    if (message.min_self_delegation !== "") {
      obj.min_self_delegation = message.min_self_delegation;
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count;
    }
    if (message.unbonding_ids?.length) {
      obj.unbonding_ids = message.unbonding_ids;
    }
    return obj;
  },

  create(base?: DeepPartial<Validator>): Validator {
    return Validator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.operator_address = object.operator_address ?? "";
    message.consensus_pubkey = (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null)
      ? Any.fromPartial(object.consensus_pubkey)
      : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegator_shares = object.delegator_shares ?? "";
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.unbonding_height = object.unbonding_height ?? "0";
    message.unbonding_time = object.unbonding_time ?? undefined;
    message.commission = (object.commission !== undefined && object.commission !== null)
      ? Commission.fromPartial(object.commission)
      : undefined;
    message.min_self_delegation = object.min_self_delegation ?? "";
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count ?? "0";
    message.unbonding_ids = object.unbonding_ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseValAddresses(): ValAddresses {
  return { addresses: [] };
}

export const ValAddresses = {
  $type: "cosmos.staking.v1beta1.ValAddresses" as const,

  encode(message: ValAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValAddresses {
    return { addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses?.length) {
      obj.addresses = message.addresses;
    }
    return obj;
  },

  create(base?: DeepPartial<ValAddresses>): ValAddresses {
    return ValAddresses.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseDVPair(): DVPair {
  return { delegator_address: "", validator_address: "" };
}

export const DVPair = {
  $type: "cosmos.staking.v1beta1.DVPair" as const,

  encode(message: DVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DVPair {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
    };
  },

  toJSON(message: DVPair): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    return obj;
  },

  create(base?: DeepPartial<DVPair>): DVPair {
    return DVPair.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = createBaseDVPair();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  },
};

function createBaseDVPairs(): DVPairs {
  return { pairs: [] };
}

export const DVPairs = {
  $type: "cosmos.staking.v1beta1.DVPairs" as const,

  encode(message: DVPairs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DVPairs {
    return { pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromJSON(e)) : [] };
  },

  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs?.length) {
      obj.pairs = message.pairs.map((e) => DVPair.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DVPairs>): DVPairs {
    return DVPairs.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDVVTriplet(): DVVTriplet {
  return { delegator_address: "", validator_src_address: "", validator_dst_address: "" };
}

export const DVVTriplet = {
  $type: "cosmos.staking.v1beta1.DVVTriplet" as const,

  encode(message: DVVTriplet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
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

          message.validator_src_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validator_dst_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DVVTriplet {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
    };
  },

  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_src_address !== "") {
      obj.validator_src_address = message.validator_src_address;
    }
    if (message.validator_dst_address !== "") {
      obj.validator_dst_address = message.validator_dst_address;
    }
    return obj;
  },

  create(base?: DeepPartial<DVVTriplet>): DVVTriplet {
    return DVVTriplet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    return message;
  },
};

function createBaseDVVTriplets(): DVVTriplets {
  return { triplets: [] };
}

export const DVVTriplets = {
  $type: "cosmos.staking.v1beta1.DVVTriplets" as const,

  encode(message: DVVTriplets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DVVTriplets {
    return { triplets: Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e)) : [] };
  },

  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets?.length) {
      obj.triplets = message.triplets.map((e) => DVVTriplet.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DVVTriplets>): DVVTriplets {
    return DVVTriplets.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets = object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegation(): Delegation {
  return { delegator_address: "", validator_address: "", shares: "" };
}

export const Delegation = {
  $type: "cosmos.staking.v1beta1.Delegation" as const,

  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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

          message.shares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<Delegation>): Delegation {
    return Delegation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseUnbondingDelegation(): UnbondingDelegation {
  return { delegator_address: "", validator_address: "", entries: [] };
}

export const UnbondingDelegation = {
  $type: "cosmos.staking.v1beta1.UnbondingDelegation" as const,

  encode(message: UnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
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

          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => UnbondingDelegationEntry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    return UnbondingDelegation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creation_height: "0",
    completion_time: undefined,
    initial_balance: "",
    balance: "",
    unbonding_id: "0",
    unbonding_on_hold_ref_count: "0",
  };
}

export const UnbondingDelegationEntry = {
  $type: "cosmos.staking.v1beta1.UnbondingDelegationEntry" as const,

  encode(message: UnbondingDelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creation_height !== "0") {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.unbonding_id !== "0") {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.creation_height = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initial_balance = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balance = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unbonding_id = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.unbonding_on_hold_ref_count = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegationEntry {
    return {
      creation_height: isSet(object.creation_height) ? String(object.creation_height) : "0",
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      unbonding_id: isSet(object.unbonding_id) ? String(object.unbonding_id) : "0",
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count)
        ? String(object.unbonding_on_hold_ref_count)
        : "0",
    };
  },

  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    if (message.creation_height !== "0") {
      obj.creation_height = message.creation_height;
    }
    if (message.completion_time !== undefined) {
      obj.completion_time = message.completion_time.toISOString();
    }
    if (message.initial_balance !== "") {
      obj.initial_balance = message.initial_balance;
    }
    if (message.balance !== "") {
      obj.balance = message.balance;
    }
    if (message.unbonding_id !== "0") {
      obj.unbonding_id = message.unbonding_id;
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count;
    }
    return obj;
  },

  create(base?: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creation_height = object.creation_height ?? "0";
    message.completion_time = object.completion_time ?? undefined;
    message.initial_balance = object.initial_balance ?? "";
    message.balance = object.balance ?? "";
    message.unbonding_id = object.unbonding_id ?? "0";
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count ?? "0";
    return message;
  },
};

function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creation_height: "0",
    completion_time: undefined,
    initial_balance: "",
    shares_dst: "",
    unbonding_id: "0",
    unbonding_on_hold_ref_count: "0",
  };
}

export const RedelegationEntry = {
  $type: "cosmos.staking.v1beta1.RedelegationEntry" as const,

  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creation_height !== "0") {
      writer.uint32(8).int64(message.creation_height);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).ldelim();
    }
    if (message.initial_balance !== "") {
      writer.uint32(26).string(message.initial_balance);
    }
    if (message.shares_dst !== "") {
      writer.uint32(34).string(message.shares_dst);
    }
    if (message.unbonding_id !== "0") {
      writer.uint32(40).uint64(message.unbonding_id);
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      writer.uint32(48).int64(message.unbonding_on_hold_ref_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.creation_height = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initial_balance = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.shares_dst = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.unbonding_id = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.unbonding_on_hold_ref_count = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    return {
      creation_height: isSet(object.creation_height) ? String(object.creation_height) : "0",
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      initial_balance: isSet(object.initial_balance) ? String(object.initial_balance) : "",
      shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : "",
      unbonding_id: isSet(object.unbonding_id) ? String(object.unbonding_id) : "0",
      unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count)
        ? String(object.unbonding_on_hold_ref_count)
        : "0",
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    if (message.creation_height !== "0") {
      obj.creation_height = message.creation_height;
    }
    if (message.completion_time !== undefined) {
      obj.completion_time = message.completion_time.toISOString();
    }
    if (message.initial_balance !== "") {
      obj.initial_balance = message.initial_balance;
    }
    if (message.shares_dst !== "") {
      obj.shares_dst = message.shares_dst;
    }
    if (message.unbonding_id !== "0") {
      obj.unbonding_id = message.unbonding_id;
    }
    if (message.unbonding_on_hold_ref_count !== "0") {
      obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count;
    }
    return obj;
  },

  create(base?: DeepPartial<RedelegationEntry>): RedelegationEntry {
    return RedelegationEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creation_height = object.creation_height ?? "0";
    message.completion_time = object.completion_time ?? undefined;
    message.initial_balance = object.initial_balance ?? "";
    message.shares_dst = object.shares_dst ?? "";
    message.unbonding_id = object.unbonding_id ?? "0";
    message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count ?? "0";
    return message;
  },
};

function createBaseRedelegation(): Redelegation {
  return { delegator_address: "", validator_src_address: "", validator_dst_address: "", entries: [] };
}

export const Redelegation = {
  $type: "cosmos.staking.v1beta1.Redelegation" as const,

  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_src_address !== "") {
      writer.uint32(18).string(message.validator_src_address);
    }
    if (message.validator_dst_address !== "") {
      writer.uint32(26).string(message.validator_dst_address);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
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

          message.validator_src_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validator_dst_address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
      validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    if (message.delegator_address !== "") {
      obj.delegator_address = message.delegator_address;
    }
    if (message.validator_src_address !== "") {
      obj.validator_src_address = message.validator_src_address;
    }
    if (message.validator_dst_address !== "") {
      obj.validator_dst_address = message.validator_dst_address;
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => RedelegationEntry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Redelegation>): Redelegation {
    return Redelegation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_src_address = object.validator_src_address ?? "";
    message.validator_dst_address = object.validator_dst_address ?? "";
    message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return {
    unbonding_time: undefined,
    max_validators: 0,
    max_entries: 0,
    historical_entries: 0,
    bond_denom: "",
    min_commission_rate: "",
  };
}

export const Params = {
  $type: "cosmos.staking.v1beta1.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbonding_time !== undefined) {
      Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_validators !== 0) {
      writer.uint32(16).uint32(message.max_validators);
    }
    if (message.max_entries !== 0) {
      writer.uint32(24).uint32(message.max_entries);
    }
    if (message.historical_entries !== 0) {
      writer.uint32(32).uint32(message.historical_entries);
    }
    if (message.bond_denom !== "") {
      writer.uint32(42).string(message.bond_denom);
    }
    if (message.min_commission_rate !== "") {
      writer.uint32(50).string(message.min_commission_rate);
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
          if (tag !== 10) {
            break;
          }

          message.unbonding_time = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max_validators = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_entries = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.historical_entries = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bond_denom = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.min_commission_rate = reader.string();
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
      unbonding_time: isSet(object.unbonding_time) ? Duration.fromJSON(object.unbonding_time) : undefined,
      max_validators: isSet(object.max_validators) ? Number(object.max_validators) : 0,
      max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
      historical_entries: isSet(object.historical_entries) ? Number(object.historical_entries) : 0,
      bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
      min_commission_rate: isSet(object.min_commission_rate) ? String(object.min_commission_rate) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.unbonding_time !== undefined) {
      obj.unbonding_time = Duration.toJSON(message.unbonding_time);
    }
    if (message.max_validators !== 0) {
      obj.max_validators = Math.round(message.max_validators);
    }
    if (message.max_entries !== 0) {
      obj.max_entries = Math.round(message.max_entries);
    }
    if (message.historical_entries !== 0) {
      obj.historical_entries = Math.round(message.historical_entries);
    }
    if (message.bond_denom !== "") {
      obj.bond_denom = message.bond_denom;
    }
    if (message.min_commission_rate !== "") {
      obj.min_commission_rate = message.min_commission_rate;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.unbonding_time = (object.unbonding_time !== undefined && object.unbonding_time !== null)
      ? Duration.fromPartial(object.unbonding_time)
      : undefined;
    message.max_validators = object.max_validators ?? 0;
    message.max_entries = object.max_entries ?? 0;
    message.historical_entries = object.historical_entries ?? 0;
    message.bond_denom = object.bond_denom ?? "";
    message.min_commission_rate = object.min_commission_rate ?? "";
    return message;
  },
};

function createBaseDelegationResponse(): DelegationResponse {
  return { delegation: undefined, balance: undefined };
}

export const DelegationResponse = {
  $type: "cosmos.staking.v1beta1.DelegationResponse" as const,

  encode(message: DelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegation = Delegation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    if (message.delegation !== undefined) {
      obj.delegation = Delegation.toJSON(message.delegation);
    }
    if (message.balance !== undefined) {
      obj.balance = Coin.toJSON(message.balance);
    }
    return obj;
  },

  create(base?: DeepPartial<DelegationResponse>): DelegationResponse {
    return DelegationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = (object.delegation !== undefined && object.delegation !== null)
      ? Delegation.fromPartial(object.delegation)
      : undefined;
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return { redelegation_entry: undefined, balance: "" };
}

export const RedelegationEntryResponse = {
  $type: "cosmos.staking.v1beta1.RedelegationEntryResponse" as const,

  encode(message: RedelegationEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegation_entry !== undefined) {
      RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntryResponse {
    return {
      redelegation_entry: isSet(object.redelegation_entry)
        ? RedelegationEntry.fromJSON(object.redelegation_entry)
        : undefined,
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    if (message.redelegation_entry !== undefined) {
      obj.redelegation_entry = RedelegationEntry.toJSON(message.redelegation_entry);
    }
    if (message.balance !== "") {
      obj.balance = message.balance;
    }
    return obj;
  },

  create(base?: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    return RedelegationEntryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegation_entry = (object.redelegation_entry !== undefined && object.redelegation_entry !== null)
      ? RedelegationEntry.fromPartial(object.redelegation_entry)
      : undefined;
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseRedelegationResponse(): RedelegationResponse {
  return { redelegation: undefined, entries: [] };
}

export const RedelegationResponse = {
  $type: "cosmos.staking.v1beta1.RedelegationResponse" as const,

  encode(message: RedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegation = Redelegation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegationResponse {
    return {
      redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    if (message.redelegation !== undefined) {
      obj.redelegation = Redelegation.toJSON(message.redelegation);
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => RedelegationEntryResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RedelegationResponse>): RedelegationResponse {
    return RedelegationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation = (object.redelegation !== undefined && object.redelegation !== null)
      ? Redelegation.fromPartial(object.redelegation)
      : undefined;
    message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBasePool(): Pool {
  return { not_bonded_tokens: "", bonded_tokens: "" };
}

export const Pool = {
  $type: "cosmos.staking.v1beta1.Pool" as const,

  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.not_bonded_tokens !== "") {
      writer.uint32(10).string(message.not_bonded_tokens);
    }
    if (message.bonded_tokens !== "") {
      writer.uint32(18).string(message.bonded_tokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.not_bonded_tokens = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bonded_tokens = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      not_bonded_tokens: isSet(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
      bonded_tokens: isSet(object.bonded_tokens) ? String(object.bonded_tokens) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    if (message.not_bonded_tokens !== "") {
      obj.not_bonded_tokens = message.not_bonded_tokens;
    }
    if (message.bonded_tokens !== "") {
      obj.bonded_tokens = message.bonded_tokens;
    }
    return obj;
  },

  create(base?: DeepPartial<Pool>): Pool {
    return Pool.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.not_bonded_tokens = object.not_bonded_tokens ?? "";
    message.bonded_tokens = object.bonded_tokens ?? "";
    return message;
  },
};

function createBaseValidatorUpdates(): ValidatorUpdates {
  return { updates: [] };
}

export const ValidatorUpdates = {
  $type: "cosmos.staking.v1beta1.ValidatorUpdates" as const,

  encode(message: ValidatorUpdates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorUpdates {
    return {
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
    };
  },

  toJSON(message: ValidatorUpdates): unknown {
    const obj: any = {};
    if (message.updates?.length) {
      obj.updates = message.updates.map((e) => ValidatorUpdate.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorUpdates>): ValidatorUpdates {
    return ValidatorUpdates.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorUpdates>): ValidatorUpdates {
    const message = createBaseValidatorUpdates();
    message.updates = object.updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
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
