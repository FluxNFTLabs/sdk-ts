/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Plane, planeFromJSON, planeToJSON } from "../../astromesh/v1beta1/tx";
import { ContractInfo } from "../../evm/v1beta1/evm";

export interface ListEvmContractsRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface ListEvmContractsResponse {
  contracts: ContractInfo[];
  pagination: PageResponse | undefined;
}

export interface BalancesRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface BalanceInfo {
  acc: string;
  plane: Plane;
  denom: string;
  amount: string;
  updated_height: string;
  updated_time: string;
  decimals: number;
}

export interface BalancesResponse {
  balances: BalanceInfo[];
  pagination: PageResponse | undefined;
}

function createBaseListEvmContractsRequest(): ListEvmContractsRequest {
  return { address: "", pagination: undefined };
}

export const ListEvmContractsRequest = {
  $type: "flux.indexer.explorer.ListEvmContractsRequest" as const,

  encode(message: ListEvmContractsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEvmContractsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEvmContractsRequest();
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

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEvmContractsRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: ListEvmContractsRequest): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<ListEvmContractsRequest>): ListEvmContractsRequest {
    return ListEvmContractsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEvmContractsRequest>): ListEvmContractsRequest {
    const message = createBaseListEvmContractsRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseListEvmContractsResponse(): ListEvmContractsResponse {
  return { contracts: [], pagination: undefined };
}

export const ListEvmContractsResponse = {
  $type: "flux.indexer.explorer.ListEvmContractsResponse" as const,

  encode(message: ListEvmContractsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      ContractInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEvmContractsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEvmContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contracts.push(ContractInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEvmContractsResponse {
    return {
      contracts: globalThis.Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => ContractInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: ListEvmContractsResponse): unknown {
    const obj: any = {};
    if (message.contracts?.length) {
      obj.contracts = message.contracts.map((e) => ContractInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<ListEvmContractsResponse>): ListEvmContractsResponse {
    return ListEvmContractsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEvmContractsResponse>): ListEvmContractsResponse {
    const message = createBaseListEvmContractsResponse();
    message.contracts = object.contracts?.map((e) => ContractInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseBalancesRequest(): BalancesRequest {
  return { address: "", pagination: undefined };
}

export const BalancesRequest = {
  $type: "flux.indexer.explorer.BalancesRequest" as const,

  encode(message: BalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancesRequest();
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

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancesRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: BalancesRequest): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<BalancesRequest>): BalancesRequest {
    return BalancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BalancesRequest>): BalancesRequest {
    const message = createBaseBalancesRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseBalanceInfo(): BalanceInfo {
  return { acc: "", plane: 0, denom: "", amount: "", updated_height: "0", updated_time: "0", decimals: 0 };
}

export const BalanceInfo = {
  $type: "flux.indexer.explorer.BalanceInfo" as const,

  encode(message: BalanceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acc !== "") {
      writer.uint32(10).string(message.acc);
    }
    if (message.plane !== 0) {
      writer.uint32(16).int32(message.plane);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.updated_height !== "0") {
      writer.uint32(40).uint64(message.updated_height);
    }
    if (message.updated_time !== "0") {
      writer.uint32(48).uint64(message.updated_time);
    }
    if (message.decimals !== 0) {
      writer.uint32(56).uint32(message.decimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acc = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.plane = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.updated_height = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.updated_time = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.decimals = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalanceInfo {
    return {
      acc: isSet(object.acc) ? globalThis.String(object.acc) : "",
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      updated_height: isSet(object.updated_height) ? globalThis.String(object.updated_height) : "0",
      updated_time: isSet(object.updated_time) ? globalThis.String(object.updated_time) : "0",
      decimals: isSet(object.decimals) ? globalThis.Number(object.decimals) : 0,
    };
  },

  toJSON(message: BalanceInfo): unknown {
    const obj: any = {};
    if (message.acc !== undefined) {
      obj.acc = message.acc;
    }
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    if (message.denom !== undefined) {
      obj.denom = message.denom;
    }
    if (message.amount !== undefined) {
      obj.amount = message.amount;
    }
    if (message.updated_height !== undefined) {
      obj.updated_height = message.updated_height;
    }
    if (message.updated_time !== undefined) {
      obj.updated_time = message.updated_time;
    }
    if (message.decimals !== undefined) {
      obj.decimals = Math.round(message.decimals);
    }
    return obj;
  },

  create(base?: DeepPartial<BalanceInfo>): BalanceInfo {
    return BalanceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BalanceInfo>): BalanceInfo {
    const message = createBaseBalanceInfo();
    message.acc = object.acc ?? "";
    message.plane = object.plane ?? 0;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.updated_height = object.updated_height ?? "0";
    message.updated_time = object.updated_time ?? "0";
    message.decimals = object.decimals ?? 0;
    return message;
  },
};

function createBaseBalancesResponse(): BalancesResponse {
  return { balances: [], pagination: undefined };
}

export const BalancesResponse = {
  $type: "flux.indexer.explorer.BalancesResponse" as const,

  encode(message: BalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      BalanceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balances.push(BalanceInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalancesResponse {
    return {
      balances: globalThis.Array.isArray(object?.balances)
        ? object.balances.map((e: any) => BalanceInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: BalancesResponse): unknown {
    const obj: any = {};
    if (message.balances?.length) {
      obj.balances = message.balances.map((e) => BalanceInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<BalancesResponse>): BalancesResponse {
    return BalancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BalancesResponse>): BalancesResponse {
    const message = createBaseBalancesResponse();
    message.balances = object.balances?.map((e) => BalanceInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface API {
  ListEvmContracts(
    request: DeepPartial<ListEvmContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListEvmContractsResponse>;
  Balances(request: DeepPartial<BalancesRequest>, metadata?: grpc.Metadata): Promise<BalancesResponse>;
}

export class APIClientImpl implements API {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListEvmContracts = this.ListEvmContracts.bind(this);
    this.Balances = this.Balances.bind(this);
  }

  ListEvmContracts(
    request: DeepPartial<ListEvmContractsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<ListEvmContractsResponse> {
    return this.rpc.unary(APIListEvmContractsDesc, ListEvmContractsRequest.fromPartial(request), metadata);
  }

  Balances(request: DeepPartial<BalancesRequest>, metadata?: grpc.Metadata): Promise<BalancesResponse> {
    return this.rpc.unary(APIBalancesDesc, BalancesRequest.fromPartial(request), metadata);
  }
}

export const APIDesc = { serviceName: "flux.indexer.explorer.API" };

export const APIListEvmContractsDesc: UnaryMethodDefinitionish = {
  methodName: "ListEvmContracts",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ListEvmContractsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ListEvmContractsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const APIBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "Balances",
  service: APIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BalancesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = BalancesResponse.decode(data);
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
