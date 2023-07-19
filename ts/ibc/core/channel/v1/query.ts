/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Channel, IdentifiedChannel, PacketState } from "./channel";

/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel:
    | Channel
    | undefined;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
  /** pagination request */
  pagination: PageRequest | undefined;
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;
  /** pagination request */
  pagination: PageRequest | undefined;
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identifiedClientState:
    | IdentifiedClientState
    | undefined;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** revision number of the consensus state */
  revisionNumber: string;
  /** revision height of the consensus state */
  revisionHeight: string;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensusState:
    | Any
    | undefined;
  /** client ID associated with the consensus state */
  clientId: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: string;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** pagination request */
  pagination: PageRequest | undefined;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: string;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: string;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** pagination request */
  pagination:
    | PageRequest
    | undefined;
  /** list of packet sequences */
  packetCommitmentSequences: string[];
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */
  pagination:
    | PageResponse
    | undefined;
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** list of packet sequences */
  packetCommitmentSequences: string[];
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: string[];
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** list of acknowledgement sequences */
  packetAckSequences: string[];
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: string[];
  /** query block height */
  height: Height | undefined;
}

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  nextSequenceReceive: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
  /** next sequence send number */
  nextSequenceSend: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}

function createBaseQueryChannelRequest(): QueryChannelRequest {
  return { portId: "", channelId: "" };
}

