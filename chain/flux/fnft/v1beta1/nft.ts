/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";

/** Class defines the class of the nft type. */
export interface Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol: string;
  /** description is a brief description of nft classification. Optional */
  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uri_hash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data: Any | undefined;
}

/** NFT defines the NFT. */
export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uri_hash: string;
  /** supply is shares supply for this nft */
  supply: string;
  /** available shares to purchase within iso period */
  available_shares: string;
  /** iso price per share */
  initial_price: string;
  /** timestamp when iso period is over */
  ISO_timestamp: string;
  /** sponsorships must use this denom */
  accepted_sponsorship_denom: string;
  /** array of sponsorship in this dividend period */
  sponsorships: Sponsorship[];
  /** sponsorship coins will be accumulated in revenue */
  revenue:
    | Coin
    | undefined;
  /** interval to distribute dividend to users */
  dividend_interval: string;
  /** last dividend timestamp */
  last_dividend_timestamp: string;
  /** nft owner */
  owner: string;
  /** indicate if nft passes iso or not */
  active: boolean;
  /** data is an app specific data of the NFT. Optional */
  data: Any | undefined;
}

export interface Sponsorship {
  description: string;
  uri: string;
}

export interface Holder {
  address: string;
  shares: string;
}

function createBaseClass(): Class {
  return { id: "", name: "", symbol: "", description: "", uri: "", uri_hash: "", data: undefined };
}

