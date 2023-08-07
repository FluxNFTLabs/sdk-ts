/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";

export interface PacketPing {
}

export interface PacketPong {
}

export interface PacketMsg {
  channel_id: number;
  eof: boolean;
  data: Uint8Array;
}

export interface Packet {
  packet_ping?: PacketPing | undefined;
  packet_pong?: PacketPong | undefined;
  packet_msg?: PacketMsg | undefined;
}

export interface AuthSigMessage {
  pub_key: PublicKey | undefined;
  sig: Uint8Array;
}

function createBasePacketPing(): PacketPing {
  return {};
}

export const PacketPing = {
  $type: "tendermint.p2p.PacketPing" as const,

  encode(_: PacketPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPing();
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

  fromJSON(_: any): PacketPing {
    return {};
  },

  toJSON(_: PacketPing): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PacketPing>): PacketPing {
    return PacketPing.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PacketPing>): PacketPing {
    const message = createBasePacketPing();
    return message;
  },
};

function createBasePacketPong(): PacketPong {
  return {};
}

export const PacketPong = {
  $type: "tendermint.p2p.PacketPong" as const,

  encode(_: PacketPong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPong();
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

  fromJSON(_: any): PacketPong {
    return {};
  },

  toJSON(_: PacketPong): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PacketPong>): PacketPong {
    return PacketPong.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PacketPong>): PacketPong {
    const message = createBasePacketPong();
    return message;
  },
};

function createBasePacketMsg(): PacketMsg {
  return { channel_id: 0, eof: false, data: new Uint8Array(0) };
}

export const PacketMsg = {
  $type: "tendermint.p2p.PacketMsg" as const,

  encode(message: PacketMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel_id !== 0) {
      writer.uint32(8).int32(message.channel_id);
    }
    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channel_id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.eof = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): PacketMsg {
    return {
      channel_id: isSet(object.channel_id) ? Number(object.channel_id) : 0,
      eof: isSet(object.eof) ? Boolean(object.eof) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: PacketMsg): unknown {
    const obj: any = {};
    if (message.channel_id !== 0) {
      obj.channel_id = Math.round(message.channel_id);
    }
    if (message.eof === true) {
      obj.eof = message.eof;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<PacketMsg>): PacketMsg {
    return PacketMsg.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PacketMsg>): PacketMsg {
    const message = createBasePacketMsg();
    message.channel_id = object.channel_id ?? 0;
    message.eof = object.eof ?? false;
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBasePacket(): Packet {
  return { packet_ping: undefined, packet_pong: undefined, packet_msg: undefined };
}

export const Packet = {
  $type: "tendermint.p2p.Packet" as const,

  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet_ping !== undefined) {
      PacketPing.encode(message.packet_ping, writer.uint32(10).fork()).ldelim();
    }
    if (message.packet_pong !== undefined) {
      PacketPong.encode(message.packet_pong, writer.uint32(18).fork()).ldelim();
    }
    if (message.packet_msg !== undefined) {
      PacketMsg.encode(message.packet_msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.packet_ping = PacketPing.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.packet_pong = PacketPong.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.packet_msg = PacketMsg.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Packet {
    return {
      packet_ping: isSet(object.packet_ping) ? PacketPing.fromJSON(object.packet_ping) : undefined,
      packet_pong: isSet(object.packet_pong) ? PacketPong.fromJSON(object.packet_pong) : undefined,
      packet_msg: isSet(object.packet_msg) ? PacketMsg.fromJSON(object.packet_msg) : undefined,
    };
  },

  toJSON(message: Packet): unknown {
    const obj: any = {};
    if (message.packet_ping !== undefined) {
      obj.packet_ping = PacketPing.toJSON(message.packet_ping);
    }
    if (message.packet_pong !== undefined) {
      obj.packet_pong = PacketPong.toJSON(message.packet_pong);
    }
    if (message.packet_msg !== undefined) {
      obj.packet_msg = PacketMsg.toJSON(message.packet_msg);
    }
    return obj;
  },

  create(base?: DeepPartial<Packet>): Packet {
    return Packet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = createBasePacket();
    message.packet_ping = (object.packet_ping !== undefined && object.packet_ping !== null)
      ? PacketPing.fromPartial(object.packet_ping)
      : undefined;
    message.packet_pong = (object.packet_pong !== undefined && object.packet_pong !== null)
      ? PacketPong.fromPartial(object.packet_pong)
      : undefined;
    message.packet_msg = (object.packet_msg !== undefined && object.packet_msg !== null)
      ? PacketMsg.fromPartial(object.packet_msg)
      : undefined;
    return message;
  },
};

function createBaseAuthSigMessage(): AuthSigMessage {
  return { pub_key: undefined, sig: new Uint8Array(0) };
}

export const AuthSigMessage = {
  $type: "tendermint.p2p.AuthSigMessage" as const,

  encode(message: AuthSigMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthSigMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pub_key = PublicKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthSigMessage {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(0),
    };
  },

  toJSON(message: AuthSigMessage): unknown {
    const obj: any = {};
    if (message.pub_key !== undefined) {
      obj.pub_key = PublicKey.toJSON(message.pub_key);
    }
    if (message.sig.length !== 0) {
      obj.sig = base64FromBytes(message.sig);
    }
    return obj;
  },

  create(base?: DeepPartial<AuthSigMessage>): AuthSigMessage {
    return AuthSigMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthSigMessage>): AuthSigMessage {
    const message = createBaseAuthSigMessage();
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? PublicKey.fromPartial(object.pub_key)
      : undefined;
    message.sig = object.sig ?? new Uint8Array(0);
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
