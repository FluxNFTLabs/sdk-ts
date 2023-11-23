/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";

/** Since: cosmos-sdk 0.43 */

/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}

/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
  /** allowance is a allowance granted for grantee by granter. */
  allowance: Grant | undefined;
}

/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterRequest {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAllowancesByGranterResponse {
  /** allowances that have been issued by the granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
  return { granter: "", grantee: "" };
}

export const QueryAllowanceRequest = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowanceRequest" as const,

  encode(message: QueryAllowanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.granter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grantee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceRequest {
    return {
      granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
      grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
    };
  },

  toJSON(message: QueryAllowanceRequest): unknown {
    const obj: any = {};
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    if (message.grantee !== "") {
      obj.grantee = message.grantee;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest {
    return QueryAllowanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
};

function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
  return { allowance: undefined };
}

export const QueryAllowanceResponse = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowanceResponse" as const,

  encode(message: QueryAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allowance = Grant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceResponse {
    return { allowance: isSet(object.allowance) ? Grant.fromJSON(object.allowance) : undefined };
  },

  toJSON(message: QueryAllowanceResponse): unknown {
    const obj: any = {};
    if (message.allowance !== undefined) {
      obj.allowance = Grant.toJSON(message.allowance);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse {
    return QueryAllowanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    message.allowance = (object.allowance !== undefined && object.allowance !== null)
      ? Grant.fromPartial(object.allowance)
      : undefined;
    return message;
  },
};

function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
  return { grantee: "", pagination: undefined };
}

export const QueryAllowancesRequest = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowancesRequest" as const,

  encode(message: QueryAllowancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.grantee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryAllowancesRequest {
    return {
      grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllowancesRequest): unknown {
    const obj: any = {};
    if (message.grantee !== "") {
      obj.grantee = message.grantee;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest {
    return QueryAllowancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
  return { allowances: [], pagination: undefined };
}

export const QueryAllowancesResponse = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowancesResponse" as const,

  encode(message: QueryAllowancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allowances.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowancesResponse {
    return {
      allowances: globalThis.Array.isArray(object?.allowances)
        ? object.allowances.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllowancesResponse): unknown {
    const obj: any = {};
    if (message.allowances?.length) {
      obj.allowances = message.allowances.map((e) => Grant.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse {
    return QueryAllowancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances = object.allowances?.map((e) => Grant.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllowancesByGranterRequest(): QueryAllowancesByGranterRequest {
  return { granter: "", pagination: undefined };
}

export const QueryAllowancesByGranterRequest = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest" as const,

  encode(message: QueryAllowancesByGranterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.granter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryAllowancesByGranterRequest {
    return {
      granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllowancesByGranterRequest): unknown {
    const obj: any = {};
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest {
    return QueryAllowancesByGranterRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest {
    const message = createBaseQueryAllowancesByGranterRequest();
    message.granter = object.granter ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllowancesByGranterResponse(): QueryAllowancesByGranterResponse {
  return { allowances: [], pagination: undefined };
}

export const QueryAllowancesByGranterResponse = {
  $type: "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse" as const,

  encode(message: QueryAllowancesByGranterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allowances.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowancesByGranterResponse {
    return {
      allowances: globalThis.Array.isArray(object?.allowances)
        ? object.allowances.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllowancesByGranterResponse): unknown {
    const obj: any = {};
    if (message.allowances?.length) {
      obj.allowances = message.allowances.map((e) => Grant.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse {
    return QueryAllowancesByGranterResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse {
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = object.allowances?.map((e) => Grant.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  Allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  Allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   *
   * Since: cosmos-sdk 0.46
   */
  AllowancesByGranter(
    request: DeepPartial<QueryAllowancesByGranterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllowancesByGranterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Allowance = this.Allowance.bind(this);
    this.Allowances = this.Allowances.bind(this);
    this.AllowancesByGranter = this.AllowancesByGranter.bind(this);
  }

  Allowance(request: DeepPartial<QueryAllowanceRequest>, metadata?: grpc.Metadata): Promise<QueryAllowanceResponse> {
    return this.rpc.unary(QueryAllowanceDesc, QueryAllowanceRequest.fromPartial(request), metadata);
  }

  Allowances(request: DeepPartial<QueryAllowancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllowancesResponse> {
    return this.rpc.unary(QueryAllowancesDesc, QueryAllowancesRequest.fromPartial(request), metadata);
  }

  AllowancesByGranter(
    request: DeepPartial<QueryAllowancesByGranterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllowancesByGranterResponse> {
    return this.rpc.unary(QueryAllowancesByGranterDesc, QueryAllowancesByGranterRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmos.feegrant.v1beta1.Query" };

export const QueryAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "Allowance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllowanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllowanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAllowancesDesc: UnaryMethodDefinitionish = {
  methodName: "Allowances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllowancesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllowancesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAllowancesByGranterDesc: UnaryMethodDefinitionish = {
  methodName: "AllowancesByGranter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllowancesByGranterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllowancesByGranterResponse.decode(data);
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
