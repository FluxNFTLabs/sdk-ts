/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export enum Plane {
  COSMOS = 0,
  WASM = 1,
  EVM = 2,
  SVM = 3,
  UNRECOGNIZED = -1,
}

export function planeFromJSON(object: any): Plane {
  switch (object) {
    case 0:
    case "COSMOS":
      return Plane.COSMOS;
    case 1:
    case "WASM":
      return Plane.WASM;
    case 2:
    case "EVM":
      return Plane.EVM;
    case 3:
    case "SVM":
      return Plane.SVM;
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
    case Plane.WASM:
      return "WASM";
    case Plane.EVM:
      return "EVM";
    case Plane.SVM:
      return "SVM";
    case Plane.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TxAction {
  VM_INVOKE = 0,
  COSMOS_BANK_SEND = 1,
  UNRECOGNIZED = -1,
}

export function txActionFromJSON(object: any): TxAction {
  switch (object) {
    case 0:
    case "VM_INVOKE":
      return TxAction.VM_INVOKE;
    case 1:
    case "COSMOS_BANK_SEND":
      return TxAction.COSMOS_BANK_SEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TxAction.UNRECOGNIZED;
  }
}

export function txActionToJSON(object: TxAction): string {
  switch (object) {
    case TxAction.VM_INVOKE:
      return "VM_INVOKE";
    case TxAction.COSMOS_BANK_SEND:
      return "COSMOS_BANK_SEND";
    case TxAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MsgChargeVmAccount {
  sender: string;
  plane: Plane;
  amount: Coin | undefined;
}

export interface MsgChargeVmAccountResponse {
}

export interface MsgDrainVmAccount {
  sender: string;
  plane: Plane;
}

export interface MsgDrainVmAccountResponse {
}

export interface MsgAstroTransfer {
  sender: string;
  receiver: string;
  src_plane: Plane;
  dst_plane: Plane;
  coin: Coin | undefined;
}

export interface MsgAstroTransferResponse {
  destination_denom: Uint8Array;
  source_denom: Uint8Array;
}

export interface FISInstruction {
  plane: Plane;
  action: TxAction;
  address: Uint8Array;
  msg: Uint8Array;
}

export interface FISInstructionResponse {
  plane: Plane;
  output: Uint8Array;
}

export interface MsgFISTransaction {
  sender: string;
  instructions: FISInstruction[];
}

export interface MsgFISTransactionResponse {
  instruction_responses: FISInstructionResponse[];
}

function createBaseMsgChargeVmAccount(): MsgChargeVmAccount {
  return { sender: "", plane: 0, amount: undefined };
}

export const MsgChargeVmAccount = {
  $type: "flux.astromesh.v1beta1.MsgChargeVmAccount" as const,

  encode(message: MsgChargeVmAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.plane !== 0) {
      writer.uint32(16).int32(message.plane);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChargeVmAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChargeVmAccount();
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

          message.plane = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgChargeVmAccount {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgChargeVmAccount): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    if (message.amount !== undefined) {
      obj.amount = Coin.toJSON(message.amount);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgChargeVmAccount>): MsgChargeVmAccount {
    return MsgChargeVmAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgChargeVmAccount>): MsgChargeVmAccount {
    const message = createBaseMsgChargeVmAccount();
    message.sender = object.sender ?? "";
    message.plane = object.plane ?? 0;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgChargeVmAccountResponse(): MsgChargeVmAccountResponse {
  return {};
}

export const MsgChargeVmAccountResponse = {
  $type: "flux.astromesh.v1beta1.MsgChargeVmAccountResponse" as const,

  encode(_: MsgChargeVmAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChargeVmAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChargeVmAccountResponse();
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

  fromJSON(_: any): MsgChargeVmAccountResponse {
    return {};
  },

  toJSON(_: MsgChargeVmAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgChargeVmAccountResponse>): MsgChargeVmAccountResponse {
    return MsgChargeVmAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgChargeVmAccountResponse>): MsgChargeVmAccountResponse {
    const message = createBaseMsgChargeVmAccountResponse();
    return message;
  },
};

function createBaseMsgDrainVmAccount(): MsgDrainVmAccount {
  return { sender: "", plane: 0 };
}

export const MsgDrainVmAccount = {
  $type: "flux.astromesh.v1beta1.MsgDrainVmAccount" as const,

  encode(message: MsgDrainVmAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.plane !== 0) {
      writer.uint32(16).int32(message.plane);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrainVmAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrainVmAccount();
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

          message.plane = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDrainVmAccount {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
    };
  },

  toJSON(message: MsgDrainVmAccount): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgDrainVmAccount>): MsgDrainVmAccount {
    return MsgDrainVmAccount.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgDrainVmAccount>): MsgDrainVmAccount {
    const message = createBaseMsgDrainVmAccount();
    message.sender = object.sender ?? "";
    message.plane = object.plane ?? 0;
    return message;
  },
};

function createBaseMsgDrainVmAccountResponse(): MsgDrainVmAccountResponse {
  return {};
}

export const MsgDrainVmAccountResponse = {
  $type: "flux.astromesh.v1beta1.MsgDrainVmAccountResponse" as const,

  encode(_: MsgDrainVmAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrainVmAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrainVmAccountResponse();
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

  fromJSON(_: any): MsgDrainVmAccountResponse {
    return {};
  },

  toJSON(_: MsgDrainVmAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDrainVmAccountResponse>): MsgDrainVmAccountResponse {
    return MsgDrainVmAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgDrainVmAccountResponse>): MsgDrainVmAccountResponse {
    const message = createBaseMsgDrainVmAccountResponse();
    return message;
  },
};

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
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.receiver !== undefined) {
      obj.receiver = message.receiver;
    }
    if (message.src_plane !== undefined) {
      obj.src_plane = planeToJSON(message.src_plane);
    }
    if (message.dst_plane !== undefined) {
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
  return { destination_denom: new Uint8Array(0), source_denom: new Uint8Array(0) };
}

export const MsgAstroTransferResponse = {
  $type: "flux.astromesh.v1beta1.MsgAstroTransferResponse" as const,

  encode(message: MsgAstroTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destination_denom.length !== 0) {
      writer.uint32(10).bytes(message.destination_denom);
    }
    if (message.source_denom.length !== 0) {
      writer.uint32(18).bytes(message.source_denom);
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

          message.destination_denom = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source_denom = reader.bytes();
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
      destination_denom: isSet(object.destination_denom)
        ? bytesFromBase64(object.destination_denom)
        : new Uint8Array(0),
      source_denom: isSet(object.source_denom) ? bytesFromBase64(object.source_denom) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgAstroTransferResponse): unknown {
    const obj: any = {};
    if (message.destination_denom !== undefined) {
      obj.destination_denom = base64FromBytes(message.destination_denom);
    }
    if (message.source_denom !== undefined) {
      obj.source_denom = base64FromBytes(message.source_denom);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAstroTransferResponse>): MsgAstroTransferResponse {
    return MsgAstroTransferResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgAstroTransferResponse>): MsgAstroTransferResponse {
    const message = createBaseMsgAstroTransferResponse();
    message.destination_denom = object.destination_denom ?? new Uint8Array(0);
    message.source_denom = object.source_denom ?? new Uint8Array(0);
    return message;
  },
};

function createBaseFISInstruction(): FISInstruction {
  return { plane: 0, action: 0, address: new Uint8Array(0), msg: new Uint8Array(0) };
}

export const FISInstruction = {
  $type: "flux.astromesh.v1beta1.FISInstruction" as const,

  encode(message: FISInstruction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plane !== 0) {
      writer.uint32(8).int32(message.plane);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.address.length !== 0) {
      writer.uint32(26).bytes(message.address);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FISInstruction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFISInstruction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.plane = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.msg = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FISInstruction {
    return {
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
      action: isSet(object.action) ? txActionFromJSON(object.action) : 0,
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
    };
  },

  toJSON(message: FISInstruction): unknown {
    const obj: any = {};
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    if (message.action !== undefined) {
      obj.action = txActionToJSON(message.action);
    }
    if (message.address !== undefined) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.msg !== undefined) {
      obj.msg = base64FromBytes(message.msg);
    }
    return obj;
  },

  create(base?: DeepPartial<FISInstruction>): FISInstruction {
    return FISInstruction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FISInstruction>): FISInstruction {
    const message = createBaseFISInstruction();
    message.plane = object.plane ?? 0;
    message.action = object.action ?? 0;
    message.address = object.address ?? new Uint8Array(0);
    message.msg = object.msg ?? new Uint8Array(0);
    return message;
  },
};

function createBaseFISInstructionResponse(): FISInstructionResponse {
  return { plane: 0, output: new Uint8Array(0) };
}

export const FISInstructionResponse = {
  $type: "flux.astromesh.v1beta1.FISInstructionResponse" as const,

  encode(message: FISInstructionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plane !== 0) {
      writer.uint32(8).int32(message.plane);
    }
    if (message.output.length !== 0) {
      writer.uint32(18).bytes(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FISInstructionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFISInstructionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.plane = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.output = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FISInstructionResponse {
    return {
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
      output: isSet(object.output) ? bytesFromBase64(object.output) : new Uint8Array(0),
    };
  },

  toJSON(message: FISInstructionResponse): unknown {
    const obj: any = {};
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    if (message.output !== undefined) {
      obj.output = base64FromBytes(message.output);
    }
    return obj;
  },

  create(base?: DeepPartial<FISInstructionResponse>): FISInstructionResponse {
    return FISInstructionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FISInstructionResponse>): FISInstructionResponse {
    const message = createBaseFISInstructionResponse();
    message.plane = object.plane ?? 0;
    message.output = object.output ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgFISTransaction(): MsgFISTransaction {
  return { sender: "", instructions: [] };
}

export const MsgFISTransaction = {
  $type: "flux.astromesh.v1beta1.MsgFISTransaction" as const,

  encode(message: MsgFISTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.instructions) {
      FISInstruction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFISTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFISTransaction();
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

          message.instructions.push(FISInstruction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFISTransaction {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      instructions: globalThis.Array.isArray(object?.instructions)
        ? object.instructions.map((e: any) => FISInstruction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgFISTransaction): unknown {
    const obj: any = {};
    if (message.sender !== undefined) {
      obj.sender = message.sender;
    }
    if (message.instructions?.length) {
      obj.instructions = message.instructions.map((e) => FISInstruction.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgFISTransaction>): MsgFISTransaction {
    return MsgFISTransaction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgFISTransaction>): MsgFISTransaction {
    const message = createBaseMsgFISTransaction();
    message.sender = object.sender ?? "";
    message.instructions = object.instructions?.map((e) => FISInstruction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgFISTransactionResponse(): MsgFISTransactionResponse {
  return { instruction_responses: [] };
}

export const MsgFISTransactionResponse = {
  $type: "flux.astromesh.v1beta1.MsgFISTransactionResponse" as const,

  encode(message: MsgFISTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruction_responses) {
      FISInstructionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFISTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFISTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruction_responses.push(FISInstructionResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFISTransactionResponse {
    return {
      instruction_responses: globalThis.Array.isArray(object?.instruction_responses)
        ? object.instruction_responses.map((e: any) => FISInstructionResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgFISTransactionResponse): unknown {
    const obj: any = {};
    if (message.instruction_responses?.length) {
      obj.instruction_responses = message.instruction_responses.map((e) => FISInstructionResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgFISTransactionResponse>): MsgFISTransactionResponse {
    return MsgFISTransactionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgFISTransactionResponse>): MsgFISTransactionResponse {
    const message = createBaseMsgFISTransactionResponse();
    message.instruction_responses = object.instruction_responses?.map((e) => FISInstructionResponse.fromPartial(e)) ||
      [];
    return message;
  },
};

export interface Msg {
  ChargeVmAccount(
    request: DeepPartial<MsgChargeVmAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChargeVmAccountResponse>;
  DrainVmAccount(request: DeepPartial<MsgDrainVmAccount>, metadata?: grpc.Metadata): Promise<MsgDrainVmAccountResponse>;
  AstroTransfer(request: DeepPartial<MsgAstroTransfer>, metadata?: grpc.Metadata): Promise<MsgAstroTransferResponse>;
  FISTransaction(request: DeepPartial<MsgFISTransaction>, metadata?: grpc.Metadata): Promise<MsgFISTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ChargeVmAccount = this.ChargeVmAccount.bind(this);
    this.DrainVmAccount = this.DrainVmAccount.bind(this);
    this.AstroTransfer = this.AstroTransfer.bind(this);
    this.FISTransaction = this.FISTransaction.bind(this);
  }

  ChargeVmAccount(
    request: DeepPartial<MsgChargeVmAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgChargeVmAccountResponse> {
    return this.rpc.unary(MsgChargeVmAccountDesc, MsgChargeVmAccount.fromPartial(request), metadata);
  }

  DrainVmAccount(
    request: DeepPartial<MsgDrainVmAccount>,
    metadata?: grpc.Metadata,
  ): Promise<MsgDrainVmAccountResponse> {
    return this.rpc.unary(MsgDrainVmAccountDesc, MsgDrainVmAccount.fromPartial(request), metadata);
  }

  AstroTransfer(request: DeepPartial<MsgAstroTransfer>, metadata?: grpc.Metadata): Promise<MsgAstroTransferResponse> {
    return this.rpc.unary(MsgAstroTransferDesc, MsgAstroTransfer.fromPartial(request), metadata);
  }

  FISTransaction(
    request: DeepPartial<MsgFISTransaction>,
    metadata?: grpc.Metadata,
  ): Promise<MsgFISTransactionResponse> {
    return this.rpc.unary(MsgFISTransactionDesc, MsgFISTransaction.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "flux.astromesh.v1beta1.Msg" };

export const MsgChargeVmAccountDesc: UnaryMethodDefinitionish = {
  methodName: "ChargeVmAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgChargeVmAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgChargeVmAccountResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgDrainVmAccountDesc: UnaryMethodDefinitionish = {
  methodName: "DrainVmAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDrainVmAccount.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgDrainVmAccountResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

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

export const MsgFISTransactionDesc: UnaryMethodDefinitionish = {
  methodName: "FISTransaction",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgFISTransaction.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgFISTransactionResponse.decode(data);
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
