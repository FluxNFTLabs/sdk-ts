/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

export enum ContentType {
  Static = 0,
  Audio = 1,
  Video = 2,
  UNRECOGNIZED = -1,
}

export function contentTypeFromJSON(object: any): ContentType {
  switch (object) {
    case 0:
    case "Static":
      return ContentType.Static;
    case 1:
    case "Audio":
      return ContentType.Audio;
    case 2:
    case "Video":
      return ContentType.Video;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentType.UNRECOGNIZED;
  }
}

export function contentTypeToJSON(object: ContentType): string {
  switch (object) {
    case ContentType.Static:
      return "Static";
    case ContentType.Audio:
      return "Audio";
    case ContentType.Video:
      return "Video";
    case ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface UploadResponse {
}

export interface DownloadRequest {
  path: string;
  chunk_idx: string;
  chunk_count: string;
}

export interface StreamMsg {
  metadata?: Metadata | undefined;
  media_chunk?: Uint8Array | undefined;
}

export interface GetMetadataRequest {
  path: string;
}

export interface Metadata {
  path: string;
  encrypted: boolean;
  type: ContentType;
  chunk_count: string;
  chunk_time: string;
  thumbnail: string;
}

function createBaseUploadResponse(): UploadResponse {
  return {};
}

export const UploadResponse = {
  $type: "flux.indexer.media.UploadResponse" as const,

  encode(_: UploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UploadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUploadResponse();
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

  fromJSON(_: any): UploadResponse {
    return {};
  },

  toJSON(_: UploadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UploadResponse>): UploadResponse {
    return UploadResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UploadResponse>): UploadResponse {
    const message = createBaseUploadResponse();
    return message;
  },
};

function createBaseDownloadRequest(): DownloadRequest {
  return { path: "", chunk_idx: "0", chunk_count: "0" };
}

export const DownloadRequest = {
  $type: "flux.indexer.media.DownloadRequest" as const,

  encode(message: DownloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.chunk_idx !== "0") {
      writer.uint32(16).uint64(message.chunk_idx);
    }
    if (message.chunk_count !== "0") {
      writer.uint32(24).uint64(message.chunk_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chunk_idx = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chunk_count = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadRequest {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      chunk_idx: isSet(object.chunk_idx) ? globalThis.String(object.chunk_idx) : "0",
      chunk_count: isSet(object.chunk_count) ? globalThis.String(object.chunk_count) : "0",
    };
  },

  toJSON(message: DownloadRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.chunk_idx !== "0") {
      obj.chunk_idx = message.chunk_idx;
    }
    if (message.chunk_count !== "0") {
      obj.chunk_count = message.chunk_count;
    }
    return obj;
  },

  create(base?: DeepPartial<DownloadRequest>): DownloadRequest {
    return DownloadRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DownloadRequest>): DownloadRequest {
    const message = createBaseDownloadRequest();
    message.path = object.path ?? "";
    message.chunk_idx = object.chunk_idx ?? "0";
    message.chunk_count = object.chunk_count ?? "0";
    return message;
  },
};

function createBaseStreamMsg(): StreamMsg {
  return { metadata: undefined, media_chunk: undefined };
}

export const StreamMsg = {
  $type: "flux.indexer.media.StreamMsg" as const,

  encode(message: StreamMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.media_chunk !== undefined) {
      writer.uint32(18).bytes(message.media_chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.media_chunk = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamMsg {
    return {
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      media_chunk: isSet(object.media_chunk) ? bytesFromBase64(object.media_chunk) : undefined,
    };
  },

  toJSON(message: StreamMsg): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    if (message.media_chunk !== undefined) {
      obj.media_chunk = base64FromBytes(message.media_chunk);
    }
    return obj;
  },

  create(base?: DeepPartial<StreamMsg>): StreamMsg {
    return StreamMsg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StreamMsg>): StreamMsg {
    const message = createBaseStreamMsg();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    message.media_chunk = object.media_chunk ?? undefined;
    return message;
  },
};

function createBaseGetMetadataRequest(): GetMetadataRequest {
  return { path: "" };
}

export const GetMetadataRequest = {
  $type: "flux.indexer.media.GetMetadataRequest" as const,

  encode(message: GetMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMetadataRequest {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: GetMetadataRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMetadataRequest>): GetMetadataRequest {
    return GetMetadataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMetadataRequest>): GetMetadataRequest {
    const message = createBaseGetMetadataRequest();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { path: "", encrypted: false, type: 0, chunk_count: "0", chunk_time: "0", thumbnail: "" };
}

export const Metadata = {
  $type: "flux.indexer.media.Metadata" as const,

  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.encrypted === true) {
      writer.uint32(16).bool(message.encrypted);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.chunk_count !== "0") {
      writer.uint32(32).uint64(message.chunk_count);
    }
    if (message.chunk_time !== "0") {
      writer.uint32(40).uint64(message.chunk_time);
    }
    if (message.thumbnail !== "") {
      writer.uint32(50).string(message.thumbnail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.encrypted = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.chunk_count = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chunk_time = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.thumbnail = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      encrypted: isSet(object.encrypted) ? globalThis.Boolean(object.encrypted) : false,
      type: isSet(object.type) ? contentTypeFromJSON(object.type) : 0,
      chunk_count: isSet(object.chunk_count) ? globalThis.String(object.chunk_count) : "0",
      chunk_time: isSet(object.chunk_time) ? globalThis.String(object.chunk_time) : "0",
      thumbnail: isSet(object.thumbnail) ? globalThis.String(object.thumbnail) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.encrypted === true) {
      obj.encrypted = message.encrypted;
    }
    if (message.type !== 0) {
      obj.type = contentTypeToJSON(message.type);
    }
    if (message.chunk_count !== "0") {
      obj.chunk_count = message.chunk_count;
    }
    if (message.chunk_time !== "0") {
      obj.chunk_time = message.chunk_time;
    }
    if (message.thumbnail !== "") {
      obj.thumbnail = message.thumbnail;
    }
    return obj;
  },

  create(base?: DeepPartial<Metadata>): Metadata {
    return Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.path = object.path ?? "";
    message.encrypted = object.encrypted ?? false;
    message.type = object.type ?? 0;
    message.chunk_count = object.chunk_count ?? "0";
    message.chunk_time = object.chunk_time ?? "0";
    message.thumbnail = object.thumbnail ?? "";
    return message;
  },
};

export interface API {
  Upload(request: Observable<DeepPartial<StreamMsg>>, metadata?: grpc.Metadata): Promise<UploadResponse>;
  GetMetadata(request: DeepPartial<GetMetadataRequest>, metadata?: grpc.Metadata): Promise<Metadata>;
  Download(request: Observable<DeepPartial<DownloadRequest>>, metadata?: grpc.Metadata): Observable<StreamMsg>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Upload = this.Upload.bind(this);
    this.GetMetadata = this.GetMetadata.bind(this);
    this.Download = this.Download.bind(this);
  }

  Upload(request: Observable<DeepPartial<StreamMsg>>, metadata?: grpc.Metadata): Promise<UploadResponse> {
    throw new Error("ts-proto does not yet support client streaming!");
  }

  GetMetadata(request: DeepPartial<GetMetadataRequest>, metadata?: grpc.Metadata): Promise<Metadata> {
    return this.rpc.unary(APIGetMetadataDesc, GetMetadataRequest.fromPartial(request), metadata);
  }

  Download(request: Observable<DeepPartial<DownloadRequest>>, metadata?: grpc.Metadata): Observable<StreamMsg> {
    throw new Error("ts-proto does not yet support client streaming!");
  }
}

export const APIDesc = { serviceName: "flux.indexer.media.API" };

export const APIGetMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "GetMetadata",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Metadata.decode(data);
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
      const upStream = () => {
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
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
  }
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
