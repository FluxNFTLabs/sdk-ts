/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export interface Product {
  /** NFT class id reference */
  class_id: string;
  /** NFT id reference */
  id: string;
  /** product id */
  product_id: string;
  /** title */
  title: string;
  /** description */
  description: string;
  /** content url */
  content_url: string;
  /** product offerings including gift, items, etc */
  offerings: Offering[];
  /** product revenue */
  revenue:
    | Coin
    | undefined;
  /** tags */
  tags: string[];
}

export interface Offering {
  url: string;
  price: Coin | undefined;
  purchase_count: string;
}

export interface ClassCommission {
  class_id: string;
  commission_mul: string;
  commission_div: string;
}

function createBaseProduct(): Product {
  return {
    class_id: "",
    id: "",
    product_id: "",
    title: "",
    description: "",
    content_url: "",
    offerings: [],
    revenue: undefined,
    tags: [],
  };
}

export const Product = {
  $type: "flux.bazaar.v1beta1.Product" as const,

  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.product_id !== "") {
      writer.uint32(26).string(message.product_id);
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
    if (message.revenue !== undefined) {
      Coin.encode(message.revenue, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.class_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.product_id = reader.string();
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

          message.revenue = Coin.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): Product {
    return {
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      product_id: isSet(object.product_id) ? String(object.product_id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      content_url: isSet(object.content_url) ? String(object.content_url) : "",
      offerings: Array.isArray(object?.offerings) ? object.offerings.map((e: any) => Offering.fromJSON(e)) : [],
      revenue: isSet(object.revenue) ? Coin.fromJSON(object.revenue) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.product_id !== "") {
      obj.product_id = message.product_id;
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
    if (message.revenue !== undefined) {
      obj.revenue = Coin.toJSON(message.revenue);
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create(base?: DeepPartial<Product>): Product {
    return Product.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.product_id = object.product_id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.content_url = object.content_url ?? "";
    message.offerings = object.offerings?.map((e) => Offering.fromPartial(e)) || [];
    message.revenue = (object.revenue !== undefined && object.revenue !== null)
      ? Coin.fromPartial(object.revenue)
      : undefined;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseOffering(): Offering {
  return { url: "", price: undefined, purchase_count: "0" };
}

export const Offering = {
  $type: "flux.bazaar.v1beta1.Offering" as const,

  encode(message: Offering, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.purchase_count !== "0") {
      writer.uint32(24).uint64(message.purchase_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Offering {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOffering();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.price = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.purchase_count = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Offering {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      purchase_count: isSet(object.purchase_count) ? String(object.purchase_count) : "0",
    };
  },

  toJSON(message: Offering): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.price !== undefined) {
      obj.price = Coin.toJSON(message.price);
    }
    if (message.purchase_count !== "0") {
      obj.purchase_count = message.purchase_count;
    }
    return obj;
  },

  create(base?: DeepPartial<Offering>): Offering {
    return Offering.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Offering>): Offering {
    const message = createBaseOffering();
    message.url = object.url ?? "";
    message.price = (object.price !== undefined && object.price !== null) ? Coin.fromPartial(object.price) : undefined;
    message.purchase_count = object.purchase_count ?? "0";
    return message;
  },
};

function createBaseClassCommission(): ClassCommission {
  return { class_id: "", commission_mul: "0", commission_div: "0" };
}

export const ClassCommission = {
  $type: "flux.bazaar.v1beta1.ClassCommission" as const,

  encode(message: ClassCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.commission_mul !== "0") {
      writer.uint32(16).uint64(message.commission_mul);
    }
    if (message.commission_div !== "0") {
      writer.uint32(24).uint64(message.commission_div);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassCommission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.class_id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.commission_mul = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.commission_div = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClassCommission {
    return {
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      commission_mul: isSet(object.commission_mul) ? String(object.commission_mul) : "0",
      commission_div: isSet(object.commission_div) ? String(object.commission_div) : "0",
    };
  },

  toJSON(message: ClassCommission): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.commission_mul !== "0") {
      obj.commission_mul = message.commission_mul;
    }
    if (message.commission_div !== "0") {
      obj.commission_div = message.commission_div;
    }
    return obj;
  },

  create(base?: DeepPartial<ClassCommission>): ClassCommission {
    return ClassCommission.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ClassCommission>): ClassCommission {
    const message = createBaseClassCommission();
    message.class_id = object.class_id ?? "";
    message.commission_mul = object.commission_mul ?? "0";
    message.commission_div = object.commission_div ?? "0";
    return message;
  },
};

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
