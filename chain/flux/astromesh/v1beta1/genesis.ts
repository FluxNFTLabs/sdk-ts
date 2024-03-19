/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Plane, planeFromJSON, planeToJSON } from "./tx";

export interface GenesisState {
  denom_links: DenomLink[];
}

export interface DenomLink {
  src_plane: Plane;
  dst_plane: Plane;
  src_addr: string;
  dst_addr: string;
}

function createBaseGenesisState(): GenesisState {
  return { denom_links: [] };
}

export const GenesisState = {
  $type: "flux.astromesh.v1beta1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denom_links) {
      DenomLink.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.denom_links.push(DenomLink.decode(reader, reader.uint32()));
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
      denom_links: globalThis.Array.isArray(object?.denom_links)
        ? object.denom_links.map((e: any) => DenomLink.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.denom_links?.length) {
      obj.denom_links = message.denom_links.map((e) => DenomLink.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.denom_links = object.denom_links?.map((e) => DenomLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDenomLink(): DenomLink {
  return { src_plane: 0, dst_plane: 0, src_addr: "", dst_addr: "" };
}

export const DenomLink = {
  $type: "flux.astromesh.v1beta1.DenomLink" as const,

  encode(message: DenomLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.src_plane !== 0) {
      writer.uint32(8).int32(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      writer.uint32(16).int32(message.dst_plane);
    }
    if (message.src_addr !== "") {
      writer.uint32(26).string(message.src_addr);
    }
    if (message.dst_addr !== "") {
      writer.uint32(34).string(message.dst_addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.src_plane = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.dst_plane = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.src_addr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dst_addr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomLink {
    return {
      src_plane: isSet(object.src_plane) ? planeFromJSON(object.src_plane) : 0,
      dst_plane: isSet(object.dst_plane) ? planeFromJSON(object.dst_plane) : 0,
      src_addr: isSet(object.src_addr) ? globalThis.String(object.src_addr) : "",
      dst_addr: isSet(object.dst_addr) ? globalThis.String(object.dst_addr) : "",
    };
  },

  toJSON(message: DenomLink): unknown {
    const obj: any = {};
    if (message.src_plane !== 0) {
      obj.src_plane = planeToJSON(message.src_plane);
    }
    if (message.dst_plane !== 0) {
      obj.dst_plane = planeToJSON(message.dst_plane);
    }
    if (message.src_addr !== "") {
      obj.src_addr = message.src_addr;
    }
    if (message.dst_addr !== "") {
      obj.dst_addr = message.dst_addr;
    }
    return obj;
  },

  create(base?: DeepPartial<DenomLink>): DenomLink {
    return DenomLink.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DenomLink>): DenomLink {
    const message = createBaseDenomLink();
    message.src_plane = object.src_plane ?? 0;
    message.dst_plane = object.dst_plane ?? 0;
    message.src_addr = object.src_addr ?? "";
    message.dst_addr = object.dst_addr ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
