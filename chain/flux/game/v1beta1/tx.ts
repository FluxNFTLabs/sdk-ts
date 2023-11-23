/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";

export interface MsgRefereeSend {
  sender: string;
  class_id: string;
  id: string;
  game_id: string;
  from: string;
  to: string;
  coin: string;
}

export interface MsgRefereeSendResponse {
}

function createBaseMsgRefereeSend(): MsgRefereeSend {
  return { sender: "", class_id: "", id: "", game_id: "", from: "", to: "", coin: "" };
}

export const MsgRefereeSend = {
  $type: "flux.game.v1beta1.MsgRefereeSend" as const,

  encode(message: MsgRefereeSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.class_id !== "") {
      writer.uint32(18).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.game_id !== "") {
      writer.uint32(34).string(message.game_id);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.coin !== "") {
      writer.uint32(58).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefereeSend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefereeSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.class_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.game_id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.from = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.to = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.coin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRefereeSend {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      class_id: isSet(object.class_id) ? globalThis.String(object.class_id) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      game_id: isSet(object.game_id) ? globalThis.String(object.game_id) : "",
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      coin: isSet(object.coin) ? globalThis.String(object.coin) : "",
    };
  },

  toJSON(message: MsgRefereeSend): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.game_id !== "") {
      obj.game_id = message.game_id;
    }
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.coin !== "") {
      obj.coin = message.coin;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRefereeSend>): MsgRefereeSend {
    return MsgRefereeSend.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRefereeSend>): MsgRefereeSend {
    const message = createBaseMsgRefereeSend();
    message.sender = object.sender ?? "";
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.game_id = object.game_id ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseMsgRefereeSendResponse(): MsgRefereeSendResponse {
  return {};
}

export const MsgRefereeSendResponse = {
  $type: "flux.game.v1beta1.MsgRefereeSendResponse" as const,

  encode(_: MsgRefereeSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefereeSendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefereeSendResponse();
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

  fromJSON(_: any): MsgRefereeSendResponse {
    return {};
  },

  toJSON(_: MsgRefereeSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRefereeSendResponse>): MsgRefereeSendResponse {
    return MsgRefereeSendResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRefereeSendResponse>): MsgRefereeSendResponse {
    const message = createBaseMsgRefereeSendResponse();
    return message;
  },
};

export interface Msg {
  RefereeSend(request: DeepPartial<MsgRefereeSend>, metadata?: grpc.Metadata): Promise<MsgRefereeSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RefereeSend = this.RefereeSend.bind(this);
  }

  RefereeSend(request: DeepPartial<MsgRefereeSend>, metadata?: grpc.Metadata): Promise<MsgRefereeSendResponse> {
    return this.rpc.unary(MsgRefereeSendDesc, MsgRefereeSend.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.game.v1beta1.Msg" };

export const MsgRefereeSendDesc: UnaryMethodDefinitionish = {
  methodName: "RefereeSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRefereeSend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgRefereeSendResponse.decode(data);
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
