/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ClassCommission, Product } from "./product";

/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  products: Product[];
  commissions: ClassCommission[];
}

function createBaseGenesisState(): GenesisState {
  return { products: [], commissions: [] };
}

export const GenesisState = {
  $type: "flux.bazaar.v1beta1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commissions) {
      ClassCommission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commissions.push(ClassCommission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      products: Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      commissions: Array.isArray(object?.commissions)
        ? object.commissions.map((e: any) => ClassCommission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.commissions?.length) {
      obj.commissions = message.commissions.map((e) => ClassCommission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.commissions = object.commissions?.map((e) => ClassCommission.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
