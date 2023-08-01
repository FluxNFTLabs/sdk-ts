/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { AccessConfig, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types";

/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}

/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo: ContractInfo | undefined;
}

/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
  /** address is the address of the contract to query */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
  entries: ContractCodeHistoryEntry[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */
export interface QueryContractsByCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */
export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponse {
  models: Model[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}

/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */
export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}

/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** QueryData contains the query data passed to the contract */
  queryData: Uint8Array;
}

/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 */
export interface QuerySmartContractStateResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}

/** QueryCodeRequest is the request type for the Query/Code RPC method */
export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: string;
}

/** CodeInfoResponse contains code meta data from CodeInfo */
export interface CodeInfoResponse {
  /** id for legacy support */
  codeId: string;
  creator: string;
  dataHash: Uint8Array;
  instantiatePermission: AccessConfig | undefined;
}

/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponse {
  codeInfo: CodeInfoResponse | undefined;
  data: Uint8Array;
}

/** QueryCodesRequest is the request type for the Query/Codes RPC method */
export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 */
export interface QueryPinnedCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 */
export interface QueryPinnedCodesResponse {
  codeIds: string[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}

/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */
export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return { address: "" };
}

export const QueryContractInfoRequest = {
  $type: "cosmwasm.wasm.v1.QueryContractInfoRequest" as const,

  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
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

  fromJSON(object: any): QueryContractInfoRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    return QueryContractInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return { address: "", contractInfo: undefined };
}

