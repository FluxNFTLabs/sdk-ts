/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Instruction } from "./svm";

export interface MsgTransaction {
  /** sender is the address of the owner of nft */
  sender: string;
  accounts: string[];
  instructions: Instruction[];
  compute_budget: string;
}

export interface MsgTransactionResponse {
  unit_consumed: string;
}

function createBaseMsgTransaction(): MsgTransaction {
  return { sender: "", accounts: [], instructions: [], compute_budget: "0" };
}

export const MsgTransaction = {
  $type: "flux.svm.v1beta1.MsgTransaction" as const,

  encode(message: MsgTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.accounts) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.instructions) {
      Instruction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.compute_budget !== "0") {
      writer.uint32(32).uint64(message.compute_budget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransaction();
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

          message.accounts.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.instructions.push(Instruction.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.compute_budget = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTransaction {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      instructions: globalThis.Array.isArray(object?.instructions)
        ? object.instructions.map((e: any) => Instruction.fromJSON(e))
        : [],
      compute_budget: isSet(object.compute_budget) ? globalThis.String(object.compute_budget) : "0",
    };
  },

  toJSON(message: MsgTransaction): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.instructions?.length) {
      obj.instructions = message.instructions.map((e) => Instruction.toJSON(e));
    }
    if (message.compute_budget !== undefined) {
      obj.compute_budget = message.compute_budget;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTransaction>): MsgTransaction {
    return MsgTransaction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTransaction>): MsgTransaction {
    const message = createBaseMsgTransaction();
    message.sender = object.sender ?? "";
    message.accounts = object.accounts?.map((e) => e) || [];
    message.instructions = object.instructions?.map((e) => Instruction.fromPartial(e)) || [];
    message.compute_budget = object.compute_budget ?? "0";
    return message;
  },
};

function createBaseMsgTransactionResponse(): MsgTransactionResponse {
  return { unit_consumed: "0" };
}

export const MsgTransactionResponse = {
  $type: "flux.svm.v1beta1.MsgTransactionResponse" as const,

  encode(message: MsgTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unit_consumed !== "0") {
      writer.uint32(8).uint64(message.unit_consumed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.unit_consumed = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTransactionResponse {
    return { unit_consumed: isSet(object.unit_consumed) ? globalThis.String(object.unit_consumed) : "0" };
  },

  toJSON(message: MsgTransactionResponse): unknown {
    const obj: any = {};
    if (message.unit_consumed !== undefined) {
      obj.unit_consumed = message.unit_consumed;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTransactionResponse>): MsgTransactionResponse {
    return MsgTransactionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTransactionResponse>): MsgTransactionResponse {
    const message = createBaseMsgTransactionResponse();
    message.unit_consumed = object.unit_consumed ?? "0";
    return message;
  },
};

export interface Msg {
  Transact(request: DeepPartial<MsgTransaction>, metadata?: grpc.Metadata): Promise<MsgTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Transact = this.Transact.bind(this);
  }

  Transact(request: DeepPartial<MsgTransaction>, metadata?: grpc.Metadata): Promise<MsgTransactionResponse> {
    return this.rpc.unary(MsgTransactDesc, MsgTransaction.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.svm.v1beta1.Msg" };

export const MsgTransactDesc: UnaryMethodDefinitionish = {
  methodName: "Transact",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTransaction.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTransactionResponse.decode(data);
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

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
