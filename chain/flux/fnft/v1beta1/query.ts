/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";

/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */
  owner: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  /** amount is the number of all NFTs of a given class owned by the owner */
  amount: string;
}

/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
}

/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  /** owner is the owner address of the nft */
  owner: string;
}

/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  /** class_id associated with the nft */
  classId: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  /** amount is the number of all NFTs from the given class */
  amount: string;
}

/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
  /** class_id associated with the nft */
  classId: string;
  /** owner is the owner address of the nft */
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
  /** NFT defines the NFT */
  nfts: NFT[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  /** class_id associated with the nft */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
}

/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  /** owner is the owner address of the nft */
  nft: NFT | undefined;
}

/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
  /** class_id associated with the nft */
  classId: string;
}

/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
  /** class defines the class of the nft type. */
  class: Class | undefined;
}

/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { classId: "", owner: "" };
}

export const QueryBalanceRequest = {
  $type: "flux.fnft.v1beta1.QueryBalanceRequest" as const,

  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryBalanceRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    return QueryBalanceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return { amount: "0" };
}

export const QueryBalanceResponse = {
  $type: "flux.fnft.v1beta1.QueryBalanceResponse" as const,

  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "0") {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return { amount: isSet(object.amount) ? String(object.amount) : "0" };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    return QueryBalanceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return { classId: "", id: "" };
}

