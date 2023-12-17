/* eslint-disable */
import _m0 from "protobufjs/minimal";

export enum HashOp {
  /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
  NO_HASH = 0,
  SHA256 = 1,
  SHA512 = 2,
  KECCAK256 = 3,
  RIPEMD160 = 4,
  /** BITCOIN - ripemd160(sha256(x)) */
  BITCOIN = 5,
  SHA512_256 = 6,
  BLAKE2B_512 = 7,
  BLAKE2S_256 = 8,
  BLAKE3 = 9,
  UNRECOGNIZED = -1,
}

export function hashOpFromJSON(object: any): HashOp {
  switch (object) {
    case 0:
    case "NO_HASH":
      return HashOp.NO_HASH;
    case 1:
    case "SHA256":
      return HashOp.SHA256;
    case 2:
    case "SHA512":
      return HashOp.SHA512;
    case 3:
    case "KECCAK256":
      return HashOp.KECCAK256;
    case 4:
    case "RIPEMD160":
      return HashOp.RIPEMD160;
    case 5:
    case "BITCOIN":
      return HashOp.BITCOIN;
    case 6:
    case "SHA512_256":
      return HashOp.SHA512_256;
    case 7:
    case "BLAKE2B_512":
      return HashOp.BLAKE2B_512;
    case 8:
    case "BLAKE2S_256":
      return HashOp.BLAKE2S_256;
    case 9:
    case "BLAKE3":
      return HashOp.BLAKE3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HashOp.UNRECOGNIZED;
  }
}

