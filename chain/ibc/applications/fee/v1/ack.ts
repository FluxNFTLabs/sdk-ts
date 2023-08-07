/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  app_acknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forward_relayer_address: string;
  /** success flag of the base application callback */
  underlying_app_success: boolean;
}

function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return { app_acknowledgement: new Uint8Array(0), forward_relayer_address: "", underlying_app_success: false };
}

export const IncentivizedAcknowledgement = {
  $type: "ibc.applications.fee.v1.IncentivizedAcknowledgement" as const,

  encode(message: IncentivizedAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app_acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.app_acknowledgement);
    }
    if (message.forward_relayer_address !== "") {
      writer.uint32(18).string(message.forward_relayer_address);
    }
    if (message.underlying_app_success === true) {
      writer.uint32(24).bool(message.underlying_app_success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.app_acknowledgement = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.forward_relayer_address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.underlying_app_success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncentivizedAcknowledgement {
    return {
      app_acknowledgement: isSet(object.app_acknowledgement)
        ? bytesFromBase64(object.app_acknowledgement)
        : new Uint8Array(0),
      forward_relayer_address: isSet(object.forward_relayer_address) ? String(object.forward_relayer_address) : "",
      underlying_app_success: isSet(object.underlying_app_success) ? Boolean(object.underlying_app_success) : false,
    };
  },

  toJSON(message: IncentivizedAcknowledgement): unknown {
    const obj: any = {};
    if (message.app_acknowledgement.length !== 0) {
      obj.app_acknowledgement = base64FromBytes(message.app_acknowledgement);
    }
    if (message.forward_relayer_address !== "") {
      obj.forward_relayer_address = message.forward_relayer_address;
    }
    if (message.underlying_app_success === true) {
      obj.underlying_app_success = message.underlying_app_success;
    }
    return obj;
  },

  create(base?: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    return IncentivizedAcknowledgement.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.app_acknowledgement = object.app_acknowledgement ?? new Uint8Array(0);
    message.forward_relayer_address = object.forward_relayer_address ?? "";
    message.underlying_app_success = object.underlying_app_success ?? false;
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
