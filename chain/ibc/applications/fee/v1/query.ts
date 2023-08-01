/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { FeeEnabledChannel } from "./genesis";

/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination:
    | PageRequest
    | undefined;
  /** block height at which to query */
  queryHeight: string;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId:
    | PacketId
    | undefined;
  /** block height at which to query */
  queryHeight: string;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees | undefined;
}

/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: string;
}

/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}

/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}

/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId | undefined;
}

/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}

/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}

/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}

/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}

/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}

/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination:
    | PageRequest
    | undefined;
  /** block height at which to query */
  queryHeight: string;
}

/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}

function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return { pagination: undefined, queryHeight: "0" };
}

export const QueryIncentivizedPacketsRequest = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketsRequest" as const,

  encode(message: QueryIncentivizedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== "0") {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.queryHeight = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? String(object.queryHeight) : "0",
    };
  },

  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.queryHeight !== "0") {
      obj.queryHeight = message.queryHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.queryHeight = object.queryHeight ?? "0";
    return message;
  },
};

function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return { incentivizedPackets: [], pagination: undefined };
}

export const QueryIncentivizedPacketsResponse = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketsResponse" as const,

  encode(message: QueryIncentivizedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets)
        ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets?.length) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => IdentifiedPacketFees.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return { packetId: undefined, queryHeight: "0" };
}

export const QueryIncentivizedPacketRequest = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketRequest" as const,

  encode(message: QueryIncentivizedPacketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== "0") {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetId = PacketId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.queryHeight = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketRequest {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      queryHeight: isSet(object.queryHeight) ? String(object.queryHeight) : "0",
    };
  },

  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    if (message.packetId !== undefined) {
      obj.packetId = PacketId.toJSON(message.packetId);
    }
    if (message.queryHeight !== "0") {
      obj.queryHeight = message.queryHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    message.queryHeight = object.queryHeight ?? "0";
    return message;
  },
};

function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return { incentivizedPacket: undefined };
}

export const QueryIncentivizedPacketResponse = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketResponse" as const,

  encode(message: QueryIncentivizedPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketResponse {
    return {
      incentivizedPacket: isSet(object.incentivizedPacket)
        ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket)
        : undefined,
    };
  },

  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPacket !== undefined) {
      obj.incentivizedPacket = IdentifiedPacketFees.toJSON(message.incentivizedPacket);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    message.incentivizedPacket = (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null)
      ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket)
      : undefined;
    return message;
  },
};

function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return { pagination: undefined, portId: "", channelId: "", queryHeight: "0" };
}

export const QueryIncentivizedPacketsForChannelRequest = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest" as const,

  encode(message: QueryIncentivizedPacketsForChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== "0") {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.queryHeight = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      queryHeight: isSet(object.queryHeight) ? String(object.queryHeight) : "0",
    };
  },

  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.queryHeight !== "0") {
      obj.queryHeight = message.queryHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight = object.queryHeight ?? "0";
    return message;
  },
};

function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return { incentivizedPackets: [], pagination: undefined };
}