export function hashOpToJSON(object: HashOp): string {
  switch (object) {
    case HashOp.NO_HASH:
      return "NO_HASH";
    case HashOp.SHA256:
      return "SHA256";
    case HashOp.SHA512:
      return "SHA512";
    case HashOp.KECCAK256:
      return "KECCAK256";
    case HashOp.RIPEMD160:
      return "RIPEMD160";
    case HashOp.BITCOIN:
      return "BITCOIN";
    case HashOp.SHA512_256:
      return "SHA512_256";
    case HashOp.BLAKE2B_512:
      return "BLAKE2B_512";
    case HashOp.BLAKE2S_256:
      return "BLAKE2S_256";
    case HashOp.BLAKE3:
      return "BLAKE3";
    case HashOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export enum LengthOp {
  /** NO_PREFIX - NO_PREFIX don't include any length info */
  NO_PREFIX = 0,
  /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
  VAR_PROTO = 1,
  /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
  VAR_RLP = 2,
  /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
  FIXED32_BIG = 3,
  /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
  FIXED32_LITTLE = 4,
  /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
  FIXED64_BIG = 5,
  /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
  FIXED64_LITTLE = 6,
  /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
  REQUIRE_32_BYTES = 7,
  /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
  REQUIRE_64_BYTES = 8,
  UNRECOGNIZED = -1,
}

export function lengthOpFromJSON(object: any): LengthOp {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return LengthOp.NO_PREFIX;
    case 1:
    case "VAR_PROTO":
      return LengthOp.VAR_PROTO;
    case 2:
    case "VAR_RLP":
      return LengthOp.VAR_RLP;
    case 3:
    case "FIXED32_BIG":
      return LengthOp.FIXED32_BIG;
    case 4:
    case "FIXED32_LITTLE":
      return LengthOp.FIXED32_LITTLE;
    case 5:
    case "FIXED64_BIG":
      return LengthOp.FIXED64_BIG;
    case 6:
    case "FIXED64_LITTLE":
      return LengthOp.FIXED64_LITTLE;
    case 7:
    case "REQUIRE_32_BYTES":
      return LengthOp.REQUIRE_32_BYTES;
    case 8:
    case "REQUIRE_64_BYTES":
      return LengthOp.REQUIRE_64_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LengthOp.UNRECOGNIZED;
  }
}

export function lengthOpToJSON(object: LengthOp): string {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return "NO_PREFIX";
    case LengthOp.VAR_PROTO:
      return "VAR_PROTO";
    case LengthOp.VAR_RLP:
      return "VAR_RLP";
    case LengthOp.FIXED32_BIG:
      return "FIXED32_BIG";
    case LengthOp.FIXED32_LITTLE:
      return "FIXED32_LITTLE";
    case LengthOp.FIXED64_BIG:
      return "FIXED64_BIG";
    case LengthOp.FIXED64_LITTLE:
      return "FIXED64_LITTLE";
    case LengthOp.REQUIRE_32_BYTES:
      return "REQUIRE_32_BYTES";
    case LengthOp.REQUIRE_64_BYTES:
      return "REQUIRE_64_BYTES";
    case LengthOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp | undefined;
  path: InnerOp[];
}

/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProof {
  /** TODO: remove this as unnecessary??? we prove a range */
  key: Uint8Array;
  left: ExistenceProof | undefined;
  right: ExistenceProof | undefined;
}

/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProof {
  exist?: ExistenceProof | undefined;
  nonexist?: NonExistenceProof | undefined;
  batch?: BatchProof | undefined;
  compressed?: CompressedBatchProof | undefined;
}

/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOp {
  hash: HashOp;
  prehash_key: HashOp;
  prehash_value: HashOp;
  length: LengthOp;
  /**
   * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
   * a leaf node from an inner node.
   */
  prefix: Uint8Array;
}

/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOp {
  hash: HashOp;
  prefix: Uint8Array;
  suffix: Uint8Array;
}

/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpec {
  /**
   * any field in the ExistenceProof must be the same as in this spec.
   * except Prefix, which is just the first bytes of prefix (spec can be longer)
   */
  leaf_spec: LeafOp | undefined;
  inner_spec:
    | InnerSpec
    | undefined;
  /** max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries) */
  max_depth: number;
  /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
  min_depth: number;
  /**
   * prehash_key_before_comparison is a flag that indicates whether to use the
   * prehash_key specified by LeafOp to compare lexical ordering of keys for
   * non-existence proofs.
   */
  prehash_key_before_comparison: boolean;
}

/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpec {
  /**
   * Child order is the ordering of the children node, must count from 0
   * iavl tree is [0, 1] (left then right)
   * merk is [0, 2, 1] (left, right, here)
   */
  child_order: number[];
  child_size: number;
  min_prefix_length: number;
  max_prefix_length: number;
  /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
  empty_child: Uint8Array;
  /** hash is the algorithm that must be used for each InnerOp */
  hash: HashOp;
}

/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProof {
  entries: BatchEntry[];
}

/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntry {
  exist?: ExistenceProof | undefined;
  nonexist?: NonExistenceProof | undefined;
}

export interface CompressedBatchProof {
  entries: CompressedBatchEntry[];
  lookup_inners: InnerOp[];
}

/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntry {
  exist?: CompressedExistenceProof | undefined;
  nonexist?: CompressedNonExistenceProof | undefined;
}

export interface CompressedExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf:
    | LeafOp
    | undefined;
  /** these are indexes into the lookup_inners table in CompressedBatchProof */
  path: number[];
}

export interface CompressedNonExistenceProof {
  /** TODO: remove this as unnecessary??? we prove a range */
  key: Uint8Array;
  left: CompressedExistenceProof | undefined;
  right: CompressedExistenceProof | undefined;
}

function createBaseExistenceProof(): ExistenceProof {
  return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}

