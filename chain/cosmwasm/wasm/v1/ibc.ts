/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height: string;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}

/** MsgIBCSendResponse */
export interface MsgIBCSendResponse {
  /** Sequence number of the IBC packet sent */
  sequence: string;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}

function createBaseMsgIBCSend(): MsgIBCSend {
  return { channel: "", timeout_height: "0", timeout_timestamp: "0", data: new Uint8Array(0) };
}

export const MsgIBCSend = {
  $type: "cosmwasm.wasm.v1.MsgIBCSend" as const,

  encode(message: MsgIBCSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeout_height !== "0") {
      writer.uint32(32).uint64(message.timeout_height);
    }
    if (message.timeout_timestamp !== "0") {
      writer.uint32(40).uint64(message.timeout_timestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeout_height = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.timeout_timestamp = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      timeout_height: isSet(object.timeout_height) ? globalThis.String(object.timeout_height) : "0",
      timeout_timestamp: isSet(object.timeout_timestamp) ? globalThis.String(object.timeout_timestamp) : "0",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.timeout_height !== "0") {
      obj.timeout_height = message.timeout_height;
    }
    if (message.timeout_timestamp !== "0") {
      obj.timeout_timestamp = message.timeout_timestamp;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgIBCSend>): MsgIBCSend {
    return MsgIBCSend.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeout_height = object.timeout_height ?? "0";
    message.timeout_timestamp = object.timeout_timestamp ?? "0";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgIBCSendResponse(): MsgIBCSendResponse {
  return { sequence: "0" };
}

export const MsgIBCSendResponse = {
  $type: "cosmwasm.wasm.v1.MsgIBCSendResponse" as const,

  encode(message: MsgIBCSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== "0") {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): MsgIBCSendResponse {
    return { sequence: isSet(object.sequence) ? globalThis.String(object.sequence) : "0" };
  },

  toJSON(message: MsgIBCSendResponse): unknown {
    const obj: any = {};
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgIBCSendResponse>): MsgIBCSendResponse {
    return MsgIBCSendResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgIBCSendResponse>): MsgIBCSendResponse {
    const message = createBaseMsgIBCSendResponse();
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return { channel: "" };
}

export const MsgIBCCloseChannel = {
  $type: "cosmwasm.wasm.v1.MsgIBCCloseChannel" as const,

  encode(message: MsgIBCCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    return { channel: isSet(object.channel) ? globalThis.String(object.channel) : "" };
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    return MsgIBCCloseChannel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
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
  if (globalThis.Buffer) {
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
