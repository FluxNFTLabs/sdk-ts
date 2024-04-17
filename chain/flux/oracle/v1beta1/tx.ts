/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { SimpleEntry } from "./oracle";

export interface MsgPushSimpleEntry {
  sender: string;
  entries: SimpleEntry[];
}

export interface MsgPushSimpleEntryResponse {
}

function createBaseMsgPushSimpleEntry(): MsgPushSimpleEntry {
  return { sender: "", entries: [] };
}

export const MsgPushSimpleEntry = {
  $type: "flux.oracle.v1beta1.MsgPushSimpleEntry" as const,

  encode(message: MsgPushSimpleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.entries) {
      SimpleEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPushSimpleEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPushSimpleEntry();
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

          message.entries.push(SimpleEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPushSimpleEntry {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => SimpleEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgPushSimpleEntry): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => SimpleEntry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPushSimpleEntry>): MsgPushSimpleEntry {
    return MsgPushSimpleEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPushSimpleEntry>): MsgPushSimpleEntry {
    const message = createBaseMsgPushSimpleEntry();
    message.sender = object.sender ?? "";
    message.entries = object.entries?.map((e) => SimpleEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgPushSimpleEntryResponse(): MsgPushSimpleEntryResponse {
  return {};
}

export const MsgPushSimpleEntryResponse = {
  $type: "flux.oracle.v1beta1.MsgPushSimpleEntryResponse" as const,

  encode(_: MsgPushSimpleEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPushSimpleEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPushSimpleEntryResponse();
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

  fromJSON(_: any): MsgPushSimpleEntryResponse {
    return {};
  },

  toJSON(_: MsgPushSimpleEntryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPushSimpleEntryResponse>): MsgPushSimpleEntryResponse {
    return MsgPushSimpleEntryResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgPushSimpleEntryResponse>): MsgPushSimpleEntryResponse {
    const message = createBaseMsgPushSimpleEntryResponse();
    return message;
  },
};

export interface Msg {
  PushSimpleEntry(
    request: DeepPartial<MsgPushSimpleEntry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPushSimpleEntryResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PushSimpleEntry = this.PushSimpleEntry.bind(this);
  }

  PushSimpleEntry(
    request: DeepPartial<MsgPushSimpleEntry>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPushSimpleEntryResponse> {
    return this.rpc.unary(MsgPushSimpleEntryDesc, MsgPushSimpleEntry.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.oracle.v1beta1.Msg" };

export const MsgPushSimpleEntryDesc: UnaryMethodDefinitionish = {
  methodName: "PushSimpleEntry",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPushSimpleEntry.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgPushSimpleEntryResponse.decode(data);
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