export const QueryContractInfoResponse = {
  $type: "cosmwasm.wasm.v1.QueryContractInfoResponse" as const,

  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
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

          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
    };
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.contractInfo !== undefined) {
      obj.contractInfo = ContractInfo.toJSON(message.contractInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = (object.contractInfo !== undefined && object.contractInfo !== null)
      ? ContractInfo.fromPartial(object.contractInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryContractHistoryRequest(): QueryContractHistoryRequest {
  return { address: "", pagination: undefined };
}

export const QueryContractHistoryRequest = {
  $type: "cosmwasm.wasm.v1.QueryContractHistoryRequest" as const,

  encode(message: QueryContractHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
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

  fromJSON(object: any): QueryContractHistoryRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractHistoryRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    return QueryContractHistoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractHistoryRequest>): QueryContractHistoryRequest {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryContractHistoryResponse(): QueryContractHistoryResponse {
  return { entries: [], pagination: undefined };
}

export const QueryContractHistoryResponse = {
  $type: "cosmwasm.wasm.v1.QueryContractHistoryResponse" as const,

  encode(message: QueryContractHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryContractHistoryResponse {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => ContractCodeHistoryEntry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractHistoryResponse): unknown {
    const obj: any = {};
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => ContractCodeHistoryEntry.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    return QueryContractHistoryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractHistoryResponse>): QueryContractHistoryResponse {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return { codeId: "0", pagination: undefined };
}

export const QueryContractsByCodeRequest = {
  $type: "cosmwasm.wasm.v1.QueryContractsByCodeRequest" as const,

  encode(message: QueryContractsByCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeId !== "0") {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): QueryContractsByCodeRequest {
    return {
      codeId: isSet(object.codeId) ? String(object.codeId) : "0",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractsByCodeRequest): unknown {
    const obj: any = {};
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    return QueryContractsByCodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId ?? "0";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return { contracts: [], pagination: undefined };
}

export const QueryContractsByCodeResponse = {
  $type: "cosmwasm.wasm.v1.QueryContractsByCodeResponse" as const,

  encode(message: QueryContractsByCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contracts.push(reader.string());
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

  fromJSON(object: any): QueryContractsByCodeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractsByCodeResponse): unknown {
    const obj: any = {};
    if (message.contracts?.length) {
      obj.contracts = message.contracts;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    return QueryContractsByCodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllContractStateRequest = {
  $type: "cosmwasm.wasm.v1.QueryAllContractStateRequest" as const,

  encode(message: QueryAllContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
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

  fromJSON(object: any): QueryAllContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllContractStateRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    return QueryAllContractStateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return { models: [], pagination: undefined };
}

export const QueryAllContractStateResponse = {
  $type: "cosmwasm.wasm.v1.QueryAllContractStateResponse" as const,

  encode(message: QueryAllContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.models) {
      Model.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.models.push(Model.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllContractStateResponse {
    return {
      models: Array.isArray(object?.models) ? object.models.map((e: any) => Model.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllContractStateResponse): unknown {
    const obj: any = {};
    if (message.models?.length) {
      obj.models = message.models.map((e) => Model.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    return QueryAllContractStateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return { address: "", queryData: new Uint8Array(0) };
}

export const QueryRawContractStateRequest = {
  $type: "cosmwasm.wasm.v1.QueryRawContractStateRequest" as const,

  encode(message: QueryRawContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
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

          message.queryData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRawContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(0),
    };
  },

  toJSON(message: QueryRawContractStateRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.queryData.length !== 0) {
      obj.queryData = base64FromBytes(message.queryData);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    return QueryRawContractStateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return { data: new Uint8Array(0) };
}

export const QueryRawContractStateResponse = {
  $type: "cosmwasm.wasm.v1.QueryRawContractStateResponse" as const,

  encode(message: QueryRawContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
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

  fromJSON(object: any): QueryRawContractStateResponse {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: QueryRawContractStateResponse): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    return QueryRawContractStateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQuerySmartContractStateRequest(): QuerySmartContractStateRequest {
  return { address: "", queryData: new Uint8Array(0) };
}

export const QuerySmartContractStateRequest = {
  $type: "cosmwasm.wasm.v1.QuerySmartContractStateRequest" as const,

  encode(message: QuerySmartContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
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

          message.queryData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySmartContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(0),
    };
  },

  toJSON(message: QuerySmartContractStateRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.queryData.length !== 0) {
      obj.queryData = base64FromBytes(message.queryData);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    return QuerySmartContractStateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateRequest>): QuerySmartContractStateRequest {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQuerySmartContractStateResponse(): QuerySmartContractStateResponse {
  return { data: new Uint8Array(0) };
}

export const QuerySmartContractStateResponse = {
  $type: "cosmwasm.wasm.v1.QuerySmartContractStateResponse" as const,

  encode(message: QuerySmartContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
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

  fromJSON(object: any): QuerySmartContractStateResponse {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: QuerySmartContractStateResponse): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    return QuerySmartContractStateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySmartContractStateResponse>): QuerySmartContractStateResponse {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryCodeRequest(): QueryCodeRequest {
  return { codeId: "0" };
}

export const QueryCodeRequest = {
  $type: "cosmwasm.wasm.v1.QueryCodeRequest" as const,

  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeId !== "0") {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCodeRequest {
    return { codeId: isSet(object.codeId) ? String(object.codeId) : "0" };
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    return QueryCodeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId ?? "0";
    return message;
  },
};

function createBaseCodeInfoResponse(): CodeInfoResponse {
  return { codeId: "0", creator: "", dataHash: new Uint8Array(0), instantiatePermission: undefined };
}

export const CodeInfoResponse = {
  $type: "cosmwasm.wasm.v1.CodeInfoResponse" as const,

  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeId !== "0") {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataHash = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CodeInfoResponse {
    return {
      codeId: isSet(object.codeId) ? String(object.codeId) : "0",
      creator: isSet(object.creator) ? String(object.creator) : "",
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(0),
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
    };
  },

  toJSON(message: CodeInfoResponse): unknown {
    const obj: any = {};
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.dataHash.length !== 0) {
      obj.dataHash = base64FromBytes(message.dataHash);
    }
    if (message.instantiatePermission !== undefined) {
      obj.instantiatePermission = AccessConfig.toJSON(message.instantiatePermission);
    }
    return obj;
  },

  create(base?: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    return CodeInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId ?? "0";
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array(0);
    message.instantiatePermission =
      (object.instantiatePermission !== undefined && object.instantiatePermission !== null)
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    return message;
  },
};

function createBaseQueryCodeResponse(): QueryCodeResponse {
  return { codeInfo: undefined, data: new Uint8Array(0) };
}

export const QueryCodeResponse = {
  $type: "cosmwasm.wasm.v1.QueryCodeResponse" as const,

  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryCodeResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    if (message.codeInfo !== undefined) {
      obj.codeInfo = CodeInfoResponse.toJSON(message.codeInfo);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    return QueryCodeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = (object.codeInfo !== undefined && object.codeInfo !== null)
      ? CodeInfoResponse.fromPartial(object.codeInfo)
      : undefined;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryCodesRequest(): QueryCodesRequest {
  return { pagination: undefined };
}

export const QueryCodesRequest = {
  $type: "cosmwasm.wasm.v1.QueryCodesRequest" as const,

  encode(message: QueryCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryCodesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryCodesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCodesRequest>): QueryCodesRequest {
    return QueryCodesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCodesResponse(): QueryCodesResponse {
  return { codeInfos: [], pagination: undefined };
}

export const QueryCodesResponse = {
  $type: "cosmwasm.wasm.v1.QueryCodesResponse" as const,

  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};
    if (message.codeInfos?.length) {
      obj.codeInfos = message.codeInfos.map((e) => CodeInfoResponse.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    return QueryCodesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map((e) => CodeInfoResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPinnedCodesRequest(): QueryPinnedCodesRequest {
  return { pagination: undefined };
}

export const QueryPinnedCodesRequest = {
  $type: "cosmwasm.wasm.v1.QueryPinnedCodesRequest" as const,

  encode(message: QueryPinnedCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): QueryPinnedCodesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryPinnedCodesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    return QueryPinnedCodesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesRequest>): QueryPinnedCodesRequest {
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPinnedCodesResponse(): QueryPinnedCodesResponse {
  return { codeIds: [], pagination: undefined };
}

export const QueryPinnedCodesResponse = {
  $type: "cosmwasm.wasm.v1.QueryPinnedCodesResponse" as const,

  encode(message: QueryPinnedCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPinnedCodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.codeIds.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
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

  fromJSON(object: any): QueryPinnedCodesResponse {
    return {
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPinnedCodesResponse): unknown {
    const obj: any = {};
    if (message.codeIds?.length) {
      obj.codeIds = message.codeIds;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    return QueryPinnedCodesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPinnedCodesResponse>): QueryPinnedCodesResponse {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  $type: "cosmwasm.wasm.v1.QueryParamsRequest" as const,

  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  $type: "cosmwasm.wasm.v1.QueryParamsResponse" as const,

  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return { creatorAddress: "", pagination: undefined };
}

export const QueryContractsByCreatorRequest = {
  $type: "cosmwasm.wasm.v1.QueryContractsByCreatorRequest" as const,

  encode(message: QueryContractsByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creatorAddress = reader.string();
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

  fromJSON(object: any): QueryContractsByCreatorRequest {
    return {
      creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractsByCreatorRequest): unknown {
    const obj: any = {};
    if (message.creatorAddress !== "") {
      obj.creatorAddress = message.creatorAddress;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    return QueryContractsByCreatorRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return { contractAddresses: [], pagination: undefined };
}

export const QueryContractsByCreatorResponse = {
  $type: "cosmwasm.wasm.v1.QueryContractsByCreatorResponse" as const,

  encode(message: QueryContractsByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddresses.push(reader.string());
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

  fromJSON(object: any): QueryContractsByCreatorResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses)
        ? object.contractAddresses.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryContractsByCreatorResponse): unknown {
    const obj: any = {};
    if (message.contractAddresses?.length) {
      obj.contractAddresses = message.contractAddresses;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    return QueryContractsByCreatorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  ContractInfo(
    request: DeepPartial<QueryContractInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  ContractHistory(
    request: DeepPartial<QueryContractHistoryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  ContractsByCode(
    request: DeepPartial<QueryContractsByCodeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  AllContractState(
    request: DeepPartial<QueryAllContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  RawContractState(
    request: DeepPartial<QueryRawContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  SmartContractState(
    request: DeepPartial<QuerySmartContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  Codes(request: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  PinnedCodes(
    request: DeepPartial<QueryPinnedCodesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPinnedCodesResponse>;
  /** Params gets the module params */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */
  ContractsByCreator(
    request: DeepPartial<QueryContractsByCreatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractsByCreatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractHistory = this.ContractHistory.bind(this);
    this.ContractsByCode = this.ContractsByCode.bind(this);
    this.AllContractState = this.AllContractState.bind(this);
    this.RawContractState = this.RawContractState.bind(this);
    this.SmartContractState = this.SmartContractState.bind(this);
    this.Code = this.Code.bind(this);
    this.Codes = this.Codes.bind(this);
    this.PinnedCodes = this.PinnedCodes.bind(this);
    this.Params = this.Params.bind(this);
    this.ContractsByCreator = this.ContractsByCreator.bind(this);
  }

  ContractInfo(
    request: DeepPartial<QueryContractInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractInfoResponse> {
    return this.rpc.unary(QueryContractInfoDesc, QueryContractInfoRequest.fromPartial(request), metadata);
  }

  ContractHistory(
    request: DeepPartial<QueryContractHistoryRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractHistoryResponse> {
    return this.rpc.unary(QueryContractHistoryDesc, QueryContractHistoryRequest.fromPartial(request), metadata);
  }

  ContractsByCode(
    request: DeepPartial<QueryContractsByCodeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractsByCodeResponse> {
    return this.rpc.unary(QueryContractsByCodeDesc, QueryContractsByCodeRequest.fromPartial(request), metadata);
  }

  AllContractState(
    request: DeepPartial<QueryAllContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAllContractStateResponse> {
    return this.rpc.unary(QueryAllContractStateDesc, QueryAllContractStateRequest.fromPartial(request), metadata);
  }

  RawContractState(
    request: DeepPartial<QueryRawContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRawContractStateResponse> {
    return this.rpc.unary(QueryRawContractStateDesc, QueryRawContractStateRequest.fromPartial(request), metadata);
  }

  SmartContractState(
    request: DeepPartial<QuerySmartContractStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySmartContractStateResponse> {
    return this.rpc.unary(QuerySmartContractStateDesc, QuerySmartContractStateRequest.fromPartial(request), metadata);
  }

  Code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse> {
    return this.rpc.unary(QueryCodeDesc, QueryCodeRequest.fromPartial(request), metadata);
  }

  Codes(request: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse> {
    return this.rpc.unary(QueryCodesDesc, QueryCodesRequest.fromPartial(request), metadata);
  }

  PinnedCodes(
    request: DeepPartial<QueryPinnedCodesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPinnedCodesResponse> {
    return this.rpc.unary(QueryPinnedCodesDesc, QueryPinnedCodesRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  ContractsByCreator(
    request: DeepPartial<QueryContractsByCreatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryContractsByCreatorResponse> {
    return this.rpc.unary(QueryContractsByCreatorDesc, QueryContractsByCreatorRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmwasm.wasm.v1.Query" };

export const QueryContractInfoDesc: UnaryMethodDefinitionish = {
  methodName: "ContractInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryContractInfoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryContractHistoryDesc: UnaryMethodDefinitionish = {
  methodName: "ContractHistory",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractHistoryRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryContractHistoryResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryContractsByCodeDesc: UnaryMethodDefinitionish = {
  methodName: "ContractsByCode",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractsByCodeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryContractsByCodeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAllContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "AllContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllContractStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAllContractStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryRawContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "RawContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRawContractStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryRawContractStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QuerySmartContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "SmartContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySmartContractStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QuerySmartContractStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryCodeDesc: UnaryMethodDefinitionish = {
  methodName: "Code",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCodeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCodeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryCodesDesc: UnaryMethodDefinitionish = {
  methodName: "Codes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCodesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCodesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPinnedCodesDesc: UnaryMethodDefinitionish = {
  methodName: "PinnedCodes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPinnedCodesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPinnedCodesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryParamsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryContractsByCreatorDesc: UnaryMethodDefinitionish = {
  methodName: "ContractsByCreator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryContractsByCreatorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryContractsByCreatorResponse.decode(data);
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
