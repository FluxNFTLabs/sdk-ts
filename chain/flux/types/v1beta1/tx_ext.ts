/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ExtensionOptionsWeb3Tx {
  /**
   * typedDataChainID used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainID: string;
  /**
   * feePayer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * feePayerSig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}

function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return { typedDataChainID: "0", feePayer: "", feePayerSig: new Uint8Array(0) };
}

export const ExtensionOptionsWeb3Tx = {
  $type: "flux.types.v1beta1.ExtensionOptionsWeb3Tx" as const,

  encode(message: ExtensionOptionsWeb3Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typedDataChainID !== "0") {
      writer.uint32(8).uint64(message.typedDataChainID);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsWeb3Tx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.typedDataChainID = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feePayer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feePayerSig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainID: isSet(object.typedDataChainID) ? String(object.typedDataChainID) : "0",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array(0),
    };
  },

  toJSON(message: ExtensionOptionsWeb3Tx): unknown {
    const obj: any = {};
    if (message.typedDataChainID !== "0") {
      obj.typedDataChainID = message.typedDataChainID;
    }
    if (message.feePayer !== "") {
      obj.feePayer = message.feePayer;
    }
    if (message.feePayerSig.length !== 0) {
      obj.feePayerSig = base64FromBytes(message.feePayerSig);
    }
    return obj;
  },

  create(base?: DeepPartial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainID = object.typedDataChainID ?? "0";
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array(0);
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
