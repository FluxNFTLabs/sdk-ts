/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";

/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recv_fee: Coin[];
  /** the packet acknowledgement fee */
  ack_fee: Coin[];
  /** the packet timeout fee */
  timeout_fee: Coin[];
}

/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee:
    | Fee
    | undefined;
  /** the refund address for unspent fees */
  refund_address: string;
  /** optional list of relayers permitted to receive fees */
  relayers: string[];
}

/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
  /** list of packet fees */
  packet_fees: PacketFee[];
}

/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id:
    | PacketId
    | undefined;
  /** list of packet fees */
  packet_fees: PacketFee[];
}

function createBaseFee(): Fee {
  return { recv_fee: [], ack_fee: [], timeout_fee: [] };
}

export const Fee = {
  $type: "ibc.applications.fee.v1.Fee" as const,

  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recv_fee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ack_fee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeout_fee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recv_fee.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ack_fee.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeout_fee.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fee {
    return {
      recv_fee: globalThis.Array.isArray(object?.recv_fee) ? object.recv_fee.map((e: any) => Coin.fromJSON(e)) : [],
      ack_fee: globalThis.Array.isArray(object?.ack_fee) ? object.ack_fee.map((e: any) => Coin.fromJSON(e)) : [],
      timeout_fee: globalThis.Array.isArray(object?.timeout_fee)
        ? object.timeout_fee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.recv_fee?.length) {
      obj.recv_fee = message.recv_fee.map((e) => Coin.toJSON(e));
    }
    if (message.ack_fee?.length) {
      obj.ack_fee = message.ack_fee.map((e) => Coin.toJSON(e));
    }
    if (message.timeout_fee?.length) {
      obj.timeout_fee = message.timeout_fee.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Fee>): Fee {
    return Fee.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = createBaseFee();
    message.recv_fee = object.recv_fee?.map((e) => Coin.fromPartial(e)) || [];
    message.ack_fee = object.ack_fee?.map((e) => Coin.fromPartial(e)) || [];
    message.timeout_fee = object.timeout_fee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBasePacketFee(): PacketFee {
  return { fee: undefined, refund_address: "", relayers: [] };
}

export const PacketFee = {
  $type: "ibc.applications.fee.v1.PacketFee" as const,

  encode(message: PacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refund_address !== "") {
      writer.uint32(18).string(message.refund_address);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fee = Fee.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refund_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relayers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      refund_address: isSet(object.refund_address) ? globalThis.String(object.refund_address) : "",
      relayers: globalThis.Array.isArray(object?.relayers) ? object.relayers.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: PacketFee): unknown {
    const obj: any = {};
    if (message.fee !== undefined) {
      obj.fee = Fee.toJSON(message.fee);
    }
    if (message.refund_address !== "") {
      obj.refund_address = message.refund_address;
    }
    if (message.relayers?.length) {
      obj.relayers = message.relayers;
    }
    return obj;
  },

  create(base?: DeepPartial<PacketFee>): PacketFee {
    return PacketFee.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketFee>): PacketFee {
    const message = createBasePacketFee();
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
    message.refund_address = object.refund_address ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
};

function createBasePacketFees(): PacketFees {
  return { packet_fees: [] };
}

export const PacketFees = {
  $type: "ibc.applications.fee.v1.PacketFees" as const,

  encode(message: PacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.packet_fees) {
      PacketFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet_fees.push(PacketFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PacketFees {
    return {
      packet_fees: globalThis.Array.isArray(object?.packet_fees)
        ? object.packet_fees.map((e: any) => PacketFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PacketFees): unknown {
    const obj: any = {};
    if (message.packet_fees?.length) {
      obj.packet_fees = message.packet_fees.map((e) => PacketFee.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PacketFees>): PacketFees {
    return PacketFees.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketFees>): PacketFees {
    const message = createBasePacketFees();
    message.packet_fees = object.packet_fees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIdentifiedPacketFees(): IdentifiedPacketFees {
  return { packet_id: undefined, packet_fees: [] };
}

export const IdentifiedPacketFees = {
  $type: "ibc.applications.fee.v1.IdentifiedPacketFees" as const,

  encode(message: IdentifiedPacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet_id !== undefined) {
      PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packet_fees) {
      PacketFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet_id = PacketId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packet_fees.push(PacketFee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IdentifiedPacketFees {
    return {
      packet_id: isSet(object.packet_id) ? PacketId.fromJSON(object.packet_id) : undefined,
      packet_fees: globalThis.Array.isArray(object?.packet_fees)
        ? object.packet_fees.map((e: any) => PacketFee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IdentifiedPacketFees): unknown {
    const obj: any = {};
    if (message.packet_id !== undefined) {
      obj.packet_id = PacketId.toJSON(message.packet_id);
    }
    if (message.packet_fees?.length) {
      obj.packet_fees = message.packet_fees.map((e) => PacketFee.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<IdentifiedPacketFees>): IdentifiedPacketFees {
    return IdentifiedPacketFees.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IdentifiedPacketFees>): IdentifiedPacketFees {
    const message = createBaseIdentifiedPacketFees();
    message.packet_id = (object.packet_id !== undefined && object.packet_id !== null)
      ? PacketId.fromPartial(object.packet_id)
      : undefined;
    message.packet_fees = object.packet_fees?.map((e) => PacketFee.fromPartial(e)) || [];
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
