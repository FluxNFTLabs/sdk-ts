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
  uriHash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data: Any | undefined;
}

/** NFT defines the NFT. */
export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uriHash: string;
  /** supply is shares supply for this nft */
  supply: string;
  /** available shares to purchase within iso period */
  availableShares: string;
  /** iso price per share */
  initialPrice: string;
  /** timestamp when iso period is over */
  ISOTimestamp: string;
  /** sponsorships must use this denom */
  acceptedSponsorshipDenom: string;
  /** array of sponsorship in this dividend period */
  sponsorships: Sponsorship[];
  /** sponsorship coins will be accumulated in revenue */
  revenue:
    | Coin
    | undefined;
  /** interval to distribute dividend to users */
  dividendInterval: string;
  /** last dividend timestamp */
  lastDividendTimestamp: string;
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
  return { id: "", name: "", symbol: "", description: "", uri: "", uriHash: "", data: undefined };
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
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
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

          message.uriHash = reader.string();
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
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
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
    if (message.uriHash !== "") {
      obj.uriHash = message.uriHash;
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
    message.uriHash = object.uriHash ?? "";
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseNFT(): NFT {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    supply: "",
    availableShares: "",
    initialPrice: "",
    ISOTimestamp: "0",
    acceptedSponsorshipDenom: "",
    sponsorships: [],
    revenue: undefined,
    dividendInterval: "0",
    lastDividendTimestamp: "0",
    owner: "",
    active: false,
    data: undefined,
  };
}

export const NFT = {
  $type: "flux.fnft.v1beta1.NFT" as const,

  encode(message: NFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.supply !== "") {
      writer.uint32(42).string(message.supply);
    }
    if (message.availableShares !== "") {
      writer.uint32(50).string(message.availableShares);
    }
    if (message.initialPrice !== "") {
      writer.uint32(58).string(message.initialPrice);
    }
    if (message.ISOTimestamp !== "0") {
      writer.uint32(64).uint64(message.ISOTimestamp);
    }
    if (message.acceptedSponsorshipDenom !== "") {
      writer.uint32(74).string(message.acceptedSponsorshipDenom);
    }
    for (const v of message.sponsorships) {
      Sponsorship.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.revenue !== undefined) {
      Coin.encode(message.revenue, writer.uint32(90).fork()).ldelim();
    }
    if (message.dividendInterval !== "0") {
      writer.uint32(96).uint64(message.dividendInterval);
    }
    if (message.lastDividendTimestamp !== "0") {
      writer.uint32(104).uint64(message.lastDividendTimestamp);
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

          message.classId = reader.string();
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

          message.uriHash = reader.string();
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

          message.availableShares = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.initialPrice = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ISOTimestamp = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.acceptedSponsorshipDenom = reader.string();
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

          message.dividendInterval = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.lastDividendTimestamp = longToString(reader.uint64() as Long);
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      availableShares: isSet(object.availableShares) ? String(object.availableShares) : "",
      initialPrice: isSet(object.initialPrice) ? String(object.initialPrice) : "",
      ISOTimestamp: isSet(object.ISOTimestamp) ? String(object.ISOTimestamp) : "0",
      acceptedSponsorshipDenom: isSet(object.acceptedSponsorshipDenom) ? String(object.acceptedSponsorshipDenom) : "",
      sponsorships: Array.isArray(object?.sponsorships)
        ? object.sponsorships.map((e: any) => Sponsorship.fromJSON(e))
        : [],
      revenue: isSet(object.revenue) ? Coin.fromJSON(object.revenue) : undefined,
      dividendInterval: isSet(object.dividendInterval) ? String(object.dividendInterval) : "0",
      lastDividendTimestamp: isSet(object.lastDividendTimestamp) ? String(object.lastDividendTimestamp) : "0",
      owner: isSet(object.owner) ? String(object.owner) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.uriHash !== "") {
      obj.uriHash = message.uriHash;
    }
    if (message.supply !== "") {
      obj.supply = message.supply;
    }
    if (message.availableShares !== "") {
      obj.availableShares = message.availableShares;
    }
    if (message.initialPrice !== "") {
      obj.initialPrice = message.initialPrice;
    }
    if (message.ISOTimestamp !== "0") {
      obj.ISOTimestamp = message.ISOTimestamp;
    }
    if (message.acceptedSponsorshipDenom !== "") {
      obj.acceptedSponsorshipDenom = message.acceptedSponsorshipDenom;
    }
    if (message.sponsorships?.length) {
      obj.sponsorships = message.sponsorships.map((e) => Sponsorship.toJSON(e));
    }
    if (message.revenue !== undefined) {
      obj.revenue = Coin.toJSON(message.revenue);
    }
    if (message.dividendInterval !== "0") {
      obj.dividendInterval = message.dividendInterval;
    }
    if (message.lastDividendTimestamp !== "0") {
      obj.lastDividendTimestamp = message.lastDividendTimestamp;
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
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.supply = object.supply ?? "";
    message.availableShares = object.availableShares ?? "";
    message.initialPrice = object.initialPrice ?? "";
    message.ISOTimestamp = object.ISOTimestamp ?? "0";
    message.acceptedSponsorshipDenom = object.acceptedSponsorshipDenom ?? "";
    message.sponsorships = object.sponsorships?.map((e) => Sponsorship.fromPartial(e)) || [];
    message.revenue = (object.revenue !== undefined && object.revenue !== null)
      ? Coin.fromPartial(object.revenue)
      : undefined;
    message.dividendInterval = object.dividendInterval ?? "0";
    message.lastDividendTimestamp = object.lastDividendTimestamp ?? "0";
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
