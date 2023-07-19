/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Events } from "../../stream/v1beta1/query";

export interface ProviderBlockRequest {
  height: string;
}

export interface ProviderBlockResponse {
  height: string;
  time: string;
  block: string;
  blockResults: string;
  validators: string;
}

export interface ProviderEventsRequest {
  height: string;
  time: string;
  modules: string[];
}

export interface ProviderEventsResponse {
  height: string;
  time: string;
  modules: string[];
  events: Events[];
}

function createBaseProviderBlockRequest(): ProviderBlockRequest {
  return { height: "0" };
}

export const ProviderBlockRequest = {
  encode(message: ProviderBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderBlockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderBlockRequest {
    return { height: isSet(object.height) ? String(object.height) : "0" };
  },

  toJSON(message: ProviderBlockRequest): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderBlockRequest>): ProviderBlockRequest {
    return ProviderBlockRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderBlockRequest>): ProviderBlockRequest {
    const message = createBaseProviderBlockRequest();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseProviderBlockResponse(): ProviderBlockResponse {
  return { height: "0", time: "0", block: "", blockResults: "", validators: "" };
}

export const ProviderBlockResponse = {
  encode(message: ProviderBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    if (message.block !== "") {
      writer.uint32(26).string(message.block);
    }
    if (message.blockResults !== "") {
      writer.uint32(34).string(message.blockResults);
    }
    if (message.validators !== "") {
      writer.uint32(42).string(message.validators);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderBlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderBlockResponse();
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

          message.block = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.blockResults = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.validators = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderBlockResponse {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      time: isSet(object.time) ? String(object.time) : "0",
      block: isSet(object.block) ? String(object.block) : "",
      blockResults: isSet(object.blockResults) ? String(object.blockResults) : "",
      validators: isSet(object.validators) ? String(object.validators) : "",
    };
  },

  toJSON(message: ProviderBlockResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.block !== "") {
      obj.block = message.block;
    }
    if (message.blockResults !== "") {
      obj.blockResults = message.blockResults;
    }
    if (message.validators !== "") {
      obj.validators = message.validators;
    }
    return obj;
  },

  create(base?: DeepPartial<ProviderBlockResponse>): ProviderBlockResponse {
    return ProviderBlockResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderBlockResponse>): ProviderBlockResponse {
    const message = createBaseProviderBlockResponse();
    message.height = object.height ?? "0";
    message.time = object.time ?? "0";
    message.block = object.block ?? "";
    message.blockResults = object.blockResults ?? "";
    message.validators = object.validators ?? "";
    return message;
  },
};

function createBaseProviderEventsRequest(): ProviderEventsRequest {
  return { height: "0", time: "0", modules: [] };
}

export const ProviderEventsRequest = {
  encode(message: ProviderEventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    for (const v of message.modules) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderEventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEventsRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderEventsRequest {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      time: isSet(object.time) ? String(object.time) : "0",
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProviderEventsRequest): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<ProviderEventsRequest>): ProviderEventsRequest {
    return ProviderEventsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderEventsRequest>): ProviderEventsRequest {
    const message = createBaseProviderEventsRequest();
    message.height = object.height ?? "0";
    message.time = object.time ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    return message;
  },
};

function createBaseProviderEventsResponse(): ProviderEventsResponse {
  return { height: "0", time: "0", modules: [], events: [] };
}

export const ProviderEventsResponse = {
  encode(message: ProviderEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderEventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderEventsResponse();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderEventsResponse {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      time: isSet(object.time) ? String(object.time) : "0",
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => String(e)) : [],
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Events.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProviderEventsResponse): unknown {
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
    return obj;
  },

  create(base?: DeepPartial<ProviderEventsResponse>): ProviderEventsResponse {
    return ProviderEventsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProviderEventsResponse>): ProviderEventsResponse {
    const message = createBaseProviderEventsResponse();
    message.height = object.height ?? "0";
    message.time = object.time ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    message.events = object.events?.map((e) => Events.fromPartial(e)) || [];
    return message;
  },
};

export interface Provider {
  GetBlock(request: DeepPartial<ProviderBlockRequest>, metadata?: grpc.Metadata): Promise<ProviderBlockResponse>;
  StreamBlock(request: DeepPartial<ProviderBlockRequest>, metadata?: grpc.Metadata): Observable<ProviderBlockResponse>;
  GetEvents(request: DeepPartial<ProviderEventsRequest>, metadata?: grpc.Metadata): Promise<ProviderEventsResponse>;
  StreamEvents(
    request: DeepPartial<ProviderEventsRequest>,
    metadata?: grpc.Metadata,
  ): Observable<ProviderEventsResponse>;
}

export class ProviderClientImpl implements Provider {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetBlock = this.GetBlock.bind(this);
    this.StreamBlock = this.StreamBlock.bind(this);
    this.GetEvents = this.GetEvents.bind(this);
    this.StreamEvents = this.StreamEvents.bind(this);
  }

  GetBlock(request: DeepPartial<ProviderBlockRequest>, metadata?: grpc.Metadata): Promise<ProviderBlockResponse> {
    return this.rpc.unary(ProviderGetBlockDesc, ProviderBlockRequest.fromPartial(request), metadata);
  }

  StreamBlock(request: DeepPartial<ProviderBlockRequest>, metadata?: grpc.Metadata): Observable<ProviderBlockResponse> {
    return this.rpc.invoke(ProviderStreamBlockDesc, ProviderBlockRequest.fromPartial(request), metadata);
  }

  GetEvents(request: DeepPartial<ProviderEventsRequest>, metadata?: grpc.Metadata): Promise<ProviderEventsResponse> {
    return this.rpc.unary(ProviderGetEventsDesc, ProviderEventsRequest.fromPartial(request), metadata);
  }

  StreamEvents(
    request: DeepPartial<ProviderEventsRequest>,
    metadata?: grpc.Metadata,
  ): Observable<ProviderEventsResponse> {
    return this.rpc.invoke(ProviderStreamEventsDesc, ProviderEventsRequest.fromPartial(request), metadata);
  }
}

export const ProviderDesc = { serviceName: "flux.indexer.provider.Provider" };

export const ProviderGetBlockDesc: UnaryMethodDefinitionish = {
  methodName: "GetBlock",
  service: ProviderDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ProviderBlockRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProviderBlockResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ProviderStreamBlockDesc: UnaryMethodDefinitionish = {
  methodName: "StreamBlock",
  service: ProviderDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return ProviderBlockRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProviderBlockResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ProviderGetEventsDesc: UnaryMethodDefinitionish = {
  methodName: "GetEvents",
  service: ProviderDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ProviderEventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProviderEventsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const ProviderStreamEventsDesc: UnaryMethodDefinitionish = {
  methodName: "StreamEvents",
  service: ProviderDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return ProviderEventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ProviderEventsResponse.decode(data);
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
