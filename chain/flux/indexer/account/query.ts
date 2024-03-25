/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface GetAccountRequest {
  address: string;
}

export interface Account {
  address: string;
  alias: string;
  nonce: string;
}

export interface SetAccountAliasRequest {
  alias: string;
}

export interface SetAccountAliasResponse {
}

function createBaseGetAccountRequest(): GetAccountRequest {
  return { address: "" };
}

export const GetAccountRequest = {
  $type: "flux.indexer.account.GetAccountRequest" as const,

  encode(message: GetAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountRequest();
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

  fromJSON(object: any): GetAccountRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: GetAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<GetAccountRequest>): GetAccountRequest {
    return GetAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAccountRequest>): GetAccountRequest {
    const message = createBaseGetAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseAccount(): Account {
  return { address: "", alias: "", nonce: "0" };
}

export const Account = {
  $type: "flux.indexer.account.Account" as const,

  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.nonce !== "0") {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
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

          message.alias = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nonce = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      nonce: isSet(object.nonce) ? globalThis.String(object.nonce) : "0",
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.alias !== undefined) {
      obj.alias = message.alias;
    }
    if (message.nonce !== undefined) {
      obj.nonce = message.nonce;
    }
    return obj;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.address = object.address ?? "";
    message.alias = object.alias ?? "";
    message.nonce = object.nonce ?? "0";
    return message;
  },
};

function createBaseSetAccountAliasRequest(): SetAccountAliasRequest {
  return { alias: "" };
}

export const SetAccountAliasRequest = {
  $type: "flux.indexer.account.SetAccountAliasRequest" as const,

  encode(message: SetAccountAliasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountAliasRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccountAliasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alias = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetAccountAliasRequest {
    return { alias: isSet(object.alias) ? globalThis.String(object.alias) : "" };
  },

  toJSON(message: SetAccountAliasRequest): unknown {
    const obj: any = {};
    if (message.alias !== undefined) {
      obj.alias = message.alias;
    }
    return obj;
  },

  create(base?: DeepPartial<SetAccountAliasRequest>): SetAccountAliasRequest {
    return SetAccountAliasRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetAccountAliasRequest>): SetAccountAliasRequest {
    const message = createBaseSetAccountAliasRequest();
    message.alias = object.alias ?? "";
    return message;
  },
};

function createBaseSetAccountAliasResponse(): SetAccountAliasResponse {
  return {};
}

export const SetAccountAliasResponse = {
  $type: "flux.indexer.account.SetAccountAliasResponse" as const,

  encode(_: SetAccountAliasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountAliasResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccountAliasResponse();
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

  fromJSON(_: any): SetAccountAliasResponse {
    return {};
  },

  toJSON(_: SetAccountAliasResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SetAccountAliasResponse>): SetAccountAliasResponse {
    return SetAccountAliasResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SetAccountAliasResponse>): SetAccountAliasResponse {
    const message = createBaseSetAccountAliasResponse();
    return message;
  },
};

export interface API {
  GetAccount(request: DeepPartial<GetAccountRequest>, metadata?: grpc.Metadata): Promise<Account>;
  SetAccountAlias(
    request: DeepPartial<SetAccountAliasRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetAccountAliasResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAccount = this.GetAccount.bind(this);
    this.SetAccountAlias = this.SetAccountAlias.bind(this);
  }

  GetAccount(request: DeepPartial<GetAccountRequest>, metadata?: grpc.Metadata): Promise<Account> {
    return this.rpc.unary(APIGetAccountDesc, GetAccountRequest.fromPartial(request), metadata);
  }

  SetAccountAlias(
    request: DeepPartial<SetAccountAliasRequest>,
    metadata?: grpc.Metadata,
  ): Promise<SetAccountAliasResponse> {
    return this.rpc.unary(APISetAccountAliasDesc, SetAccountAliasRequest.fromPartial(request), metadata);
  }
}

export const APIDesc = { serviceName: "flux.indexer.account.API" };

export const APIGetAccountDesc: UnaryMethodDefinitionish = {
  methodName: "GetAccount",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetAccountRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = Account.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const APISetAccountAliasDesc: UnaryMethodDefinitionish = {
  methodName: "SetAccountAlias",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetAccountAliasRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetAccountAliasResponse.decode(data);
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
