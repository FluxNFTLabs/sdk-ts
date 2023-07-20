/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";

/** MsgCreate represents a message to create a nft from one account. */
export interface MsgCreate {
  /** sender is the address of the owner of nft */
  sender: string;
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** uri defines uri link for this nft */
  uri: string;
  /** shares defines the number of shares this nft holds */
  supply: string;
  /** initial_price defines initial price of a share */
  initialPrice: string;
  /** iso_timestamp defines when iso period is over */
  ISOTimestamp: string;
  /** accepted_sponsorship_denoms defines accepted denoms for sponsorship */
  acceptedSponsorshipDenom: string;
  /** dividend_interval defines period to distribute dividend to shareholders */
  dividendInterval: string;
}

/** MsgCreateResponse defines the Msg/Create response type. */
export interface MsgCreateResponse {
}

/** MsgPurchaseShares represents a message to purchase a nft's shares. */
export interface MsgPurchaseShares {
  /** sender is the address of sender */
  sender: string;
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the monotonic increasing id of the nft in nft class */
  id: string;
  /** amount defines the number of shares to purchase */
  shares: string;
}

/** MsgPurchaseSharesResponse defines the Msg/PurchaseShares response type. */
export interface MsgPurchaseSharesResponse {
}

/** MsgTransferShares represents a message to transfer nft shares from one account to another account. */
export interface MsgTransferShares {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** receiver is the receiver address of nft */
  receiver: string;
  /** shares is the share amount to transfer */
  shares: string;
}

/** MsgTransferSharesResponse defines the Msg/TransferShares response type. */
export interface MsgTransferSharesResponse {
}

/** MsgDepositShares represents a message to deposit nft shares from bank to fnft. */
export interface MsgDepositShares {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** shares is the share amount to transfer */
  shares: string;
}

/** MsgDepositSharesResponse defines the Msg/DepositShares response type. */
export interface MsgDepositSharesResponse {
}

/** MsgWithdrawShares represents a message to withdraw nft shares from fnft to bank. */
export interface MsgWithdrawShares {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** shares is the share amount to transfer */
  shares: string;
}

/** MsgWithdrawSharesResponse defines the Msg/WithdrawShares response type. */
export interface MsgWithdrawSharesResponse {
}

/** MsgSponsor represents a message to sponsor an nft project */
export interface MsgSponsor {
  /** sender is the address of sender */
  sender: string;
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
  /** coin defines the value of this sponsorship */
  coin: string;
  /** description defines nft sponsorship description */
  description: string;
  /** uri defines sponsorship content to display */
  uri: string;
}

/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponse {
}

