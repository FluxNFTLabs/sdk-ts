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
  max_gas_limit: string;
  max_gas_price: string;
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

export interface FaucetSendRequest {
  address: string;
}

export interface FaucetSendResponse {
}

function createBaseGetMetaDataRequest(): GetMetaDataRequest {
  return {};
}

export const GetMetaDataRequest = {
  $type: "flux.indexer.web3gw.GetMetaDataRequest" as const,

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
  return { address: "", pubkey: new Uint8Array(0), max_gas_limit: "0", max_gas_price: "" };
}

export const GetMetaDataResponse = {
  $type: "flux.indexer.web3gw.GetMetaDataResponse" as const,

  encode(message: GetMetaDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(18).bytes(message.pubkey);
    }
    if (message.max_gas_limit !== "0") {
      writer.uint32(24).uint64(message.max_gas_limit);
    }
    if (message.max_gas_price !== "") {
      writer.uint32(34).string(message.max_gas_price);
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

          message.max_gas_limit = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.max_gas_price = reader.string();
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array(0),
      max_gas_limit: isSet(object.max_gas_limit) ? globalThis.String(object.max_gas_limit) : "0",
      max_gas_price: isSet(object.max_gas_price) ? globalThis.String(object.max_gas_price) : "",
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
    if (message.max_gas_limit !== "0") {
      obj.max_gas_limit = message.max_gas_limit;
    }
    if (message.max_gas_price !== "") {
      obj.max_gas_price = message.max_gas_price;
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
    message.max_gas_limit = object.max_gas_limit ?? "0";
    message.max_gas_price = object.max_gas_price ?? "";
    return message;
  },
};

function createBaseSignProtoRequest(): SignProtoRequest {
  return { data: new Uint8Array(0) };
}

export const SignProtoRequest = {
  $type: "flux.indexer.web3gw.SignProtoRequest" as const,

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
  $type: "flux.indexer.web3gw.SignProtoResponse" as const,

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
  $type: "flux.indexer.web3gw.SignJSONRequest" as const,

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
  $type: "flux.indexer.web3gw.SignJSONResponse" as const,

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

function createBaseFaucetSendRequest(): FaucetSendRequest {
  return { address: "" };
}

export const FaucetSendRequest = {
  $type: "flux.indexer.web3gw.FaucetSendRequest" as const,

  encode(message: FaucetSendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaucetSendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetSendRequest();
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

  fromJSON(object: any): FaucetSendRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: FaucetSendRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<FaucetSendRequest>): FaucetSendRequest {
    return FaucetSendRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FaucetSendRequest>): FaucetSendRequest {
    const message = createBaseFaucetSendRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseFaucetSendResponse(): FaucetSendResponse {
  return {};
}

export const FaucetSendResponse = {
  $type: "flux.indexer.web3gw.FaucetSendResponse" as const,

  encode(_: FaucetSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaucetSendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetSendResponse();
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

  fromJSON(_: any): FaucetSendResponse {
    return {};
  },

  toJSON(_: FaucetSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FaucetSendResponse>): FaucetSendResponse {
    return FaucetSendResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FaucetSendResponse>): FaucetSendResponse {
    const message = createBaseFaucetSendResponse();
    return message;
  },
};

export interface API {
  GetMetaData(request: DeepPartial<GetMetaDataRequest>, metadata?: grpc.Metadata): Promise<GetMetaDataResponse>;
  SignProto(request: DeepPartial<SignProtoRequest>, metadata?: grpc.Metadata): Promise<SignProtoResponse>;
  SignJSON(request: DeepPartial<SignJSONRequest>, metadata?: grpc.Metadata): Promise<SignJSONResponse>;
  FaucetSend(request: DeepPartial<FaucetSendRequest>, metadata?: grpc.Metadata): Promise<FaucetSendResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetMetaData = this.GetMetaData.bind(this);
    this.SignProto = this.SignProto.bind(this);
    this.SignJSON = this.SignJSON.bind(this);
    this.FaucetSend = this.FaucetSend.bind(this);
  }

  GetMetaData(request: DeepPartial<GetMetaDataRequest>, metadata?: grpc.Metadata): Promise<GetMetaDataResponse> {
    return this.rpc.unary(APIGetMetaDataDesc, GetMetaDataRequest.fromPartial(request), metadata);
  }

  SignProto(request: DeepPartial<SignProtoRequest>, metadata?: grpc.Metadata): Promise<SignProtoResponse> {
    return this.rpc.unary(APISignProtoDesc, SignProtoRequest.fromPartial(request), metadata);
  }

  SignJSON(request: DeepPartial<SignJSONRequest>, metadata?: grpc.Metadata): Promise<SignJSONResponse> {
    return this.rpc.unary(APISignJSONDesc, SignJSONRequest.fromPartial(request), metadata);
  }

  FaucetSend(request: DeepPartial<FaucetSendRequest>, metadata?: grpc.Metadata): Promise<FaucetSendResponse> {
    return this.rpc.unary(APIFaucetSendDesc, FaucetSendRequest.fromPartial(request), metadata);
  }
}

export const APIDesc = { serviceName: "flux.indexer.web3gw.API" };

export const APIGetMetaDataDesc: UnaryMethodDefinitionish = {
  methodName: "GetMetaData",
  service: APIDesc,
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

export const APISignProtoDesc: UnaryMethodDefinitionish = {
  methodName: "SignProto",
  service: APIDesc,
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

export const APISignJSONDesc: UnaryMethodDefinitionish = {
  methodName: "SignJSON",
  service: APIDesc,
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

export const APIFaucetSendDesc: UnaryMethodDefinitionish = {
  methodName: "FaucetSend",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return FaucetSendRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = FaucetSendResponse.decode(data);
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
