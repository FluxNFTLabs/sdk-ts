/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { Proposal, Vote } from "../types/types";

export enum Errors {
  ERRORS_UNKNOWN = 0,
  ERRORS_UNEXPECTED_RESPONSE = 1,
  ERRORS_NO_CONNECTION = 2,
  ERRORS_CONNECTION_TIMEOUT = 3,
  ERRORS_READ_TIMEOUT = 4,
  ERRORS_WRITE_TIMEOUT = 5,
  UNRECOGNIZED = -1,
}

export function errorsFromJSON(object: any): Errors {
  switch (object) {
    case 0:
    case "ERRORS_UNKNOWN":
      return Errors.ERRORS_UNKNOWN;
    case 1:
    case "ERRORS_UNEXPECTED_RESPONSE":
      return Errors.ERRORS_UNEXPECTED_RESPONSE;
    case 2:
    case "ERRORS_NO_CONNECTION":
      return Errors.ERRORS_NO_CONNECTION;
    case 3:
    case "ERRORS_CONNECTION_TIMEOUT":
      return Errors.ERRORS_CONNECTION_TIMEOUT;
    case 4:
    case "ERRORS_READ_TIMEOUT":
      return Errors.ERRORS_READ_TIMEOUT;
    case 5:
    case "ERRORS_WRITE_TIMEOUT":
      return Errors.ERRORS_WRITE_TIMEOUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Errors.UNRECOGNIZED;
  }
}

export function errorsToJSON(object: Errors): string {
  switch (object) {
    case Errors.ERRORS_UNKNOWN:
      return "ERRORS_UNKNOWN";
    case Errors.ERRORS_UNEXPECTED_RESPONSE:
      return "ERRORS_UNEXPECTED_RESPONSE";
    case Errors.ERRORS_NO_CONNECTION:
      return "ERRORS_NO_CONNECTION";
    case Errors.ERRORS_CONNECTION_TIMEOUT:
      return "ERRORS_CONNECTION_TIMEOUT";
    case Errors.ERRORS_READ_TIMEOUT:
      return "ERRORS_READ_TIMEOUT";
    case Errors.ERRORS_WRITE_TIMEOUT:
      return "ERRORS_WRITE_TIMEOUT";
    case Errors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RemoteSignerError {
  code: number;
  description: string;
}

/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
  chainId: string;
}

/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
  pubKey: PublicKey | undefined;
  error: RemoteSignerError | undefined;
}

/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
  vote: Vote | undefined;
  chainId: string;
}

/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
  vote: Vote | undefined;
  error: RemoteSignerError | undefined;
}

/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
  proposal: Proposal | undefined;
  chainId: string;
}

/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
  proposal: Proposal | undefined;
  error: RemoteSignerError | undefined;
}

/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {
}

/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}

export interface Message {
  pubKeyRequest?: PubKeyRequest | undefined;
  pubKeyResponse?: PubKeyResponse | undefined;
  signVoteRequest?: SignVoteRequest | undefined;
  signedVoteResponse?: SignedVoteResponse | undefined;
  signProposalRequest?: SignProposalRequest | undefined;
  signedProposalResponse?: SignedProposalResponse | undefined;
  pingRequest?: PingRequest | undefined;
  pingResponse?: PingResponse | undefined;
}

function createBaseRemoteSignerError(): RemoteSignerError {
  return { code: 0, description: "" };
}

