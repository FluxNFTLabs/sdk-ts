/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export interface QueryGameRequest {
  game_id: string;
}

export interface QueryGameResponse {
}

function createBaseQueryGameRequest(): QueryGameRequest {
  return { game_id: "" };
}

export const QueryGameRequest = {
  $type: "flux.game.v1beta1.QueryGameRequest" as const,

  encode(message: QueryGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.game_id !== "") {
      writer.uint32(10).string(message.game_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.game_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGameRequest {
    return { game_id: isSet(object.game_id) ? globalThis.String(object.game_id) : "" };
  },

  toJSON(message: QueryGameRequest): unknown {
    const obj: any = {};
    if (message.game_id !== "") {
      obj.game_id = message.game_id;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGameRequest>): QueryGameRequest {
    return QueryGameRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryGameRequest>): QueryGameRequest {
    const message = createBaseQueryGameRequest();
    message.game_id = object.game_id ?? "";
    return message;
  },
};

function createBaseQueryGameResponse(): QueryGameResponse {
  return {};
}

export const QueryGameResponse = {
  $type: "flux.game.v1beta1.QueryGameResponse" as const,

  encode(_: QueryGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGameResponse();
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

  fromJSON(_: any): QueryGameResponse {
    return {};
  },

  toJSON(_: QueryGameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryGameResponse>): QueryGameResponse {
    return QueryGameResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryGameResponse>): QueryGameResponse {
    const message = createBaseQueryGameResponse();
    return message;
  },
};

export interface Query {
  Game(request: DeepPartial<QueryGameRequest>, metadata?: grpc.Metadata): Promise<QueryGameResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Game = this.Game.bind(this);
  }

  Game(request: DeepPartial<QueryGameRequest>, metadata?: grpc.Metadata): Promise<QueryGameResponse> {
    return this.rpc.unary(QueryGameDesc, QueryGameRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.game.v1beta1.Query" };

export const QueryGameDesc: UnaryMethodDefinitionish = {
  methodName: "Game",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGameRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryGameResponse.decode(data);
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
