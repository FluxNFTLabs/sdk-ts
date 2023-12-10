/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ProposalExecutorResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  ProposalStatus,
  proposalStatusFromJSON,
  proposalStatusToJSON,
  TallyResult,
} from "./types";

/** Since: cosmos-sdk 0.46 */

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** address is the account address of the group member. */
  address: string;
}

/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tally_result: TallyResult | undefined;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return { group_id: "0" };
}

export const EventCreateGroup = {
  $type: "cosmos.group.v1.EventCreateGroup" as const,

  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    return { group_id: isSet(object.group_id) ? globalThis.String(object.group_id) : "0" };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreateGroup>): EventCreateGroup {
    return EventCreateGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return { group_id: "0" };
}

export const EventUpdateGroup = {
  $type: "cosmos.group.v1.EventUpdateGroup" as const,

  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    return { group_id: isSet(object.group_id) ? globalThis.String(object.group_id) : "0" };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    return EventUpdateGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return { address: "" };
}

export const EventCreateGroupPolicy = {
  $type: "cosmos.group.v1.EventCreateGroupPolicy" as const,

  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return { address: "" };
}

export const EventUpdateGroupPolicy = {
  $type: "cosmos.group.v1.EventUpdateGroupPolicy" as const,

  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventSubmitProposal(): EventSubmitProposal {
  return { proposal_id: "0" };
}

export const EventSubmitProposal = {
  $type: "cosmos.group.v1.EventSubmitProposal" as const,

  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    return { proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0" };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    return obj;
  },

  create(base?: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    return EventSubmitProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return { proposal_id: "0" };
}

export const EventWithdrawProposal = {
  $type: "cosmos.group.v1.EventWithdrawProposal" as const,

  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    return { proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0" };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    return obj;
  },

  create(base?: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    return EventWithdrawProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventVote(): EventVote {
  return { proposal_id: "0" };
}

export const EventVote = {
  $type: "cosmos.group.v1.EventVote" as const,

  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    return { proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0" };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    return obj;
  },

  create(base?: DeepPartial<EventVote>): EventVote {
    return EventVote.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventExec(): EventExec {
  return { proposal_id: "0", result: 0, logs: "" };
}

export const EventExec = {
  $type: "cosmos.group.v1.EventExec" as const,

  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logs = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    return {
      proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0",
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0,
      logs: isSet(object.logs) ? globalThis.String(object.logs) : "",
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.result !== 0) {
      obj.result = proposalExecutorResultToJSON(message.result);
    }
    if (message.logs !== "") {
      obj.logs = message.logs;
    }
    return obj;
  },

  create(base?: DeepPartial<EventExec>): EventExec {
    return EventExec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposal_id = object.proposal_id ?? "0";
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
};

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return { group_id: "0", address: "" };
}

export const EventLeaveGroup = {
  $type: "cosmos.group.v1.EventLeaveGroup" as const,

  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventLeaveGroup {
    return {
      group_id: isSet(object.group_id) ? globalThis.String(object.group_id) : "0",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    return EventLeaveGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.group_id = object.group_id ?? "0";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventProposalPruned(): EventProposalPruned {
  return { proposal_id: "0", status: 0, tally_result: undefined };
}

export const EventProposalPruned = {
  $type: "cosmos.group.v1.EventProposalPruned" as const,

  encode(message: EventProposalPruned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tally_result !== undefined) {
      TallyResult.encode(message.tally_result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposalPruned {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tally_result = TallyResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventProposalPruned {
    return {
      proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0",
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      tally_result: isSet(object.tally_result) ? TallyResult.fromJSON(object.tally_result) : undefined,
    };
  },

  toJSON(message: EventProposalPruned): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.status !== 0) {
      obj.status = proposalStatusToJSON(message.status);
    }
    if (message.tally_result !== undefined) {
      obj.tally_result = TallyResult.toJSON(message.tally_result);
    }
    return obj;
  },

  create(base?: DeepPartial<EventProposalPruned>): EventProposalPruned {
    return EventProposalPruned.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EventProposalPruned>): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    message.proposal_id = object.proposal_id ?? "0";
    message.status = object.status ?? 0;
    message.tally_result = (object.tally_result !== undefined && object.tally_result !== null)
      ? TallyResult.fromPartial(object.tally_result)
      : undefined;
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
