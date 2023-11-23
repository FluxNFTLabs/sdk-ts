/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Message {
  snapshots_request?: SnapshotsRequest | undefined;
  snapshots_response?: SnapshotsResponse | undefined;
  chunk_request?: ChunkRequest | undefined;
  chunk_response?: ChunkResponse | undefined;
}

export interface SnapshotsRequest {
}

export interface SnapshotsResponse {
  height: string;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}

export interface ChunkRequest {
  height: string;
  format: number;
  index: number;
}

export interface ChunkResponse {
  height: string;
  format: number;
  index: number;
  chunk: Uint8Array;
  missing: boolean;
}

function createBaseMessage(): Message {
  return {
    snapshots_request: undefined,
    snapshots_response: undefined,
    chunk_request: undefined,
    chunk_response: undefined,
  };
}

export const Message = {
  $type: "tendermint.statesync.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshots_request !== undefined) {
      SnapshotsRequest.encode(message.snapshots_request, writer.uint32(10).fork()).ldelim();
    }
    if (message.snapshots_response !== undefined) {
      SnapshotsResponse.encode(message.snapshots_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.chunk_request !== undefined) {
      ChunkRequest.encode(message.chunk_request, writer.uint32(26).fork()).ldelim();
    }
    if (message.chunk_response !== undefined) {
      ChunkResponse.encode(message.chunk_response, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshots_request = SnapshotsRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapshots_response = SnapshotsResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chunk_request = ChunkRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chunk_response = ChunkResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      snapshots_request: isSet(object.snapshots_request)
        ? SnapshotsRequest.fromJSON(object.snapshots_request)
        : undefined,
      snapshots_response: isSet(object.snapshots_response)
        ? SnapshotsResponse.fromJSON(object.snapshots_response)
        : undefined,
      chunk_request: isSet(object.chunk_request) ? ChunkRequest.fromJSON(object.chunk_request) : undefined,
      chunk_response: isSet(object.chunk_response) ? ChunkResponse.fromJSON(object.chunk_response) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.snapshots_request !== undefined) {
      obj.snapshots_request = SnapshotsRequest.toJSON(message.snapshots_request);
    }
    if (message.snapshots_response !== undefined) {
      obj.snapshots_response = SnapshotsResponse.toJSON(message.snapshots_response);
    }
    if (message.chunk_request !== undefined) {
      obj.chunk_request = ChunkRequest.toJSON(message.chunk_request);
    }
    if (message.chunk_response !== undefined) {
      obj.chunk_response = ChunkResponse.toJSON(message.chunk_response);
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.snapshots_request = (object.snapshots_request !== undefined && object.snapshots_request !== null)
      ? SnapshotsRequest.fromPartial(object.snapshots_request)
      : undefined;
    message.snapshots_response = (object.snapshots_response !== undefined && object.snapshots_response !== null)
      ? SnapshotsResponse.fromPartial(object.snapshots_response)
      : undefined;
    message.chunk_request = (object.chunk_request !== undefined && object.chunk_request !== null)
      ? ChunkRequest.fromPartial(object.chunk_request)
      : undefined;
    message.chunk_response = (object.chunk_response !== undefined && object.chunk_response !== null)
      ? ChunkResponse.fromPartial(object.chunk_response)
      : undefined;
    return message;
  },
};

function createBaseSnapshotsRequest(): SnapshotsRequest {
  return {};
}

export const SnapshotsRequest = {
  $type: "tendermint.statesync.SnapshotsRequest" as const,

  encode(_: SnapshotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotsRequest();
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

  fromJSON(_: any): SnapshotsRequest {
    return {};
  },

  toJSON(_: SnapshotsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<SnapshotsRequest>): SnapshotsRequest {
    return SnapshotsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<SnapshotsRequest>): SnapshotsRequest {
    const message = createBaseSnapshotsRequest();
    return message;
  },
};

function createBaseSnapshotsResponse(): SnapshotsResponse {
  return { height: "0", format: 0, chunks: 0, hash: new Uint8Array(0), metadata: new Uint8Array(0) };
}

export const SnapshotsResponse = {
  $type: "tendermint.statesync.SnapshotsResponse" as const,

  encode(message: SnapshotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chunks = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.metadata = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SnapshotsResponse {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      format: isSet(object.format) ? globalThis.Number(object.format) : 0,
      chunks: isSet(object.chunks) ? globalThis.Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(0),
    };
  },

  toJSON(message: SnapshotsResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.format !== 0) {
      obj.format = Math.round(message.format);
    }
    if (message.chunks !== 0) {
      obj.chunks = Math.round(message.chunks);
    }
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      obj.metadata = base64FromBytes(message.metadata);
    }
    return obj;
  },

  create(base?: DeepPartial<SnapshotsResponse>): SnapshotsResponse {
    return SnapshotsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SnapshotsResponse>): SnapshotsResponse {
    const message = createBaseSnapshotsResponse();
    message.height = object.height ?? "0";
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array(0);
    message.metadata = object.metadata ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChunkRequest(): ChunkRequest {
  return { height: "0", format: 0, index: 0 };
}

export const ChunkRequest = {
  $type: "tendermint.statesync.ChunkRequest" as const,

  encode(message: ChunkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChunkRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      format: isSet(object.format) ? globalThis.Number(object.format) : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: ChunkRequest): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.format !== 0) {
      obj.format = Math.round(message.format);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create(base?: DeepPartial<ChunkRequest>): ChunkRequest {
    return ChunkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChunkRequest>): ChunkRequest {
    const message = createBaseChunkRequest();
    message.height = object.height ?? "0";
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseChunkResponse(): ChunkResponse {
  return { height: "0", format: 0, index: 0, chunk: new Uint8Array(0), missing: false };
}

export const ChunkResponse = {
  $type: "tendermint.statesync.ChunkResponse" as const,

  encode(message: ChunkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(34).bytes(message.chunk);
    }
    if (message.missing === true) {
      writer.uint32(40).bool(message.missing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChunkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.format = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chunk = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.missing = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChunkResponse {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      format: isSet(object.format) ? globalThis.Number(object.format) : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0),
      missing: isSet(object.missing) ? globalThis.Boolean(object.missing) : false,
    };
  },

  toJSON(message: ChunkResponse): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.format !== 0) {
      obj.format = Math.round(message.format);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.chunk.length !== 0) {
      obj.chunk = base64FromBytes(message.chunk);
    }
    if (message.missing === true) {
      obj.missing = message.missing;
    }
    return obj;
  },

  create(base?: DeepPartial<ChunkResponse>): ChunkResponse {
    return ChunkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChunkResponse>): ChunkResponse {
    const message = createBaseChunkResponse();
    message.height = object.height ?? "0";
    message.format = object.format ?? 0;
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array(0);
    message.missing = object.missing ?? false;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
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
  if (globalThis.Buffer) {
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
