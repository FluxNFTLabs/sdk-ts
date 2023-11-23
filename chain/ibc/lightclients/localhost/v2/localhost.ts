/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Height } from "../../../core/client/v1/client";

/** ClientState defines the 09-localhost client state */
export interface ClientState {
  /** the latest block height */
  latest_height: Height | undefined;
}

function createBaseClientState(): ClientState {
  return { latest_height: undefined };
}

export const ClientState = {
  $type: "ibc.lightclients.localhost.v2.ClientState" as const,

  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latest_height !== undefined) {
      Height.encode(message.latest_height, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.latest_height = Height.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientState {
    return { latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined };
  },

  toJSON(message: ClientState): unknown {
    const obj: any = {};
    if (message.latest_height !== undefined) {
      obj.latest_height = Height.toJSON(message.latest_height);
    }
    return obj;
  },

  create(base?: DeepPartial<ClientState>): ClientState {
    return ClientState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.latest_height = (object.latest_height !== undefined && object.latest_height !== null)
      ? Height.fromPartial(object.latest_height)
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
