/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Plane, planeFromJSON, planeToJSON } from "./tx";

export interface AccountBalance {
  acc: Uint8Array;
  balance: string;
}

export interface DenomBalanceUpdate {
  denom: string;
  balances: AccountBalance[];
}

export interface BalanceUpdate {
  upd: DenomBalanceUpdate[];
  plane: Plane;
}

function createBaseAccountBalance(): AccountBalance {
  return { acc: new Uint8Array(0), balance: "" };
}

export const AccountBalance = {
  $type: "flux.astromesh.v1beta1.AccountBalance" as const,

  encode(message: AccountBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acc.length !== 0) {
      writer.uint32(10).bytes(message.acc);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountBalance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acc = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountBalance {
    return {
      acc: isSet(object.acc) ? bytesFromBase64(object.acc) : new Uint8Array(0),
      balance: isSet(object.balance) ? globalThis.String(object.balance) : "",
    };
  },

  toJSON(message: AccountBalance): unknown {
    const obj: any = {};
    if (message.acc !== undefined) {
      obj.acc = base64FromBytes(message.acc);
    }
    if (message.balance !== undefined) {
      obj.balance = message.balance;
    }
    return obj;
  },

  create(base?: DeepPartial<AccountBalance>): AccountBalance {
    return AccountBalance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccountBalance>): AccountBalance {
    const message = createBaseAccountBalance();
    message.acc = object.acc ?? new Uint8Array(0);
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseDenomBalanceUpdate(): DenomBalanceUpdate {
  return { denom: "", balances: [] };
}

export const DenomBalanceUpdate = {
  $type: "flux.astromesh.v1beta1.DenomBalanceUpdate" as const,

  encode(message: DenomBalanceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.balances) {
      AccountBalance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomBalanceUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomBalanceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balances.push(AccountBalance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomBalanceUpdate {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      balances: globalThis.Array.isArray(object?.balances)
        ? object.balances.map((e: any) => AccountBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DenomBalanceUpdate): unknown {
    const obj: any = {};
    if (message.denom !== undefined) {
      obj.denom = message.denom;
    }
    if (message.balances?.length) {
      obj.balances = message.balances.map((e) => AccountBalance.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DenomBalanceUpdate>): DenomBalanceUpdate {
    return DenomBalanceUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DenomBalanceUpdate>): DenomBalanceUpdate {
    const message = createBaseDenomBalanceUpdate();
    message.denom = object.denom ?? "";
    message.balances = object.balances?.map((e) => AccountBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBalanceUpdate(): BalanceUpdate {
  return { upd: [], plane: 0 };
}

export const BalanceUpdate = {
  $type: "flux.astromesh.v1beta1.BalanceUpdate" as const,

  encode(message: BalanceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.upd) {
      DenomBalanceUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.plane !== 0) {
      writer.uint32(16).int32(message.plane);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.upd.push(DenomBalanceUpdate.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BalanceUpdate {
    return {
      upd: globalThis.Array.isArray(object?.upd) ? object.upd.map((e: any) => DenomBalanceUpdate.fromJSON(e)) : [],
      plane: isSet(object.plane) ? planeFromJSON(object.plane) : 0,
    };
  },

  toJSON(message: BalanceUpdate): unknown {
    const obj: any = {};
    if (message.upd?.length) {
      obj.upd = message.upd.map((e) => DenomBalanceUpdate.toJSON(e));
    }
    if (message.plane !== undefined) {
      obj.plane = planeToJSON(message.plane);
    }
    return obj;
  },

  create(base?: DeepPartial<BalanceUpdate>): BalanceUpdate {
    return BalanceUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BalanceUpdate>): BalanceUpdate {
    const message = createBaseBalanceUpdate();
    message.upd = object.upd?.map((e) => DenomBalanceUpdate.fromPartial(e)) || [];
    message.plane = object.plane ?? 0;
    return message;
  },
};

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
