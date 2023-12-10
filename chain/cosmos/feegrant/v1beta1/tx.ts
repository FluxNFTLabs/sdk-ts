/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/** Since: cosmos-sdk 0.43 */

/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance: Any | undefined;
}

/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}

/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}

/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}

/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
  /** pruner is the address of the user pruning expired allowances. */
  pruner: string;
}

/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {
}

function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return { granter: "", grantee: "", allowance: undefined };
}

export const MsgGrantAllowance = {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowance" as const,

  encode(message: MsgGrantAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.granter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grantee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowance = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGrantAllowance {
    return {
      granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
      grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
    };
  },

  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    if (message.grantee !== "") {
      obj.grantee = message.grantee;
    }
    if (message.allowance !== undefined) {
      obj.allowance = Any.toJSON(message.allowance);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance {
    return MsgGrantAllowance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = (object.allowance !== undefined && object.allowance !== null)
      ? Any.fromPartial(object.allowance)
      : undefined;
    return message;
  },
};

function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}

export const MsgGrantAllowanceResponse = {
  $type: "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse" as const,

  encode(_: MsgGrantAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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

  fromJSON(_: any): MsgGrantAllowanceResponse {
    return {};
  },

  toJSON(_: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
};

function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return { granter: "", grantee: "" };
}

export const MsgRevokeAllowance = {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowance" as const,

  encode(message: MsgRevokeAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.granter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grantee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeAllowance {
    return {
      granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
      grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
    };
  },

  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    if (message.grantee !== "") {
      obj.grantee = message.grantee;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
};

function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}

export const MsgRevokeAllowanceResponse = {
  $type: "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse" as const,

  encode(_: MsgRevokeAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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

  fromJSON(_: any): MsgRevokeAllowanceResponse {
    return {};
  },

  toJSON(_: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
};

function createBaseMsgPruneAllowances(): MsgPruneAllowances {
  return { pruner: "" };
}

export const MsgPruneAllowances = {
  $type: "cosmos.feegrant.v1beta1.MsgPruneAllowances" as const,

  encode(message: MsgPruneAllowances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pruner !== "") {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAllowances {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pruner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPruneAllowances {
    return { pruner: isSet(object.pruner) ? globalThis.String(object.pruner) : "" };
  },

  toJSON(message: MsgPruneAllowances): unknown {
    const obj: any = {};
    if (message.pruner !== "") {
      obj.pruner = message.pruner;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgPruneAllowances>): MsgPruneAllowances {
    return MsgPruneAllowances.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgPruneAllowances>): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    message.pruner = object.pruner ?? "";
    return message;
  },
};

function createBaseMsgPruneAllowancesResponse(): MsgPruneAllowancesResponse {
  return {};
}

export const MsgPruneAllowancesResponse = {
  $type: "cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse" as const,

  encode(_: MsgPruneAllowancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowancesResponse();
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

  fromJSON(_: any): MsgPruneAllowancesResponse {
    return {};
  },

  toJSON(_: MsgPruneAllowancesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPruneAllowancesResponse>): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgPruneAllowancesResponse>): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
};

/** Msg defines the feegrant msg service. */
export interface Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  GrantAllowance(request: DeepPartial<MsgGrantAllowance>, metadata?: grpc.Metadata): Promise<MsgGrantAllowanceResponse>;
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  RevokeAllowance(
    request: DeepPartial<MsgRevokeAllowance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRevokeAllowanceResponse>;
  /**
   * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
   *
   * Since cosmos-sdk 0.50
   */
  PruneAllowances(
    request: DeepPartial<MsgPruneAllowances>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPruneAllowancesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GrantAllowance = this.GrantAllowance.bind(this);
    this.RevokeAllowance = this.RevokeAllowance.bind(this);
    this.PruneAllowances = this.PruneAllowances.bind(this);
  }

  GrantAllowance(
    request: DeepPartial<MsgGrantAllowance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgGrantAllowanceResponse> {
    return this.rpc.unary(MsgGrantAllowanceDesc, MsgGrantAllowance.fromPartial(request), metadata);
  }

  RevokeAllowance(
    request: DeepPartial<MsgRevokeAllowance>,
    metadata?: grpc.Metadata,
  ): Promise<MsgRevokeAllowanceResponse> {
    return this.rpc.unary(MsgRevokeAllowanceDesc, MsgRevokeAllowance.fromPartial(request), metadata);
  }

  PruneAllowances(
    request: DeepPartial<MsgPruneAllowances>,
    metadata?: grpc.Metadata,
  ): Promise<MsgPruneAllowancesResponse> {
    return this.rpc.unary(MsgPruneAllowancesDesc, MsgPruneAllowances.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "cosmos.feegrant.v1beta1.Msg" };

export const MsgGrantAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "GrantAllowance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgGrantAllowance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgGrantAllowanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgRevokeAllowanceDesc: UnaryMethodDefinitionish = {
  methodName: "RevokeAllowance",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRevokeAllowance.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgRevokeAllowanceResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgPruneAllowancesDesc: UnaryMethodDefinitionish = {
  methodName: "PruneAllowances",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgPruneAllowances.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgPruneAllowancesResponse.decode(data);
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
