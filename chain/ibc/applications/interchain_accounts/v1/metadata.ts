/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
  /** version defines the ICS27 protocol version */
  version: string;
  /** controller_connection_id is the connection identifier associated with the controller chain */
  controller_connection_id: string;
  /** host_connection_id is the connection identifier associated with the host chain */
  host_connection_id: string;
  /**
   * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
   * NOTE: the address field is empty on the OnChanOpenInit handshake step
   */
  address: string;
  /** encoding defines the supported codec format */
  encoding: string;
  /** tx_type defines the type of transactions the interchain account can execute */
  tx_type: string;
}

function createBaseMetadata(): Metadata {
  return { version: "", controller_connection_id: "", host_connection_id: "", address: "", encoding: "", tx_type: "" };
}

export const Metadata = {
  $type: "ibc.applications.interchain_accounts.v1.Metadata" as const,

  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.controller_connection_id !== "") {
      writer.uint32(18).string(message.controller_connection_id);
    }
    if (message.host_connection_id !== "") {
      writer.uint32(26).string(message.host_connection_id);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }
    if (message.tx_type !== "") {
      writer.uint32(50).string(message.tx_type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.controller_connection_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host_connection_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tx_type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      controller_connection_id: isSet(object.controller_connection_id)
        ? globalThis.String(object.controller_connection_id)
        : "",
      host_connection_id: isSet(object.host_connection_id) ? globalThis.String(object.host_connection_id) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      tx_type: isSet(object.tx_type) ? globalThis.String(object.tx_type) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.controller_connection_id !== "") {
      obj.controller_connection_id = message.controller_connection_id;
    }
    if (message.host_connection_id !== "") {
      obj.host_connection_id = message.host_connection_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.tx_type !== "") {
      obj.tx_type = message.tx_type;
    }
    return obj;
  },

  create(base?: DeepPartial<Metadata>): Metadata {
    return Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.version = object.version ?? "";
    message.controller_connection_id = object.controller_connection_id ?? "";
    message.host_connection_id = object.host_connection_id ?? "";
    message.address = object.address ?? "";
    message.encoding = object.encoding ?? "";
    message.tx_type = object.tx_type ?? "";
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
