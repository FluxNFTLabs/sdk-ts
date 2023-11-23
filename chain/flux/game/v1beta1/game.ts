/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface Game {
  class_id: string;
  id: string;
  game_id: string;
  referee: string;
  players: Player[];
  closed: boolean;
}

export interface Player {
  address: string;
  credit: string;
}

function createBaseGame(): Game {
  return { class_id: "", id: "", game_id: "", referee: "", players: [], closed: false };
}

export const Game = {
  $type: "flux.game.v1beta1.Game" as const,

  encode(message: Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class_id !== "") {
      writer.uint32(10).string(message.class_id);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.game_id !== "") {
      writer.uint32(26).string(message.game_id);
    }
    if (message.referee !== "") {
      writer.uint32(34).string(message.referee);
    }
    for (const v of message.players) {
      Player.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.closed === true) {
      writer.uint32(48).bool(message.closed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGame();
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

          message.game_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.referee = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.players.push(Player.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.closed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Game {
    return {
      class_id: isSet(object.class_id) ? globalThis.String(object.class_id) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      game_id: isSet(object.game_id) ? globalThis.String(object.game_id) : "",
      referee: isSet(object.referee) ? globalThis.String(object.referee) : "",
      players: globalThis.Array.isArray(object?.players) ? object.players.map((e: any) => Player.fromJSON(e)) : [],
      closed: isSet(object.closed) ? globalThis.Boolean(object.closed) : false,
    };
  },

  toJSON(message: Game): unknown {
    const obj: any = {};
    if (message.class_id !== "") {
      obj.class_id = message.class_id;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.game_id !== "") {
      obj.game_id = message.game_id;
    }
    if (message.referee !== "") {
      obj.referee = message.referee;
    }
    if (message.players?.length) {
      obj.players = message.players.map((e) => Player.toJSON(e));
    }
    if (message.closed === true) {
      obj.closed = message.closed;
    }
    return obj;
  },

  create(base?: DeepPartial<Game>): Game {
    return Game.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Game>): Game {
    const message = createBaseGame();
    message.class_id = object.class_id ?? "";
    message.id = object.id ?? "";
    message.game_id = object.game_id ?? "";
    message.referee = object.referee ?? "";
    message.players = object.players?.map((e) => Player.fromPartial(e)) || [];
    message.closed = object.closed ?? false;
    return message;
  },
};

function createBasePlayer(): Player {
  return { address: "", credit: "" };
}

export const Player = {
  $type: "flux.game.v1beta1.Player" as const,

  encode(message: Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.credit !== "") {
      writer.uint32(18).string(message.credit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayer();
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

          message.credit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Player {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      credit: isSet(object.credit) ? globalThis.String(object.credit) : "",
    };
  },

  toJSON(message: Player): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.credit !== "") {
      obj.credit = message.credit;
    }
    return obj;
  },

  create(base?: DeepPartial<Player>): Player {
    return Player.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Player>): Player {
    const message = createBasePlayer();
    message.address = object.address ?? "";
    message.credit = object.credit ?? "";
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