function createBaseMsgCreate(): MsgCreate {
  return {
    sender: "",
    classId: "",
    uri: "",
    supply: "",
    initialPrice: "",
    ISOTimestamp: "0",
    acceptedSponsorshipDenom: "",
    dividendInterval: "0",
  };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.supply !== "") {
      writer.uint32(34).string(message.supply);
    }
    if (message.initialPrice !== "") {
      writer.uint32(42).string(message.initialPrice);
    }
    if (message.ISOTimestamp !== "0") {
      writer.uint32(48).uint64(message.ISOTimestamp);
    }
    if (message.acceptedSponsorshipDenom !== "") {
      writer.uint32(58).string(message.acceptedSponsorshipDenom);
    }
    if (message.dividendInterval !== "0") {
      writer.uint32(64).uint64(message.dividendInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
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

          message.classId = reader.string();
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

          message.supply = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialPrice = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ISOTimestamp = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.acceptedSponsorshipDenom = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.dividendInterval = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      supply: isSet(object.supply) ? String(object.supply) : "",
      initialPrice: isSet(object.initialPrice) ? String(object.initialPrice) : "",
      ISOTimestamp: isSet(object.ISOTimestamp) ? String(object.ISOTimestamp) : "0",
      acceptedSponsorshipDenom: isSet(object.acceptedSponsorshipDenom) ? String(object.acceptedSponsorshipDenom) : "",
      dividendInterval: isSet(object.dividendInterval) ? String(object.dividendInterval) : "0",
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.supply !== "") {
      obj.supply = message.supply;
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
    if (message.dividendInterval !== "0") {
      obj.dividendInterval = message.dividendInterval;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreate>): MsgCreate {
    return MsgCreate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.uri = object.uri ?? "";
    message.supply = object.supply ?? "";
    message.initialPrice = object.initialPrice ?? "";
    message.ISOTimestamp = object.ISOTimestamp ?? "0";
    message.acceptedSponsorshipDenom = object.acceptedSponsorshipDenom ?? "";
    message.dividendInterval = object.dividendInterval ?? "0";
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
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

  fromJSON(_: any): MsgCreateResponse {
    return {};
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    return MsgCreateResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
};

function createBaseMsgPurchaseShares(): MsgPurchaseShares {
  return { sender: "", classId: "", id: "", shares: "" };
}

export const MsgPurchaseShares = {
  encode(message: MsgPurchaseShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.shares !== "") {
      writer.uint32(34).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPurchaseShares {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseShares();
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

          message.classId = reader.string();
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

  fromJSON(object: any): MsgPurchaseShares {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: MsgPurchaseShares): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPurchaseShares>): MsgPurchaseShares {
    return MsgPurchaseShares.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgPurchaseShares>): MsgPurchaseShares {
    const message = createBaseMsgPurchaseShares();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseMsgPurchaseSharesResponse(): MsgPurchaseSharesResponse {
  return {};
}

export const MsgPurchaseSharesResponse = {
  encode(_: MsgPurchaseSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPurchaseSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPurchaseSharesResponse();
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

  fromJSON(_: any): MsgPurchaseSharesResponse {
    return {};
  },

  toJSON(_: MsgPurchaseSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPurchaseSharesResponse>): MsgPurchaseSharesResponse {
    return MsgPurchaseSharesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgPurchaseSharesResponse>): MsgPurchaseSharesResponse {
    const message = createBaseMsgPurchaseSharesResponse();
    return message;
  },
};

function createBaseMsgTransferShares(): MsgTransferShares {
  return { classId: "", id: "", sender: "", receiver: "", shares: "" };
}

export const MsgTransferShares = {
  encode(message: MsgTransferShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.shares !== "") {
      writer.uint32(42).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferShares {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferShares();
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

          message.sender = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgTransferShares {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: MsgTransferShares): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgTransferShares>): MsgTransferShares {
    return MsgTransferShares.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgTransferShares>): MsgTransferShares {
    const message = createBaseMsgTransferShares();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseMsgTransferSharesResponse(): MsgTransferSharesResponse {
  return {};
}

export const MsgTransferSharesResponse = {
  encode(_: MsgTransferSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferSharesResponse();
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

  fromJSON(_: any): MsgTransferSharesResponse {
    return {};
  },

  toJSON(_: MsgTransferSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgTransferSharesResponse>): MsgTransferSharesResponse {
    return MsgTransferSharesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgTransferSharesResponse>): MsgTransferSharesResponse {
    const message = createBaseMsgTransferSharesResponse();
    return message;
  },
};

function createBaseMsgDepositShares(): MsgDepositShares {
  return { classId: "", id: "", sender: "", shares: "" };
}

export const MsgDepositShares = {
  encode(message: MsgDepositShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.shares !== "") {
      writer.uint32(42).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositShares {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositShares();
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

          message.sender = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgDepositShares {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: MsgDepositShares): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgDepositShares>): MsgDepositShares {
    return MsgDepositShares.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDepositShares>): MsgDepositShares {
    const message = createBaseMsgDepositShares();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseMsgDepositSharesResponse(): MsgDepositSharesResponse {
  return {};
}

export const MsgDepositSharesResponse = {
  encode(_: MsgDepositSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositSharesResponse();
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

  fromJSON(_: any): MsgDepositSharesResponse {
    return {};
  },

  toJSON(_: MsgDepositSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDepositSharesResponse>): MsgDepositSharesResponse {
    return MsgDepositSharesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDepositSharesResponse>): MsgDepositSharesResponse {
    const message = createBaseMsgDepositSharesResponse();
    return message;
  },
};

function createBaseMsgWithdrawShares(): MsgWithdrawShares {
  return { classId: "", id: "", sender: "", shares: "" };
}

export const MsgWithdrawShares = {
  encode(message: MsgWithdrawShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.shares !== "") {
      writer.uint32(42).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShares {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawShares();
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

          message.sender = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgWithdrawShares {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      shares: isSet(object.shares) ? String(object.shares) : "",
    };
  },

  toJSON(message: MsgWithdrawShares): unknown {
    const obj: any = {};
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.shares !== "") {
      obj.shares = message.shares;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawShares>): MsgWithdrawShares {
    return MsgWithdrawShares.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawShares>): MsgWithdrawShares {
    const message = createBaseMsgWithdrawShares();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

function createBaseMsgWithdrawSharesResponse(): MsgWithdrawSharesResponse {
  return {};
}

export const MsgWithdrawSharesResponse = {
  encode(_: MsgWithdrawSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawSharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawSharesResponse();
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

  fromJSON(_: any): MsgWithdrawSharesResponse {
    return {};
  },

  toJSON(_: MsgWithdrawSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawSharesResponse>): MsgWithdrawSharesResponse {
    return MsgWithdrawSharesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgWithdrawSharesResponse>): MsgWithdrawSharesResponse {
    const message = createBaseMsgWithdrawSharesResponse();
    return message;
  },
};

function createBaseMsgSponsor(): MsgSponsor {
  return { sender: "", classId: "", id: "", coin: "", description: "", uri: "" };
}

export const MsgSponsor = {
  encode(message: MsgSponsor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.coin !== "") {
      writer.uint32(34).string(message.coin);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSponsor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSponsor();
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

          message.classId = reader.string();
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

          message.coin = reader.string();
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

  fromJSON(object: any): MsgSponsor {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: MsgSponsor): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.classId !== "") {
      obj.classId = message.classId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.coin !== "") {
      obj.coin = message.coin;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSponsor>): MsgSponsor {
    return MsgSponsor.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSponsor>): MsgSponsor {
    const message = createBaseMsgSponsor();
    message.sender = object.sender ?? "";
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.coin = object.coin ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseMsgSponsorResponse(): MsgSponsorResponse {
  return {};
}

export const MsgSponsorResponse = {
  encode(_: MsgSponsorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSponsorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSponsorResponse();
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

  fromJSON(_: any): MsgSponsorResponse {
    return {};
  },

  toJSON(_: MsgSponsorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSponsorResponse>): MsgSponsorResponse {
    return MsgSponsorResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSponsorResponse>): MsgSponsorResponse {
    const message = createBaseMsgSponsorResponse();
    return message;
  },
};

/** Msg defines the nft Msg service. */
export interface Msg {
  /** Create defines a method to create a nft from one account. */
  Create(request: DeepPartial<MsgCreate>, metadata?: grpc.Metadata): Promise<MsgCreateResponse>;
  /** PurchaseShares defines a method to purchase shares from a nft. */
  PurchaseShares(request: DeepPartial<MsgPurchaseShares>, metadata?: grpc.Metadata): Promise<MsgPurchaseSharesResponse>;
  /** TransferShares defines a method to TransferShares a nft shares one account to another. */
  TransferShares(request: DeepPartial<MsgTransferShares>, metadata?: grpc.Metadata): Promise<MsgTransferSharesResponse>;
  /** TransferShares defines a method to TransferShares a nft shares one account to another. */
  DepositShares(request: DeepPartial<MsgDepositShares>, metadata?: grpc.Metadata): Promise<MsgDepositSharesResponse>;
  /** TransferShares defines a method to TransferShares a nft shares one account to another. */
  WithdrawShares(request: DeepPartial<MsgWithdrawShares>, metadata?: grpc.Metadata): Promise<MsgWithdrawSharesResponse>;
  /** Sponsor defines a method to sponsor a nft project */
  Sponsor(request: DeepPartial<MsgSponsor>, metadata?: grpc.Metadata): Promise<MsgSponsorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.PurchaseShares = this.PurchaseShares.bind(this);
    this.TransferShares = this.TransferShares.bind(this);
    this.DepositShares = this.DepositShares.bind(this);
    this.WithdrawShares = this.WithdrawShares.bind(this);
    this.Sponsor = this.Sponsor.bind(this);
  }

  Create(request: DeepPartial<MsgCreate>, metadata?: grpc.Metadata): Promise<MsgCreateResponse> {
    return this.rpc.unary(MsgCreateDesc, MsgCreate.fromPartial(request), metadata);
  }

  PurchaseShares(
    request: DeepPartial<MsgPurchaseShares>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPurchaseSharesResponse> {
    return this.rpc.unary(MsgPurchaseSharesDesc, MsgPurchaseShares.fromPartial(request), metadata);
  }

  TransferShares(
    request: DeepPartial<MsgTransferShares>,
    metadata?: grpc.Metadata,
  ): Promise<MsgTransferSharesResponse> {
    return this.rpc.unary(MsgTransferSharesDesc, MsgTransferShares.fromPartial(request), metadata);
  }

  DepositShares(request: DeepPartial<MsgDepositShares>, metadata?: grpc.Metadata): Promise<MsgDepositSharesResponse> {
    return this.rpc.unary(MsgDepositSharesDesc, MsgDepositShares.fromPartial(request), metadata);
  }

  WithdrawShares(
    request: DeepPartial<MsgWithdrawShares>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawSharesResponse> {
    return this.rpc.unary(MsgWithdrawSharesDesc, MsgWithdrawShares.fromPartial(request), metadata);
  }

  Sponsor(request: DeepPartial<MsgSponsor>, metadata?: grpc.Metadata): Promise<MsgSponsorResponse> {
    return this.rpc.unary(MsgSponsorDesc, MsgSponsor.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.fnft.v1beta1.Msg" };

export const MsgCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgPurchaseSharesDesc: UnaryMethodDefinitionish = {
  methodName: "PurchaseShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPurchaseShares.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgPurchaseSharesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTransferSharesDesc: UnaryMethodDefinitionish = {
  methodName: "TransferShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTransferShares.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTransferSharesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgDepositSharesDesc: UnaryMethodDefinitionish = {
  methodName: "DepositShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDepositShares.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgDepositSharesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgWithdrawSharesDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawShares",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawShares.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgWithdrawSharesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgSponsorDesc: UnaryMethodDefinitionish = {
  methodName: "Sponsor",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSponsor.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSponsorResponse.decode(data);
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
