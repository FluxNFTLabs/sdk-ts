/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Deposit, DepositParams, Params, Proposal, TallyParams, Vote, VotingParams } from "./gov";

/** Since: cosmos-sdk 0.46 */

/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: string;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   *
   * @deprecated
   */
  deposit_params:
    | DepositParams
    | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   *
   * @deprecated
   */
  voting_params:
    | VotingParams
    | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   *
   * @deprecated
   */
  tally_params:
    | TallyParams
    | undefined;
  /**
   * params defines all the paramaters of x/gov module.
   *
   * Since: cosmos-sdk 0.47
   */
  params:
    | Params
    | undefined;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   *
   * Since: cosmos-sdk 0.50
   */
  constitution: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    starting_proposal_id: "0",
    deposits: [],
    votes: [],
    proposals: [],
    deposit_params: undefined,
    voting_params: undefined,
    tally_params: undefined,
    params: undefined,
    constitution: "",
  };
}

export const GenesisState = {
  $type: "cosmos.gov.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.starting_proposal_id !== "0") {
      writer.uint32(8).uint64(message.starting_proposal_id);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit_params !== undefined) {
      DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
    }
    if (message.voting_params !== undefined) {
      VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
    }
    if (message.tally_params !== undefined) {
      TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
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
          if (tag !== 8) {
            break;
          }

          message.starting_proposal_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.votes.push(Vote.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deposit_params = DepositParams.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.voting_params = VotingParams.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tally_params = TallyParams.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.constitution = reader.string();
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
      starting_proposal_id: isSet(object.starting_proposal_id) ? globalThis.String(object.starting_proposal_id) : "0",
      deposits: globalThis.Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      votes: globalThis.Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      proposals: globalThis.Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      deposit_params: isSet(object.deposit_params) ? DepositParams.fromJSON(object.deposit_params) : undefined,
      voting_params: isSet(object.voting_params) ? VotingParams.fromJSON(object.voting_params) : undefined,
      tally_params: isSet(object.tally_params) ? TallyParams.fromJSON(object.tally_params) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      constitution: isSet(object.constitution) ? globalThis.String(object.constitution) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.starting_proposal_id !== "0") {
      obj.starting_proposal_id = message.starting_proposal_id;
    }
    if (message.deposits?.length) {
      obj.deposits = message.deposits.map((e) => Deposit.toJSON(e));
    }
    if (message.votes?.length) {
      obj.votes = message.votes.map((e) => Vote.toJSON(e));
    }
    if (message.proposals?.length) {
      obj.proposals = message.proposals.map((e) => Proposal.toJSON(e));
    }
    if (message.deposit_params !== undefined) {
      obj.deposit_params = DepositParams.toJSON(message.deposit_params);
    }
    if (message.voting_params !== undefined) {
      obj.voting_params = VotingParams.toJSON(message.voting_params);
    }
    if (message.tally_params !== undefined) {
      obj.tally_params = TallyParams.toJSON(message.tally_params);
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.constitution !== "") {
      obj.constitution = message.constitution;
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.starting_proposal_id = object.starting_proposal_id ?? "0";
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.deposit_params = (object.deposit_params !== undefined && object.deposit_params !== null)
      ? DepositParams.fromPartial(object.deposit_params)
      : undefined;
    message.voting_params = (object.voting_params !== undefined && object.voting_params !== null)
      ? VotingParams.fromPartial(object.voting_params)
      : undefined;
    message.tally_params = (object.tally_params !== undefined && object.tally_params !== null)
      ? TallyParams.fromPartial(object.tally_params)
      : undefined;
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.constitution = object.constitution ?? "";
    return message;
  },
};

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