export const ExistenceProof = {
  $type: "cosmos.ics23.v1.ExistenceProof" as const,

  encode(message: ExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExistenceProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leaf = LeafOp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path.push(InnerOp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => InnerOp.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExistenceProof): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.leaf !== undefined) {
      obj.leaf = LeafOp.toJSON(message.leaf);
    }
    if (message.path?.length) {
      obj.path = message.path.map((e) => InnerOp.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ExistenceProof>): ExistenceProof {
    return ExistenceProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExistenceProof>): ExistenceProof {
    const message = createBaseExistenceProof();
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    message.leaf = (object.leaf !== undefined && object.leaf !== null) ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map((e) => InnerOp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNonExistenceProof(): NonExistenceProof {
  return { key: new Uint8Array(0), left: undefined, right: undefined };
}

export const NonExistenceProof = {
  $type: "cosmos.ics23.v1.NonExistenceProof" as const,

  encode(message: NonExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NonExistenceProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.left = ExistenceProof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.right = ExistenceProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      left: isSet(object.left) ? ExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? ExistenceProof.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: NonExistenceProof): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.left !== undefined) {
      obj.left = ExistenceProof.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = ExistenceProof.toJSON(message.right);
    }
    return obj;
  },

  create(base?: DeepPartial<NonExistenceProof>): NonExistenceProof {
    return NonExistenceProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NonExistenceProof>): NonExistenceProof {
    const message = createBaseNonExistenceProof();
    message.key = object.key ?? new Uint8Array(0);
    message.left = (object.left !== undefined && object.left !== null)
      ? ExistenceProof.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? ExistenceProof.fromPartial(object.right)
      : undefined;
    return message;
  },
};

function createBaseCommitmentProof(): CommitmentProof {
  return { exist: undefined, nonexist: undefined, batch: undefined, compressed: undefined };
}

export const CommitmentProof = {
  $type: "cosmos.ics23.v1.CommitmentProof" as const,

  encode(message: CommitmentProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== undefined) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exist = ExistenceProof.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.batch = BatchProof.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentProof {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
      batch: isSet(object.batch) ? BatchProof.fromJSON(object.batch) : undefined,
      compressed: isSet(object.compressed) ? CompressedBatchProof.fromJSON(object.compressed) : undefined,
    };
  },

  toJSON(message: CommitmentProof): unknown {
    const obj: any = {};
    if (message.exist !== undefined) {
      obj.exist = ExistenceProof.toJSON(message.exist);
    }
    if (message.nonexist !== undefined) {
      obj.nonexist = NonExistenceProof.toJSON(message.nonexist);
    }
    if (message.batch !== undefined) {
      obj.batch = BatchProof.toJSON(message.batch);
    }
    if (message.compressed !== undefined) {
      obj.compressed = CompressedBatchProof.toJSON(message.compressed);
    }
    return obj;
  },

  create(base?: DeepPartial<CommitmentProof>): CommitmentProof {
    return CommitmentProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CommitmentProof>): CommitmentProof {
    const message = createBaseCommitmentProof();
    message.exist = (object.exist !== undefined && object.exist !== null)
      ? ExistenceProof.fromPartial(object.exist)
      : undefined;
    message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
      ? NonExistenceProof.fromPartial(object.nonexist)
      : undefined;
    message.batch = (object.batch !== undefined && object.batch !== null)
      ? BatchProof.fromPartial(object.batch)
      : undefined;
    message.compressed = (object.compressed !== undefined && object.compressed !== null)
      ? CompressedBatchProof.fromPartial(object.compressed)
      : undefined;
    return message;
  },
};

function createBaseLeafOp(): LeafOp {
  return { hash: 0, prehash_key: 0, prehash_value: 0, length: 0, prefix: new Uint8Array(0) };
}

export const LeafOp = {
  $type: "cosmos.ics23.v1.LeafOp" as const,

  encode(message: LeafOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehash_key !== 0) {
      writer.uint32(16).int32(message.prehash_key);
    }
    if (message.prehash_value !== 0) {
      writer.uint32(24).int32(message.prehash_value);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeafOp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hash = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prehash_key = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.prehash_value = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.length = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prefix = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeafOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prehash_key: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : 0,
      prehash_value: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : 0,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
    };
  },

  toJSON(message: LeafOp): unknown {
    const obj: any = {};
    if (message.hash !== 0) {
      obj.hash = hashOpToJSON(message.hash);
    }
    if (message.prehash_key !== 0) {
      obj.prehash_key = hashOpToJSON(message.prehash_key);
    }
    if (message.prehash_value !== 0) {
      obj.prehash_value = hashOpToJSON(message.prehash_value);
    }
    if (message.length !== 0) {
      obj.length = lengthOpToJSON(message.length);
    }
    if (message.prefix.length !== 0) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    return obj;
  },

  create(base?: DeepPartial<LeafOp>): LeafOp {
    return LeafOp.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LeafOp>): LeafOp {
    const message = createBaseLeafOp();
    message.hash = object.hash ?? 0;
    message.prehash_key = object.prehash_key ?? 0;
    message.prehash_value = object.prehash_value ?? 0;
    message.length = object.length ?? 0;
    message.prefix = object.prefix ?? new Uint8Array(0);
    return message;
  },
};

function createBaseInnerOp(): InnerOp {
  return { hash: 0, prefix: new Uint8Array(0), suffix: new Uint8Array(0) };
}

