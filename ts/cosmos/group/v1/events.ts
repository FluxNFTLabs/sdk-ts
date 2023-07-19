/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ProposalExecutorResult, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";

/** Since: cosmos-sdk 0.46 */

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: string;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: string;
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
  proposalId: string;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: string;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: string;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: string;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: string;
  /** address is the account address of the group member. */
  address: string;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return { groupId: "0" };
}

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "0") {
      writer.uint32(8).uint64(message.groupId);
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

          message.groupId = longToString(reader.uint64() as Long);
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
    return { groupId: isSet(object.groupId) ? String(object.groupId) : "0" };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    if (message.groupId !== "0") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventCreateGroup>): EventCreateGroup {
    return EventCreateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId ?? "0";
    return message;
  },
};

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return { groupId: "0" };
}

export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "0") {
      writer.uint32(8).uint64(message.groupId);
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

          message.groupId = longToString(reader.uint64() as Long);
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
    return { groupId: isSet(object.groupId) ? String(object.groupId) : "0" };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    if (message.groupId !== "0") {
      obj.groupId = message.groupId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    return EventUpdateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId ?? "0";
    return message;
  },
};

function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return { address: "" };
}

export const EventCreateGroupPolicy = {
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
    return { address: isSet(object.address) ? String(object.address) : "" };
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
    return { address: isSet(object.address) ? String(object.address) : "" };
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
  return { proposalId: "0" };
}

export const EventSubmitProposal = {
  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== "0") {
      writer.uint32(8).uint64(message.proposalId);
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

          message.proposalId = longToString(reader.uint64() as Long);
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
    return { proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0" };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    if (message.proposalId !== "0") {
      obj.proposalId = message.proposalId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    return EventSubmitProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposalId = object.proposalId ?? "0";
    return message;
  },
};

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return { proposalId: "0" };
}

export const EventWithdrawProposal = {
  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== "0") {
      writer.uint32(8).uint64(message.proposalId);
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

          message.proposalId = longToString(reader.uint64() as Long);
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
    return { proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0" };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    if (message.proposalId !== "0") {
      obj.proposalId = message.proposalId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    return EventWithdrawProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposalId = object.proposalId ?? "0";
    return message;
  },
};

function createBaseEventVote(): EventVote {
  return { proposalId: "0" };
}

export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== "0") {
      writer.uint32(8).uint64(message.proposalId);
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

          message.proposalId = longToString(reader.uint64() as Long);
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
    return { proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0" };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    if (message.proposalId !== "0") {
      obj.proposalId = message.proposalId;
    }
    return obj;
  },

  create(base?: DeepPartial<EventVote>): EventVote {
    return EventVote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId ?? "0";
    return message;
  },
};

function createBaseEventExec(): EventExec {
  return { proposalId: "0", result: 0, logs: "" };
}

export const EventExec = {
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== "0") {
      writer.uint32(8).uint64(message.proposalId);
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

          message.proposalId = longToString(reader.uint64() as Long);
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
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "0",
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0,
      logs: isSet(object.logs) ? String(object.logs) : "",
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    if (message.proposalId !== "0") {
      obj.proposalId = message.proposalId;
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
    message.proposalId = object.proposalId ?? "0";
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
};

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return { groupId: "0", address: "" };
}

export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "0") {
      writer.uint32(8).uint64(message.groupId);
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

          message.groupId = longToString(reader.uint64() as Long);
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
      groupId: isSet(object.groupId) ? String(object.groupId) : "0",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    if (message.groupId !== "0") {
      obj.groupId = message.groupId;
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
    message.groupId = object.groupId ?? "0";
    message.address = object.address ?? "";
    return message;
  },
};

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
