/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface LinkInfo {
  denom: Uint8Array;
  src_decimals: number;
  dst_decimals: number;
}

function createBaseLinkInfo(): LinkInfo {
  return { denom: new Uint8Array(0), src_decimals: 0, dst_decimals: 0 };
}

export const LinkInfo = {
  $type: "flux.astromesh.v1beta1.LinkInfo" as const,

  encode(message: LinkInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom.length !== 0) {
      writer.uint32(10).bytes(message.denom);
    }
    if (message.src_decimals !== 0) {
      writer.uint32(16).int32(message.src_decimals);
    }
    if (message.dst_decimals !== 0) {
      writer.uint32(24).int32(message.dst_decimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.src_decimals = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dst_decimals = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkInfo {
    return {
      denom: isSet(object.denom) ? bytesFromBase64(object.denom) : new Uint8Array(0),
      src_decimals: isSet(object.src_decimals) ? globalThis.Number(object.src_decimals) : 0,
      dst_decimals: isSet(object.dst_decimals) ? globalThis.Number(object.dst_decimals) : 0,
    };
  },

  toJSON(message: LinkInfo): unknown {
    const obj: any = {};
    if (message.denom !== undefined) {
      obj.denom = base64FromBytes(message.denom);
    }
    if (message.src_decimals !== undefined) {
      obj.src_decimals = Math.round(message.src_decimals);
    }
    if (message.dst_decimals !== undefined) {
      obj.dst_decimals = Math.round(message.dst_decimals);
    }
    return obj;
  },

  create(base?: DeepPartial<LinkInfo>): LinkInfo {
    return LinkInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LinkInfo>): LinkInfo {
    const message = createBaseLinkInfo();
    message.denom = object.denom ?? new Uint8Array(0);
    message.src_decimals = object.src_decimals ?? 0;
    message.dst_decimals = object.dst_decimals ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