export const InnerOp = {
  $type: "cosmos.ics23.v1.InnerOp" as const,

  encode(message: InnerOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InnerOp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hash = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prefix = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.suffix = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InnerOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
      suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array(0),
    };
  },

  toJSON(message: InnerOp): unknown {
    const obj: any = {};
    if (message.hash !== 0) {
      obj.hash = hashOpToJSON(message.hash);
    }
    if (message.prefix.length !== 0) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      obj.suffix = base64FromBytes(message.suffix);
    }
    return obj;
  },

  create(base?: DeepPartial<InnerOp>): InnerOp {
    return InnerOp.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InnerOp>): InnerOp {
    const message = createBaseInnerOp();
    message.hash = object.hash ?? 0;
    message.prefix = object.prefix ?? new Uint8Array(0);
    message.suffix = object.suffix ?? new Uint8Array(0);
    return message;
  },
};

function createBaseProofSpec(): ProofSpec {
  return {
    leaf_spec: undefined,
    inner_spec: undefined,
    max_depth: 0,
    min_depth: 0,
    prehash_key_before_comparison: false,
  };
}

export const ProofSpec = {
  $type: "cosmos.ics23.v1.ProofSpec" as const,

  encode(message: ProofSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaf_spec !== undefined) {
      LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).ldelim();
    }
    if (message.inner_spec !== undefined) {
      InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).ldelim();
    }
    if (message.max_depth !== 0) {
      writer.uint32(24).int32(message.max_depth);
    }
    if (message.min_depth !== 0) {
      writer.uint32(32).int32(message.min_depth);
    }
    if (message.prehash_key_before_comparison === true) {
      writer.uint32(40).bool(message.prehash_key_before_comparison);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaf_spec = LeafOp.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inner_spec = InnerSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_depth = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.min_depth = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.prehash_key_before_comparison = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProofSpec {
    return {
      leaf_spec: isSet(object.leaf_spec) ? LeafOp.fromJSON(object.leaf_spec) : undefined,
      inner_spec: isSet(object.inner_spec) ? InnerSpec.fromJSON(object.inner_spec) : undefined,
      max_depth: isSet(object.max_depth) ? globalThis.Number(object.max_depth) : 0,
      min_depth: isSet(object.min_depth) ? globalThis.Number(object.min_depth) : 0,
      prehash_key_before_comparison: isSet(object.prehash_key_before_comparison)
        ? globalThis.Boolean(object.prehash_key_before_comparison)
        : false,
    };
  },

  toJSON(message: ProofSpec): unknown {
    const obj: any = {};
    if (message.leaf_spec !== undefined) {
      obj.leaf_spec = LeafOp.toJSON(message.leaf_spec);
    }
    if (message.inner_spec !== undefined) {
      obj.inner_spec = InnerSpec.toJSON(message.inner_spec);
    }
    if (message.max_depth !== 0) {
      obj.max_depth = Math.round(message.max_depth);
    }
    if (message.min_depth !== 0) {
      obj.min_depth = Math.round(message.min_depth);
    }
    if (message.prehash_key_before_comparison === true) {
      obj.prehash_key_before_comparison = message.prehash_key_before_comparison;
    }
    return obj;
  },

  create(base?: DeepPartial<ProofSpec>): ProofSpec {
    return ProofSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProofSpec>): ProofSpec {
    const message = createBaseProofSpec();
    message.leaf_spec = (object.leaf_spec !== undefined && object.leaf_spec !== null)
      ? LeafOp.fromPartial(object.leaf_spec)
      : undefined;
    message.inner_spec = (object.inner_spec !== undefined && object.inner_spec !== null)
      ? InnerSpec.fromPartial(object.inner_spec)
      : undefined;
    message.max_depth = object.max_depth ?? 0;
    message.min_depth = object.min_depth ?? 0;
    message.prehash_key_before_comparison = object.prehash_key_before_comparison ?? false;
    return message;
  },
};

function createBaseInnerSpec(): InnerSpec {
  return {
    child_order: [],
    child_size: 0,
    min_prefix_length: 0,
    max_prefix_length: 0,
    empty_child: new Uint8Array(0),
    hash: 0,
  };
}

