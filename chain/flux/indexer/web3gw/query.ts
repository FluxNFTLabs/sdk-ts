/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface GetMetaDataRequest {
}

export interface GetMetaDataResponse {
  address: string;
  pubkey: Uint8Array;
  maxGasLimit: string;
  maxGasPrice: string;
}

export interface SignProtoRequest {
  data: Uint8Array;
}

export interface SignProtoResponse {
  hash: Uint8Array;
  signature: Uint8Array;
}

export interface SignJSONRequest {
  data: Uint8Array;
}

export interface SignJSONResponse {
  hash: Uint8Array;
  signature: Uint8Array;
}

function createBaseGetMetaDataRequest(): GetMetaDataRequest {
  return {};
}

export const GetMetaDataRequest = {
  encode(_: GetMetaDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetaDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetaDataRequest();
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

  fromJSON(_: any): GetMetaDataRequest {
    return {};
  },

  toJSON(_: GetMetaDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetMetaDataRequest>): GetMetaDataRequest {
    return GetMetaDataRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GetMetaDataRequest>): GetMetaDataRequest {
    const message = createBaseGetMetaDataRequest();
    return message;
  },
};

function createBaseGetMetaDataResponse(): GetMetaDataResponse {
  return { address: "", pubkey: new Uint8Array(0), maxGasLimit: "0", maxGasPrice: "" };
}

export const GetMetaDataResponse = {
  encode(message: GetMetaDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(18).bytes(message.pubkey);
    }
    if (message.maxGasLimit !== "0") {
      writer.uint32(24).uint64(message.maxGasLimit);
    }
    if (message.maxGasPrice !== "") {
      writer.uint32(34).string(message.maxGasPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetaDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetaDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubkey = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxGasLimit = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxGasPrice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMetaDataResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array(0),
      maxGasLimit: isSet(object.maxGasLimit) ? String(object.maxGasLimit) : "0",
      maxGasPrice: isSet(object.maxGasPrice) ? String(object.maxGasPrice) : "",
    };
  },

  toJSON(message: GetMetaDataResponse): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pubkey.length !== 0) {
      obj.pubkey = base64FromBytes(message.pubkey);
    }
    if (message.maxGasLimit !== "0") {
      obj.maxGasLimit = message.maxGasLimit;
    }
    if (message.maxGasPrice !== "") {
      obj.maxGasPrice = message.maxGasPrice;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMetaDataResponse>): GetMetaDataResponse {
    return GetMetaDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMetaDataResponse>): GetMetaDataResponse {
    const message = createBaseGetMetaDataResponse();
    message.address = object.address ?? "";
    message.pubkey = object.pubkey ?? new Uint8Array(0);
    message.maxGasLimit = object.maxGasLimit ?? "0";
    message.maxGasPrice = object.maxGasPrice ?? "";
    return message;
  },
};

function createBaseSignProtoRequest(): SignProtoRequest {
  return { data: new Uint8Array(0) };
}

export const SignProtoRequest = {
  encode(message: SignProtoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignProtoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignProtoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignProtoRequest {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: SignProtoRequest): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<SignProtoRequest>): SignProtoRequest {
    return SignProtoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignProtoRequest>): SignProtoRequest {
    const message = createBaseSignProtoRequest();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignProtoResponse(): SignProtoResponse {
  return { hash: new Uint8Array(0), signature: new Uint8Array(0) };
}

export const SignProtoResponse = {
  encode(message: SignProtoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignProtoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignProtoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignProtoResponse {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: SignProtoResponse): unknown {
    const obj: any = {};
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create(base?: DeepPartial<SignProtoResponse>): SignProtoResponse {
    return SignProtoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignProtoResponse>): SignProtoResponse {
    const message = createBaseSignProtoResponse();
    message.hash = object.hash ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignJSONRequest(): SignJSONRequest {
  return { data: new Uint8Array(0) };
}

export const SignJSONRequest = {
  encode(message: SignJSONRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignJSONRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignJSONRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignJSONRequest {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: SignJSONRequest): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<SignJSONRequest>): SignJSONRequest {
    return SignJSONRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignJSONRequest>): SignJSONRequest {
    const message = createBaseSignJSONRequest();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignJSONResponse(): SignJSONResponse {
  return { hash: new Uint8Array(0), signature: new Uint8Array(0) };
}

export const SignJSONResponse = {
  encode(message: SignJSONResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignJSONResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignJSONResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignJSONResponse {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
    };
  },

  toJSON(message: SignJSONResponse): unknown {
    const obj: any = {};
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create(base?: DeepPartial<SignJSONResponse>): SignJSONResponse {
    return SignJSONResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignJSONResponse>): SignJSONResponse {
    const message = createBaseSignJSONResponse();
    message.hash = object.hash ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

export interface Web3GW {
  GetMetaData(request: DeepPartial<GetMetaDataRequest>, metadata?: grpc.Metadata): Promise<GetMetaDataResponse>;
  SignProto(request: DeepPartial<SignProtoRequest>, metadata?: grpc.Metadata): Promise<SignProtoResponse>;
  SignJSON(request: DeepPartial<SignJSONRequest>, metadata?: grpc.Metadata): Promise<SignJSONResponse>;
}

export class Web3GWClientImpl implements Web3GW {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMetaData = this.GetMetaData.bind(this);
    this.SignProto = this.SignProto.bind(this);
    this.SignJSON = this.SignJSON.bind(this);
  }

  GetMetaData(request: DeepPartial<GetMetaDataRequest>, metadata?: grpc.Metadata): Promise<GetMetaDataResponse> {
    return this.rpc.unary(Web3GWGetMetaDataDesc, GetMetaDataRequest.fromPartial(request), metadata);
  }

  SignProto(request: DeepPartial<SignProtoRequest>, metadata?: grpc.Metadata): Promise<SignProtoResponse> {
    return this.rpc.unary(Web3GWSignProtoDesc, SignProtoRequest.fromPartial(request), metadata);
  }

  SignJSON(request: DeepPartial<SignJSONRequest>, metadata?: grpc.Metadata): Promise<SignJSONResponse> {
    return this.rpc.unary(Web3GWSignJSONDesc, SignJSONRequest.fromPartial(request), metadata);
  }
}

export const Web3GWDesc = { serviceName: "flux.indexer.web3gw.Web3GW" };

export const Web3GWGetMetaDataDesc: UnaryMethodDefinitionish = {
  methodName: "GetMetaData",
  service: Web3GWDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetMetaDataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetMetaDataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const Web3GWSignProtoDesc: UnaryMethodDefinitionish = {
  methodName: "SignProto",
  service: Web3GWDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SignProtoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SignProtoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const Web3GWSignJSONDesc: UnaryMethodDefinitionish = {
  methodName: "SignJSON",
  service: Web3GWDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SignJSONRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SignJSONResponse.decode(data);
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