export const Class = {
  $type: "flux.fnft.v1beta1.Class" as const,

  encode(message: Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uri_hash !== "") {
      writer.uint32(50).string(message.uri_hash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.uri_hash = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): Class {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: Class): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.symbol !== "") {
      obj.symbol = message.symbol;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.uri_hash !== "") {
      obj.uri_hash = message.uri_hash;
    }
    if (message.data !== undefined) {
      obj.data = Any.toJSON(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<Class>): Class {
    return Class.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uri_hash = object.uri_hash ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseNFT(): NFT {
  return {
    class_id: "",
    id: "",
    uri: "",
    uri_hash: "",
    supply: "",
    available_shares: "",
    initial_price: "",
    ISO_timestamp: "0",
    accepted_sponsorship_denom: "",
    sponsorships: [],
    revenue: undefined,
    dividend_interval: "0",
    last_dividend_timestamp: "0",
    owner: "",
    active: false,
    data: undefined,
  };
}

export const NFT = {
  $type: "flux.fnft.v1beta1.NFT" as const,

  encode(message: NFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uri_hash !== "") {
      writer.uint32(34).string(message.uri_hash);
    }
    if (message.supply !== "") {
      writer.uint32(42).string(message.supply);
    }
    if (message.available_shares !== "") {
      writer.uint32(50).string(message.available_shares);
    }
    if (message.initial_price !== "") {
      writer.uint32(58).string(message.initial_price);
    }
    if (message.ISO_timestamp !== "0") {
      writer.uint32(64).uint64(message.ISO_timestamp);
    }
    if (message.accepted_sponsorship_denom !== "") {
      writer.uint32(74).string(message.accepted_sponsorship_denom);
    }
    for (const v of message.sponsorships) {
      Sponsorship.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.revenue !== undefined) {
      Coin.encode(message.revenue, writer.uint32(90).fork()).ldelim();
    }
    if (message.dividend_interval !== "0") {
      writer.uint32(96).uint64(message.dividend_interval);
    }
    if (message.last_dividend_timestamp !== "0") {
      writer.uint32(104).uint64(message.last_dividend_timestamp);
    }
    if (message.owner !== "") {
      writer.uint32(114).string(message.owner);
    }
    if (message.active === true) {
      writer.uint32(120).bool(message.active);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFT();
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

          message.uri = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uri_hash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.supply = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.available_shares = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.initial_price = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ISO_timestamp = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.accepted_sponsorship_denom = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.sponsorships.push(Sponsorship.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.revenue = Coin.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.dividend_interval = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.last_dividend_timestamp = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
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

  fromJSON(object: any): NFT {
    return {
      class_id: isSet(object.class_id) ? String(object.class_id) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      available_shares: isSet(object.available_shares) ? String(object.available_shares) : "",
      initial_price: isSet(object.initial_price) ? String(object.initial_price) : "",
      ISO_timestamp: isSet(object.ISO_timestamp) ? String(object.ISO_timestamp) : "0",
      accepted_sponsorship_denom: isSet(object.accepted_sponsorship_denom)
        ? String(object.accepted_sponsorship_denom)
        : "",
      sponsorships: Array.isArray(object?.sponsorships)
        ? object.sponsorships.map((e: any) => Sponsorship.fromJSON(e))
        : [],
      revenue: isSet(object.revenue) ? Coin.fromJSON(object.revenue) : undefined,
      dividend_interval: isSet(object.dividend_interval) ? String(object.dividend_interval) : "0",
      last_dividend_timestamp: isSet(object.last_dividend_timestamp) ? String(object.last_dividend_timestamp) : "0",
      owner: isSet(object.owner) ? String(object.owner) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.uri_hash !== "") {
      obj.uri_hash = message.uri_hash;
    }
    if (message.supply !== "") {
      obj.supply = message.supply;
    }
    if (message.available_shares !== "") {
      obj.available_shares = message.available_shares;
    }
    if (message.initial_price !== "") {
      obj.initial_price = message.initial_price;
    }
    if (message.ISO_timestamp !== "0") {
      obj.ISO_timestamp = message.ISO_timestamp;
    }
    if (message.accepted_sponsorship_denom !== "") {
      obj.accepted_sponsorship_denom = message.accepted_sponsorship_denom;
    }
    if (message.sponsorships?.length) {
      obj.sponsorships = message.sponsorships.map((e) => Sponsorship.toJSON(e));
    }
    if (message.revenue !== undefined) {
      obj.revenue = Coin.toJSON(message.revenue);
    }
    if (message.dividend_interval !== "0") {
      obj.dividend_interval = message.dividend_interval;
    }
    if (message.last_dividend_timestamp !== "0") {
      obj.last_dividend_timestamp = message.last_dividend_timestamp;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.data !== undefined) {
      obj.data = Any.toJSON(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<NFT>): NFT {
    return NFT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NFT>): NFT {
    const message = createBaseNFT();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uri_hash = object.uri_hash ?? "";
    message.supply = object.supply ?? "";
    message.available_shares = object.available_shares ?? "";
    message.initial_price = object.initial_price ?? "";
    message.ISO_timestamp = object.ISO_timestamp ?? "0";
    message.accepted_sponsorship_denom = object.accepted_sponsorship_denom ?? "";
    message.sponsorships = object.sponsorships?.map((e) => Sponsorship.fromPartial(e)) || [];
    message.revenue = (object.revenue !== undefined && object.revenue !== null)
      ? Coin.fromPartial(object.revenue)
      : undefined;
    message.dividend_interval = object.dividend_interval ?? "0";
    message.last_dividend_timestamp = object.last_dividend_timestamp ?? "0";
    message.owner = object.owner ?? "";
    message.active = object.active ?? false;
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseSponsorship(): Sponsorship {
  return { description: "", uri: "" };
}

export const Sponsorship = {
  $type: "flux.fnft.v1beta1.Sponsorship" as const,

  encode(message: Sponsorship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sponsorship {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSponsorship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sponsorship {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: Sponsorship): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<Sponsorship>): Sponsorship {
    return Sponsorship.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Sponsorship>): Sponsorship {
    const message = createBaseSponsorship();
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseHolder(): Holder {
  return { address: "", shares: "" };
}

export const Holder = {
  $type: "flux.fnft.v1beta1.Holder" as const,

  encode(message: Holder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.shares !== "") {
      writer.uint32(18).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Holder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHolder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.shares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Holder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: Holder): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<Holder>): Holder {
    return Holder.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Holder>): Holder {
    const message = createBaseHolder();
    message.address = object.address ?? "";
    message.shares = object.shares ?? "";
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
