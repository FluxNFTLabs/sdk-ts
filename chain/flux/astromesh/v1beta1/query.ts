/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Plane, planeFromJSON, planeToJSON } from "./tx";

export interface QueryDenomLinkRequest {
  src_plane: Plane;
  dst_plane: Plane;
  src_addr: string;
}

export interface QueryDenomLinkResponse {
  dst_addr: string;
}

function createBaseQueryDenomLinkRequest(): QueryDenomLinkRequest {
  return { src_plane: 0, dst_plane: 0, src_addr: "" };
}

export const QueryDenomLinkRequest = {
  $type: "flux.astromesh.v1beta1.QueryDenomLinkRequest" as const,

  encode(message: QueryDenomLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src_plane !== 0) {
      writer.uint32(8).int32(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      writer.uint32(16).int32(message.dst_plane);
    }
    if (message.src_addr !== "") {
      writer.uint32(26).string(message.src_addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.src_plane = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dst_plane = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.src_addr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomLinkRequest {
    return {
      src_plane: isSet(object.src_plane) ? planeFromJSON(object.src_plane) : 0,
      dst_plane: isSet(object.dst_plane) ? planeFromJSON(object.dst_plane) : 0,
      src_addr: isSet(object.src_addr) ? globalThis.String(object.src_addr) : "",
    };
  },

  toJSON(message: QueryDenomLinkRequest): unknown {
    const obj: any = {};
    if (message.src_plane !== 0) {
      obj.src_plane = planeToJSON(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      obj.dst_plane = planeToJSON(message.dst_plane);
    }
    if (message.src_addr !== "") {
      obj.src_addr = message.src_addr;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDenomLinkRequest>): QueryDenomLinkRequest {
    return QueryDenomLinkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDenomLinkRequest>): QueryDenomLinkRequest {
    const message = createBaseQueryDenomLinkRequest();
    message.src_plane = object.src_plane ?? 0;
    message.dst_plane = object.dst_plane ?? 0;
    message.src_addr = object.src_addr ?? "";
    return message;
  },
};

function createBaseQueryDenomLinkResponse(): QueryDenomLinkResponse {
  return { dst_addr: "" };
}

export const QueryDenomLinkResponse = {
  $type: "flux.astromesh.v1beta1.QueryDenomLinkResponse" as const,

  encode(message: QueryDenomLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dst_addr !== "") {
      writer.uint32(10).string(message.dst_addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dst_addr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomLinkResponse {
    return { dst_addr: isSet(object.dst_addr) ? globalThis.String(object.dst_addr) : "" };
  },

  toJSON(message: QueryDenomLinkResponse): unknown {
    const obj: any = {};
    if (message.dst_addr !== "") {
      obj.dst_addr = message.dst_addr;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDenomLinkResponse>): QueryDenomLinkResponse {
    return QueryDenomLinkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryDenomLinkResponse>): QueryDenomLinkResponse {
    const message = createBaseQueryDenomLinkResponse();
    message.dst_addr = object.dst_addr ?? "";
    return message;
  },
};

export interface Query {
  DenomLink(request: DeepPartial<QueryDenomLinkRequest>, metadata?: grpc.Metadata): Promise<QueryDenomLinkResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomLink = this.DenomLink.bind(this);
  }

  DenomLink(request: DeepPartial<QueryDenomLinkRequest>, metadata?: grpc.Metadata): Promise<QueryDenomLinkResponse> {
    return this.rpc.unary(QueryDenomLinkDesc, QueryDenomLinkRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.astromesh.v1beta1.Query" };

export const QueryDenomLinkDesc: UnaryMethodDefinitionish = {
  methodName: "DenomLink",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDenomLinkRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDenomLinkResponse.decode(data);
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
