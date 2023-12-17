/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** spend limitation on the channel */
  spend_limit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allow_list: string[];
  /**
   * allow list of packet data keys, an empty list prohibits all packet data keys;
   * a list only with "*" permits any packet data key
   */
  allowed_packet_data: string[];
}

/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}

function createBaseAllocation(): Allocation {
  return { source_port: "", source_channel: "", spend_limit: [], allow_list: [], allowed_packet_data: [] };
}

export const Allocation = {
  $type: "ibc.applications.transfer.v1.Allocation" as const,

  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source_port !== "") {
      writer.uint32(10).string(message.source_port);
    }
    if (message.source_channel !== "") {
      writer.uint32(18).string(message.source_channel);
    }
    for (const v of message.spend_limit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allow_list) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowed_packet_data) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source_port = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source_channel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spend_limit.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allow_list.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allowed_packet_data.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    return {
      source_port: isSet(object.source_port) ? globalThis.String(object.source_port) : "",
      source_channel: isSet(object.source_channel) ? globalThis.String(object.source_channel) : "",
      spend_limit: globalThis.Array.isArray(object?.spend_limit)
        ? object.spend_limit.map((e: any) => Coin.fromJSON(e))
        : [],
      allow_list: globalThis.Array.isArray(object?.allow_list)
        ? object.allow_list.map((e: any) => globalThis.String(e))
        : [],
      allowed_packet_data: globalThis.Array.isArray(object?.allowed_packet_data)
        ? object.allowed_packet_data.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    if (message.source_port !== "") {
      obj.source_port = message.source_port;
    }
    if (message.source_channel !== "") {
      obj.source_channel = message.source_channel;
    }
    if (message.spend_limit?.length) {
      obj.spend_limit = message.spend_limit.map((e) => Coin.toJSON(e));
    }
    if (message.allow_list?.length) {
      obj.allow_list = message.allow_list;
    }
    if (message.allowed_packet_data?.length) {
      obj.allowed_packet_data = message.allowed_packet_data;
    }
    return obj;
  },

  create(base?: DeepPartial<Allocation>): Allocation {
    return Allocation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.source_port = object.source_port ?? "";
    message.source_channel = object.source_channel ?? "";
    message.spend_limit = object.spend_limit?.map((e) => Coin.fromPartial(e)) || [];
    message.allow_list = object.allow_list?.map((e) => e) || [];
    message.allowed_packet_data = object.allowed_packet_data?.map((e) => e) || [];
    return message;
  },
};

function createBaseTransferAuthorization(): TransferAuthorization {
  return { allocations: [] };
}

export const TransferAuthorization = {
  $type: "ibc.applications.transfer.v1.TransferAuthorization" as const,

  encode(message: TransferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransferAuthorization {
    return {
      allocations: globalThis.Array.isArray(object?.allocations)
        ? object.allocations.map((e: any) => Allocation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    if (message.allocations?.length) {
      obj.allocations = message.allocations.map((e) => Allocation.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TransferAuthorization>): TransferAuthorization {
    return TransferAuthorization.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
