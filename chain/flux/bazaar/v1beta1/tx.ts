/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Offering } from "./product";

export interface MsgCreateProduct {
  sender: string;
  class_id: string;
  id: string;
  title: string;
  description: string;
  content_url: string;
  offerings: Offering[];
  tags: string[];
}

export interface MsgCreateProductResponse {
}

export interface MsgPurchaseOffering {
  sender: string;
  class_id: string;
  id: string;
  product_id: string;
  offering_idx: string[];
  offering_quantity: string[];
}

export interface MsgPurchaseOfferingResponse {
}

function createBaseMsgCreateProduct(): MsgCreateProduct {
  return { sender: "", class_id: "", id: "", title: "", description: "", content_url: "", offerings: [], tags: [] };
}

export const MsgCreateProduct = {
  $type: "flux.bazaar.v1beta1.MsgCreateProduct" as const,

  encode(message: MsgCreateProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.class_id !== "") {
      writer.uint32(18).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.content_url !== "") {
      writer.uint32(50).string(message.content_url);
    }
    for (const v of message.offerings) {
      Offering.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProduct();
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

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.content_url = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.offerings.push(Offering.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProduct {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      content_url: isSet(object.content_url) ? String(object.content_url) : "",
      offerings: Array.isArray(object?.offerings) ? object.offerings.map((e: any) => Offering.fromJSON(e)) : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgCreateProduct): unknown {
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
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.content_url !== "") {
      obj.content_url = message.content_url;
    }
    if (message.offerings?.length) {
      obj.offerings = message.offerings.map((e) => Offering.toJSON(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateProduct>): MsgCreateProduct {
    return MsgCreateProduct.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateProduct>): MsgCreateProduct {
    const message = createBaseMsgCreateProduct();
    message.sender = object.sender ?? "";
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.content_url = object.content_url ?? "";
    message.offerings = object.offerings?.map((e) => Offering.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreateProductResponse(): MsgCreateProductResponse {
  return {};
}

export const MsgCreateProductResponse = {
  $type: "flux.bazaar.v1beta1.MsgCreateProductResponse" as const,

  encode(_: MsgCreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProductResponse();
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

  fromJSON(_: any): MsgCreateProductResponse {
    return {};
  },

  toJSON(_: MsgCreateProductResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateProductResponse>): MsgCreateProductResponse {
    return MsgCreateProductResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgCreateProductResponse>): MsgCreateProductResponse {
    const message = createBaseMsgCreateProductResponse();
    return message;
  },
};

function createBaseMsgPurchaseOffering(): MsgPurchaseOffering {
  return { sender: "", class_id: "", id: "", product_id: "", offering_idx: [], offering_quantity: [] };
}

export const MsgPurchaseOffering = {
  $type: "flux.bazaar.v1beta1.MsgPurchaseOffering" as const,

  encode(message: MsgPurchaseOffering, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.class_id !== "") {
      writer.uint32(18).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.product_id !== "") {
      writer.uint32(34).string(message.product_id);
    }
    writer.uint32(42).fork();
    for (const v of message.offering_idx) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.offering_quantity) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPurchaseOffering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseOffering();
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

          message.product_id = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.offering_idx.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.offering_idx.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 6:
          if (tag === 48) {
            message.offering_quantity.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.offering_quantity.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPurchaseOffering {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
      offering_idx: Array.isArray(object?.offering_idx) ? object.offering_idx.map((e: any) => String(e)) : [],
      offering_quantity: Array.isArray(object?.offering_quantity)
        ? object.offering_quantity.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgPurchaseOffering): unknown {
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
    if (message.product_id !== "") {
      obj.product_id = message.product_id;
    }
    if (message.offering_idx?.length) {
      obj.offering_idx = message.offering_idx;
    }
    if (message.offering_quantity?.length) {
      obj.offering_quantity = message.offering_quantity;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPurchaseOffering>): MsgPurchaseOffering {
    return MsgPurchaseOffering.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPurchaseOffering>): MsgPurchaseOffering {
    const message = createBaseMsgPurchaseOffering();
    message.sender = object.sender ?? "";
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.product_id = object.product_id ?? "";
    message.offering_idx = object.offering_idx?.map((e) => e) || [];
    message.offering_quantity = object.offering_quantity?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgPurchaseOfferingResponse(): MsgPurchaseOfferingResponse {
  return {};
}

export const MsgPurchaseOfferingResponse = {
  $type: "flux.bazaar.v1beta1.MsgPurchaseOfferingResponse" as const,

  encode(_: MsgPurchaseOfferingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPurchaseOfferingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseOfferingResponse();
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

  fromJSON(_: any): MsgPurchaseOfferingResponse {
    return {};
  },

  toJSON(_: MsgPurchaseOfferingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPurchaseOfferingResponse>): MsgPurchaseOfferingResponse {
    return MsgPurchaseOfferingResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgPurchaseOfferingResponse>): MsgPurchaseOfferingResponse {
    const message = createBaseMsgPurchaseOfferingResponse();
    return message;
  },
};

export interface Msg {
  CreateProduct(request: DeepPartial<MsgCreateProduct>, metadata?: grpc.Metadata): Promise<MsgCreateProductResponse>;
  PurchaseOffering(
    request: DeepPartial<MsgPurchaseOffering>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPurchaseOfferingResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateProduct = this.CreateProduct.bind(this);
    this.PurchaseOffering = this.PurchaseOffering.bind(this);
  }

  CreateProduct(request: DeepPartial<MsgCreateProduct>, metadata?: grpc.Metadata): Promise<MsgCreateProductResponse> {
    return this.rpc.unary(MsgCreateProductDesc, MsgCreateProduct.fromPartial(request), metadata);
  }

  PurchaseOffering(
    request: DeepPartial<MsgPurchaseOffering>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPurchaseOfferingResponse> {
    return this.rpc.unary(MsgPurchaseOfferingDesc, MsgPurchaseOffering.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.bazaar.v1beta1.Msg" };

export const MsgCreateProductDesc: UnaryMethodDefinitionish = {
  methodName: "CreateProduct",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateProduct.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateProductResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgPurchaseOfferingDesc: UnaryMethodDefinitionish = {
  methodName: "PurchaseOffering",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPurchaseOffering.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgPurchaseOfferingResponse.decode(data);
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
