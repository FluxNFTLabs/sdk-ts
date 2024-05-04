/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { FISInstructionResponse } from "../../astromesh/v1beta1/tx";

export enum Config {
  deploy = 0,
  update = 1,
  disable = 2,
  revoke = 3,
  UNRECOGNIZED = -1,
}

export function configFromJSON(object: any): Config {
  switch (object) {
    case 0:
    case "deploy":
      return Config.deploy;
    case 1:
    case "update":
      return Config.update;
    case 2:
    case "disable":
      return Config.disable;
    case 3:
    case "revoke":
      return Config.revoke;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Config.UNRECOGNIZED;
  }
}

export function configToJSON(object: Config): string {
  switch (object) {
    case Config.deploy:
      return "deploy";
    case Config.update:
      return "update";
    case Config.disable:
      return "disable";
    case Config.revoke:
      return "revoke";
    case Config.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MsgConfigStrategy {
  sender: string;
  config: Config;
  id: string;
  strategy: Uint8Array;
}

export interface MsgConfigStrategyResponse {
  id: string;
}

export interface MsgTriggerStrategies {
  sender: string;
  ids: string[];
  inputs: Uint8Array[];
}

export interface StrategyResponse {
  id: string;
  ix_responses: FISInstructionResponse[];
}

export interface MsgTriggerStrategiesResponse {
  strategy_trigger_responses: StrategyResponse[];
}

function createBaseMsgConfigStrategy(): MsgConfigStrategy {
  return { sender: "", config: 0, id: "", strategy: new Uint8Array(0) };
}

export const MsgConfigStrategy = {
  $type: "flux.strategy.v1beta1.MsgConfigStrategy" as const,

  encode(message: MsgConfigStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.config !== 0) {
      writer.uint32(16).int32(message.config);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.strategy.length !== 0) {
      writer.uint32(34).bytes(message.strategy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfigStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfigStrategy();
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
          if (tag !== 16) {
            break;
          }

          message.config = reader.int32() as any;
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

          message.strategy = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConfigStrategy {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      config: isSet(object.config) ? configFromJSON(object.config) : 0,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      strategy: isSet(object.strategy) ? bytesFromBase64(object.strategy) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgConfigStrategy): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.config !== undefined) {
      obj.config = configToJSON(message.config);
    }
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.strategy !== undefined) {
      obj.strategy = base64FromBytes(message.strategy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConfigStrategy>): MsgConfigStrategy {
    return MsgConfigStrategy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConfigStrategy>): MsgConfigStrategy {
    const message = createBaseMsgConfigStrategy();
    message.sender = object.sender ?? "";
    message.config = object.config ?? 0;
    message.id = object.id ?? "";
    message.strategy = object.strategy ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgConfigStrategyResponse(): MsgConfigStrategyResponse {
  return { id: "" };
}

export const MsgConfigStrategyResponse = {
  $type: "flux.strategy.v1beta1.MsgConfigStrategyResponse" as const,

  encode(message: MsgConfigStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfigStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfigStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConfigStrategyResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: MsgConfigStrategyResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgConfigStrategyResponse>): MsgConfigStrategyResponse {
    return MsgConfigStrategyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgConfigStrategyResponse>): MsgConfigStrategyResponse {
    const message = createBaseMsgConfigStrategyResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgTriggerStrategies(): MsgTriggerStrategies {
  return { sender: "", ids: [], inputs: [] };
}

export const MsgTriggerStrategies = {
  $type: "flux.strategy.v1beta1.MsgTriggerStrategies" as const,

  encode(message: MsgTriggerStrategies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.inputs) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTriggerStrategies {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerStrategies();
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

          message.ids.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inputs.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTriggerStrategies {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.String(e)) : [],
      inputs: globalThis.Array.isArray(object?.inputs) ? object.inputs.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: MsgTriggerStrategies): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTriggerStrategies>): MsgTriggerStrategies {
    return MsgTriggerStrategies.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTriggerStrategies>): MsgTriggerStrategies {
    const message = createBaseMsgTriggerStrategies();
    message.sender = object.sender ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    message.inputs = object.inputs?.map((e) => e) || [];
    return message;
  },
};

function createBaseStrategyResponse(): StrategyResponse {
  return { id: "", ix_responses: [] };
}

export const StrategyResponse = {
  $type: "flux.strategy.v1beta1.StrategyResponse" as const,

  encode(message: StrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.ix_responses) {
      FISInstructionResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ix_responses.push(FISInstructionResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StrategyResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      ix_responses: globalThis.Array.isArray(object?.ix_responses)
        ? object.ix_responses.map((e: any) => FISInstructionResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StrategyResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.ix_responses?.length) {
      obj.ix_responses = message.ix_responses.map((e) => FISInstructionResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<StrategyResponse>): StrategyResponse {
    return StrategyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StrategyResponse>): StrategyResponse {
    const message = createBaseStrategyResponse();
    message.id = object.id ?? "";
    message.ix_responses = object.ix_responses?.map((e) => FISInstructionResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgTriggerStrategiesResponse(): MsgTriggerStrategiesResponse {
  return { strategy_trigger_responses: [] };
}

export const MsgTriggerStrategiesResponse = {
  $type: "flux.strategy.v1beta1.MsgTriggerStrategiesResponse" as const,

  encode(message: MsgTriggerStrategiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.strategy_trigger_responses) {
      StrategyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTriggerStrategiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTriggerStrategiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strategy_trigger_responses.push(StrategyResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTriggerStrategiesResponse {
    return {
      strategy_trigger_responses: globalThis.Array.isArray(object?.strategy_trigger_responses)
        ? object.strategy_trigger_responses.map((e: any) => StrategyResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTriggerStrategiesResponse): unknown {
    const obj: any = {};
    if (message.strategy_trigger_responses?.length) {
      obj.strategy_trigger_responses = message.strategy_trigger_responses.map((e) => StrategyResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTriggerStrategiesResponse>): MsgTriggerStrategiesResponse {
    return MsgTriggerStrategiesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgTriggerStrategiesResponse>): MsgTriggerStrategiesResponse {
    const message = createBaseMsgTriggerStrategiesResponse();
    message.strategy_trigger_responses =
      object.strategy_trigger_responses?.map((e) => StrategyResponse.fromPartial(e)) || [];
    return message;
  },
};

export interface Msg {
  ConfigStrategy(request: DeepPartial<MsgConfigStrategy>, metadata?: grpc.Metadata): Promise<MsgConfigStrategyResponse>;
  TriggerStrategies(
    request: DeepPartial<MsgTriggerStrategies>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTriggerStrategiesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConfigStrategy = this.ConfigStrategy.bind(this);
    this.TriggerStrategies = this.TriggerStrategies.bind(this);
  }

  ConfigStrategy(
    request: DeepPartial<MsgConfigStrategy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgConfigStrategyResponse> {
    return this.rpc.unary(MsgConfigStrategyDesc, MsgConfigStrategy.fromPartial(request), metadata);
  }

  TriggerStrategies(
    request: DeepPartial<MsgTriggerStrategies>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTriggerStrategiesResponse> {
    return this.rpc.unary(MsgTriggerStrategiesDesc, MsgTriggerStrategies.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.strategy.v1beta1.Msg" };

export const MsgConfigStrategyDesc: UnaryMethodDefinitionish = {
  methodName: "ConfigStrategy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgConfigStrategy.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgConfigStrategyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTriggerStrategiesDesc: UnaryMethodDefinitionish = {
  methodName: "TriggerStrategies",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTriggerStrategies.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTriggerStrategiesResponse.decode(data);
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