export const RemoteSignerError = {
  $type: "tendermint.privval.RemoteSignerError" as const,

  encode(message: RemoteSignerError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSignerError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteSignerError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoteSignerError {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: RemoteSignerError): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoteSignerError>): RemoteSignerError {
    return RemoteSignerError.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoteSignerError>): RemoteSignerError {
    const message = createBaseRemoteSignerError();
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBasePubKeyRequest(): PubKeyRequest {
  return { chainId: "" };
}

export const PubKeyRequest = {
  $type: "tendermint.privval.PubKeyRequest" as const,

  encode(message: PubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PubKeyRequest {
    return { chainId: isSet(object.chainId) ? String(object.chainId) : "" };
  },

  toJSON(message: PubKeyRequest): unknown {
    const obj: any = {};
    if (message.chainId !== "") {
      obj.chainId = message.chainId;
    }
    return obj;
  },

  create(base?: DeepPartial<PubKeyRequest>): PubKeyRequest {
    return PubKeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PubKeyRequest>): PubKeyRequest {
    const message = createBasePubKeyRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBasePubKeyResponse(): PubKeyResponse {
  return { pubKey: undefined, error: undefined };
}

export const PubKeyResponse = {
  $type: "tendermint.privval.PubKeyResponse" as const,

  encode(message: PubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pubKey = PublicKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = RemoteSignerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PubKeyResponse {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PubKeyResponse): unknown {
    const obj: any = {};
    if (message.pubKey !== undefined) {
      obj.pubKey = PublicKey.toJSON(message.pubKey);
    }
    if (message.error !== undefined) {
      obj.error = RemoteSignerError.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<PubKeyResponse>): PubKeyResponse {
    return PubKeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PubKeyResponse>): PubKeyResponse {
    const message = createBasePubKeyResponse();
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? PublicKey.fromPartial(object.pubKey)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? RemoteSignerError.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseSignVoteRequest(): SignVoteRequest {
  return { vote: undefined, chainId: "" };
}

export const SignVoteRequest = {
  $type: "tendermint.privval.SignVoteRequest" as const,

  encode(message: SignVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignVoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vote = Vote.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignVoteRequest {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },

  toJSON(message: SignVoteRequest): unknown {
    const obj: any = {};
    if (message.vote !== undefined) {
      obj.vote = Vote.toJSON(message.vote);
    }
    if (message.chainId !== "") {
      obj.chainId = message.chainId;
    }
    return obj;
  },

  create(base?: DeepPartial<SignVoteRequest>): SignVoteRequest {
    return SignVoteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignVoteRequest>): SignVoteRequest {
    const message = createBaseSignVoteRequest();
    message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseSignedVoteResponse(): SignedVoteResponse {
  return { vote: undefined, error: undefined };
}

export const SignedVoteResponse = {
  $type: "tendermint.privval.SignedVoteResponse" as const,

  encode(message: SignedVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vote = Vote.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = RemoteSignerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignedVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SignedVoteResponse): unknown {
    const obj: any = {};
    if (message.vote !== undefined) {
      obj.vote = Vote.toJSON(message.vote);
    }
    if (message.error !== undefined) {
      obj.error = RemoteSignerError.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<SignedVoteResponse>): SignedVoteResponse {
    return SignedVoteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignedVoteResponse>): SignedVoteResponse {
    const message = createBaseSignedVoteResponse();
    message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? RemoteSignerError.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBaseSignProposalRequest(): SignProposalRequest {
  return { proposal: undefined, chainId: "" };
}

export const SignProposalRequest = {
  $type: "tendermint.privval.SignProposalRequest" as const,

  encode(message: SignProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignProposalRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposal = Proposal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignProposalRequest {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },

  toJSON(message: SignProposalRequest): unknown {
    const obj: any = {};
    if (message.proposal !== undefined) {
      obj.proposal = Proposal.toJSON(message.proposal);
    }
    if (message.chainId !== "") {
      obj.chainId = message.chainId;
    }
    return obj;
  },

  create(base?: DeepPartial<SignProposalRequest>): SignProposalRequest {
    return SignProposalRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignProposalRequest>): SignProposalRequest {
    const message = createBaseSignProposalRequest();
    message.proposal = (object.proposal !== undefined && object.proposal !== null)
      ? Proposal.fromPartial(object.proposal)
      : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseSignedProposalResponse(): SignedProposalResponse {
  return { proposal: undefined, error: undefined };
}

export const SignedProposalResponse = {
  $type: "tendermint.privval.SignedProposalResponse" as const,

  encode(message: SignedProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposal = Proposal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = RemoteSignerError.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignedProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined,
      error: isSet(object.error) ? RemoteSignerError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SignedProposalResponse): unknown {
    const obj: any = {};
    if (message.proposal !== undefined) {
      obj.proposal = Proposal.toJSON(message.proposal);
    }
    if (message.error !== undefined) {
      obj.error = RemoteSignerError.toJSON(message.error);
    }
    return obj;
  },

  create(base?: DeepPartial<SignedProposalResponse>): SignedProposalResponse {
    return SignedProposalResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignedProposalResponse>): SignedProposalResponse {
    const message = createBaseSignedProposalResponse();
    message.proposal = (object.proposal !== undefined && object.proposal !== null)
      ? Proposal.fromPartial(object.proposal)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? RemoteSignerError.fromPartial(object.error)
      : undefined;
    return message;
  },
};

function createBasePingRequest(): PingRequest {
  return {};
}

export const PingRequest = {
  $type: "tendermint.privval.PingRequest" as const,

  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
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

  fromJSON(_: any): PingRequest {
    return {};
  },

  toJSON(_: PingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PingRequest>): PingRequest {
    return PingRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PingRequest>): PingRequest {
    const message = createBasePingRequest();
    return message;
  },
};

function createBasePingResponse(): PingResponse {
  return {};
}

export const PingResponse = {
  $type: "tendermint.privval.PingResponse" as const,

  encode(_: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
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

  fromJSON(_: any): PingResponse {
    return {};
  },

  toJSON(_: PingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<PingResponse>): PingResponse {
    return PingResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<PingResponse>): PingResponse {
    const message = createBasePingResponse();
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    pubKeyRequest: undefined,
    pubKeyResponse: undefined,
    signVoteRequest: undefined,
    signedVoteResponse: undefined,
    signProposalRequest: undefined,
    signedProposalResponse: undefined,
    pingRequest: undefined,
    pingResponse: undefined,
  };
}

export const Message = {
  $type: "tendermint.privval.Message" as const,

  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKeyRequest !== undefined) {
      PubKeyRequest.encode(message.pubKeyRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.pubKeyResponse !== undefined) {
      PubKeyResponse.encode(message.pubKeyResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.signVoteRequest !== undefined) {
      SignVoteRequest.encode(message.signVoteRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.signedVoteResponse !== undefined) {
      SignedVoteResponse.encode(message.signedVoteResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.signProposalRequest !== undefined) {
      SignProposalRequest.encode(message.signProposalRequest, writer.uint32(42).fork()).ldelim();
    }
    if (message.signedProposalResponse !== undefined) {
      SignedProposalResponse.encode(message.signedProposalResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.pingRequest !== undefined) {
      PingRequest.encode(message.pingRequest, writer.uint32(58).fork()).ldelim();
    }
    if (message.pingResponse !== undefined) {
      PingResponse.encode(message.pingResponse, writer.uint32(66).fork()).ldelim();
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

          message.pubKeyRequest = PubKeyRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubKeyResponse = PubKeyResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signVoteRequest = SignVoteRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signedVoteResponse = SignedVoteResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.signProposalRequest = SignProposalRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signedProposalResponse = SignedProposalResponse.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pingRequest = PingRequest.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.pingResponse = PingResponse.decode(reader, reader.uint32());
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
      pubKeyRequest: isSet(object.pubKeyRequest) ? PubKeyRequest.fromJSON(object.pubKeyRequest) : undefined,
      pubKeyResponse: isSet(object.pubKeyResponse) ? PubKeyResponse.fromJSON(object.pubKeyResponse) : undefined,
      signVoteRequest: isSet(object.signVoteRequest) ? SignVoteRequest.fromJSON(object.signVoteRequest) : undefined,
      signedVoteResponse: isSet(object.signedVoteResponse)
        ? SignedVoteResponse.fromJSON(object.signedVoteResponse)
        : undefined,
      signProposalRequest: isSet(object.signProposalRequest)
        ? SignProposalRequest.fromJSON(object.signProposalRequest)
        : undefined,
      signedProposalResponse: isSet(object.signedProposalResponse)
        ? SignedProposalResponse.fromJSON(object.signedProposalResponse)
        : undefined,
      pingRequest: isSet(object.pingRequest) ? PingRequest.fromJSON(object.pingRequest) : undefined,
      pingResponse: isSet(object.pingResponse) ? PingResponse.fromJSON(object.pingResponse) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.pubKeyRequest !== undefined) {
      obj.pubKeyRequest = PubKeyRequest.toJSON(message.pubKeyRequest);
    }
    if (message.pubKeyResponse !== undefined) {
      obj.pubKeyResponse = PubKeyResponse.toJSON(message.pubKeyResponse);
    }
    if (message.signVoteRequest !== undefined) {
      obj.signVoteRequest = SignVoteRequest.toJSON(message.signVoteRequest);
    }
    if (message.signedVoteResponse !== undefined) {
      obj.signedVoteResponse = SignedVoteResponse.toJSON(message.signedVoteResponse);
    }
    if (message.signProposalRequest !== undefined) {
      obj.signProposalRequest = SignProposalRequest.toJSON(message.signProposalRequest);
    }
    if (message.signedProposalResponse !== undefined) {
      obj.signedProposalResponse = SignedProposalResponse.toJSON(message.signedProposalResponse);
    }
    if (message.pingRequest !== undefined) {
      obj.pingRequest = PingRequest.toJSON(message.pingRequest);
    }
    if (message.pingResponse !== undefined) {
      obj.pingResponse = PingResponse.toJSON(message.pingResponse);
    }
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.pubKeyRequest = (object.pubKeyRequest !== undefined && object.pubKeyRequest !== null)
      ? PubKeyRequest.fromPartial(object.pubKeyRequest)
      : undefined;
    message.pubKeyResponse = (object.pubKeyResponse !== undefined && object.pubKeyResponse !== null)
      ? PubKeyResponse.fromPartial(object.pubKeyResponse)
      : undefined;
    message.signVoteRequest = (object.signVoteRequest !== undefined && object.signVoteRequest !== null)
      ? SignVoteRequest.fromPartial(object.signVoteRequest)
      : undefined;
    message.signedVoteResponse = (object.signedVoteResponse !== undefined && object.signedVoteResponse !== null)
      ? SignedVoteResponse.fromPartial(object.signedVoteResponse)
      : undefined;
    message.signProposalRequest = (object.signProposalRequest !== undefined && object.signProposalRequest !== null)
      ? SignProposalRequest.fromPartial(object.signProposalRequest)
      : undefined;
    message.signedProposalResponse =
      (object.signedProposalResponse !== undefined && object.signedProposalResponse !== null)
        ? SignedProposalResponse.fromPartial(object.signedProposalResponse)
        : undefined;
    message.pingRequest = (object.pingRequest !== undefined && object.pingRequest !== null)
      ? PingRequest.fromPartial(object.pingRequest)
      : undefined;
    message.pingResponse = (object.pingResponse !== undefined && object.pingResponse !== null)
      ? PingResponse.fromPartial(object.pingResponse)
      : undefined;
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