export const QueryIncentivizedPacketsForChannelResponse = {
  $type: "ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse" as const,

  encode(message: QueryIncentivizedPacketsForChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    return {
      incentivizedPackets: Array.isArray(object?.incentivizedPackets)
        ? object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets?.length) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) => IdentifiedPacketFees.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>,
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets = object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalRecvFeesRequest = {
  $type: "ibc.applications.fee.v1.QueryTotalRecvFeesRequest" as const,

  encode(message: QueryTotalRecvFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetId = PacketId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    if (message.packetId !== undefined) {
      obj.packetId = PacketId.toJSON(message.packetId);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return { recvFees: [] };
}

export const QueryTotalRecvFeesResponse = {
  $type: "ibc.applications.fee.v1.QueryTotalRecvFeesResponse" as const,

  encode(message: QueryTotalRecvFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesResponse {
    return { recvFees: Array.isArray(object?.recvFees) ? object.recvFees.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees?.length) {
      obj.recvFees = message.recvFees.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalAckFeesRequest = {
  $type: "ibc.applications.fee.v1.QueryTotalAckFeesRequest" as const,

  encode(message: QueryTotalAckFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetId = PacketId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    if (message.packetId !== undefined) {
      obj.packetId = PacketId.toJSON(message.packetId);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return { ackFees: [] };
}

export const QueryTotalAckFeesResponse = {
  $type: "ibc.applications.fee.v1.QueryTotalAckFeesResponse" as const,

  encode(message: QueryTotalAckFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesResponse {
    return { ackFees: Array.isArray(object?.ackFees) ? object.ackFees.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees?.length) {
      obj.ackFees = message.ackFees.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return { packetId: undefined };
}

export const QueryTotalTimeoutFeesRequest = {
  $type: "ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest" as const,

  encode(message: QueryTotalTimeoutFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packetId = PacketId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    return { packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined };
  },

  toJSON(message: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    if (message.packetId !== undefined) {
      obj.packetId = PacketId.toJSON(message.packetId);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    message.packetId = (object.packetId !== undefined && object.packetId !== null)
      ? PacketId.fromPartial(object.packetId)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return { timeoutFees: [] };
}

export const QueryTotalTimeoutFeesResponse = {
  $type: "ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse" as const,

  encode(message: QueryTotalTimeoutFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    return {
      timeoutFees: Array.isArray(object?.timeoutFees) ? object.timeoutFees.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees?.length) {
      obj.timeoutFees = message.timeoutFees.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return { channelId: "", relayer: "" };
}

export const QueryPayeeRequest = {
  $type: "ibc.applications.fee.v1.QueryPayeeRequest" as const,

  encode(message: QueryPayeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.relayer !== "") {
      obj.relayer = message.relayer;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    return QueryPayeeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return { payeeAddress: "" };
}

export const QueryPayeeResponse = {
  $type: "ibc.applications.fee.v1.QueryPayeeResponse" as const,

  encode(message: QueryPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payeeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeResponse {
    return { payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : "" };
  },

  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    if (message.payeeAddress !== "") {
      obj.payeeAddress = message.payeeAddress;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    return QueryPayeeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
};

function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return { channelId: "", relayer: "" };
}

export const QueryCounterpartyPayeeRequest = {
  $type: "ibc.applications.fee.v1.QueryCounterpartyPayeeRequest" as const,

  encode(message: QueryCounterpartyPayeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.relayer !== "") {
      obj.relayer = message.relayer;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return { counterpartyPayee: "" };
}

export const QueryCounterpartyPayeeResponse = {
  $type: "ibc.applications.fee.v1.QueryCounterpartyPayeeResponse" as const,

  encode(message: QueryCounterpartyPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.counterpartyPayee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    return { counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "" };
  },

  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    if (message.counterpartyPayee !== "") {
      obj.counterpartyPayee = message.counterpartyPayee;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
};

function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return { pagination: undefined, queryHeight: "0" };
}

export const QueryFeeEnabledChannelsRequest = {
  $type: "ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest" as const,

  encode(message: QueryFeeEnabledChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== "0") {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.queryHeight = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      queryHeight: isSet(object.queryHeight) ? String(object.queryHeight) : "0",
    };
  },

  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.queryHeight !== "0") {
      obj.queryHeight = message.queryHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.queryHeight = object.queryHeight ?? "0";
    return message;
  },
};

function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return { feeEnabledChannels: [], pagination: undefined };
}

export const QueryFeeEnabledChannelsResponse = {
  $type: "ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse" as const,

  encode(message: QueryFeeEnabledChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    return {
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels)
        ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels?.length) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => FeeEnabledChannel.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels = object.feeEnabledChannels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return { portId: "", channelId: "" };
}

export const QueryFeeEnabledChannelRequest = {
  $type: "ibc.applications.fee.v1.QueryFeeEnabledChannelRequest" as const,

  encode(message: QueryFeeEnabledChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.portId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return { feeEnabled: false };
}

export const QueryFeeEnabledChannelResponse = {
  $type: "ibc.applications.fee.v1.QueryFeeEnabledChannelResponse" as const,

  encode(message: QueryFeeEnabledChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.feeEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    return { feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false };
  },

  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    if (message.feeEnabled === true) {
      obj.feeEnabled = message.feeEnabled;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
};

/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets(
    request: DeepPartial<QueryIncentivizedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket(
    request: DeepPartial<QueryIncentivizedPacketRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel(
    request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees(
    request: DeepPartial<QueryTotalRecvFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees(
    request: DeepPartial<QueryTotalAckFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees(
    request: DeepPartial<QueryTotalTimeoutFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  Payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  CounterpartyPayee(
    request: DeepPartial<QueryCounterpartyPayeeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels(
    request: DeepPartial<QueryFeeEnabledChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel(
    request: DeepPartial<QueryFeeEnabledChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
    this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
    this.IncentivizedPacketsForChannel = this.IncentivizedPacketsForChannel.bind(this);
    this.TotalRecvFees = this.TotalRecvFees.bind(this);
    this.TotalAckFees = this.TotalAckFees.bind(this);
    this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
    this.Payee = this.Payee.bind(this);
    this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
    this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
    this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
  }

  IncentivizedPackets(
    request: DeepPartial<QueryIncentivizedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsResponse> {
    return this.rpc.unary(QueryIncentivizedPacketsDesc, QueryIncentivizedPacketsRequest.fromPartial(request), metadata);
  }

  IncentivizedPacket(
    request: DeepPartial<QueryIncentivizedPacketRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketResponse> {
    return this.rpc.unary(QueryIncentivizedPacketDesc, QueryIncentivizedPacketRequest.fromPartial(request), metadata);
  }

  IncentivizedPacketsForChannel(
    request: DeepPartial<QueryIncentivizedPacketsForChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIncentivizedPacketsForChannelResponse> {
    return this.rpc.unary(
      QueryIncentivizedPacketsForChannelDesc,
      QueryIncentivizedPacketsForChannelRequest.fromPartial(request),
      metadata,
    );
  }

  TotalRecvFees(
    request: DeepPartial<QueryTotalRecvFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalRecvFeesResponse> {
    return this.rpc.unary(QueryTotalRecvFeesDesc, QueryTotalRecvFeesRequest.fromPartial(request), metadata);
  }

  TotalAckFees(
    request: DeepPartial<QueryTotalAckFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalAckFeesResponse> {
    return this.rpc.unary(QueryTotalAckFeesDesc, QueryTotalAckFeesRequest.fromPartial(request), metadata);
  }

  TotalTimeoutFees(
    request: DeepPartial<QueryTotalTimeoutFeesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTotalTimeoutFeesResponse> {
    return this.rpc.unary(QueryTotalTimeoutFeesDesc, QueryTotalTimeoutFeesRequest.fromPartial(request), metadata);
  }

  Payee(request: DeepPartial<QueryPayeeRequest>, metadata?: grpc.Metadata): Promise<QueryPayeeResponse> {
    return this.rpc.unary(QueryPayeeDesc, QueryPayeeRequest.fromPartial(request), metadata);
  }

  CounterpartyPayee(
    request: DeepPartial<QueryCounterpartyPayeeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryCounterpartyPayeeResponse> {
    return this.rpc.unary(QueryCounterpartyPayeeDesc, QueryCounterpartyPayeeRequest.fromPartial(request), metadata);
  }

  FeeEnabledChannels(
    request: DeepPartial<QueryFeeEnabledChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelsResponse> {
    return this.rpc.unary(QueryFeeEnabledChannelsDesc, QueryFeeEnabledChannelsRequest.fromPartial(request), metadata);
  }

  FeeEnabledChannel(
    request: DeepPartial<QueryFeeEnabledChannelRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeeEnabledChannelResponse> {
    return this.rpc.unary(QueryFeeEnabledChannelDesc, QueryFeeEnabledChannelRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "ibc.applications.fee.v1.Query" };

export const QueryIncentivizedPacketsDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPackets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryIncentivizedPacketsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryIncentivizedPacketDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacket",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryIncentivizedPacketResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryIncentivizedPacketsForChannelDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizedPacketsForChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncentivizedPacketsForChannelRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryIncentivizedPacketsForChannelResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTotalRecvFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalRecvFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalRecvFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTotalRecvFeesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTotalAckFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalAckFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalAckFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTotalAckFeesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTotalTimeoutFeesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalTimeoutFees",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTotalTimeoutFeesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTotalTimeoutFeesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "Payee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPayeeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPayeeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryCounterpartyPayeeDesc: UnaryMethodDefinitionish = {
  methodName: "CounterpartyPayee",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryCounterpartyPayeeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryCounterpartyPayeeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryFeeEnabledChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeEnabledChannelsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryFeeEnabledChannelsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryFeeEnabledChannelDesc: UnaryMethodDefinitionish = {
  methodName: "FeeEnabledChannel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeeEnabledChannelRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryFeeEnabledChannelResponse.decode(data);
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
