/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FISInstruction } from "../../astromesh/v1beta1/tx";

export interface Strategy {
  id: Uint8Array;
  owner: string;
}

export interface StrategyOutput {
  instructions: FISInstruction[];
}

function createBaseStrategy(): Strategy {
  return { id: new Uint8Array(0), owner: "" };
}

export const Strategy = {
  $type: "flux.strategy.v1beta1.Strategy" as const,

  encode(message: Strategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Strategy {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
    };
  },

  toJSON(message: Strategy): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.owner !== undefined) {
      obj.owner = message.owner;
    }
    return obj;
  },

  create(base?: DeepPartial<Strategy>): Strategy {
    return Strategy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Strategy>): Strategy {
    const message = createBaseStrategy();
    message.id = object.id ?? new Uint8Array(0);
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseStrategyOutput(): StrategyOutput {
  return { instructions: [] };
}

export const StrategyOutput = {
  $type: "flux.strategy.v1beta1.StrategyOutput" as const,

  encode(message: StrategyOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instructions) {
      FISInstruction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StrategyOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrategyOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instructions.push(FISInstruction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StrategyOutput {
    return {
      instructions: globalThis.Array.isArray(object?.instructions)
        ? object.instructions.map((e: any) => FISInstruction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StrategyOutput): unknown {
    const obj: any = {};
    if (message.instructions?.length) {
      obj.instructions = message.instructions.map((e) => FISInstruction.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<StrategyOutput>): StrategyOutput {
    return StrategyOutput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StrategyOutput>): StrategyOutput {
    const message = createBaseStrategyOutput();
    message.instructions = object.instructions?.map((e) => FISInstruction.fromPartial(e)) || [];
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
