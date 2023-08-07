/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { SignMode, signModeFromJSON, signModeToJSON } from "../signing/v1beta1/signing";

/** Tx is the standard type used for broadcasting transactions. */
export interface Tx {
  /** body is the processable content of the transaction */
  body:
    | TxBody
    | undefined;
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   */
  auth_info:
    | AuthInfo
    | undefined;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRaw {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   */
  body_bytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   */
  auth_info_bytes: Uint8Array;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDoc {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */
  auth_info_bytes: Uint8Array;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */
  chain_id: string;
  /** account_number is the account number of the account in state */
  account_number: string;
}

/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SignDocDirectAux {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  body_bytes: Uint8Array;
  /** public_key is the public key of the signing account. */
  public_key:
    | Any
    | undefined;
  /**
   * chain_id is the identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker.
   */
  chain_id: string;
  /** account_number is the account number of the account in state. */
  account_number: string;
  /** sequence is the sequence number of the signing account. */
  sequence: string;
  /**
   * Tip is the optional tip used for transactions fees paid in another denom.
   * It should be left empty if the signer is not the tipper for this
   * transaction.
   *
   * This field is ignored if the chain didn't enable tips, i.e. didn't add the
   * `TipDecorator` in its posthandler.
   */
  tip: Tip | undefined;
}

/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages: Any[];
  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
   */
  memo: string;
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   */
  timeout_height: string;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extension_options: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  non_critical_extension_options: Any[];
}

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signer_infos: SignerInfo[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee:
    | Fee
    | undefined;
  /**
   * Tip is the optional tip used for transactions fees paid in another denom.
   *
   * This field is ignored if the chain didn't enable tips, i.e. didn't add the
   * `TipDecorator` in its posthandler.
   *
   * Since: cosmos-sdk 0.46
   */
  tip: Tip | undefined;
}

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfo {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   */
  public_key:
    | Any
    | undefined;
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   */
  mode_info:
    | ModeInfo
    | undefined;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   */
  sequence: string;
}

/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfo {
  /** single represents a single signer */
  single?:
    | ModeInfo_Single
    | undefined;
  /** multi represents a nested multisig signer */
  multi?: ModeInfo_Multi | undefined;
}

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_Single {
  /** mode is the signing mode of the single signer */
  mode: SignMode;
}

/** Multi is the mode info for a multisig public key */
export interface ModeInfo_Multi {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray:
    | CompactBitArray
    | undefined;
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  mode_infos: ModeInfo[];
}

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount: Coin[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gas_limit: string;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter: string;
}

/**
 * Tip is the tip used for meta-transactions.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Tip {
  /** amount is the amount of the tip */
  amount: Coin[];
  /** tipper is the address of the account paying for the tip */
  tipper: string;
}

/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AuxSignerData {
  /**
   * address is the bech32-encoded address of the auxiliary signer. If using
   * AuxSignerData across different chains, the bech32 prefix of the target
   * chain (where the final transaction is broadcasted) should be used.
   */
  address: string;
  /**
   * sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer
   * signs. Note: we use the same sign doc even if we're signing with
   * LEGACY_AMINO_JSON.
   */
  sign_doc:
    | SignDocDirectAux
    | undefined;
  /** mode is the signing mode of the single signer. */
  mode: SignMode;
  /** sig is the signature of the sign doc. */
  sig: Uint8Array;
}

function createBaseTx(): Tx {
  return { body: undefined, auth_info: undefined, signatures: [] };
}

