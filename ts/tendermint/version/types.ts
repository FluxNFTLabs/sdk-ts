/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol: string;
  software: string;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: string;
  app: string;
}

function createBaseApp(): App {
  return { protocol: "0", software: "" };
}

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== "0") {
      writer.uint32(8).uint64(message.protocol);
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.protocol = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.software = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): App {
    return {
      protocol: isSet(object.protocol) ? String(object.protocol) : "0",
      software: isSet(object.software) ? String(object.software) : "",
    };
  },

  toJSON(message: App): unknown {
    const obj: any = {};
    if (message.protocol !== "0") {
      obj.protocol = message.protocol;
    }
    if (message.software !== "") {
      obj.software = message.software;
    }
    return obj;
  },

  create(base?: DeepPartial<App>): App {
    return App.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<App>): App {
    const message = createBaseApp();
    message.protocol = object.protocol ?? "0";
    message.software = object.software ?? "";
    return message;
  },
};

function createBaseConsensus(): Consensus {
  return { block: "0", app: "0" };
}

export const Consensus = {
  encode(message: Consensus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== "0") {
      writer.uint32(8).uint64(message.block);
    }
    if (message.app !== "0") {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Consensus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.block = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): Consensus {
    return {
      block: isSet(object.block) ? String(object.block) : "0",
      app: isSet(object.app) ? String(object.app) : "0",
    };
  },

  toJSON(message: Consensus): unknown {
    const obj: any = {};
    if (message.block !== "0") {
      obj.block = message.block;
    }
    if (message.app !== "0") {
      obj.app = message.app;
    }
    return obj;
  },

  create(base?: DeepPartial<Consensus>): Consensus {
    return Consensus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Consensus>): Consensus {
    const message = createBaseConsensus();
    message.block = object.block ?? "0";
    message.app = object.app ?? "0";
    return message;
  },
};

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
