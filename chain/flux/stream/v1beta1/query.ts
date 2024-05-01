/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { Any } from "../../../google/protobuf/any";

/** WARNING: always append to bottom or you will mess up indexer logic */
export enum Op {
  /** SyntheticUpdate - Synthetic events */
  SyntheticUpdate = 0,
  /** FNFTUpdateClass - FNFT */
  FNFTUpdateClass = 100,
  FNFTCreate = 101,
  FNFTPurchaseShares = 102,
  FNFTSponsor = 103,
  FNFTUpdateRevenue = 104,
  FNFTISO = 105,
  FNFTDividend = 106,
  FNFTUpdateHolderCount = 107,
  FNFTUpdateProductCount = 108,
  FNFTUpdateHolder = 109,
  FNFTDeleteHolder = 110,
  /**
   * BazaarCreateProduct - BAZAAR
   * product events
   */
  BazaarCreateProduct = 200,
  BazaarPurchaseOffering = 201,
  BazaarVerifyProduct = 202,
  /** EvmDeployContract - EVM */
  EvmDeployContract = 3000,
  EvmExecute = 3001,
  EvmEmitLog = 3002,
  /** SvmExecute - SVM */
  SvmExecute = 4000,
  /** BankUpdate - astromesh */
  BankUpdate = 5000,
  UNRECOGNIZED = -1,
}

export function opFromJSON(object: any): Op {
  switch (object) {
    case 0:
    case "SyntheticUpdate":
      return Op.SyntheticUpdate;
    case 100:
    case "FNFTUpdateClass":
      return Op.FNFTUpdateClass;
    case 101:
    case "FNFTCreate":
      return Op.FNFTCreate;
    case 102:
    case "FNFTPurchaseShares":
      return Op.FNFTPurchaseShares;
    case 103:
    case "FNFTSponsor":
      return Op.FNFTSponsor;
    case 104:
    case "FNFTUpdateRevenue":
      return Op.FNFTUpdateRevenue;
    case 105:
    case "FNFTISO":
      return Op.FNFTISO;
    case 106:
    case "FNFTDividend":
      return Op.FNFTDividend;
    case 107:
    case "FNFTUpdateHolderCount":
      return Op.FNFTUpdateHolderCount;
    case 108:
    case "FNFTUpdateProductCount":
      return Op.FNFTUpdateProductCount;
    case 109:
    case "FNFTUpdateHolder":
      return Op.FNFTUpdateHolder;
    case 110:
    case "FNFTDeleteHolder":
      return Op.FNFTDeleteHolder;
    case 200:
    case "BazaarCreateProduct":
      return Op.BazaarCreateProduct;
    case 201:
    case "BazaarPurchaseOffering":
      return Op.BazaarPurchaseOffering;
    case 202:
    case "BazaarVerifyProduct":
      return Op.BazaarVerifyProduct;
    case 3000:
    case "EvmDeployContract":
      return Op.EvmDeployContract;
    case 3001:
    case "EvmExecute":
      return Op.EvmExecute;
    case 3002:
    case "EvmEmitLog":
      return Op.EvmEmitLog;
    case 4000:
    case "SvmExecute":
      return Op.SvmExecute;
    case 5000:
    case "BankUpdate":
      return Op.BankUpdate;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Op.UNRECOGNIZED;
  }
}

