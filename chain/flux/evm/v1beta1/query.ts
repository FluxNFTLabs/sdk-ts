/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export interface BalanceRequest {
  address: string;
}

export interface BalanceResponse {
}

export interface ContractQueryRequest {
  address: string;
  calldata: Uint8Array;
}

export interface ContractQueryResponse {
  output: Uint8Array;
  /** status code of smart query execution */
  status_code: string;
}

function createBaseBalanceRequest(): BalanceRequest {
  return { address: "" };
}

export const BalanceRequest = {
  $type: "flux.evm.v1beta1.BalanceRequest" as const,

  encode(message: BalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceRequest();
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

  fromJSON(object: any): BalanceRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: BalanceRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<BalanceRequest>): BalanceRequest {
    return BalanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BalanceRequest>): BalanceRequest {
    const message = createBaseBalanceRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseBalanceResponse(): BalanceResponse {
  return {};
}

export const BalanceResponse = {
  $type: "flux.evm.v1beta1.BalanceResponse" as const,

  encode(_: BalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceResponse();
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

  fromJSON(_: any): BalanceResponse {
    return {};
  },

  toJSON(_: BalanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<BalanceResponse>): BalanceResponse {
    return BalanceResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<BalanceResponse>): BalanceResponse {
    const message = createBaseBalanceResponse();
    return message;
  },
};

function createBaseContractQueryRequest(): ContractQueryRequest {
  return { address: "", calldata: new Uint8Array(0) };
}

export const ContractQueryRequest = {
  $type: "flux.evm.v1beta1.ContractQueryRequest" as const,

  encode(message: ContractQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractQueryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractQueryRequest();
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

          message.calldata = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractQueryRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(0),
    };
  },

  toJSON(message: ContractQueryRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.calldata.length !== 0) {
      obj.calldata = base64FromBytes(message.calldata);
    }
    return obj;
  },

  create(base?: DeepPartial<ContractQueryRequest>): ContractQueryRequest {
    return ContractQueryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContractQueryRequest>): ContractQueryRequest {
    const message = createBaseContractQueryRequest();
    message.address = object.address ?? "";
    message.calldata = object.calldata ?? new Uint8Array(0);
    return message;
  },
};

function createBaseContractQueryResponse(): ContractQueryResponse {
  return { output: new Uint8Array(0), status_code: "" };
}

export const ContractQueryResponse = {
  $type: "flux.evm.v1beta1.ContractQueryResponse" as const,

  encode(message: ContractQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.output.length !== 0) {
      writer.uint32(10).bytes(message.output);
    }
    if (message.status_code !== "") {
      writer.uint32(18).string(message.status_code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractQueryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.output = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status_code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContractQueryResponse {
    return {
      output: isSet(object.output) ? bytesFromBase64(object.output) : new Uint8Array(0),
      status_code: isSet(object.status_code) ? globalThis.String(object.status_code) : "",
    };
  },

  toJSON(message: ContractQueryResponse): unknown {
    const obj: any = {};
    if (message.output.length !== 0) {
      obj.output = base64FromBytes(message.output);
    }
    if (message.status_code !== "") {
      obj.status_code = message.status_code;
    }
    return obj;
  },

  create(base?: DeepPartial<ContractQueryResponse>): ContractQueryResponse {
    return ContractQueryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContractQueryResponse>): ContractQueryResponse {
    const message = createBaseContractQueryResponse();
    message.output = object.output ?? new Uint8Array(0);
    message.status_code = object.status_code ?? "";
    return message;
  },
};

export interface Query {
  Balance(request: DeepPartial<BalanceRequest>, metadata?: grpc.Metadata): Promise<BalanceResponse>;
  ContractQuery(request: DeepPartial<ContractQueryRequest>, metadata?: grpc.Metadata): Promise<ContractQueryResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.ContractQuery = this.ContractQuery.bind(this);
  }

  Balance(request: DeepPartial<BalanceRequest>, metadata?: grpc.Metadata): Promise<BalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, BalanceRequest.fromPartial(request), metadata);
  }

  ContractQuery(request: DeepPartial<ContractQueryRequest>, metadata?: grpc.Metadata): Promise<ContractQueryResponse> {
    return this.rpc.unary(QueryContractQueryDesc, ContractQueryRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.evm.v1beta1.Query" };

export const QueryBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "Balance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BalanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = BalanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryContractQueryDesc: UnaryMethodDefinitionish = {
  methodName: "ContractQuery",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ContractQueryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ContractQueryResponse.decode(data);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