export const Tx = {
  $type: "cosmos.tx.v1beta1.Tx" as const,

  encode(message: Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.auth_info !== undefined) {
      AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body = TxBody.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth_info = AuthInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signatures.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tx {
    return {
      body: isSet(object.body) ? TxBody.fromJSON(object.body) : undefined,
      auth_info: isSet(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: Tx): unknown {
    const obj: any = {};
    if (message.body !== undefined) {
      obj.body = TxBody.toJSON(message.body);
    }
    if (message.auth_info !== undefined) {
      obj.auth_info = AuthInfo.toJSON(message.auth_info);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Tx>): Tx {
    return Tx.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tx>): Tx {
    const message = createBaseTx();
    message.body = (object.body !== undefined && object.body !== null) ? TxBody.fromPartial(object.body) : undefined;
    message.auth_info = (object.auth_info !== undefined && object.auth_info !== null)
      ? AuthInfo.fromPartial(object.auth_info)
      : undefined;
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseTxRaw(): TxRaw {
  return { body_bytes: new Uint8Array(0), auth_info_bytes: new Uint8Array(0), signatures: [] };
}

export const TxRaw = {
  $type: "cosmos.tx.v1beta1.TxRaw" as const,

  encode(message: TxRaw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxRaw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body_bytes = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth_info_bytes = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signatures.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxRaw {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(0),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(0),
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: TxRaw): unknown {
    const obj: any = {};
    if (message.body_bytes.length !== 0) {
      obj.body_bytes = base64FromBytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TxRaw>): TxRaw {
    return TxRaw.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TxRaw>): TxRaw {
    const message = createBaseTxRaw();
    message.body_bytes = object.body_bytes ?? new Uint8Array(0);
    message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array(0);
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseSignDoc(): SignDoc {
  return { body_bytes: new Uint8Array(0), auth_info_bytes: new Uint8Array(0), chain_id: "", account_number: "0" };
}

export const SignDoc = {
  $type: "cosmos.tx.v1beta1.SignDoc" as const,

  encode(message: SignDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      writer.uint32(18).bytes(message.auth_info_bytes);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.account_number !== "0") {
      writer.uint32(32).uint64(message.account_number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignDoc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body_bytes = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth_info_bytes = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chain_id = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.account_number = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignDoc {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(0),
      auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(0),
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? String(object.account_number) : "0",
    };
  },

  toJSON(message: SignDoc): unknown {
    const obj: any = {};
    if (message.body_bytes.length !== 0) {
      obj.body_bytes = base64FromBytes(message.body_bytes);
    }
    if (message.auth_info_bytes.length !== 0) {
      obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes);
    }
    if (message.chain_id !== "") {
      obj.chain_id = message.chain_id;
    }
    if (message.account_number !== "0") {
      obj.account_number = message.account_number;
    }
    return obj;
  },

  create(base?: DeepPartial<SignDoc>): SignDoc {
    return SignDoc.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignDoc>): SignDoc {
    const message = createBaseSignDoc();
    message.body_bytes = object.body_bytes ?? new Uint8Array(0);
    message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array(0);
    message.chain_id = object.chain_id ?? "";
    message.account_number = object.account_number ?? "0";
    return message;
  },
};

function createBaseSignDocDirectAux(): SignDocDirectAux {
  return {
    body_bytes: new Uint8Array(0),
    public_key: undefined,
    chain_id: "",
    account_number: "0",
    sequence: "0",
    tip: undefined,
  };
}

export const SignDocDirectAux = {
  $type: "cosmos.tx.v1beta1.SignDocDirectAux" as const,

  encode(message: SignDocDirectAux, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body_bytes.length !== 0) {
      writer.uint32(10).bytes(message.body_bytes);
    }
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.account_number !== "0") {
      writer.uint32(32).uint64(message.account_number);
    }
    if (message.sequence !== "0") {
      writer.uint32(40).uint64(message.sequence);
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignDocDirectAux {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignDocDirectAux();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body_bytes = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.public_key = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chain_id = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.account_number = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tip = Tip.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignDocDirectAux {
    return {
      body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(0),
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      account_number: isSet(object.account_number) ? String(object.account_number) : "0",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined,
    };
  },

  toJSON(message: SignDocDirectAux): unknown {
    const obj: any = {};
    if (message.body_bytes.length !== 0) {
      obj.body_bytes = base64FromBytes(message.body_bytes);
    }
    if (message.public_key !== undefined) {
      obj.public_key = Any.toJSON(message.public_key);
    }
    if (message.chain_id !== "") {
      obj.chain_id = message.chain_id;
    }
    if (message.account_number !== "0") {
      obj.account_number = message.account_number;
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    if (message.tip !== undefined) {
      obj.tip = Tip.toJSON(message.tip);
    }
    return obj;
  },

  create(base?: DeepPartial<SignDocDirectAux>): SignDocDirectAux {
    return SignDocDirectAux.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignDocDirectAux>): SignDocDirectAux {
    const message = createBaseSignDocDirectAux();
    message.body_bytes = object.body_bytes ?? new Uint8Array(0);
    message.public_key = (object.public_key !== undefined && object.public_key !== null)
      ? Any.fromPartial(object.public_key)
      : undefined;
    message.chain_id = object.chain_id ?? "";
    message.account_number = object.account_number ?? "0";
    message.sequence = object.sequence ?? "0";
    message.tip = (object.tip !== undefined && object.tip !== null) ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
};

function createBaseTxBody(): TxBody {
  return { messages: [], memo: "", timeout_height: "0", extension_options: [], non_critical_extension_options: [] };
}

export const TxBody = {
  $type: "cosmos.tx.v1beta1.TxBody" as const,

  encode(message: TxBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (message.timeout_height !== "0") {
      writer.uint32(24).uint64(message.timeout_height);
    }
    for (const v of message.extension_options) {
      Any.encode(v!, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.non_critical_extension_options) {
      Any.encode(v!, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timeout_height = longToString(reader.uint64() as Long);
          continue;
        case 1023:
          if (tag !== 8186) {
            break;
          }

          message.extension_options.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2047:
          if (tag !== 16378) {
            break;
          }

          message.non_critical_extension_options.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxBody {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout_height: isSet(object.timeout_height) ? String(object.timeout_height) : "0",
      extension_options: Array.isArray(object?.extension_options)
        ? object.extension_options.map((e: any) => Any.fromJSON(e))
        : [],
      non_critical_extension_options: Array.isArray(object?.non_critical_extension_options)
        ? object.non_critical_extension_options.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TxBody): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Any.toJSON(e));
    }
    if (message.memo !== "") {
      obj.memo = message.memo;
    }
    if (message.timeout_height !== "0") {
      obj.timeout_height = message.timeout_height;
    }
    if (message.extension_options?.length) {
      obj.extension_options = message.extension_options.map((e) => Any.toJSON(e));
    }
    if (message.non_critical_extension_options?.length) {
      obj.non_critical_extension_options = message.non_critical_extension_options.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TxBody>): TxBody {
    return TxBody.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TxBody>): TxBody {
    const message = createBaseTxBody();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeout_height = object.timeout_height ?? "0";
    message.extension_options = object.extension_options?.map((e) => Any.fromPartial(e)) || [];
    message.non_critical_extension_options = object.non_critical_extension_options?.map((e) => Any.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAuthInfo(): AuthInfo {
  return { signer_infos: [], fee: undefined, tip: undefined };
}

export const AuthInfo = {
  $type: "cosmos.tx.v1beta1.AuthInfo" as const,

  encode(message: AuthInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signer_infos) {
      SignerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.tip !== undefined) {
      Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fee = Fee.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tip = Tip.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthInfo {
    return {
      signer_infos: Array.isArray(object?.signer_infos)
        ? object.signer_infos.map((e: any) => SignerInfo.fromJSON(e))
        : [],
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined,
    };
  },

  toJSON(message: AuthInfo): unknown {
    const obj: any = {};
    if (message.signer_infos?.length) {
      obj.signer_infos = message.signer_infos.map((e) => SignerInfo.toJSON(e));
    }
    if (message.fee !== undefined) {
      obj.fee = Fee.toJSON(message.fee);
    }
    if (message.tip !== undefined) {
      obj.tip = Tip.toJSON(message.tip);
    }
    return obj;
  },

  create(base?: DeepPartial<AuthInfo>): AuthInfo {
    return AuthInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthInfo>): AuthInfo {
    const message = createBaseAuthInfo();
    message.signer_infos = object.signer_infos?.map((e) => SignerInfo.fromPartial(e)) || [];
    message.fee = (object.fee !== undefined && object.fee !== null) ? Fee.fromPartial(object.fee) : undefined;
    message.tip = (object.tip !== undefined && object.tip !== null) ? Tip.fromPartial(object.tip) : undefined;
    return message;
  },
};

function createBaseSignerInfo(): SignerInfo {
  return { public_key: undefined, mode_info: undefined, sequence: "0" };
}

export const SignerInfo = {
  $type: "cosmos.tx.v1beta1.SignerInfo" as const,

  encode(message: SignerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mode_info !== undefined) {
      ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== "0") {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.public_key = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mode_info = ModeInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignerInfo {
    return {
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      mode_info: isSet(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
      sequence: isSet(object.sequence) ? String(object.sequence) : "0",
    };
  },

  toJSON(message: SignerInfo): unknown {
    const obj: any = {};
    if (message.public_key !== undefined) {
      obj.public_key = Any.toJSON(message.public_key);
    }
    if (message.mode_info !== undefined) {
      obj.mode_info = ModeInfo.toJSON(message.mode_info);
    }
    if (message.sequence !== "0") {
      obj.sequence = message.sequence;
    }
    return obj;
  },

  create(base?: DeepPartial<SignerInfo>): SignerInfo {
    return SignerInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignerInfo>): SignerInfo {
    const message = createBaseSignerInfo();
    message.public_key = (object.public_key !== undefined && object.public_key !== null)
      ? Any.fromPartial(object.public_key)
      : undefined;
    message.mode_info = (object.mode_info !== undefined && object.mode_info !== null)
      ? ModeInfo.fromPartial(object.mode_info)
      : undefined;
    message.sequence = object.sequence ?? "0";
    return message;
  },
};

function createBaseModeInfo(): ModeInfo {
  return { single: undefined, multi: undefined };
}

export const ModeInfo = {
  $type: "cosmos.tx.v1beta1.ModeInfo" as const,

  encode(message: ModeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModeInfo {
    return {
      single: isSet(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
      multi: isSet(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined,
    };
  },

  toJSON(message: ModeInfo): unknown {
    const obj: any = {};
    if (message.single !== undefined) {
      obj.single = ModeInfo_Single.toJSON(message.single);
    }
    if (message.multi !== undefined) {
      obj.multi = ModeInfo_Multi.toJSON(message.multi);
    }
    return obj;
  },

  create(base?: DeepPartial<ModeInfo>): ModeInfo {
    return ModeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModeInfo>): ModeInfo {
    const message = createBaseModeInfo();
    message.single = (object.single !== undefined && object.single !== null)
      ? ModeInfo_Single.fromPartial(object.single)
      : undefined;
    message.multi = (object.multi !== undefined && object.multi !== null)
      ? ModeInfo_Multi.fromPartial(object.multi)
      : undefined;
    return message;
  },
};

function createBaseModeInfo_Single(): ModeInfo_Single {
  return { mode: 0 };
}

export const ModeInfo_Single = {
  $type: "cosmos.tx.v1beta1.ModeInfo.Single" as const,

  encode(message: ModeInfo_Single, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Single {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModeInfo_Single {
    return { mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0 };
  },

  toJSON(message: ModeInfo_Single): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = signModeToJSON(message.mode);
    }
    return obj;
  },

  create(base?: DeepPartial<ModeInfo_Single>): ModeInfo_Single {
    return ModeInfo_Single.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModeInfo_Single>): ModeInfo_Single {
    const message = createBaseModeInfo_Single();
    message.mode = object.mode ?? 0;
    return message;
  },
};

function createBaseModeInfo_Multi(): ModeInfo_Multi {
  return { bitarray: undefined, mode_infos: [] };
}

export const ModeInfo_Multi = {
  $type: "cosmos.tx.v1beta1.ModeInfo.Multi" as const,

  encode(message: ModeInfo_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mode_infos) {
      ModeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Multi {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModeInfo_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModeInfo_Multi {
    return {
      bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
      mode_infos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e: any) => ModeInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ModeInfo_Multi): unknown {
    const obj: any = {};
    if (message.bitarray !== undefined) {
      obj.bitarray = CompactBitArray.toJSON(message.bitarray);
    }
    if (message.mode_infos?.length) {
      obj.mode_infos = message.mode_infos.map((e) => ModeInfo.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi {
    return ModeInfo_Multi.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi {
    const message = createBaseModeInfo_Multi();
    message.bitarray = (object.bitarray !== undefined && object.bitarray !== null)
      ? CompactBitArray.fromPartial(object.bitarray)
      : undefined;
    message.mode_infos = object.mode_infos?.map((e) => ModeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFee(): Fee {
  return { amount: [], gas_limit: "0", payer: "", granter: "" };
}

export const Fee = {
  $type: "cosmos.tx.v1beta1.Fee" as const,

  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.gas_limit !== "0") {
      writer.uint32(16).uint64(message.gas_limit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gas_limit = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payer = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.granter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fee {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      gas_limit: isSet(object.gas_limit) ? String(object.gas_limit) : "0",
      payer: isSet(object.payer) ? String(object.payer) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
    };
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    if (message.gas_limit !== "0") {
      obj.gas_limit = message.gas_limit;
    }
    if (message.payer !== "") {
      obj.payer = message.payer;
    }
    if (message.granter !== "") {
      obj.granter = message.granter;
    }
    return obj;
  },

  create(base?: DeepPartial<Fee>): Fee {
    return Fee.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = createBaseFee();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.gas_limit = object.gas_limit ?? "0";
    message.payer = object.payer ?? "";
    message.granter = object.granter ?? "";
    return message;
  },
};

function createBaseTip(): Tip {
  return { amount: [], tipper: "" };
}

export const Tip = {
  $type: "cosmos.tx.v1beta1.Tip" as const,

  encode(message: Tip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tipper !== "") {
      writer.uint32(18).string(message.tipper);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tipper = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tip {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      tipper: isSet(object.tipper) ? String(object.tipper) : "",
    };
  },

  toJSON(message: Tip): unknown {
    const obj: any = {};
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    if (message.tipper !== "") {
      obj.tipper = message.tipper;
    }
    return obj;
  },

  create(base?: DeepPartial<Tip>): Tip {
    return Tip.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tip>): Tip {
    const message = createBaseTip();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.tipper = object.tipper ?? "";
    return message;
  },
};

function createBaseAuxSignerData(): AuxSignerData {
  return { address: "", sign_doc: undefined, mode: 0, sig: new Uint8Array(0) };
}

export const AuxSignerData = {
  $type: "cosmos.tx.v1beta1.AuxSignerData" as const,

  encode(message: AuxSignerData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.sign_doc !== undefined) {
      SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(24).int32(message.mode);
    }
    if (message.sig.length !== 0) {
      writer.uint32(34).bytes(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuxSignerData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuxSignerData();
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

          message.sign_doc = SignDocDirectAux.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuxSignerData {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      sign_doc: isSet(object.sign_doc) ? SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
      mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(0),
    };
  },

  toJSON(message: AuxSignerData): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.sign_doc !== undefined) {
      obj.sign_doc = SignDocDirectAux.toJSON(message.sign_doc);
    }
    if (message.mode !== 0) {
      obj.mode = signModeToJSON(message.mode);
    }
    if (message.sig.length !== 0) {
      obj.sig = base64FromBytes(message.sig);
    }
    return obj;
  },

  create(base?: DeepPartial<AuxSignerData>): AuxSignerData {
    return AuxSignerData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuxSignerData>): AuxSignerData {
    const message = createBaseAuxSignerData();
    message.address = object.address ?? "";
    message.sign_doc = (object.sign_doc !== undefined && object.sign_doc !== null)
      ? SignDocDirectAux.fromPartial(object.sign_doc)
      : undefined;
    message.mode = object.mode ?? 0;
    message.sig = object.sig ?? new Uint8Array(0);
    return message;
  },
};

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