export const QueryOwnerRequest = {
  $type: "flux.fnft.v1beta1.QueryOwnerRequest" as const,

  encode(message: QueryOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    return QueryOwnerRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return { owner: "" };
}

export const QueryOwnerResponse = {
  $type: "flux.fnft.v1beta1.QueryOwnerResponse" as const,

  encode(message: QueryOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryOwnerResponse {
    return { owner: isSet(object.owner) ? String(object.owner) : "" };
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    return QueryOwnerResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return { classId: "" };
}

export const QuerySupplyRequest = {
  $type: "flux.fnft.v1beta1.QuerySupplyRequest" as const,

  encode(message: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    return { classId: isSet(object.classId) ? String(object.classId) : "" };
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    return QuerySupplyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return { amount: "0" };
}

export const QuerySupplyResponse = {
  $type: "flux.fnft.v1beta1.QuerySupplyResponse" as const,

  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "0") {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    return { amount: isSet(object.amount) ? String(object.amount) : "0" };
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    return QuerySupplyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return { classId: "", owner: "", pagination: undefined };
}

export const QueryNFTsRequest = {
  $type: "flux.fnft.v1beta1.QueryNFTsRequest" as const,

  encode(message: QueryNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryNFTsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNFTsRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest {
    return QueryNFTsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return { nfts: [], pagination: undefined };
}

export const QueryNFTsResponse = {
  $type: "flux.fnft.v1beta1.QueryNFTsResponse" as const,

  encode(message: QueryNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nfts.push(NFT.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNFTsResponse): unknown {
    const obj: any = {};
    if (message.nfts?.length) {
      obj.nfts = message.nfts.map((e) => NFT.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse {
    return QueryNFTsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { classId: "", id: "" };
}

export const QueryNFTRequest = {
  $type: "flux.fnft.v1beta1.QueryNFTRequest" as const,

  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    return QueryNFTRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { nft: undefined };
}

export const QueryNFTResponse = {
  $type: "flux.fnft.v1beta1.QueryNFTResponse" as const,

  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nft = NFT.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return { nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    if (message.nft !== undefined) {
      obj.nft = NFT.toJSON(message.nft);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    return QueryNFTResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = (object.nft !== undefined && object.nft !== null) ? NFT.fromPartial(object.nft) : undefined;
    return message;
  },
};

function createBaseQueryClassRequest(): QueryClassRequest {
  return { classId: "" };
}

export const QueryClassRequest = {
  $type: "flux.fnft.v1beta1.QueryClassRequest" as const,

  encode(message: QueryClassRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryClassRequest {
    return { classId: isSet(object.classId) ? String(object.classId) : "" };
  },

  toJSON(message: QueryClassRequest): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryClassRequest>): QueryClassRequest {
    return QueryClassRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
};

function createBaseQueryClassResponse(): QueryClassResponse {
  return { class: undefined };
}

export const QueryClassResponse = {
  $type: "flux.fnft.v1beta1.QueryClassResponse" as const,

  encode(message: QueryClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.class = Class.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryClassResponse {
    return { class: isSet(object.class) ? Class.fromJSON(object.class) : undefined };
  },

  toJSON(message: QueryClassResponse): unknown {
    const obj: any = {};
    if (message.class !== undefined) {
      obj.class = Class.toJSON(message.class);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryClassResponse>): QueryClassResponse {
    return QueryClassResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = (object.class !== undefined && object.class !== null) ? Class.fromPartial(object.class) : undefined;
    return message;
  },
};

function createBaseQueryClassesRequest(): QueryClassesRequest {
  return { pagination: undefined };
}

export const QueryClassesRequest = {
  $type: "flux.fnft.v1beta1.QueryClassesRequest" as const,

  encode(message: QueryClassesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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

  fromJSON(object: any): QueryClassesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryClassesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    return QueryClassesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryClassesResponse(): QueryClassesResponse {
  return { classes: [], pagination: undefined };
}

export const QueryClassesResponse = {
  $type: "flux.fnft.v1beta1.QueryClassesResponse" as const,

  encode(message: QueryClassesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.classes.push(Class.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryClassesResponse): unknown {
    const obj: any = {};
    if (message.classes?.length) {
      obj.classes = message.classes.map((e) => Class.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    return QueryClassesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
  Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
  /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
  Owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse>;
  /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
  Supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse>;
  /**
   * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   * ERC721Enumerable
   */
  NFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse>;
  /** NFT queries an NFT based on its class and id. */
  NFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse>;
  /** Class queries an NFT class based on its id */
  Class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse>;
  /** Classes queries all NFT classes */
  Classes(request: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.Owner = this.Owner.bind(this);
    this.Supply = this.Supply.bind(this);
    this.NFTs = this.NFTs.bind(this);
    this.NFT = this.NFT.bind(this);
    this.Class = this.Class.bind(this);
    this.Classes = this.Classes.bind(this);
  }

  Balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }

  Owner(request: DeepPartial<QueryOwnerRequest>, metadata?: grpc.Metadata): Promise<QueryOwnerResponse> {
    return this.rpc.unary(QueryOwnerDesc, QueryOwnerRequest.fromPartial(request), metadata);
  }

  Supply(request: DeepPartial<QuerySupplyRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyResponse> {
    return this.rpc.unary(QuerySupplyDesc, QuerySupplyRequest.fromPartial(request), metadata);
  }

  NFTs(request: DeepPartial<QueryNFTsRequest>, metadata?: grpc.Metadata): Promise<QueryNFTsResponse> {
    return this.rpc.unary(QueryNFTsDesc, QueryNFTsRequest.fromPartial(request), metadata);
  }

  NFT(request: DeepPartial<QueryNFTRequest>, metadata?: grpc.Metadata): Promise<QueryNFTResponse> {
    return this.rpc.unary(QueryNFTDesc, QueryNFTRequest.fromPartial(request), metadata);
  }

  Class(request: DeepPartial<QueryClassRequest>, metadata?: grpc.Metadata): Promise<QueryClassResponse> {
    return this.rpc.unary(QueryClassDesc, QueryClassRequest.fromPartial(request), metadata);
  }

  Classes(request: DeepPartial<QueryClassesRequest>, metadata?: grpc.Metadata): Promise<QueryClassesResponse> {
    return this.rpc.unary(QueryClassesDesc, QueryClassesRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.fnft.v1beta1.Query" };

export const QueryBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "Balance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryBalanceRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryBalanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryOwnerDesc: UnaryMethodDefinitionish = {
  methodName: "Owner",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryOwnerRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryOwnerResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QuerySupplyDesc: UnaryMethodDefinitionish = {
  methodName: "Supply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySupplyRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QuerySupplyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryNFTsDesc: UnaryMethodDefinitionish = {
  methodName: "NFTs",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryNFTsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryNFTsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryNFTDesc: UnaryMethodDefinitionish = {
  methodName: "NFT",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryNFTRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryNFTResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryClassDesc: UnaryMethodDefinitionish = {
  methodName: "Class",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClassRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryClassResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryClassesDesc: UnaryMethodDefinitionish = {
  methodName: "Classes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryClassesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryClassesResponse.decode(data);
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