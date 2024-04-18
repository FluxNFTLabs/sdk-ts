/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface EventExecute {
  error: string;
  logs: string[];
}

function createBaseEventExecute(): EventExecute {
  return { error: "", logs: [] };
}

export const EventExecute = {
  $type: "flux.svm.v1beta1.EventExecute" as const,

  encode(message: EventExecute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    for (const v of message.logs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logs.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventExecute {
    return {
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: EventExecute): unknown {
    const obj: any = {};
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    if (message.logs?.length) {
      obj.logs = message.logs;
    }
    return obj;
  },

  create(base?: DeepPartial<EventExecute>): EventExecute {
    return EventExecute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventExecute>): EventExecute {
    const message = createBaseEventExecute();
    message.error = object.error ?? "";
    message.logs = object.logs?.map((e) => e) || [];
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
