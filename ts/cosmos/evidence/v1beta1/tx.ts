/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
  /** submitter is the signer account address of evidence. */
  submitter: string;
  /** evidence defines the evidence of misbehavior. */
  evidence: Any | undefined;
}

/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
  /** hash defines the hash of the evidence. */
  hash: Uint8Array;
}

function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return { submitter: "", evidence: undefined };
}

export const MsgSubmitEvidence = {
  encode(message: MsgSubmitEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.submitter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.evidence = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEvidence {
    return {
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined,
    };
  },

  toJSON(message: MsgSubmitEvidence): unknown {
    const obj: any = {};
    if (message.submitter !== "") {
      obj.submitter = message.submitter;
    }
    if (message.evidence !== undefined) {
      obj.evidence = Any.toJSON(message.evidence);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    return MsgSubmitEvidence.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? Any.fromPartial(object.evidence)
      : undefined;
    return message;
  },
};

function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return { hash: new Uint8Array(0) };
}

export const MsgSubmitEvidenceResponse = {
  encode(message: MsgSubmitEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitEvidenceResponse {
    return { hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0) };
  },

  toJSON(message: MsgSubmitEvidenceResponse): unknown {
    const obj: any = {};
    if (message.hash.length !== 0) {
      obj.hash = base64FromBytes(message.hash);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array(0);
    return message;
  },
};

/** Msg defines the evidence Msg service. */
export interface Msg {
  /**
   * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   * counterfactual signing.
   */
  SubmitEvidence(request: DeepPartial<MsgSubmitEvidence>, metadata?: grpc.Metadata): Promise<MsgSubmitEvidenceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitEvidence = this.SubmitEvidence.bind(this);
  }

  SubmitEvidence(
    request: DeepPartial<MsgSubmitEvidence>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitEvidenceResponse> {
    return this.rpc.unary(MsgSubmitEvidenceDesc, MsgSubmitEvidence.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "cosmos.evidence.v1beta1.Msg" };

export const MsgSubmitEvidenceDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitEvidence",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitEvidence.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSubmitEvidenceResponse.decode(data);
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
