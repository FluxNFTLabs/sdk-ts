/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Holder, NFT } from "../../fnft/v1beta1/nft";

export interface GetNFTsRequest {
  class_id: string;
  id: string;
  owner: string;
}

export interface GetNFTsResponse {
  nft: NFT[];
}

export interface GetHoldersRequest {
  class_id: string;
  id: string;
  address: string;
}

export interface GetHoldersResponse {
  holders: Holder[];
}

function createBaseGetNFTsRequest(): GetNFTsRequest {
  return { class_id: "", id: "", owner: "" };
}

export const GetNFTsRequest = {
  $type: "flux.indexer.fnft.GetNFTsRequest" as const,

  encode(message: GetNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNFTsRequest();
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

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNFTsRequest {
    return {
      class_id: isSet(object.class_id) ? globalThis.String(object.class_id) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
    };
  },

  toJSON(message: GetNFTsRequest): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create(base?: DeepPartial<GetNFTsRequest>): GetNFTsRequest {
    return GetNFTsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetNFTsRequest>): GetNFTsRequest {
    const message = createBaseGetNFTsRequest();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseGetNFTsResponse(): GetNFTsResponse {
  return { nft: [] };
}

export const GetNFTsResponse = {
  $type: "flux.indexer.fnft.GetNFTsResponse" as const,

  encode(message: GetNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nft) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nft.push(NFT.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetNFTsResponse {
    return { nft: globalThis.Array.isArray(object?.nft) ? object.nft.map((e: any) => NFT.fromJSON(e)) : [] };
  },

  toJSON(message: GetNFTsResponse): unknown {
    const obj: any = {};
    if (message.nft?.length) {
      obj.nft = message.nft.map((e) => NFT.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetNFTsResponse>): GetNFTsResponse {
    return GetNFTsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetNFTsResponse>): GetNFTsResponse {
    const message = createBaseGetNFTsResponse();
    message.nft = object.nft?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetHoldersRequest(): GetHoldersRequest {
  return { class_id: "", id: "", address: "" };
}

export const GetHoldersRequest = {
  $type: "flux.indexer.fnft.GetHoldersRequest" as const,

  encode(message: GetHoldersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHoldersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHoldersRequest();
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

  fromJSON(object: any): GetHoldersRequest {
    return {
      class_id: isSet(object.class_id) ? globalThis.String(object.class_id) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: GetHoldersRequest): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<GetHoldersRequest>): GetHoldersRequest {
    return GetHoldersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetHoldersRequest>): GetHoldersRequest {
    const message = createBaseGetHoldersRequest();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseGetHoldersResponse(): GetHoldersResponse {
  return { holders: [] };
}

export const GetHoldersResponse = {
  $type: "flux.indexer.fnft.GetHoldersResponse" as const,

  encode(message: GetHoldersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.holders) {
      Holder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetHoldersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetHoldersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.holders.push(Holder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetHoldersResponse {
    return {
      holders: globalThis.Array.isArray(object?.holders) ? object.holders.map((e: any) => Holder.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetHoldersResponse): unknown {
    const obj: any = {};
    if (message.holders?.length) {
      obj.holders = message.holders.map((e) => Holder.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetHoldersResponse>): GetHoldersResponse {
    return GetHoldersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetHoldersResponse>): GetHoldersResponse {
    const message = createBaseGetHoldersResponse();
    message.holders = object.holders?.map((e) => Holder.fromPartial(e)) || [];
    return message;
  },
};

export interface API {
  GetNFTs(request: DeepPartial<GetNFTsRequest>, metadata?: grpc.Metadata): Promise<GetNFTsResponse>;
  GetHolders(request: DeepPartial<GetHoldersRequest>, metadata?: grpc.Metadata): Promise<GetHoldersResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetNFTs = this.GetNFTs.bind(this);
    this.GetHolders = this.GetHolders.bind(this);
  }

  GetNFTs(request: DeepPartial<GetNFTsRequest>, metadata?: grpc.Metadata): Promise<GetNFTsResponse> {
    return this.rpc.unary(APIGetNFTsDesc, GetNFTsRequest.fromPartial(request), metadata);
  }

  GetHolders(request: DeepPartial<GetHoldersRequest>, metadata?: grpc.Metadata): Promise<GetHoldersResponse> {
    return this.rpc.unary(APIGetHoldersDesc, GetHoldersRequest.fromPartial(request), metadata);
  }
}

export const APIDesc = { serviceName: "flux.indexer.fnft.API" };

export const APIGetNFTsDesc: UnaryMethodDefinitionish = {
  methodName: "GetNFTs",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetNFTsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetNFTsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const APIGetHoldersDesc: UnaryMethodDefinitionish = {
  methodName: "GetHolders",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetHoldersRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetHoldersResponse.decode(data);
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
