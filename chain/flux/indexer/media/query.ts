/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export enum S3Operation {
  Put = 0,
  Delete = 1,
  UNRECOGNIZED = -1,
}

export function s3OperationFromJSON(object: any): S3Operation {
  switch (object) {
    case 0:
    case "Put":
      return S3Operation.Put;
    case 1:
    case "Delete":
      return S3Operation.Delete;
    case -1:
    case "UNRECOGNIZED":
    default:
      return S3Operation.UNRECOGNIZED;
  }
}

export function s3OperationToJSON(object: S3Operation): string {
  switch (object) {
    case S3Operation.Put:
      return "Put";
    case S3Operation.Delete:
      return "Delete";
    case S3Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PresignedURLRequest {
  op: S3Operation;
  key: string;
}

export interface PresignedURLResponse {
  url: string;
}

export interface GetMedataRequest {
  owner: string;
  path: string;
  key: string;
}

export interface GetMetadataResponse {
  owner: string;
  path: string;
  key: string;
}

export interface SetMetadataRequest {
  owner: string;
  path: string;
  key: string;
}

export interface SetMetadataResponse {
}

function createBasePresignedURLRequest(): PresignedURLRequest {
  return { op: 0, key: "" };
}

export const PresignedURLRequest = {
  $type: "flux.indexer.media.PresignedURLRequest" as const,

  encode(message: PresignedURLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.op !== 0) {
      writer.uint32(8).int32(message.op);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresignedURLRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresignedURLRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.op = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PresignedURLRequest {
    return {
      op: isSet(object.op) ? s3OperationFromJSON(object.op) : 0,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: PresignedURLRequest): unknown {
    const obj: any = {};
    if (message.op !== 0) {
      obj.op = s3OperationToJSON(message.op);
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create(base?: DeepPartial<PresignedURLRequest>): PresignedURLRequest {
    return PresignedURLRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PresignedURLRequest>): PresignedURLRequest {
    const message = createBasePresignedURLRequest();
    message.op = object.op ?? 0;
    message.key = object.key ?? "";
    return message;
  },
};

function createBasePresignedURLResponse(): PresignedURLResponse {
  return { url: "" };
}

export const PresignedURLResponse = {
  $type: "flux.indexer.media.PresignedURLResponse" as const,

  encode(message: PresignedURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresignedURLResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresignedURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PresignedURLResponse {
    return { url: isSet(object.url) ? globalThis.String(object.url) : "" };
  },

  toJSON(message: PresignedURLResponse): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create(base?: DeepPartial<PresignedURLResponse>): PresignedURLResponse {
    return PresignedURLResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PresignedURLResponse>): PresignedURLResponse {
    const message = createBasePresignedURLResponse();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseGetMedataRequest(): GetMedataRequest {
  return { owner: "", path: "", key: "" };
}

export const GetMedataRequest = {
  $type: "flux.indexer.media.GetMedataRequest" as const,

  encode(message: GetMedataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMedataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMedataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMedataRequest {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: GetMedataRequest): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMedataRequest>): GetMedataRequest {
    return GetMedataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMedataRequest>): GetMedataRequest {
    const message = createBaseGetMedataRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseGetMetadataResponse(): GetMetadataResponse {
  return { owner: "", path: "", key: "" };
}

export const GetMetadataResponse = {
  $type: "flux.indexer.media.GetMetadataResponse" as const,

  encode(message: GetMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMetadataResponse {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: GetMetadataResponse): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMetadataResponse>): GetMetadataResponse {
    return GetMetadataResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMetadataResponse>): GetMetadataResponse {
    const message = createBaseGetMetadataResponse();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseSetMetadataRequest(): SetMetadataRequest {
  return { owner: "", path: "", key: "" };
}

export const SetMetadataRequest = {
  $type: "flux.indexer.media.SetMetadataRequest" as const,

  encode(message: SetMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetMetadataRequest {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: SetMetadataRequest): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create(base?: DeepPartial<SetMetadataRequest>): SetMetadataRequest {
    return SetMetadataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetMetadataRequest>): SetMetadataRequest {
    const message = createBaseSetMetadataRequest();
    message.owner = object.owner ?? "";
    message.path = object.path ?? "";
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseSetMetadataResponse(): SetMetadataResponse {
  return {};
}

export const SetMetadataResponse = {
  $type: "flux.indexer.media.SetMetadataResponse" as const,

  encode(_: SetMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMetadataResponse();
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

  fromJSON(_: any): SetMetadataResponse {
    return {};
  },

  toJSON(_: SetMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SetMetadataResponse>): SetMetadataResponse {
    return SetMetadataResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SetMetadataResponse>): SetMetadataResponse {
    const message = createBaseSetMetadataResponse();
    return message;
  },
};

export interface API {
  PresignedURL(request: DeepPartial<PresignedURLRequest>, metadata?: grpc.Metadata): Promise<PresignedURLResponse>;
  GetMetaData(request: DeepPartial<GetMedataRequest>, metadata?: grpc.Metadata): Promise<GetMetadataResponse>;
  SetMetaData(request: DeepPartial<SetMetadataRequest>, metadata?: grpc.Metadata): Promise<SetMetadataResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PresignedURL = this.PresignedURL.bind(this);
    this.GetMetaData = this.GetMetaData.bind(this);
    this.SetMetaData = this.SetMetaData.bind(this);
  }

  PresignedURL(request: DeepPartial<PresignedURLRequest>, metadata?: grpc.Metadata): Promise<PresignedURLResponse> {
    return this.rpc.unary(APIPresignedURLDesc, PresignedURLRequest.fromPartial(request), metadata);
  }

  GetMetaData(request: DeepPartial<GetMedataRequest>, metadata?: grpc.Metadata): Promise<GetMetadataResponse> {
    return this.rpc.unary(APIGetMetaDataDesc, GetMedataRequest.fromPartial(request), metadata);
  }

  SetMetaData(request: DeepPartial<SetMetadataRequest>, metadata?: grpc.Metadata): Promise<SetMetadataResponse> {
    return this.rpc.unary(APISetMetaDataDesc, SetMetadataRequest.fromPartial(request), metadata);
  }
}

export const APIDesc = { serviceName: "flux.indexer.media.API" };

export const APIPresignedURLDesc: UnaryMethodDefinitionish = {
  methodName: "PresignedURL",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PresignedURLRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PresignedURLResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const APIGetMetaDataDesc: UnaryMethodDefinitionish = {
  methodName: "GetMetaData",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMedataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMetadataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const APISetMetaDataDesc: UnaryMethodDefinitionish = {
  methodName: "SetMetaData",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetMetadataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetMetadataResponse.decode(data);
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