export function opToJSON(object: Op): string {
  switch (object) {
    case Op.SyntheticUpdate:
      return "SyntheticUpdate";
    case Op.FNFTUpdateClass:
      return "FNFTUpdateClass";
    case Op.FNFTCreate:
      return "FNFTCreate";
    case Op.FNFTPurchaseShares:
      return "FNFTPurchaseShares";
    case Op.FNFTSponsor:
      return "FNFTSponsor";
    case Op.FNFTUpdateRevenue:
      return "FNFTUpdateRevenue";
    case Op.FNFTISO:
      return "FNFTISO";
    case Op.FNFTDividend:
      return "FNFTDividend";
    case Op.FNFTUpdateHolderCount:
      return "FNFTUpdateHolderCount";
    case Op.FNFTUpdateProductCount:
      return "FNFTUpdateProductCount";
    case Op.FNFTUpdateHolder:
      return "FNFTUpdateHolder";
    case Op.FNFTDeleteHolder:
      return "FNFTDeleteHolder";
    case Op.BazaarCreateProduct:
      return "BazaarCreateProduct";
    case Op.BazaarPurchaseOffering:
      return "BazaarPurchaseOffering";
    case Op.BazaarVerifyProduct:
      return "BazaarVerifyProduct";
    case Op.EvmDeployContract:
      return "EvmDeployContract";
    case Op.EvmExecute:
      return "EvmExecute";
    case Op.EvmEmitLog:
      return "EvmEmitLog";
    case Op.SvmExecute:
      return "SvmExecute";
    case Op.BankUpdate:
      return "BankUpdate";
    case Op.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EventsRequest {
  height: string;
  modules: string[];
  tm_queries: string[];
}

export interface EventsResponse {
  height: string;
  time: string;
  modules: string[];
  events: Event[];
  tm_queries: string[];
  tm_data: string[];
}

export interface Event {
  event_ops: EventOp[];
}

export interface EventOp {
  op: Op;
  module: string;
  data: Any | undefined;
}

export interface SyncStatus {
  last_block: string;
  last_block_time: string;
  updated_at: string;
  current_version: string;
}

function createBaseEventsRequest(): EventsRequest {
  return { height: "0", modules: [], tm_queries: [] };
}

export const EventsRequest = {
  $type: "flux.stream.v1beta1.EventsRequest" as const,

  encode(message: EventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.modules) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.tm_queries) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.modules.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tm_queries.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventsRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      modules: globalThis.Array.isArray(object?.modules) ? object.modules.map((e: any) => globalThis.String(e)) : [],
      tm_queries: globalThis.Array.isArray(object?.tm_queries)
        ? object.tm_queries.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: EventsRequest): unknown {
    const obj: any = {};
    if (message.height !== undefined) {
      obj.height = message.height;
    }
    if (message.modules?.length) {
      obj.modules = message.modules;
    }
    if (message.tm_queries?.length) {
      obj.tm_queries = message.tm_queries;
    }
    return obj;
  },

  create(base?: DeepPartial<EventsRequest>): EventsRequest {
    return EventsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventsRequest>): EventsRequest {
    const message = createBaseEventsRequest();
    message.height = object.height ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    message.tm_queries = object.tm_queries?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventsResponse(): EventsResponse {
  return { height: "0", time: "0", modules: [], events: [], tm_queries: [], tm_data: [] };
}

export const EventsResponse = {
  $type: "flux.stream.v1beta1.EventsResponse" as const,

  encode(message: EventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    for (const v of message.modules) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.tm_queries) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.tm_data) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modules.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tm_queries.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tm_data.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventsResponse {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      modules: globalThis.Array.isArray(object?.modules) ? object.modules.map((e: any) => globalThis.String(e)) : [],
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      tm_queries: globalThis.Array.isArray(object?.tm_queries)
        ? object.tm_queries.map((e: any) => globalThis.String(e))
        : [],
      tm_data: globalThis.Array.isArray(object?.tm_data) ? object.tm_data.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: EventsResponse): unknown {
    const obj: any = {};
    if (message.height !== undefined) {
      obj.height = message.height;
    }
    if (message.time !== undefined) {
      obj.time = message.time;
    }
    if (message.modules?.length) {
      obj.modules = message.modules;
    }
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    if (message.tm_queries?.length) {
      obj.tm_queries = message.tm_queries;
    }
    if (message.tm_data?.length) {
      obj.tm_data = message.tm_data;
    }
    return obj;
  },

  create(base?: DeepPartial<EventsResponse>): EventsResponse {
    return EventsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventsResponse>): EventsResponse {
    const message = createBaseEventsResponse();
    message.height = object.height ?? "0";
    message.time = object.time ?? "0";
    message.modules = object.modules?.map((e) => e) || [];
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.tm_queries = object.tm_queries?.map((e) => e) || [];
    message.tm_data = object.tm_data?.map((e) => e) || [];
    return message;
  },
};

function createBaseEvent(): Event {
  return { event_ops: [] };
}

export const Event = {
  $type: "flux.stream.v1beta1.Event" as const,

  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.event_ops) {
      EventOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event_ops.push(EventOp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      event_ops: globalThis.Array.isArray(object?.event_ops)
        ? object.event_ops.map((e: any) => EventOp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.event_ops?.length) {
      obj.event_ops = message.event_ops.map((e) => EventOp.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.event_ops = object.event_ops?.map((e) => EventOp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventOp(): EventOp {
  return { op: 0, module: "", data: undefined };
}

export const EventOp = {
  $type: "flux.stream.v1beta1.EventOp" as const,

  encode(message: EventOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.op !== 0) {
      writer.uint32(8).int32(message.op);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventOp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.op = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.module = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventOp {
    return {
      op: isSet(object.op) ? opFromJSON(object.op) : 0,
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: EventOp): unknown {
    const obj: any = {};
    if (message.op !== undefined) {
      obj.op = opToJSON(message.op);
    }
    if (message.module !== undefined) {
      obj.module = message.module;
    }
    if (message.data !== undefined) {
      obj.data = Any.toJSON(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<EventOp>): EventOp {
    return EventOp.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventOp>): EventOp {
    const message = createBaseEventOp();
    message.op = object.op ?? 0;
    message.module = object.module ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseSyncStatus(): SyncStatus {
  return { last_block: "0", last_block_time: "0", updated_at: "0", current_version: "" };
}

export const SyncStatus = {
  $type: "flux.stream.v1beta1.SyncStatus" as const,

  encode(message: SyncStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.last_block !== "0") {
      writer.uint32(8).uint64(message.last_block);
    }
    if (message.last_block_time !== "0") {
      writer.uint32(16).int64(message.last_block_time);
    }
    if (message.updated_at !== "0") {
      writer.uint32(24).int64(message.updated_at);
    }
    if (message.current_version !== "") {
      writer.uint32(34).string(message.current_version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.last_block = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.last_block_time = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updated_at = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.current_version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SyncStatus {
    return {
      last_block: isSet(object.last_block) ? globalThis.String(object.last_block) : "0",
      last_block_time: isSet(object.last_block_time) ? globalThis.String(object.last_block_time) : "0",
      updated_at: isSet(object.updated_at) ? globalThis.String(object.updated_at) : "0",
      current_version: isSet(object.current_version) ? globalThis.String(object.current_version) : "",
    };
  },

  toJSON(message: SyncStatus): unknown {
    const obj: any = {};
    if (message.last_block !== undefined) {
      obj.last_block = message.last_block;
    }
    if (message.last_block_time !== undefined) {
      obj.last_block_time = message.last_block_time;
    }
    if (message.updated_at !== undefined) {
      obj.updated_at = message.updated_at;
    }
    if (message.current_version !== undefined) {
      obj.current_version = message.current_version;
    }
    return obj;
  },

  create(base?: DeepPartial<SyncStatus>): SyncStatus {
    return SyncStatus.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SyncStatus>): SyncStatus {
    const message = createBaseSyncStatus();
    message.last_block = object.last_block ?? "0";
    message.last_block_time = object.last_block_time ?? "0";
    message.updated_at = object.updated_at ?? "0";
    message.current_version = object.current_version ?? "";
    return message;
  },
};

export interface Query {
  GetEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Promise<EventsResponse>;
  StreamEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Observable<EventsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetEvents = this.GetEvents.bind(this);
    this.StreamEvents = this.StreamEvents.bind(this);
  }

  GetEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Promise<EventsResponse> {
    return this.rpc.unary(QueryGetEventsDesc, EventsRequest.fromPartial(request), metadata);
  }

  StreamEvents(request: DeepPartial<EventsRequest>, metadata?: grpc.Metadata): Observable<EventsResponse> {
    return this.rpc.invoke(QueryStreamEventsDesc, EventsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "flux.stream.v1beta1.Query" };

export const QueryGetEventsDesc: UnaryMethodDefinitionish = {
  methodName: "GetEvents",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return EventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = EventsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryStreamEventsDesc: UnaryMethodDefinitionish = {
  methodName: "StreamEvents",
  service: QueryDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return EventsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = EventsResponse.decode(data);
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
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
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

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => client.close());
      };
      upStream();
    }).pipe(share());
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
