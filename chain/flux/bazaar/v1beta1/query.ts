/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export interface QueryProductRequest {
  class_id: string;
  id: string;
  product_id: string;
}

export interface QueryProductResponse {
}

function createBaseQueryProductRequest(): QueryProductRequest {
  return { class_id: "", id: "", product_id: "" };
}

export const QueryProductRequest = {
  $type: "flux.bazaar.v1beta1.QueryProductRequest" as const,

  encode(message: QueryProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.product_id !== "") {
      writer.uint32(26).string(message.product_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.class_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.product_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProductRequest {
    return {
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
    };
  },

  toJSON(message: QueryProductRequest): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.product_id !== "") {
      obj.product_id = message.product_id;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryProductRequest>): QueryProductRequest {
    return QueryProductRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryProductRequest>): QueryProductRequest {
    const message = createBaseQueryProductRequest();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.product_id = object.product_id ?? "";
    return message;
  },
};

function createBaseQueryProductResponse(): QueryProductResponse {
  return {};
}

export const QueryProductResponse = {
  $type: "flux.bazaar.v1beta1.QueryProductResponse" as const,

  encode(_: QueryProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProductResponse();
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

  fromJSON(_: any): QueryProductResponse {
    return {};
  },

  toJSON(_: QueryProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryProductResponse>): QueryProductResponse {
    return QueryProductResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryProductResponse>): QueryProductResponse {
    const message = createBaseQueryProductResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Product(request: DeepPartial<QueryProductRequest>, metadata?: grpc.Metadata): Promise<QueryProductResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Product = this.Product.bind(this);
  }

  Product(request: DeepPartial<QueryProductRequest>, metadata?: grpc.Metadata): Promise<QueryProductResponse> {
    return this.rpc.unary(QueryProductDesc, QueryProductRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.bazaar.v1beta1.Query" };

export const QueryProductDesc: UnaryMethodDefinitionish = {
  methodName: "Product",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryProductRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryProductResponse.decode(data);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