export const InnerSpec = {
  $type: "cosmos.ics23.v1.InnerSpec" as const,

  encode(message: InnerSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.child_order) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.child_size !== 0) {
      writer.uint32(16).int32(message.child_size);
    }
    if (message.min_prefix_length !== 0) {
      writer.uint32(24).int32(message.min_prefix_length);
    }
    if (message.max_prefix_length !== 0) {
      writer.uint32(32).int32(message.max_prefix_length);
    }
    if (message.empty_child.length !== 0) {
      writer.uint32(42).bytes(message.empty_child);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InnerSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.child_order.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.child_order.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.child_size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.min_prefix_length = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.max_prefix_length = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.empty_child = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hash = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InnerSpec {
    return {
      child_order: globalThis.Array.isArray(object?.child_order)
        ? object.child_order.map((e: any) => globalThis.Number(e))
        : [],
      child_size: isSet(object.child_size) ? globalThis.Number(object.child_size) : 0,
      min_prefix_length: isSet(object.min_prefix_length) ? globalThis.Number(object.min_prefix_length) : 0,
      max_prefix_length: isSet(object.max_prefix_length) ? globalThis.Number(object.max_prefix_length) : 0,
      empty_child: isSet(object.empty_child) ? bytesFromBase64(object.empty_child) : new Uint8Array(0),
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
    };
  },

  toJSON(message: InnerSpec): unknown {
    const obj: any = {};
    if (message.child_order?.length) {
      obj.child_order = message.child_order.map((e) => Math.round(e));
    }
    if (message.child_size !== 0) {
      obj.child_size = Math.round(message.child_size);
    }
    if (message.min_prefix_length !== 0) {
      obj.min_prefix_length = Math.round(message.min_prefix_length);
    }
    if (message.max_prefix_length !== 0) {
      obj.max_prefix_length = Math.round(message.max_prefix_length);
    }
    if (message.empty_child.length !== 0) {
      obj.empty_child = base64FromBytes(message.empty_child);
    }
    if (message.hash !== 0) {
      obj.hash = hashOpToJSON(message.hash);
    }
    return obj;
  },

  create(base?: DeepPartial<InnerSpec>): InnerSpec {
    return InnerSpec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InnerSpec>): InnerSpec {
    const message = createBaseInnerSpec();
    message.child_order = object.child_order?.map((e) => e) || [];
    message.child_size = object.child_size ?? 0;
    message.min_prefix_length = object.min_prefix_length ?? 0;
    message.max_prefix_length = object.max_prefix_length ?? 0;
    message.empty_child = object.empty_child ?? new Uint8Array(0);
    message.hash = object.hash ?? 0;
    return message;
  },
};

function createBaseBatchProof(): BatchProof {
  return { entries: [] };
}

