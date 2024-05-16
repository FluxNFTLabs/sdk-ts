/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FISQueryRequest } from "../../astromesh/v1beta1/query";
import { FISInstruction } from "../../astromesh/v1beta1/tx";

export interface Strategy {
  id: Uint8Array;
  owner: string;
  query:
    | FISQueryRequest
    | undefined;
  /** query hash stores hash(query), so that msg server don't need to calculate all the time */
  query_hash: Uint8Array;
}

export interface StrategyInput {
  msg: Uint8Array;
  fis_input: FISInput[];
}

export interface FISInput {
  data: Uint8Array[];
}

export interface StrategyOutput {
  instructions: FISInstruction[];
}

function createBaseStrategy(): Strategy {
  return { id: new Uint8Array(0), owner: "", query: undefined, query_hash: new Uint8Array(0) };
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
    if (message.query !== undefined) {
      FISQueryRequest.encode(message.query, writer.uint32(26).fork()).ldelim();
    }
    if (message.query_hash.length !== 0) {
      writer.uint32(34).bytes(message.query_hash);
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.query = FISQueryRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.query_hash = reader.bytes();
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
      query: isSet(object.query) ? FISQueryRequest.fromJSON(object.query) : undefined,
      query_hash: isSet(object.query_hash) ? bytesFromBase64(object.query_hash) : new Uint8Array(0),
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
    if (message.query !== undefined) {
      obj.query = FISQueryRequest.toJSON(message.query);
    }
    if (message.query_hash !== undefined) {
      obj.query_hash = base64FromBytes(message.query_hash);
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
    message.query = (object.query !== undefined && object.query !== null)
      ? FISQueryRequest.fromPartial(object.query)
      : undefined;
    message.query_hash = object.query_hash ?? new Uint8Array(0);
    return message;
  },
};

function createBaseStrategyInput(): StrategyInput {
  return { msg: new Uint8Array(0), fis_input: [] };
}

export const StrategyInput = {
  $type: "flux.strategy.v1beta1.StrategyInput" as const,

  encode(message: StrategyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg.length !== 0) {
      writer.uint32(10).bytes(message.msg);
    }
    for (const v of message.fis_input) {
      FISInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StrategyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrategyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fis_input.push(FISInput.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StrategyInput {
    return {
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      fis_input: globalThis.Array.isArray(object?.fis_input)
        ? object.fis_input.map((e: any) => FISInput.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StrategyInput): unknown {
    const obj: any = {};
    if (message.msg !== undefined) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.fis_input?.length) {
      obj.fis_input = message.fis_input.map((e) => FISInput.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<StrategyInput>): StrategyInput {
    return StrategyInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StrategyInput>): StrategyInput {
    const message = createBaseStrategyInput();
    message.msg = object.msg ?? new Uint8Array(0);
    message.fis_input = object.fis_input?.map((e) => FISInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFISInput(): FISInput {
  return { data: [] };
}

export const FISInput = {
  $type: "flux.strategy.v1beta1.FISInput" as const,

  encode(message: FISInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FISInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFISInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FISInput {
    return { data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: FISInput): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<FISInput>): FISInput {
    return FISInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FISInput>): FISInput {
    const message = createBaseFISInput();
    message.data = object.data?.map((e) => e) || [];
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
