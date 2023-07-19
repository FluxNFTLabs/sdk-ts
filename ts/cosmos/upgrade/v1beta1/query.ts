/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ModuleVersion, Plan } from "./upgrade";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan: Plan | undefined;
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string;
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: string;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: string;
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateResponse {
  /** Since: cosmos-sdk 0.43 */
  upgradedConsensusState: Uint8Array;
}

/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  moduleName: string;
}

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
  /** module_versions is a list of module names with their consensus versions. */
  moduleVersions: ModuleVersion[];
}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
  address: string;
}

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}

export const QueryCurrentPlanRequest = {
  encode(_: QueryCurrentPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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

  fromJSON(_: any): QueryCurrentPlanRequest {
    return {};
  },

  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    return QueryCurrentPlanRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
};

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return { plan: undefined };
}

export const QueryCurrentPlanResponse = {
  encode(message: QueryCurrentPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plan = Plan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentPlanResponse {
    return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};
    if (message.plan !== undefined) {
      obj.plan = Plan.toJSON(message.plan);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    return QueryCurrentPlanResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return { name: "" };
}

export const QueryAppliedPlanRequest = {
  encode(message: QueryAppliedPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    return QueryAppliedPlanRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return { height: "0" };
}

export const QueryAppliedPlanResponse = {
  encode(message: QueryAppliedPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanResponse {
    return { height: isSet(object.height) ? String(object.height) : "0" };
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    return QueryAppliedPlanResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return { lastHeight: "0" };
}

export const QueryUpgradedConsensusStateRequest = {
  encode(message: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastHeight !== "0") {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lastHeight = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    return { lastHeight: isSet(object.lastHeight) ? String(object.lastHeight) : "0" };
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    if (message.lastHeight !== "0") {
      obj.lastHeight = message.lastHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = object.lastHeight ?? "0";
    return message;
  },
};

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return { upgradedConsensusState: new Uint8Array(0) };
}

export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.upgradedConsensusState = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: isSet(object.upgradedConsensusState)
        ? bytesFromBase64(object.upgradedConsensusState)
        : new Uint8Array(0),
    };
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    if (message.upgradedConsensusState.length !== 0) {
      obj.upgradedConsensusState = base64FromBytes(message.upgradedConsensusState);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return { moduleName: "" };
}

export const QueryModuleVersionsRequest = {
  encode(message: QueryModuleVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleVersionsRequest {
    return { moduleName: isSet(object.moduleName) ? String(object.moduleName) : "" };
  },

  toJSON(message: QueryModuleVersionsRequest): unknown {
    const obj: any = {};
    if (message.moduleName !== "") {
      obj.moduleName = message.moduleName;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    return QueryModuleVersionsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
};

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return { moduleVersions: [] };
}

export const QueryModuleVersionsResponse = {
  encode(message: QueryModuleVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleVersionsResponse {
    return {
      moduleVersions: Array.isArray(object?.moduleVersions)
        ? object.moduleVersions.map((e: any) => ModuleVersion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryModuleVersionsResponse): unknown {
    const obj: any = {};
    if (message.moduleVersions?.length) {
      obj.moduleVersions = message.moduleVersions.map((e) => ModuleVersion.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    return QueryModuleVersionsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map((e) => ModuleVersion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return {};
}

export const QueryAuthorityRequest = {
  encode(_: QueryAuthorityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();
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

  fromJSON(_: any): QueryAuthorityRequest {
    return {};
  },

  toJSON(_: QueryAuthorityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest {
    return QueryAuthorityRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
};

function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return { address: "" };
}

export const QueryAuthorityResponse = {
  encode(message: QueryAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorityResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAuthorityResponse): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse {
    return QueryAuthorityResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },
};

/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(
    request: DeepPartial<QueryCurrentPlanRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(
    request: DeepPartial<QueryAppliedPlanRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   *
   * @deprecated
   */
  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   *
   * Since: cosmos-sdk 0.43
   */
  ModuleVersions(
    request: DeepPartial<QueryModuleVersionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryModuleVersionsResponse>;
  /**
   * Returns the account with authority to conduct upgrades
   *
   * Since: cosmos-sdk 0.46
   */
  Authority(request: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.ModuleVersions = this.ModuleVersions.bind(this);
    this.Authority = this.Authority.bind(this);
  }

  CurrentPlan(
    request: DeepPartial<QueryCurrentPlanRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCurrentPlanResponse> {
    return this.rpc.unary(QueryCurrentPlanDesc, QueryCurrentPlanRequest.fromPartial(request), metadata);
  }

  AppliedPlan(
    request: DeepPartial<QueryAppliedPlanRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAppliedPlanResponse> {
    return this.rpc.unary(QueryAppliedPlanDesc, QueryAppliedPlanRequest.fromPartial(request), metadata);
  }

  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(
      QueryUpgradedConsensusStateDesc,
      QueryUpgradedConsensusStateRequest.fromPartial(request),
      metadata,
    );
  }

  ModuleVersions(
    request: DeepPartial<QueryModuleVersionsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryModuleVersionsResponse> {
    return this.rpc.unary(QueryModuleVersionsDesc, QueryModuleVersionsRequest.fromPartial(request), metadata);
  }

  Authority(request: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse> {
    return this.rpc.unary(QueryAuthorityDesc, QueryAuthorityRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmos.upgrade.v1beta1.Query" };

export const QueryCurrentPlanDesc: UnaryMethodDefinitionish = {
  methodName: "CurrentPlan",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCurrentPlanRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCurrentPlanResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAppliedPlanDesc: UnaryMethodDefinitionish = {
  methodName: "AppliedPlan",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAppliedPlanRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAppliedPlanResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradedConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUpgradedConsensusStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryUpgradedConsensusStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryModuleVersionsDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleVersions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryModuleVersionsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryModuleVersionsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAuthorityDesc: UnaryMethodDefinitionish = {
  methodName: "Authority",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAuthorityRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAuthorityResponse.decode(data);
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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
