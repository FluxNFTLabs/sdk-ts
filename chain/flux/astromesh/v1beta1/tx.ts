/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export enum Plane {
  COSMOS = 0,
  EVM = 1,
  WASM = 2,
  UNRECOGNIZED = -1,
}

export function planeFromJSON(object: any): Plane {
  switch (object) {
    case 0:
    case "COSMOS":
      return Plane.COSMOS;
    case 1:
    case "EVM":
      return Plane.EVM;
    case 2:
    case "WASM":
      return Plane.WASM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Plane.UNRECOGNIZED;
  }
}

export function planeToJSON(object: Plane): string {
  switch (object) {
    case Plane.COSMOS:
      return "COSMOS";
    case Plane.EVM:
      return "EVM";
    case Plane.WASM:
      return "WASM";
    case Plane.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MsgAstroTransfer {
  sender: string;
  receiver: string;
  src_plane: Plane;
  dst_plane: Plane;
  coin: Coin | undefined;
}

export interface MsgAstroTransferResponse {
  interacted_contract: Uint8Array;
}

function createBaseMsgAstroTransfer(): MsgAstroTransfer {
  return { sender: "", receiver: "", src_plane: 0, dst_plane: 0, coin: undefined };
}

export const MsgAstroTransfer = {
  $type: "flux.astromesh.v1beta1.MsgAstroTransfer" as const,

  encode(message: MsgAstroTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.src_plane !== 0) {
      writer.uint32(24).int32(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      writer.uint32(32).int32(message.dst_plane);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAstroTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAstroTransfer();
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

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.src_plane = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dst_plane = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAstroTransfer {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      src_plane: isSet(object.src_plane) ? planeFromJSON(object.src_plane) : 0,
      dst_plane: isSet(object.dst_plane) ? planeFromJSON(object.dst_plane) : 0,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgAstroTransfer): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.src_plane !== 0) {
      obj.src_plane = planeToJSON(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      obj.dst_plane = planeToJSON(message.dst_plane);
    }
    if (message.coin !== undefined) {
      obj.coin = Coin.toJSON(message.coin);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAstroTransfer>): MsgAstroTransfer {
    return MsgAstroTransfer.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAstroTransfer>): MsgAstroTransfer {
    const message = createBaseMsgAstroTransfer();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.src_plane = object.src_plane ?? 0;
    message.dst_plane = object.dst_plane ?? 0;
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgAstroTransferResponse(): MsgAstroTransferResponse {
  return { interacted_contract: new Uint8Array(0) };
}

export const MsgAstroTransferResponse = {
  $type: "flux.astromesh.v1beta1.MsgAstroTransferResponse" as const,

  encode(message: MsgAstroTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interacted_contract.length !== 0) {
      writer.uint32(10).bytes(message.interacted_contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAstroTransferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAstroTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.interacted_contract = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAstroTransferResponse {
    return {
      interacted_contract: isSet(object.interacted_contract)
        ? bytesFromBase64(object.interacted_contract)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgAstroTransferResponse): unknown {
    const obj: any = {};
    if (message.interacted_contract.length !== 0) {
      obj.interacted_contract = base64FromBytes(message.interacted_contract);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAstroTransferResponse>): MsgAstroTransferResponse {
    return MsgAstroTransferResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAstroTransferResponse>): MsgAstroTransferResponse {
    const message = createBaseMsgAstroTransferResponse();
    message.interacted_contract = object.interacted_contract ?? new Uint8Array(0);
    return message;
  },
};

export interface Msg {
  AstroTransfer(request: DeepPartial<MsgAstroTransfer>, metadata?: grpc.Metadata): Promise<MsgAstroTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AstroTransfer = this.AstroTransfer.bind(this);
  }

  AstroTransfer(request: DeepPartial<MsgAstroTransfer>, metadata?: grpc.Metadata): Promise<MsgAstroTransferResponse> {
    return this.rpc.unary(MsgAstroTransferDesc, MsgAstroTransfer.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.astromesh.v1beta1.Msg" };

export const MsgAstroTransferDesc: UnaryMethodDefinitionish = {
  methodName: "AstroTransfer",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAstroTransfer.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAstroTransferResponse.decode(data);
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
