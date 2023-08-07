/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Any } from "../../../google/protobuf/any";

export interface EventsRequest {
  height: string;
  modules: string[];
  tm_queries: string[];
}

export interface EventsResponse {
  height: string;
  time: string;
  modules: string[];
  events: Events[];
  tm_queries: string[];
  tm_data: string[];
}

export interface Events {
  raw_events: Any[];
}

function createBaseEventsRequest(): EventsRequest {
  return { height: "0", modules: [], tm_queries: [] };
}

export const EventsRequest = {
  $type: "flux.stream.v1beta1.EventsRequest" as const,

  encode(message: EventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.modules) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.tm_queries) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.modules.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tm_queries.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventsRequest {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => String(e)) : [],
      tm_queries: Array.isArray(object?.tm_queries) ? object.tm_queries.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EventsRequest): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.modules?.length) {
      obj.modules = message.modules;
    }
    if (message.tm_queries?.length) {
      obj.tm_queries = message.tm_queries;
    }
    return obj;
  },

  create(base?: DeepPartial<EventsRequest>): EventsRequest {
    return EventsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventsRequest>): EventsRequest {
    const message = createBaseEventsRequest();
    message.height = object.height ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    message.tm_queries = object.tm_queries?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventsResponse(): EventsResponse {
  return { height: "0", time: "0", modules: [], events: [], tm_queries: [], tm_data: [] };
}

export const EventsResponse = {
  $type: "flux.stream.v1beta1.EventsResponse" as const,

  encode(message: EventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    for (const v of message.modules) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.events) {
      Events.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tm_queries) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.tm_data) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modules.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.events.push(Events.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tm_queries.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tm_data.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventsResponse {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      time: isSet(object.time) ? String(object.time) : "0",
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => String(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Events.fromJSON(e)) : [],
      tm_queries: Array.isArray(object?.tm_queries) ? object.tm_queries.map((e: any) => String(e)) : [],
      tm_data: Array.isArray(object?.tm_data) ? object.tm_data.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EventsResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.modules?.length) {
      obj.modules = message.modules;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Events.toJSON(e));
    }
    if (message.tm_queries?.length) {
      obj.tm_queries = message.tm_queries;
    }
    if (message.tm_data?.length) {
      obj.tm_data = message.tm_data;
    }
    return obj;
  },

  create(base?: DeepPartial<EventsResponse>): EventsResponse {
    return EventsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventsResponse>): EventsResponse {
    const message = createBaseEventsResponse();
    message.height = object.height ?? "0";
    message.time = object.time ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    message.events = object.events?.map((e) => Events.fromPartial(e)) || [];
    message.tm_queries = object.tm_queries?.map((e) => e) || [];
    message.tm_data = object.tm_data?.map((e) => e) || [];
    return message;
  },
};

function createBaseEvents(): Events {
  return { raw_events: [] };
}

export const Events = {
  $type: "flux.stream.v1beta1.Events" as const,

  encode(message: Events, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.raw_events) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Events {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.raw_events.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Events {
    return { raw_events: Array.isArray(object?.raw_events) ? object.raw_events.map((e: any) => Any.fromJSON(e)) : [] };
  },

  toJSON(message: Events): unknown {
    const obj: any = {};
    if (message.raw_events?.length) {
      obj.raw_events = message.raw_events.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Events>): Events {
    return Events.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Events>): Events {
    const message = createBaseEvents();
    message.raw_events = object.raw_events?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  GetEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Promise<EventsResponse>;
  StreamEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Observable<EventsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetEvents = this.GetEvents.bind(this);
    this.StreamEvents = this.StreamEvents.bind(this);
  }

  GetEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Promise<EventsResponse> {
    return this.rpc.unary(QueryGetEventsDesc, EventsRequest.fromPartial(request), metadata);
  }

  StreamEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Observable<EventsResponse> {
    return this.rpc.invoke(QueryStreamEventsDesc, EventsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.stream.v1beta1.Query" };

export const QueryGetEventsDesc: UnaryMethodDefinitionish = {
  methodName: "GetEvents",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = EventsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryStreamEventsDesc: UnaryMethodDefinitionish = {
  methodName: "StreamEvents",
  service: QueryDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return EventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = EventsResponse.decode(data);
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
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = (() => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => {
          return client.close();
        });
      });
      upStream();
    }).pipe(share());
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
