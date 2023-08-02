/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { DecCoin } from "../../base/v1beta1/coin";
import {
  DelegationDelegatorReward,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent,
} from "./distribution";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponse {
  /** operator_address defines the validator operator address. */
  operatorAddress: string;
  /** self_bond_rewards defines the self delegations rewards. */
  selfBondRewards: DecCoin[];
  /** commission defines the commission the validator received. */
  commission: DecCoin[];
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards | undefined;
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commission the validator received. */
  commission: ValidatorAccumulatedCommission | undefined;
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: string;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  $type: "cosmos.distribution.v1beta1.QueryParamsRequest" as const,

  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  $type: "cosmos.distribution.v1beta1.QueryParamsResponse" as const,

  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorDistributionInfoRequest(): QueryValidatorDistributionInfoRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorDistributionInfoRequest = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest" as const,

  encode(message: QueryValidatorDistributionInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDistributionInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDistributionInfoRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorDistributionInfoRequest): unknown {
    const obj: any = {};
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDistributionInfoRequest>): QueryValidatorDistributionInfoRequest {
    return QueryValidatorDistributionInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorDistributionInfoRequest>): QueryValidatorDistributionInfoRequest {
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorDistributionInfoResponse(): QueryValidatorDistributionInfoResponse {
  return { operatorAddress: "", selfBondRewards: [], commission: [] };
}

export const QueryValidatorDistributionInfoResponse = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse" as const,

  encode(message: QueryValidatorDistributionInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDistributionInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selfBondRewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDistributionInfoResponse {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      selfBondRewards: Array.isArray(object?.selfBondRewards)
        ? object.selfBondRewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryValidatorDistributionInfoResponse): unknown {
    const obj: any = {};
    if (message.operatorAddress !== "") {
      obj.operatorAddress = message.operatorAddress;
    }
    if (message.selfBondRewards?.length) {
      obj.selfBondRewards = message.selfBondRewards.map((e) => DecCoin.toJSON(e));
    }
    if (message.commission?.length) {
      obj.commission = message.commission.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDistributionInfoResponse>): QueryValidatorDistributionInfoResponse {
    return QueryValidatorDistributionInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorDistributionInfoResponse>): QueryValidatorDistributionInfoResponse {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = object.operatorAddress ?? "";
    message.selfBondRewards = object.selfBondRewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorOutstandingRewardsRequest = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest" as const,

  encode(message: QueryValidatorOutstandingRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return { rewards: undefined };
}

export const QueryValidatorOutstandingRewardsResponse = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse" as const,

  encode(message: QueryValidatorOutstandingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    return { rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined };
  },

  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards !== undefined) {
      obj.rewards = ValidatorOutstandingRewards.toJSON(message.rewards);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = (object.rewards !== undefined && object.rewards !== null)
      ? ValidatorOutstandingRewards.fromPartial(object.rewards)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorCommissionRequest = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest" as const,

  encode(message: QueryValidatorCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return { commission: undefined };
}

export const QueryValidatorCommissionResponse = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse" as const,

  encode(message: QueryValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionResponse {
    return {
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined,
    };
  },

  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    if (message.commission !== undefined) {
      obj.commission = ValidatorAccumulatedCommission.toJSON(message.commission);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = (object.commission !== undefined && object.commission !== null)
      ? ValidatorAccumulatedCommission.fromPartial(object.commission)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return { validatorAddress: "", startingHeight: "0", endingHeight: "0", pagination: undefined };
}

export const QueryValidatorSlashesRequest = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest" as const,

  encode(message: QueryValidatorSlashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== "0") {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== "0") {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startingHeight = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endingHeight = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSlashesRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      startingHeight: isSet(object.startingHeight) ? String(object.startingHeight) : "0",
      endingHeight: isSet(object.endingHeight) ? String(object.endingHeight) : "0",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    if (message.startingHeight !== "0") {
      obj.startingHeight = message.startingHeight;
    }
    if (message.endingHeight !== "0") {
      obj.endingHeight = message.endingHeight;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingHeight = object.startingHeight ?? "0";
    message.endingHeight = object.endingHeight ?? "0";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return { slashes: [], pagination: undefined };
}

export const QueryValidatorSlashesResponse = {
  $type: "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse" as const,

  encode(message: QueryValidatorSlashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorSlashesResponse {
    return {
      slashes: Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes?.length) {
      obj.slashes = message.slashes.map((e) => ValidatorSlashEvent.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return { delegatorAddress: "", validatorAddress: "" };
}

export const QueryDelegationRewardsRequest = {
  $type: "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest" as const,

  encode(message: QueryDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.validatorAddress !== "") {
      obj.validatorAddress = message.validatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return { rewards: [] };
}

export const QueryDelegationRewardsResponse = {
  $type: "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse" as const,

  encode(message: QueryDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsResponse {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegationTotalRewardsRequest = {
  $type: "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest" as const,

  encode(message: QueryDelegationTotalRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return { rewards: [], total: [] };
}

export const QueryDelegationTotalRewardsResponse = {
  $type: "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse" as const,

  encode(message: QueryDelegationTotalRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.total.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e))
        : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => DelegationDelegatorReward.toJSON(e));
    }
    if (message.total?.length) {
      obj.total = message.total.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegatorValidatorsRequest = {
  $type: "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest" as const,

  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return { validators: [] };
}

export const QueryDelegatorValidatorsResponse = {
  $type: "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse" as const,

  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return { validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators?.length) {
      obj.validators = message.validators;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegatorWithdrawAddressRequest = {
  $type: "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest" as const,

  encode(message: QueryDelegatorWithdrawAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return { withdrawAddress: "" };
}

export const QueryDelegatorWithdrawAddressResponse = {
  $type: "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse" as const,

  encode(message: QueryDelegatorWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return { withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "" };
  },

  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    if (message.withdrawAddress !== "") {
      obj.withdrawAddress = message.withdrawAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}

export const QueryCommunityPoolRequest = {
  $type: "cosmos.distribution.v1beta1.QueryCommunityPoolRequest" as const,

  encode(_: QueryCommunityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryCommunityPoolRequest {
    return {};
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return { pool: [] };
}

export const QueryCommunityPoolResponse = {
  $type: "cosmos.distribution.v1beta1.QueryCommunityPoolResponse" as const,

  encode(message: QueryCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    return { pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool?.length) {
      obj.pool = message.pool.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo(
    request: DeepPartial<QueryValidatorDistributionInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  DelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCommunityPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorDistributionInfo = this.ValidatorDistributionInfo.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  ValidatorDistributionInfo(
    request: DeepPartial<QueryValidatorDistributionInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDistributionInfoResponse> {
    return this.rpc.unary(
      QueryValidatorDistributionInfoDesc,
      QueryValidatorDistributionInfoRequest.fromPartial(request),
      metadata,
    );
  }

  ValidatorOutstandingRewards(
    request: DeepPartial<QueryValidatorOutstandingRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    return this.rpc.unary(
      QueryValidatorOutstandingRewardsDesc,
      QueryValidatorOutstandingRewardsRequest.fromPartial(request),
      metadata,
    );
  }

  ValidatorCommission(
    request: DeepPartial<QueryValidatorCommissionRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorCommissionResponse> {
    return this.rpc.unary(QueryValidatorCommissionDesc, QueryValidatorCommissionRequest.fromPartial(request), metadata);
  }

  ValidatorSlashes(
    request: DeepPartial<QueryValidatorSlashesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorSlashesResponse> {
    return this.rpc.unary(QueryValidatorSlashesDesc, QueryValidatorSlashesRequest.fromPartial(request), metadata);
  }

  DelegationRewards(
    request: DeepPartial<QueryDelegationRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationRewardsResponse> {
    return this.rpc.unary(QueryDelegationRewardsDesc, QueryDelegationRewardsRequest.fromPartial(request), metadata);
  }

  DelegationTotalRewards(
    request: DeepPartial<QueryDelegationTotalRewardsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    return this.rpc.unary(
      QueryDelegationTotalRewardsDesc,
      QueryDelegationTotalRewardsRequest.fromPartial(request),
      metadata,
    );
  }

  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }

  DelegatorWithdrawAddress(
    request: DeepPartial<QueryDelegatorWithdrawAddressRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    return this.rpc.unary(
      QueryDelegatorWithdrawAddressDesc,
      QueryDelegatorWithdrawAddressRequest.fromPartial(request),
      metadata,
    );
  }

  CommunityPool(
    request: DeepPartial<QueryCommunityPoolRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCommunityPoolResponse> {
    return this.rpc.unary(QueryCommunityPoolDesc, QueryCommunityPoolRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmos.distribution.v1beta1.Query" };

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryParamsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorDistributionInfoDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorDistributionInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorDistributionInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorDistributionInfoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorOutstandingRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorOutstandingRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorOutstandingRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorOutstandingRewardsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorCommissionDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorCommission",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorCommissionRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorCommissionResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorSlashesDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorSlashes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorSlashesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorSlashesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegationRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegationRewardsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegationTotalRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationTotalRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegationTotalRewardsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegationTotalRewardsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorValidators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorValidatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorValidatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorWithdrawAddressDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorWithdrawAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorWithdrawAddressRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorWithdrawAddressResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryCommunityPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CommunityPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCommunityPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCommunityPoolResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}