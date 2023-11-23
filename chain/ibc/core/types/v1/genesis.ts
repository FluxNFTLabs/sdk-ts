/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";

/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  client_genesis:
    | GenesisState1
    | undefined;
  /** ICS003 - Connections genesis state */
  connection_genesis:
    | GenesisState2
    | undefined;
  /** ICS004 - Channel genesis state */
  channel_genesis: GenesisState3 | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { client_genesis: undefined, connection_genesis: undefined, channel_genesis: undefined };
}

export const GenesisState = {
  $type: "ibc.core.types.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_genesis !== undefined) {
      GenesisState1.encode(message.client_genesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connection_genesis !== undefined) {
      GenesisState2.encode(message.connection_genesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channel_genesis !== undefined) {
      GenesisState3.encode(message.channel_genesis, writer.uint32(26).fork()).ldelim();
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

          message.client_genesis = GenesisState1.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connection_genesis = GenesisState2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.channel_genesis = GenesisState3.decode(reader, reader.uint32());
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
      client_genesis: isSet(object.client_genesis) ? GenesisState1.fromJSON(object.client_genesis) : undefined,
      connection_genesis: isSet(object.connection_genesis)
        ? GenesisState2.fromJSON(object.connection_genesis)
        : undefined,
      channel_genesis: isSet(object.channel_genesis) ? GenesisState3.fromJSON(object.channel_genesis) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.client_genesis !== undefined) {
      obj.client_genesis = GenesisState1.toJSON(message.client_genesis);
    }
    if (message.connection_genesis !== undefined) {
      obj.connection_genesis = GenesisState2.toJSON(message.connection_genesis);
    }
    if (message.channel_genesis !== undefined) {
      obj.channel_genesis = GenesisState3.toJSON(message.channel_genesis);
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.client_genesis = (object.client_genesis !== undefined && object.client_genesis !== null)
      ? GenesisState1.fromPartial(object.client_genesis)
      : undefined;
    message.connection_genesis = (object.connection_genesis !== undefined && object.connection_genesis !== null)
      ? GenesisState2.fromPartial(object.connection_genesis)
      : undefined;
    message.channel_genesis = (object.channel_genesis !== undefined && object.channel_genesis !== null)
      ? GenesisState3.fromPartial(object.channel_genesis)
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
