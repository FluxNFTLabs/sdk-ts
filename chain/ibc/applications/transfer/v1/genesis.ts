/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";

/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  port_id: string;
  denom_traces: DenomTrace[];
  params:
    | Params
    | undefined;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  total_escrowed: Coin[];
}

function createBaseGenesisState(): GenesisState {
  return { port_id: "", denom_traces: [], params: undefined, total_escrowed: [] };
}

export const GenesisState = {
  $type: "ibc.applications.transfer.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    for (const v of message.denom_traces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.total_escrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
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

          message.port_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom_traces.push(DenomTrace.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.total_escrowed.push(Coin.decode(reader, reader.uint32()));
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
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      denom_traces: Array.isArray(object?.denom_traces)
        ? object.denom_traces.map((e: any) => DenomTrace.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      total_escrowed: Array.isArray(object?.total_escrowed)
        ? object.total_escrowed.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.port_id !== "") {
      obj.port_id = message.port_id;
    }
    if (message.denom_traces?.length) {
      obj.denom_traces = message.denom_traces.map((e) => DenomTrace.toJSON(e));
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.total_escrowed?.length) {
      obj.total_escrowed = message.total_escrowed.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.port_id = object.port_id ?? "";
    message.denom_traces = object.denom_traces?.map((e) => DenomTrace.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.total_escrowed = object.total_escrowed?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
