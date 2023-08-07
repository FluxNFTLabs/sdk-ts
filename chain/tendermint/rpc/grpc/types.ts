/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { ResponseCheckTx, ResponseDeliverTx } from "../../abci/types";

export interface RequestPing {
}

export interface RequestBroadcastTx {
  tx: Uint8Array;
}

export interface ResponsePing {
}

export interface ResponseBroadcastTx {
  check_tx: ResponseCheckTx | undefined;
  deliver_tx: ResponseDeliverTx | undefined;
}

function createBaseRequestPing(): RequestPing {
  return {};
}

export const RequestPing = {
  $type: "tendermint.rpc.grpc.RequestPing" as const,

  encode(_: RequestPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPing();
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

  fromJSON(_: any): RequestPing {
    return {};
  },

  toJSON(_: RequestPing): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<RequestPing>): RequestPing {
    return RequestPing.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<RequestPing>): RequestPing {
    const message = createBaseRequestPing();
    return message;
  },
};

function createBaseRequestBroadcastTx(): RequestBroadcastTx {
  return { tx: new Uint8Array(0) };
}

export const RequestBroadcastTx = {
  $type: "tendermint.rpc.grpc.RequestBroadcastTx" as const,

  encode(message: RequestBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBroadcastTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tx = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestBroadcastTx {
    return { tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0) };
  },

  toJSON(message: RequestBroadcastTx): unknown {
    const obj: any = {};
    if (message.tx.length !== 0) {
      obj.tx = base64FromBytes(message.tx);
    }
    return obj;
  },

  create(base?: DeepPartial<RequestBroadcastTx>): RequestBroadcastTx {
    return RequestBroadcastTx.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RequestBroadcastTx>): RequestBroadcastTx {
    const message = createBaseRequestBroadcastTx();
    message.tx = object.tx ?? new Uint8Array(0);
    return message;
  },
};

function createBaseResponsePing(): ResponsePing {
  return {};
}

export const ResponsePing = {
  $type: "tendermint.rpc.grpc.ResponsePing" as const,

  encode(_: ResponsePing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePing();
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

  fromJSON(_: any): ResponsePing {
    return {};
  },

  toJSON(_: ResponsePing): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ResponsePing>): ResponsePing {
    return ResponsePing.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ResponsePing>): ResponsePing {
    const message = createBaseResponsePing();
    return message;
  },
};

function createBaseResponseBroadcastTx(): ResponseBroadcastTx {
  return { check_tx: undefined, deliver_tx: undefined };
}

export const ResponseBroadcastTx = {
  $type: "tendermint.rpc.grpc.ResponseBroadcastTx" as const,

  encode(message: ResponseBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.check_tx !== undefined) {
      ResponseCheckTx.encode(message.check_tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliver_tx !== undefined) {
      ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBroadcastTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseBroadcastTx {
    return {
      check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
      deliver_tx: isSet(object.deliver_tx) ? ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined,
    };
  },

  toJSON(message: ResponseBroadcastTx): unknown {
    const obj: any = {};
    if (message.check_tx !== undefined) {
      obj.check_tx = ResponseCheckTx.toJSON(message.check_tx);
    }
    if (message.deliver_tx !== undefined) {
      obj.deliver_tx = ResponseDeliverTx.toJSON(message.deliver_tx);
    }
    return obj;
  },

  create(base?: DeepPartial<ResponseBroadcastTx>): ResponseBroadcastTx {
    return ResponseBroadcastTx.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResponseBroadcastTx>): ResponseBroadcastTx {
    const message = createBaseResponseBroadcastTx();
    message.check_tx = (object.check_tx !== undefined && object.check_tx !== null)
      ? ResponseCheckTx.fromPartial(object.check_tx)
      : undefined;
    message.deliver_tx = (object.deliver_tx !== undefined && object.deliver_tx !== null)
      ? ResponseDeliverTx.fromPartial(object.deliver_tx)
      : undefined;
    return message;
  },
};

export interface BroadcastAPI {
  Ping(request: DeepPartial<RequestPing>, metadata?: grpc.Metadata): Promise<ResponsePing>;
  BroadcastTx(request: DeepPartial<RequestBroadcastTx>, metadata?: grpc.Metadata): Promise<ResponseBroadcastTx>;
}

export class BroadcastAPIClientImpl implements BroadcastAPI {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Ping = this.Ping.bind(this);
    this.BroadcastTx = this.BroadcastTx.bind(this);
  }

  Ping(request: DeepPartial<RequestPing>, metadata?: grpc.Metadata): Promise<ResponsePing> {
    return this.rpc.unary(BroadcastAPIPingDesc, RequestPing.fromPartial(request), metadata);
  }

  BroadcastTx(request: DeepPartial<RequestBroadcastTx>, metadata?: grpc.Metadata): Promise<ResponseBroadcastTx> {
    return this.rpc.unary(BroadcastAPIBroadcastTxDesc, RequestBroadcastTx.fromPartial(request), metadata);
  }
}

export const BroadcastAPIDesc = { serviceName: "tendermint.rpc.grpc.BroadcastAPI" };

export const BroadcastAPIPingDesc: UnaryMethodDefinitionish = {
  methodName: "Ping",
  service: BroadcastAPIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RequestPing.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ResponsePing.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const BroadcastAPIBroadcastTxDesc: UnaryMethodDefinitionish = {
  methodName: "BroadcastTx",
  service: BroadcastAPIDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RequestBroadcastTx.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = ResponseBroadcastTx.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
