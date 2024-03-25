/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** TableDescriptor describes an ORM table. */
export interface TableDescriptor {
  /** primary_key defines the primary key for the table. */
  primary_key:
    | PrimaryKeyDescriptor
    | undefined;
  /** index defines one or more secondary indexes. */
  index: SecondaryIndexDescriptor[];
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}

/** PrimaryKeyDescriptor describes a table primary key. */
export interface PrimaryKeyDescriptor {
  /**
   * fields is a comma-separated list of fields in the primary key. Spaces are
   * not allowed. Supported field types, their encodings, and any applicable constraints
   * are described below.
   *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers.
   *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers such as auto-incrementing sequences.
   *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
   *   sorted iteration. These types are well-suited for encoding fixed with
   *   decimals as integers.
   *   - string's are encoded as raw bytes in terminal key segments and null-terminated
   *   in non-terminal segments. Null characters are thus forbidden in strings.
   *   string fields support sorted iteration.
   *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
   *   with a 32-bit unsigned varint in non-terminal segments.
   *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
   *   an encoding that enables sorted iteration.
   *   - google.protobuf.Timestamp is encoded such that values with only seconds occupy 6 bytes,
   *   values including nanos occupy 9 bytes, and nil values occupy 1 byte. When iterating, nil
   *   values will always be ordered last. Seconds and nanos values must conform to the officially
   *   specified ranges of 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z and 0 to 999,999,999 respectively.
   *   - google.protobuf.Duration is encoded as 12 bytes using an encoding that enables sorted iteration.
   *   - enum fields are encoded using varint encoding and do not support sorted
   *   iteration.
   *   - bool fields are encoded as a single byte 0 or 1.
   *
   * All other fields types are unsupported in keys including repeated and
   * oneof fields.
   *
   * Primary keys are prefixed by the varint encoded table id and the byte 0x0
   * plus any additional prefix specified by the schema.
   */
  fields: string;
  /**
   * auto_increment specifies that the primary key is generated by an
   * auto-incrementing integer. If this is set to true fields must only
   * contain one field of that is of type uint64.
   */
  auto_increment: boolean;
}

/** PrimaryKeyDescriptor describes a table secondary index. */
export interface SecondaryIndexDescriptor {
  /**
   * fields is a comma-separated list of fields in the index. The supported
   * field types are the same as those for PrimaryKeyDescriptor.fields.
   * Index keys are prefixed by the varint encoded table id and the varint
   * encoded index id plus any additional prefix specified by the schema.
   *
   * In addition the field segments, non-unique index keys are suffixed with
   * any additional primary key fields not present in the index fields so that the
   * primary key can be reconstructed. Unique indexes instead of being suffixed
   * store the remaining primary key fields in the value..
   */
  fields: string;
  /**
   * id is a non-zero integer ID that must be unique within the indexes for this
   * table and less than 32768. It may be deprecated in the future when this can
   * be auto-generated.
   */
  id: number;
  /** unique specifies that this an unique index. */
  unique: boolean;
}

/** TableDescriptor describes an ORM singleton table which has at most one instance. */
export interface SingletonDescriptor {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   */
  id: number;
}

function createBaseTableDescriptor(): TableDescriptor {
  return { primary_key: undefined, index: [], id: 0 };
}

export const TableDescriptor = {
  $type: "cosmos.orm.v1.TableDescriptor" as const,

  encode(message: TableDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primary_key !== undefined) {
      PrimaryKeyDescriptor.encode(message.primary_key, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.index) {
      SecondaryIndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TableDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTableDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.primary_key = PrimaryKeyDescriptor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TableDescriptor {
    return {
      primary_key: isSet(object.primary_key) ? PrimaryKeyDescriptor.fromJSON(object.primary_key) : undefined,
      index: globalThis.Array.isArray(object?.index)
        ? object.index.map((e: any) => SecondaryIndexDescriptor.fromJSON(e))
        : [],
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
    };
  },

  toJSON(message: TableDescriptor): unknown {
    const obj: any = {};
    if (message.primary_key !== undefined) {
      obj.primary_key = PrimaryKeyDescriptor.toJSON(message.primary_key);
    }
    if (message.index?.length) {
      obj.index = message.index.map((e) => SecondaryIndexDescriptor.toJSON(e));
    }
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<TableDescriptor>): TableDescriptor {
    return TableDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TableDescriptor>): TableDescriptor {
    const message = createBaseTableDescriptor();
    message.primary_key = (object.primary_key !== undefined && object.primary_key !== null)
      ? PrimaryKeyDescriptor.fromPartial(object.primary_key)
      : undefined;
    message.index = object.index?.map((e) => SecondaryIndexDescriptor.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  },
};

function createBasePrimaryKeyDescriptor(): PrimaryKeyDescriptor {
  return { fields: "", auto_increment: false };
}

export const PrimaryKeyDescriptor = {
  $type: "cosmos.orm.v1.PrimaryKeyDescriptor" as const,

  encode(message: PrimaryKeyDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.auto_increment === true) {
      writer.uint32(16).bool(message.auto_increment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryKeyDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrimaryKeyDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fields = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.auto_increment = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrimaryKeyDescriptor {
    return {
      fields: isSet(object.fields) ? globalThis.String(object.fields) : "",
      auto_increment: isSet(object.auto_increment) ? globalThis.Boolean(object.auto_increment) : false,
    };
  },

  toJSON(message: PrimaryKeyDescriptor): unknown {
    const obj: any = {};
    if (message.fields !== undefined) {
      obj.fields = message.fields;
    }
    if (message.auto_increment !== undefined) {
      obj.auto_increment = message.auto_increment;
    }
    return obj;
  },

  create(base?: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    return PrimaryKeyDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PrimaryKeyDescriptor>): PrimaryKeyDescriptor {
    const message = createBasePrimaryKeyDescriptor();
    message.fields = object.fields ?? "";
    message.auto_increment = object.auto_increment ?? false;
    return message;
  },
};

function createBaseSecondaryIndexDescriptor(): SecondaryIndexDescriptor {
  return { fields: "", id: 0, unique: false };
}

export const SecondaryIndexDescriptor = {
  $type: "cosmos.orm.v1.SecondaryIndexDescriptor" as const,

  encode(message: SecondaryIndexDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fields !== "") {
      writer.uint32(10).string(message.fields);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondaryIndexDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondaryIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fields = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.unique = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecondaryIndexDescriptor {
    return {
      fields: isSet(object.fields) ? globalThis.String(object.fields) : "",
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
    };
  },

  toJSON(message: SecondaryIndexDescriptor): unknown {
    const obj: any = {};
    if (message.fields !== undefined) {
      obj.fields = message.fields;
    }
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    if (message.unique !== undefined) {
      obj.unique = message.unique;
    }
    return obj;
  },

  create(base?: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    return SecondaryIndexDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecondaryIndexDescriptor>): SecondaryIndexDescriptor {
    const message = createBaseSecondaryIndexDescriptor();
    message.fields = object.fields ?? "";
    message.id = object.id ?? 0;
    message.unique = object.unique ?? false;
    return message;
  },
};

function createBaseSingletonDescriptor(): SingletonDescriptor {
  return { id: 0 };
}

export const SingletonDescriptor = {
  $type: "cosmos.orm.v1.SingletonDescriptor" as const,

  encode(message: SingletonDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingletonDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingletonDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SingletonDescriptor {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: SingletonDescriptor): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    return SingletonDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SingletonDescriptor>): SingletonDescriptor {
    const message = createBaseSingletonDescriptor();
    message.id = object.id ?? 0;
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
