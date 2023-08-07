/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { ModuleOptions } from "./options";

/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}

/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  module_options: { [key: string]: ModuleOptions };
}

export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value: ModuleOptions | undefined;
}

function createBaseAppOptionsRequest(): AppOptionsRequest {
  return {};
}

export const AppOptionsRequest = {
  $type: "cosmos.autocli.v1.AppOptionsRequest" as const,

  encode(_: AppOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();
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

  fromJSON(_: any): AppOptionsRequest {
    return {};
  },

  toJSON(_: AppOptionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AppOptionsRequest>): AppOptionsRequest {
    return AppOptionsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest {
    const message = createBaseAppOptionsRequest();
    return message;
  },
};

function createBaseAppOptionsResponse(): AppOptionsResponse {
  return { module_options: {} };
}

export const AppOptionsResponse = {
  $type: "cosmos.autocli.v1.AppOptionsResponse" as const,

  encode(message: AppOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.module_options).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.module_options[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse {
    return {
      module_options: isObject(object.module_options)
        ? Object.entries(object.module_options).reduce<{ [key: string]: ModuleOptions }>((acc, [key, value]) => {
          acc[key] = ModuleOptions.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: AppOptionsResponse): unknown {
    const obj: any = {};
    if (message.module_options) {
      const entries = Object.entries(message.module_options);
      if (entries.length > 0) {
        obj.module_options = {};
        entries.forEach(([k, v]) => {
          obj.module_options[k] = ModuleOptions.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<AppOptionsResponse>): AppOptionsResponse {
    return AppOptionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse {
    const message = createBaseAppOptionsResponse();
    message.module_options = Object.entries(object.module_options ?? {}).reduce<{ [key: string]: ModuleOptions }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ModuleOptions.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAppOptionsResponse_ModuleOptionsEntry(): AppOptionsResponse_ModuleOptionsEntry {
  return { key: "", value: undefined };
}

export const AppOptionsResponse_ModuleOptionsEntry = {
  $type: "cosmos.autocli.v1.AppOptionsResponse.ModuleOptionsEntry" as const,

  encode(message: AppOptionsResponse_ModuleOptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ModuleOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ModuleOptions.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: AppOptionsResponse_ModuleOptionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ModuleOptions.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry {
    return AppOptionsResponse_ModuleOptionsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ModuleOptions.fromPartial(object.value)
      : undefined;
    return message;
  },
};

/**
 * RemoteInfoService provides clients with the information they need
 * to build dynamically CLI clients for remote chains.
 */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AppOptions = this.AppOptions.bind(this);
  }

  AppOptions(request: DeepPartial<AppOptionsRequest>, metadata?: grpc.Metadata): Promise<AppOptionsResponse> {
    return this.rpc.unary(QueryAppOptionsDesc, AppOptionsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmos.autocli.v1.Query" };

export const QueryAppOptionsDesc: UnaryMethodDefinitionish = {
  methodName: "AppOptions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AppOptionsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = AppOptionsResponse.decode(data);
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