export const QueryChannelRequest = {
  encode(message: QueryChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();
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

  fromJSON(object: any): QueryChannelRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryChannelRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    return QueryChannelRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryChannelResponse(): QueryChannelResponse {
  return { channel: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryChannelResponse = {
  encode(message: QueryChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channel = Channel.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryChannelResponse {
    return {
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryChannelResponse): unknown {
    const obj: any = {};
    if (message.channel !== undefined) {
      obj.channel = Channel.toJSON(message.channel);
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    return QueryChannelResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    message.channel = (object.channel !== undefined && object.channel !== null)
      ? Channel.fromPartial(object.channel)
      : undefined;
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryChannelsRequest(): QueryChannelsRequest {
  return { pagination: undefined };
}

export const QueryChannelsRequest = {
  encode(message: QueryChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();
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

  fromJSON(object: any): QueryChannelsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryChannelsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    return QueryChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryChannelsResponse(): QueryChannelsResponse {
  return { channels: [], pagination: undefined, height: undefined };
}

export const QueryChannelsResponse = {
  encode(message: QueryChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => IdentifiedChannel.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelsResponse>): QueryChannelsResponse {
    return QueryChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelsResponse>): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryConnectionChannelsRequest(): QueryConnectionChannelsRequest {
  return { connection: "", pagination: undefined };
}

export const QueryConnectionChannelsRequest = {
  encode(message: QueryConnectionChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = reader.string();
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

  fromJSON(object: any): QueryConnectionChannelsRequest {
    return {
      connection: isSet(object.connection) ? String(object.connection) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryConnectionChannelsRequest): unknown {
    const obj: any = {};
    if (message.connection !== "") {
      obj.connection = message.connection;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    return QueryConnectionChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryConnectionChannelsResponse(): QueryConnectionChannelsResponse {
  return { channels: [], pagination: undefined, height: undefined };
}

export const QueryConnectionChannelsResponse = {
  encode(message: QueryConnectionChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryConnectionChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) => IdentifiedChannel.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    return QueryConnectionChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map((e) => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryChannelClientStateRequest(): QueryChannelClientStateRequest {
  return { portId: "", channelId: "" };
}

export const QueryChannelClientStateRequest = {
  encode(message: QueryChannelClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();
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

  fromJSON(object: any): QueryChannelClientStateRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryChannelClientStateRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    return QueryChannelClientStateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryChannelClientStateResponse(): QueryChannelClientStateResponse {
  return { identifiedClientState: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryChannelClientStateResponse = {
  encode(message: QueryChannelClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifiedClientState !== undefined) {
      IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryChannelClientStateResponse {
    return {
      identifiedClientState: isSet(object.identifiedClientState)
        ? IdentifiedClientState.fromJSON(object.identifiedClientState)
        : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryChannelClientStateResponse): unknown {
    const obj: any = {};
    if (message.identifiedClientState !== undefined) {
      obj.identifiedClientState = IdentifiedClientState.toJSON(message.identifiedClientState);
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    return QueryChannelClientStateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    message.identifiedClientState =
      (object.identifiedClientState !== undefined && object.identifiedClientState !== null)
        ? IdentifiedClientState.fromPartial(object.identifiedClientState)
        : undefined;
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryChannelConsensusStateRequest(): QueryChannelConsensusStateRequest {
  return { portId: "", channelId: "", revisionNumber: "0", revisionHeight: "0" };
}

export const QueryChannelConsensusStateRequest = {
  encode(message: QueryChannelConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.revisionNumber !== "0") {
      writer.uint32(24).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== "0") {
      writer.uint32(32).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.revisionNumber = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.revisionHeight = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      revisionNumber: isSet(object.revisionNumber) ? String(object.revisionNumber) : "0",
      revisionHeight: isSet(object.revisionHeight) ? String(object.revisionHeight) : "0",
    };
  },

  toJSON(message: QueryChannelConsensusStateRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.revisionNumber !== "0") {
      obj.revisionNumber = message.revisionNumber;
    }
    if (message.revisionHeight !== "0") {
      obj.revisionHeight = message.revisionHeight;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    return QueryChannelConsensusStateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.revisionNumber = object.revisionNumber ?? "0";
    message.revisionHeight = object.revisionHeight ?? "0";
    return message;
  },
};

function createBaseQueryChannelConsensusStateResponse(): QueryChannelConsensusStateResponse {
  return { consensusState: undefined, clientId: "", proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryChannelConsensusStateResponse = {
  encode(message: QueryChannelConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.consensusState = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateResponse {
    return {
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryChannelConsensusStateResponse): unknown {
    const obj: any = {};
    if (message.consensusState !== undefined) {
      obj.consensusState = Any.toJSON(message.consensusState);
    }
    if (message.clientId !== "") {
      obj.clientId = message.clientId;
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    return QueryChannelConsensusStateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
      ? Any.fromPartial(object.consensusState)
      : undefined;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return { portId: "", channelId: "", sequence: "0" };
}

export const QueryPacketCommitmentRequest = {
  encode(message: QueryPacketCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== "0") {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
    };
  },

  toJSON(message: QueryPacketCommitmentRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return { commitment: new Uint8Array(0), proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryPacketCommitmentResponse = {
  encode(message: QueryPacketCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitment = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentResponse {
    return {
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(0),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentResponse): unknown {
    const obj: any = {};
    if (message.commitment.length !== 0) {
      obj.commitment = base64FromBytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array(0);
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return { portId: "", channelId: "", pagination: undefined };
}

export const QueryPacketCommitmentsRequest = {
  encode(message: QueryPacketCommitmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
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

  fromJSON(object: any): QueryPacketCommitmentsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentsRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return { commitments: [], pagination: undefined, height: undefined };
}

export const QueryPacketCommitmentsResponse = {
  encode(message: QueryPacketCommitmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => PacketState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryPacketCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.commitments?.length) {
      obj.commitments = message.commitments.map((e) => PacketState.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map((e) => PacketState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return { portId: "", channelId: "", sequence: "0" };
}

export const QueryPacketReceiptRequest = {
  encode(message: QueryPacketReceiptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== "0") {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
    };
  },

  toJSON(message: QueryPacketReceiptRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return { received: false, proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryPacketReceiptResponse = {
  encode(message: QueryPacketReceiptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.received = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptResponse {
    return {
      received: isSet(object.received) ? Boolean(object.received) : false,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketReceiptResponse): unknown {
    const obj: any = {};
    if (message.received === true) {
      obj.received = message.received;
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return { portId: "", channelId: "", sequence: "0" };
}

export const QueryPacketAcknowledgementRequest = {
  encode(message: QueryPacketAcknowledgementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== "0") {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
    };
  },

  toJSON(message: QueryPacketAcknowledgementRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return { acknowledgement: new Uint8Array(0), proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryPacketAcknowledgementResponse = {
  encode(message: QueryPacketAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acknowledgement = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(0),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryPacketAcknowledgementResponse): unknown {
    const obj: any = {};
    if (message.acknowledgement.length !== 0) {
      obj.acknowledgement = base64FromBytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array(0);
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return { portId: "", channelId: "", pagination: undefined, packetCommitmentSequences: [] };
}

export const QueryPacketAcknowledgementsRequest = {
  encode(message: QueryPacketAcknowledgementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 32) {
            message.packetCommitmentSequences.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
        ? object.packetCommitmentSequences.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryPacketAcknowledgementsRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.packetCommitmentSequences?.length) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return { acknowledgements: [], pagination: undefined, height: undefined };
}

export const QueryPacketAcknowledgementsResponse = {
  encode(message: QueryPacketAcknowledgementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements)
        ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryPacketAcknowledgementsResponse): unknown {
    const obj: any = {};
    if (message.acknowledgements?.length) {
      obj.acknowledgements = message.acknowledgements.map((e) => PacketState.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map((e) => PacketState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return { portId: "", channelId: "", packetCommitmentSequences: [] };
}

export const QueryUnreceivedPacketsRequest = {
  encode(message: QueryUnreceivedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
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
        case 3:
          if (tag === 24) {
            message.packetCommitmentSequences.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
        ? object.packetCommitmentSequences.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryUnreceivedPacketsRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.packetCommitmentSequences?.length) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return { sequences: [], height: undefined };
}

export const QueryUnreceivedPacketsResponse = {
  encode(message: QueryUnreceivedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.sequences.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryUnreceivedPacketsResponse): unknown {
    const obj: any = {};
    if (message.sequences?.length) {
      obj.sequences = message.sequences;
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map((e) => e) || [];
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return { portId: "", channelId: "", packetAckSequences: [] };
}

export const QueryUnreceivedAcksRequest = {
  encode(message: QueryUnreceivedAcksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
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
        case 3:
          if (tag === 24) {
            message.packetAckSequences.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      packetAckSequences: Array.isArray(object?.packetAckSequences)
        ? object.packetAckSequences.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryUnreceivedAcksRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    if (message.packetAckSequences?.length) {
      obj.packetAckSequences = message.packetAckSequences;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetAckSequences = object.packetAckSequences?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return { sequences: [], height: undefined };
}

export const QueryUnreceivedAcksResponse = {
  encode(message: QueryUnreceivedAcksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.sequences.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
    };
  },

  toJSON(message: QueryUnreceivedAcksResponse): unknown {
    const obj: any = {};
    if (message.sequences?.length) {
      obj.sequences = message.sequences;
    }
    if (message.height !== undefined) {
      obj.height = Height.toJSON(message.height);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map((e) => e) || [];
    message.height = (object.height !== undefined && object.height !== null)
      ? Height.fromPartial(object.height)
      : undefined;
    return message;
  },
};

function createBaseQueryNextSequenceReceiveRequest(): QueryNextSequenceReceiveRequest {
  return { portId: "", channelId: "" };
}

export const QueryNextSequenceReceiveRequest = {
  encode(message: QueryNextSequenceReceiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();
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

  fromJSON(object: any): QueryNextSequenceReceiveRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryNextSequenceReceiveRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    return QueryNextSequenceReceiveRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryNextSequenceReceiveResponse(): QueryNextSequenceReceiveResponse {
  return { nextSequenceReceive: "0", proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryNextSequenceReceiveResponse = {
  encode(message: QueryNextSequenceReceiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextSequenceReceive !== "0") {
      writer.uint32(8).uint64(message.nextSequenceReceive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nextSequenceReceive = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNextSequenceReceiveResponse {
    return {
      nextSequenceReceive: isSet(object.nextSequenceReceive) ? String(object.nextSequenceReceive) : "0",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryNextSequenceReceiveResponse): unknown {
    const obj: any = {};
    if (message.nextSequenceReceive !== "0") {
      obj.nextSequenceReceive = message.nextSequenceReceive;
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    return QueryNextSequenceReceiveResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.nextSequenceReceive = object.nextSequenceReceive ?? "0";
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

function createBaseQueryNextSequenceSendRequest(): QueryNextSequenceSendRequest {
  return { portId: "", channelId: "" };
}

export const QueryNextSequenceSendRequest = {
  encode(message: QueryNextSequenceSendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceSendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendRequest();
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

  fromJSON(object: any): QueryNextSequenceSendRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: QueryNextSequenceSendRequest): unknown {
    const obj: any = {};
    if (message.portId !== "") {
      obj.portId = message.portId;
    }
    if (message.channelId !== "") {
      obj.channelId = message.channelId;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseQueryNextSequenceSendResponse(): QueryNextSequenceSendResponse {
  return { nextSequenceSend: "0", proof: new Uint8Array(0), proofHeight: undefined };
}

export const QueryNextSequenceSendResponse = {
  encode(message: QueryNextSequenceSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextSequenceSend !== "0") {
      writer.uint32(8).uint64(message.nextSequenceSend);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceSendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nextSequenceSend = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proofHeight = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNextSequenceSendResponse {
    return {
      nextSequenceSend: isSet(object.nextSequenceSend) ? String(object.nextSequenceSend) : "0",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
    };
  },

  toJSON(message: QueryNextSequenceSendResponse): unknown {
    const obj: any = {};
    if (message.nextSequenceSend !== "0") {
      obj.nextSequenceSend = message.nextSequenceSend;
    }
    if (message.proof.length !== 0) {
      obj.proof = base64FromBytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      obj.proofHeight = Height.toJSON(message.proofHeight);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    message.nextSequenceSend = object.nextSequenceSend ?? "0";
    message.proof = object.proof ?? new Uint8Array(0);
    message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
      ? Height.fromPartial(object.proofHeight)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Channel queries an IBC Channel. */
  Channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse>;
  /** Channels queries all the IBC channels of a chain. */
  Channels(request: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse>;
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  ConnectionChannels(
    request: DeepPartial<QueryConnectionChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConnectionChannelsResponse>;
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  ChannelClientState(
    request: DeepPartial<QueryChannelClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryChannelClientStateResponse>;
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  ChannelConsensusState(
    request: DeepPartial<QueryChannelConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryChannelConsensusStateResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment(
    request: DeepPartial<QueryPacketCommitmentRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketCommitmentResponse>;
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  PacketCommitments(
    request: DeepPartial<QueryPacketCommitmentsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  PacketReceipt(
    request: DeepPartial<QueryPacketReceiptRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement(
    request: DeepPartial<QueryPacketAcknowledgementRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketAcknowledgementResponse>;
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  PacketAcknowledgements(
    request: DeepPartial<QueryPacketAcknowledgementsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  UnreceivedPackets(
    request: DeepPartial<QueryUnreceivedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  UnreceivedAcks(
    request: DeepPartial<QueryUnreceivedAcksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnreceivedAcksResponse>;
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  NextSequenceReceive(
    request: DeepPartial<QueryNextSequenceReceiveRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryNextSequenceReceiveResponse>;
  /** NextSequenceSend returns the next send sequence for a given channel. */
  NextSequenceSend(
    request: DeepPartial<QueryNextSequenceSendRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryNextSequenceSendResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Channel = this.Channel.bind(this);
    this.Channels = this.Channels.bind(this);
    this.ConnectionChannels = this.ConnectionChannels.bind(this);
    this.ChannelClientState = this.ChannelClientState.bind(this);
    this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
    this.PacketCommitment = this.PacketCommitment.bind(this);
    this.PacketCommitments = this.PacketCommitments.bind(this);
    this.PacketReceipt = this.PacketReceipt.bind(this);
    this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
    this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
    this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
    this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
    this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
    this.NextSequenceSend = this.NextSequenceSend.bind(this);
  }

  Channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse> {
    return this.rpc.unary(QueryChannelDesc, QueryChannelRequest.fromPartial(request), metadata);
  }

  Channels(request: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse> {
    return this.rpc.unary(QueryChannelsDesc, QueryChannelsRequest.fromPartial(request), metadata);
  }

  ConnectionChannels(
    request: DeepPartial<QueryConnectionChannelsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryConnectionChannelsResponse> {
    return this.rpc.unary(QueryConnectionChannelsDesc, QueryConnectionChannelsRequest.fromPartial(request), metadata);
  }

  ChannelClientState(
    request: DeepPartial<QueryChannelClientStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryChannelClientStateResponse> {
    return this.rpc.unary(QueryChannelClientStateDesc, QueryChannelClientStateRequest.fromPartial(request), metadata);
  }

  ChannelConsensusState(
    request: DeepPartial<QueryChannelConsensusStateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryChannelConsensusStateResponse> {
    return this.rpc.unary(
      QueryChannelConsensusStateDesc,
      QueryChannelConsensusStateRequest.fromPartial(request),
      metadata,
    );
  }

  PacketCommitment(
    request: DeepPartial<QueryPacketCommitmentRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketCommitmentResponse> {
    return this.rpc.unary(QueryPacketCommitmentDesc, QueryPacketCommitmentRequest.fromPartial(request), metadata);
  }

  PacketCommitments(
    request: DeepPartial<QueryPacketCommitmentsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketCommitmentsResponse> {
    return this.rpc.unary(QueryPacketCommitmentsDesc, QueryPacketCommitmentsRequest.fromPartial(request), metadata);
  }

  PacketReceipt(
    request: DeepPartial<QueryPacketReceiptRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketReceiptResponse> {
    return this.rpc.unary(QueryPacketReceiptDesc, QueryPacketReceiptRequest.fromPartial(request), metadata);
  }

  PacketAcknowledgement(
    request: DeepPartial<QueryPacketAcknowledgementRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketAcknowledgementResponse> {
    return this.rpc.unary(
      QueryPacketAcknowledgementDesc,
      QueryPacketAcknowledgementRequest.fromPartial(request),
      metadata,
    );
  }

  PacketAcknowledgements(
    request: DeepPartial<QueryPacketAcknowledgementsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryPacketAcknowledgementsResponse> {
    return this.rpc.unary(
      QueryPacketAcknowledgementsDesc,
      QueryPacketAcknowledgementsRequest.fromPartial(request),
      metadata,
    );
  }

  UnreceivedPackets(
    request: DeepPartial<QueryUnreceivedPacketsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnreceivedPacketsResponse> {
    return this.rpc.unary(QueryUnreceivedPacketsDesc, QueryUnreceivedPacketsRequest.fromPartial(request), metadata);
  }

  UnreceivedAcks(
    request: DeepPartial<QueryUnreceivedAcksRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnreceivedAcksResponse> {
    return this.rpc.unary(QueryUnreceivedAcksDesc, QueryUnreceivedAcksRequest.fromPartial(request), metadata);
  }

  NextSequenceReceive(
    request: DeepPartial<QueryNextSequenceReceiveRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryNextSequenceReceiveResponse> {
    return this.rpc.unary(QueryNextSequenceReceiveDesc, QueryNextSequenceReceiveRequest.fromPartial(request), metadata);
  }

  NextSequenceSend(
    request: DeepPartial<QueryNextSequenceSendRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryNextSequenceSendResponse> {
    return this.rpc.unary(QueryNextSequenceSendDesc, QueryNextSequenceSendRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "ibc.core.channel.v1.Query" };

export const QueryChannelDesc: UnaryMethodDefinitionish = {
  methodName: "Channel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryChannelRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryChannelResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "Channels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryChannelsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryChannelsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryConnectionChannelsDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionChannels",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryConnectionChannelsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryConnectionChannelsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryChannelClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryChannelClientStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryChannelClientStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryChannelConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryChannelConsensusStateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryChannelConsensusStateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPacketCommitmentDesc: UnaryMethodDefinitionish = {
  methodName: "PacketCommitment",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPacketCommitmentRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPacketCommitmentResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPacketCommitmentsDesc: UnaryMethodDefinitionish = {
  methodName: "PacketCommitments",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPacketCommitmentsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPacketCommitmentsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPacketReceiptDesc: UnaryMethodDefinitionish = {
  methodName: "PacketReceipt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPacketReceiptRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPacketReceiptResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPacketAcknowledgementDesc: UnaryMethodDefinitionish = {
  methodName: "PacketAcknowledgement",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPacketAcknowledgementRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPacketAcknowledgementResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPacketAcknowledgementsDesc: UnaryMethodDefinitionish = {
  methodName: "PacketAcknowledgements",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPacketAcknowledgementsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPacketAcknowledgementsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUnreceivedPacketsDesc: UnaryMethodDefinitionish = {
  methodName: "UnreceivedPackets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUnreceivedPacketsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryUnreceivedPacketsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUnreceivedAcksDesc: UnaryMethodDefinitionish = {
  methodName: "UnreceivedAcks",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUnreceivedAcksRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryUnreceivedAcksResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryNextSequenceReceiveDesc: UnaryMethodDefinitionish = {
  methodName: "NextSequenceReceive",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryNextSequenceReceiveRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryNextSequenceReceiveResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryNextSequenceSendDesc: UnaryMethodDefinitionish = {
  methodName: "NextSequenceSend",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryNextSequenceSendRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryNextSequenceSendResponse.decode(data);
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
