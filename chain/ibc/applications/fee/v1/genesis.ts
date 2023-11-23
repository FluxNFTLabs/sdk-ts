/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";

/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identified_fees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  fee_enabled_channels: FeeEnabledChannel[];
  /** list of registered payees */
  registered_payees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registered_counterparty_payees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forward_relayers: ForwardRelayerAddress[];
}

/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}

/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}

/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterparty_payee: string;
}

/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packet_id: PacketId | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    identified_fees: [],
    fee_enabled_channels: [],
    registered_payees: [],
    registered_counterparty_payees: [],
    forward_relayers: [],
  };
}

export const GenesisState = {
  $type: "ibc.applications.fee.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.identified_fees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fee_enabled_channels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registered_payees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registered_counterparty_payees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forward_relayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identified_fees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fee_enabled_channels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.registered_payees.push(RegisteredPayee.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registered_counterparty_payees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.forward_relayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      identified_fees: globalThis.Array.isArray(object?.identified_fees)
        ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
      fee_enabled_channels: globalThis.Array.isArray(object?.fee_enabled_channels)
        ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromJSON(e))
        : [],
      registered_payees: globalThis.Array.isArray(object?.registered_payees)
        ? object.registered_payees.map((e: any) => RegisteredPayee.fromJSON(e))
        : [],
      registered_counterparty_payees: globalThis.Array.isArray(object?.registered_counterparty_payees)
        ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromJSON(e))
        : [],
      forward_relayers: globalThis.Array.isArray(object?.forward_relayers)
        ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.identified_fees?.length) {
      obj.identified_fees = message.identified_fees.map((e) => IdentifiedPacketFees.toJSON(e));
    }
    if (message.fee_enabled_channels?.length) {
      obj.fee_enabled_channels = message.fee_enabled_channels.map((e) => FeeEnabledChannel.toJSON(e));
    }
    if (message.registered_payees?.length) {
      obj.registered_payees = message.registered_payees.map((e) => RegisteredPayee.toJSON(e));
    }
    if (message.registered_counterparty_payees?.length) {
      obj.registered_counterparty_payees = message.registered_counterparty_payees.map((e) =>
        RegisteredCounterpartyPayee.toJSON(e)
      );
    }
    if (message.forward_relayers?.length) {
      obj.forward_relayers = message.forward_relayers.map((e) => ForwardRelayerAddress.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identified_fees = object.identified_fees?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    message.fee_enabled_channels = object.fee_enabled_channels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    message.registered_payees = object.registered_payees?.map((e) => RegisteredPayee.fromPartial(e)) || [];
    message.registered_counterparty_payees =
      object.registered_counterparty_payees?.map((e) => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forward_relayers = object.forward_relayers?.map((e) => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return { port_id: "", channel_id: "" };
}

export const FeeEnabledChannel = {
  $type: "ibc.applications.fee.v1.FeeEnabledChannel" as const,

  encode(message: FeeEnabledChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.port_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeeEnabledChannel {
    return {
      port_id: isSet(object.port_id) ? globalThis.String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
    };
  },

  toJSON(message: FeeEnabledChannel): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    return obj;
  },

  create(base?: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    return FeeEnabledChannel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
};

function createBaseRegisteredPayee(): RegisteredPayee {
  return { channel_id: "", relayer: "", payee: "" };
}

export const RegisteredPayee = {
  $type: "ibc.applications.fee.v1.RegisteredPayee" as const,

  encode(message: RegisteredPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel_id !== "") {
      writer.uint32(10).string(message.channel_id);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channel_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisteredPayee {
    return {
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? globalThis.String(object.relayer) : "",
      payee: isSet(object.payee) ? globalThis.String(object.payee) : "",
    };
  },

  toJSON(message: RegisteredPayee): unknown {
    const obj: any = {};
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.relayer !== "") {
      obj.relayer = message.relayer;
    }
    if (message.payee !== "") {
      obj.payee = message.payee;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisteredPayee>): RegisteredPayee {
    return RegisteredPayee.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisteredPayee>): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channel_id = object.channel_id ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
};

function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return { channel_id: "", relayer: "", counterparty_payee: "" };
}

export const RegisteredCounterpartyPayee = {
  $type: "ibc.applications.fee.v1.RegisteredCounterpartyPayee" as const,

  encode(message: RegisteredCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel_id !== "") {
      writer.uint32(10).string(message.channel_id);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterparty_payee !== "") {
      writer.uint32(26).string(message.counterparty_payee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channel_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.counterparty_payee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisteredCounterpartyPayee {
    return {
      channel_id: isSet(object.channel_id) ? globalThis.String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? globalThis.String(object.relayer) : "",
      counterparty_payee: isSet(object.counterparty_payee) ? globalThis.String(object.counterparty_payee) : "",
    };
  },

  toJSON(message: RegisteredCounterpartyPayee): unknown {
    const obj: any = {};
    if (message.channel_id !== "") {
      obj.channel_id = message.channel_id;
    }
    if (message.relayer !== "") {
      obj.relayer = message.relayer;
    }
    if (message.counterparty_payee !== "") {
      obj.counterparty_payee = message.counterparty_payee;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channel_id = object.channel_id ?? "";
    message.relayer = object.relayer ?? "";
    message.counterparty_payee = object.counterparty_payee ?? "";
    return message;
  },
};

function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return { address: "", packet_id: undefined };
}

export const ForwardRelayerAddress = {
  $type: "ibc.applications.fee.v1.ForwardRelayerAddress" as const,

  encode(message: ForwardRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packet_id !== undefined) {
      PacketId.encode(message.packet_id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
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

          message.packet_id = PacketId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForwardRelayerAddress {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      packet_id: isSet(object.packet_id) ? PacketId.fromJSON(object.packet_id) : undefined,
    };
  },

  toJSON(message: ForwardRelayerAddress): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.packet_id !== undefined) {
      obj.packet_id = PacketId.toJSON(message.packet_id);
    }
    return obj;
  },

  create(base?: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    return ForwardRelayerAddress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packet_id = (object.packet_id !== undefined && object.packet_id !== null)
      ? PacketId.fromPartial(object.packet_id)
      : undefined;
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
