/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Permissions } from "./types";

/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions: Permissions | undefined;
}

/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
  success: boolean;
}

/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msg_type_urls: string[];
}

/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
  success: boolean;
}

/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msg_type_urls: string[];
}

/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
  success: boolean;
}

function createBaseMsgAuthorizeCircuitBreaker(): MsgAuthorizeCircuitBreaker {
  return { granter: "", grantee: "", permissions: undefined };
}

export const MsgAuthorizeCircuitBreaker = {
  $type: "cosmos.circuit.v1.MsgAuthorizeCircuitBreaker" as const,

  encode(message: MsgAuthorizeCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.granter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grantee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions = Permissions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeCircuitBreaker {
    return {
      granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
      grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
      permissions: isSet(object.permissions) ? Permissions.fromJSON(object.permissions) : undefined,
    };
  },

  toJSON(message: MsgAuthorizeCircuitBreaker): unknown {
    const obj: any = {};
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    if (message.grantee !== "") {
      obj.grantee = message.grantee;
    }
    if (message.permissions !== undefined) {
      obj.permissions = Permissions.toJSON(message.permissions);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAuthorizeCircuitBreaker>): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAuthorizeCircuitBreaker>): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permissions = (object.permissions !== undefined && object.permissions !== null)
      ? Permissions.fromPartial(object.permissions)
      : undefined;
    return message;
  },
};

function createBaseMsgAuthorizeCircuitBreakerResponse(): MsgAuthorizeCircuitBreakerResponse {
  return { success: false };
}

export const MsgAuthorizeCircuitBreakerResponse = {
  $type: "cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse" as const,

  encode(message: MsgAuthorizeCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeCircuitBreakerResponse {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: MsgAuthorizeCircuitBreakerResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAuthorizeCircuitBreakerResponse>): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAuthorizeCircuitBreakerResponse>): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseMsgTripCircuitBreaker(): MsgTripCircuitBreaker {
  return { authority: "", msg_type_urls: [] };
}

export const MsgTripCircuitBreaker = {
  $type: "cosmos.circuit.v1.MsgTripCircuitBreaker" as const,

  encode(message: MsgTripCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msg_type_urls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msg_type_urls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTripCircuitBreaker {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      msg_type_urls: globalThis.Array.isArray(object?.msg_type_urls)
        ? object.msg_type_urls.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: MsgTripCircuitBreaker): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.msg_type_urls?.length) {
      obj.msg_type_urls = message.msg_type_urls;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTripCircuitBreaker>): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTripCircuitBreaker>): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msg_type_urls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTripCircuitBreakerResponse(): MsgTripCircuitBreakerResponse {
  return { success: false };
}

export const MsgTripCircuitBreakerResponse = {
  $type: "cosmos.circuit.v1.MsgTripCircuitBreakerResponse" as const,

  encode(message: MsgTripCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTripCircuitBreakerResponse {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: MsgTripCircuitBreakerResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTripCircuitBreakerResponse>): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTripCircuitBreakerResponse>): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseMsgResetCircuitBreaker(): MsgResetCircuitBreaker {
  return { authority: "", msg_type_urls: [] };
}

export const MsgResetCircuitBreaker = {
  $type: "cosmos.circuit.v1.MsgResetCircuitBreaker" as const,

  encode(message: MsgResetCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msg_type_urls) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg_type_urls.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResetCircuitBreaker {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      msg_type_urls: globalThis.Array.isArray(object?.msg_type_urls)
        ? object.msg_type_urls.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: MsgResetCircuitBreaker): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.msg_type_urls?.length) {
      obj.msg_type_urls = message.msg_type_urls;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgResetCircuitBreaker>): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgResetCircuitBreaker>): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msg_type_urls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgResetCircuitBreakerResponse(): MsgResetCircuitBreakerResponse {
  return { success: false };
}

export const MsgResetCircuitBreakerResponse = {
  $type: "cosmos.circuit.v1.MsgResetCircuitBreakerResponse" as const,

  encode(message: MsgResetCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgResetCircuitBreakerResponse {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: MsgResetCircuitBreakerResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgResetCircuitBreakerResponse>): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgResetCircuitBreakerResponse>): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
};

/** Msg defines the circuit Msg service. */
export interface Msg {
  /**
   * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
   * account's circuit breaker permissions.
   */
  AuthorizeCircuitBreaker(
    request: DeepPartial<MsgAuthorizeCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAuthorizeCircuitBreakerResponse>;
  /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
  TripCircuitBreaker(
    request: DeepPartial<MsgTripCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTripCircuitBreakerResponse>;
  /**
   * ResetCircuitBreaker resumes processing of Msg's in the state machine that
   * have been been paused using TripCircuitBreaker.
   */
  ResetCircuitBreaker(
    request: DeepPartial<MsgResetCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgResetCircuitBreakerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AuthorizeCircuitBreaker = this.AuthorizeCircuitBreaker.bind(this);
    this.TripCircuitBreaker = this.TripCircuitBreaker.bind(this);
    this.ResetCircuitBreaker = this.ResetCircuitBreaker.bind(this);
  }

  AuthorizeCircuitBreaker(
    request: DeepPartial<MsgAuthorizeCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgAuthorizeCircuitBreakerResponse> {
    return this.rpc.unary(MsgAuthorizeCircuitBreakerDesc, MsgAuthorizeCircuitBreaker.fromPartial(request), metadata);
  }

  TripCircuitBreaker(
    request: DeepPartial<MsgTripCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTripCircuitBreakerResponse> {
    return this.rpc.unary(MsgTripCircuitBreakerDesc, MsgTripCircuitBreaker.fromPartial(request), metadata);
  }

  ResetCircuitBreaker(
    request: DeepPartial<MsgResetCircuitBreaker>,
    metadata?: grpc.Metadata,
  ): Promise<MsgResetCircuitBreakerResponse> {
    return this.rpc.unary(MsgResetCircuitBreakerDesc, MsgResetCircuitBreaker.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "cosmos.circuit.v1.Msg" };

export const MsgAuthorizeCircuitBreakerDesc: UnaryMethodDefinitionish = {
  methodName: "AuthorizeCircuitBreaker",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAuthorizeCircuitBreaker.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAuthorizeCircuitBreakerResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTripCircuitBreakerDesc: UnaryMethodDefinitionish = {
  methodName: "TripCircuitBreaker",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTripCircuitBreaker.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTripCircuitBreakerResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgResetCircuitBreakerDesc: UnaryMethodDefinitionish = {
  methodName: "ResetCircuitBreaker",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgResetCircuitBreaker.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgResetCircuitBreakerResponse.decode(data);
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