export const BatchProof = {
  $type: "cosmos.ics23.v1.BatchProof" as const,

  encode(message: BatchProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      BatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchProof {
    return {
      entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => BatchEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: BatchProof): unknown {
    const obj: any = {};
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => BatchEntry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BatchProof>): BatchProof {
    return BatchProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BatchProof>): BatchProof {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map((e) => BatchEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchEntry(): BatchEntry {
  return { exist: undefined, nonexist: undefined };
}

export const BatchEntry = {
  $type: "cosmos.ics23.v1.BatchEntry" as const,

  encode(message: BatchEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exist = ExistenceProof.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchEntry {
    return {
      exist: isSet(object.exist) ? ExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? NonExistenceProof.fromJSON(object.nonexist) : undefined,
    };
  },

  toJSON(message: BatchEntry): unknown {
    const obj: any = {};
    if (message.exist !== undefined) {
      obj.exist = ExistenceProof.toJSON(message.exist);
    }
    if (message.nonexist !== undefined) {
      obj.nonexist = NonExistenceProof.toJSON(message.nonexist);
    }
    return obj;
  },

  create(base?: DeepPartial<BatchEntry>): BatchEntry {
    return BatchEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BatchEntry>): BatchEntry {
    const message = createBaseBatchEntry();
    message.exist = (object.exist !== undefined && object.exist !== null)
      ? ExistenceProof.fromPartial(object.exist)
      : undefined;
    message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
      ? NonExistenceProof.fromPartial(object.nonexist)
      : undefined;
    return message;
  },
};

function createBaseCompressedBatchProof(): CompressedBatchProof {
  return { entries: [], lookup_inners: [] };
}

export const CompressedBatchProof = {
  $type: "cosmos.ics23.v1.CompressedBatchProof" as const,

  encode(message: CompressedBatchProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookup_inners) {
      InnerOp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lookup_inners.push(InnerOp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompressedBatchProof {
    return {
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CompressedBatchEntry.fromJSON(e))
        : [],
      lookup_inners: globalThis.Array.isArray(object?.lookup_inners)
        ? object.lookup_inners.map((e: any) => InnerOp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CompressedBatchProof): unknown {
    const obj: any = {};
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => CompressedBatchEntry.toJSON(e));
    }
    if (message.lookup_inners?.length) {
      obj.lookup_inners = message.lookup_inners.map((e) => InnerOp.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CompressedBatchProof>): CompressedBatchProof {
    return CompressedBatchProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompressedBatchProof>): CompressedBatchProof {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map((e) => CompressedBatchEntry.fromPartial(e)) || [];
    message.lookup_inners = object.lookup_inners?.map((e) => InnerOp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCompressedBatchEntry(): CompressedBatchEntry {
  return { exist: undefined, nonexist: undefined };
}

export const CompressedBatchEntry = {
  $type: "cosmos.ics23.v1.CompressedBatchEntry" as const,

  encode(message: CompressedBatchEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedBatchEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompressedBatchEntry {
    return {
      exist: isSet(object.exist) ? CompressedExistenceProof.fromJSON(object.exist) : undefined,
      nonexist: isSet(object.nonexist) ? CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined,
    };
  },

  toJSON(message: CompressedBatchEntry): unknown {
    const obj: any = {};
    if (message.exist !== undefined) {
      obj.exist = CompressedExistenceProof.toJSON(message.exist);
    }
    if (message.nonexist !== undefined) {
      obj.nonexist = CompressedNonExistenceProof.toJSON(message.nonexist);
    }
    return obj;
  },

  create(base?: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry {
    return CompressedBatchEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry {
    const message = createBaseCompressedBatchEntry();
    message.exist = (object.exist !== undefined && object.exist !== null)
      ? CompressedExistenceProof.fromPartial(object.exist)
      : undefined;
    message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
      ? CompressedNonExistenceProof.fromPartial(object.nonexist)
      : undefined;
    return message;
  },
};

function createBaseCompressedExistenceProof(): CompressedExistenceProof {
  return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}

export const CompressedExistenceProof = {
  $type: "cosmos.ics23.v1.CompressedExistenceProof" as const,

  encode(message: CompressedExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedExistenceProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leaf = LeafOp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 32) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompressedExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
      leaf: isSet(object.leaf) ? LeafOp.fromJSON(object.leaf) : undefined,
      path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: CompressedExistenceProof): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.leaf !== undefined) {
      obj.leaf = LeafOp.toJSON(message.leaf);
    }
    if (message.path?.length) {
      obj.path = message.path.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof {
    return CompressedExistenceProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof {
    const message = createBaseCompressedExistenceProof();
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    message.leaf = (object.leaf !== undefined && object.leaf !== null) ? LeafOp.fromPartial(object.leaf) : undefined;
    message.path = object.path?.map((e) => e) || [];
    return message;
  },
};

function createBaseCompressedNonExistenceProof(): CompressedNonExistenceProof {
  return { key: new Uint8Array(0), left: undefined, right: undefined };
}

export const CompressedNonExistenceProof = {
  $type: "cosmos.ics23.v1.CompressedNonExistenceProof" as const,

  encode(message: CompressedNonExistenceProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompressedNonExistenceProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompressedNonExistenceProof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      left: isSet(object.left) ? CompressedExistenceProof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? CompressedExistenceProof.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: CompressedNonExistenceProof): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.left !== undefined) {
      obj.left = CompressedExistenceProof.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = CompressedExistenceProof.toJSON(message.right);
    }
    return obj;
  },

  create(base?: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof {
    return CompressedNonExistenceProof.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof {
    const message = createBaseCompressedNonExistenceProof();
    message.key = object.key ?? new Uint8Array(0);
    message.left = (object.left !== undefined && object.left !== null)
      ? CompressedExistenceProof.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? CompressedExistenceProof.fromPartial(object.right)
      : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
