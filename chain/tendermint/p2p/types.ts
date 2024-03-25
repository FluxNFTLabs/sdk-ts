/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface NetAddress {
  id: string;
  ip: string;
  port: number;
}

export interface ProtocolVersion {
  p2p: string;
  block: string;
  app: string;
}

export interface DefaultNodeInfo {
  protocol_version: ProtocolVersion | undefined;
  default_node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: DefaultNodeInfoOther | undefined;
}

export interface DefaultNodeInfoOther {
  tx_index: string;
  rpc_address: string;
}

function createBaseNetAddress(): NetAddress {
  return { id: "", ip: "", port: 0 };
}

export const NetAddress = {
  $type: "tendermint.p2p.NetAddress" as const,

  encode(message: NetAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetAddress {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
    };
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.ip !== undefined) {
      obj.ip = message.ip;
    }
    if (message.port !== undefined) {
      obj.port = Math.round(message.port);
    }
    return obj;
  },

  create(base?: DeepPartial<NetAddress>): NetAddress {
    return NetAddress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetAddress>): NetAddress {
    const message = createBaseNetAddress();
    message.id = object.id ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseProtocolVersion(): ProtocolVersion {
  return { p2p: "0", block: "0", app: "0" };
}

export const ProtocolVersion = {
  $type: "tendermint.p2p.ProtocolVersion" as const,

  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p2p !== "0") {
      writer.uint32(8).uint64(message.p2p);
    }
    if (message.block !== "0") {
      writer.uint32(16).uint64(message.block);
    }
    if (message.app !== "0") {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.p2p = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.block = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.app = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    return {
      p2p: isSet(object.p2p) ? globalThis.String(object.p2p) : "0",
      block: isSet(object.block) ? globalThis.String(object.block) : "0",
      app: isSet(object.app) ? globalThis.String(object.app) : "0",
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    if (message.p2p !== undefined) {
      obj.p2p = message.p2p;
    }
    if (message.block !== undefined) {
      obj.block = message.block;
    }
    if (message.app !== undefined) {
      obj.app = message.app;
    }
    return obj;
  },

  create(base?: DeepPartial<ProtocolVersion>): ProtocolVersion {
    return ProtocolVersion.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p ?? "0";
    message.block = object.block ?? "0";
    message.app = object.app ?? "0";
    return message;
  },
};

function createBaseDefaultNodeInfo(): DefaultNodeInfo {
  return {
    protocol_version: undefined,
    default_node_id: "",
    listen_addr: "",
    network: "",
    version: "",
    channels: new Uint8Array(0),
    moniker: "",
    other: undefined,
  };
}

export const DefaultNodeInfo = {
  $type: "tendermint.p2p.DefaultNodeInfo" as const,

  encode(message: DefaultNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol_version !== undefined) {
      ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
    }
    if (message.default_node_id !== "") {
      writer.uint32(18).string(message.default_node_id);
    }
    if (message.listen_addr !== "") {
      writer.uint32(26).string(message.listen_addr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.default_node_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.listen_addr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.network = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.version = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.channels = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.moniker = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfo {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
      default_node_id: isSet(object.default_node_id) ? globalThis.String(object.default_node_id) : "",
      listen_addr: isSet(object.listen_addr) ? globalThis.String(object.listen_addr) : "",
      network: isSet(object.network) ? globalThis.String(object.network) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(0),
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined,
    };
  },

  toJSON(message: DefaultNodeInfo): unknown {
    const obj: any = {};
    if (message.protocol_version !== undefined) {
      obj.protocol_version = ProtocolVersion.toJSON(message.protocol_version);
    }
    if (message.default_node_id !== undefined) {
      obj.default_node_id = message.default_node_id;
    }
    if (message.listen_addr !== undefined) {
      obj.listen_addr = message.listen_addr;
    }
    if (message.network !== undefined) {
      obj.network = message.network;
    }
    if (message.version !== undefined) {
      obj.version = message.version;
    }
    if (message.channels !== undefined) {
      obj.channels = base64FromBytes(message.channels);
    }
    if (message.moniker !== undefined) {
      obj.moniker = message.moniker;
    }
    if (message.other !== undefined) {
      obj.other = DefaultNodeInfoOther.toJSON(message.other);
    }
    return obj;
  },

  create(base?: DeepPartial<DefaultNodeInfo>): DefaultNodeInfo {
    return DefaultNodeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DefaultNodeInfo>): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    message.protocol_version = (object.protocol_version !== undefined && object.protocol_version !== null)
      ? ProtocolVersion.fromPartial(object.protocol_version)
      : undefined;
    message.default_node_id = object.default_node_id ?? "";
    message.listen_addr = object.listen_addr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array(0);
    message.moniker = object.moniker ?? "";
    message.other = (object.other !== undefined && object.other !== null)
      ? DefaultNodeInfoOther.fromPartial(object.other)
      : undefined;
    return message;
  },
};

function createBaseDefaultNodeInfoOther(): DefaultNodeInfoOther {
  return { tx_index: "", rpc_address: "" };
}

export const DefaultNodeInfoOther = {
  $type: "tendermint.p2p.DefaultNodeInfoOther" as const,

  encode(message: DefaultNodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_index !== "") {
      writer.uint32(10).string(message.tx_index);
    }
    if (message.rpc_address !== "") {
      writer.uint32(18).string(message.rpc_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tx_index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rpc_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfoOther {
    return {
      tx_index: isSet(object.tx_index) ? globalThis.String(object.tx_index) : "",
      rpc_address: isSet(object.rpc_address) ? globalThis.String(object.rpc_address) : "",
    };
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    if (message.tx_index !== undefined) {
      obj.tx_index = message.tx_index;
    }
    if (message.rpc_address !== undefined) {
      obj.rpc_address = message.rpc_address;
    }
    return obj;
  },

  create(base?: DeepPartial<DefaultNodeInfoOther>): DefaultNodeInfoOther {
    return DefaultNodeInfoOther.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DefaultNodeInfoOther>): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    message.tx_index = object.tx_index ?? "";
    message.rpc_address = object.rpc_address ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
