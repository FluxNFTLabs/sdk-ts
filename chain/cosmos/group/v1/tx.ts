/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  MemberRequest,
  ProposalExecutorResult,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  VoteOption,
  voteOptionFromJSON,
  voteOptionToJSON,
} from "./types";

/** Since: cosmos-sdk 0.46 */

/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}

export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}

export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}

/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  group_id: string;
}

/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates: MemberRequest[];
}

/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}

/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** new_admin is the group new admin account address. */
  new_admin: string;
}

/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}

/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is the updated group's metadata. */
  metadata: string;
}

/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}

/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy: Any | undefined;
}

/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}

/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  group_policy_address: string;
  /** new_admin is the new group policy admin. */
  new_admin: string;
}

/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}

/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  group_metadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  group_policy_metadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  group_policy_as_admin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy: Any | undefined;
}

/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  group_id: string;
  /** group_policy_address is the account address of the newly created group policy. */
  group_policy_address: string;
}

/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decision_policy: Any | undefined;
}

/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}

/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** metadata is the group policy metadata to be updated. */
  metadata: string;
}

/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}

/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
  /**
   * title is the title of the proposal.
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal.
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}

/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
}

/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}

/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}

/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}

/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}

/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}

/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}

/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
}

/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return { admin: "", members: [], metadata: "" };
}

export const MsgCreateGroup = {
  $type: "cosmos.group.v1.MsgCreateGroup" as const,

  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.members?.length) {
      obj.members = message.members.map((e) => MemberRequest.toJSON(e));
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    return MsgCreateGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map((e) => MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return { group_id: "0" };
}

export const MsgCreateGroupResponse = {
  $type: "cosmos.group.v1.MsgCreateGroupResponse" as const,

  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
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

  fromJSON(object: any): MsgCreateGroupResponse {
    return { group_id: isSet(object.group_id) ? String(object.group_id) : "0" };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return { admin: "", group_id: "0", member_updates: [] };
}

export const MsgUpdateGroupMembers = {
  $type: "cosmos.group.v1.MsgUpdateGroupMembers" as const,

  encode(message: MsgUpdateGroupMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    for (const v of message.member_updates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.member_updates.push(MemberRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      member_updates: Array.isArray(object?.member_updates)
        ? object.member_updates.map((e: any) => MemberRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.member_updates?.length) {
      obj.member_updates = message.member_updates.map((e) => MemberRequest.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id ?? "0";
    message.member_updates = object.member_updates?.map((e) => MemberRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}

export const MsgUpdateGroupMembersResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupMembersResponse" as const,

  encode(_: MsgUpdateGroupMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
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

  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
};

function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return { admin: "", group_id: "0", new_admin: "" };
}

export const MsgUpdateGroupAdmin = {
  $type: "cosmos.group.v1.MsgUpdateGroupAdmin" as const,

  encode(message: MsgUpdateGroupAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_admin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
    };
  },

  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.new_admin !== "") {
      obj.new_admin = message.new_admin;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id ?? "0";
    message.new_admin = object.new_admin ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}

export const MsgUpdateGroupAdminResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupAdminResponse" as const,

  encode(_: MsgUpdateGroupAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
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

  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
};

function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return { admin: "", group_id: "0", metadata: "" };
}

export const MsgUpdateGroupMetadata = {
  $type: "cosmos.group.v1.MsgUpdateGroupMetadata" as const,

  encode(message: MsgUpdateGroupMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id ?? "0";
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}

export const MsgUpdateGroupMetadataResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupMetadataResponse" as const,

  encode(_: MsgUpdateGroupMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
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

  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
};

function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return { admin: "", group_id: "0", metadata: "", decision_policy: undefined };
}

export const MsgCreateGroupPolicy = {
  $type: "cosmos.group.v1.MsgCreateGroupPolicy" as const,

  encode(message: MsgCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decision_policy !== undefined) {
      Any.encode(message.decision_policy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.group_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.decision_policy = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
    };
  },

  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    if (message.decision_policy !== undefined) {
      obj.decision_policy = Any.toJSON(message.decision_policy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.group_id = object.group_id ?? "0";
    message.metadata = object.metadata ?? "";
    message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
      ? Any.fromPartial(object.decision_policy)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return { address: "" };
}

export const MsgCreateGroupPolicyResponse = {
  $type: "cosmos.group.v1.MsgCreateGroupPolicyResponse" as const,

  encode(message: MsgCreateGroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
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

  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return { admin: "", group_policy_address: "", new_admin: "" };
}

export const MsgUpdateGroupPolicyAdmin = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyAdmin" as const,

  encode(message: MsgUpdateGroupPolicyAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.group_policy_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_admin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
    };
  },

  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_policy_address !== "") {
      obj.group_policy_address = message.group_policy_address;
    }
    if (message.new_admin !== "") {
      obj.new_admin = message.new_admin;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.new_admin = object.new_admin ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}

export const MsgUpdateGroupPolicyAdminResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse" as const,

  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
};

function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    group_metadata: "",
    group_policy_metadata: "",
    group_policy_as_admin: false,
    decision_policy: undefined,
  };
}

export const MsgCreateGroupWithPolicy = {
  $type: "cosmos.group.v1.MsgCreateGroupWithPolicy" as const,

  encode(message: MsgCreateGroupWithPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.group_metadata !== "") {
      writer.uint32(26).string(message.group_metadata);
    }
    if (message.group_policy_metadata !== "") {
      writer.uint32(34).string(message.group_policy_metadata);
    }
    if (message.group_policy_as_admin === true) {
      writer.uint32(40).bool(message.group_policy_as_admin);
    }
    if (message.decision_policy !== undefined) {
      Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.group_metadata = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.group_policy_metadata = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.group_policy_as_admin = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.decision_policy = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      group_metadata: isSet(object.group_metadata) ? String(object.group_metadata) : "",
      group_policy_metadata: isSet(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
      group_policy_as_admin: isSet(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
    };
  },

  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.members?.length) {
      obj.members = message.members.map((e) => MemberRequest.toJSON(e));
    }
    if (message.group_metadata !== "") {
      obj.group_metadata = message.group_metadata;
    }
    if (message.group_policy_metadata !== "") {
      obj.group_policy_metadata = message.group_policy_metadata;
    }
    if (message.group_policy_as_admin === true) {
      obj.group_policy_as_admin = message.group_policy_as_admin;
    }
    if (message.decision_policy !== undefined) {
      obj.decision_policy = Any.toJSON(message.decision_policy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map((e) => MemberRequest.fromPartial(e)) || [];
    message.group_metadata = object.group_metadata ?? "";
    message.group_policy_metadata = object.group_policy_metadata ?? "";
    message.group_policy_as_admin = object.group_policy_as_admin ?? false;
    message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
      ? Any.fromPartial(object.decision_policy)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return { group_id: "0", group_policy_address: "" };
}

export const MsgCreateGroupWithPolicyResponse = {
  $type: "cosmos.group.v1.MsgCreateGroupWithPolicyResponse" as const,

  encode(message: MsgCreateGroupWithPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
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

          message.group_policy_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
    };
  },

  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    if (message.group_policy_address !== "") {
      obj.group_policy_address = message.group_policy_address;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.group_id = object.group_id ?? "0";
    message.group_policy_address = object.group_policy_address ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return { admin: "", group_policy_address: "", decision_policy: undefined };
}

export const MsgUpdateGroupPolicyDecisionPolicy = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy" as const,

  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.decision_policy !== undefined) {
      Any.encode(message.decision_policy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.group_policy_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.decision_policy = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
    };
  },

  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_policy_address !== "") {
      obj.group_policy_address = message.group_policy_address;
    }
    if (message.decision_policy !== undefined) {
      obj.decision_policy = Any.toJSON(message.decision_policy);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
      ? Any.fromPartial(object.decision_policy)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}

export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse" as const,

  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return { admin: "", group_policy_address: "", metadata: "" };
}

export const MsgUpdateGroupPolicyMetadata = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyMetadata" as const,

  encode(message: MsgUpdateGroupPolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.group_policy_address !== "") {
      writer.uint32(18).string(message.group_policy_address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.group_policy_address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.group_policy_address !== "") {
      obj.group_policy_address = message.group_policy_address;
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.group_policy_address = object.group_policy_address ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}

export const MsgUpdateGroupPolicyMetadataResponse = {
  $type: "cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse" as const,

  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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

  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return { group_policy_address: "", proposers: [], metadata: "", messages: [], exec: 0, title: "", summary: "" };
}

export const MsgSubmitProposal = {
  $type: "cosmos.group.v1.MsgSubmitProposal" as const,

  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_policy_address !== "") {
      writer.uint32(10).string(message.group_policy_address);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group_policy_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposers.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.messages.push(Any.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.exec = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.title = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.summary = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    if (message.group_policy_address !== "") {
      obj.group_policy_address = message.group_policy_address;
    }
    if (message.proposers?.length) {
      obj.proposers = message.proposers;
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Any.toJSON(e));
    }
    if (message.exec !== 0) {
      obj.exec = execToJSON(message.exec);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    return MsgSubmitProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.group_policy_address = object.group_policy_address ?? "";
    message.proposers = object.proposers?.map((e) => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return { proposal_id: "0" };
}

export const MsgSubmitProposalResponse = {
  $type: "cosmos.group.v1.MsgSubmitProposalResponse" as const,

  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
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

  fromJSON(object: any): MsgSubmitProposalResponse {
    return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return { proposal_id: "0", address: "" };
}

export const MsgWithdrawProposal = {
  $type: "cosmos.group.v1.MsgWithdrawProposal" as const,

  encode(message: MsgWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
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

  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    return MsgWithdrawProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposal_id = object.proposal_id ?? "0";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}

export const MsgWithdrawProposalResponse = {
  $type: "cosmos.group.v1.MsgWithdrawProposalResponse" as const,

  encode(_: MsgWithdrawProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
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

  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
};

function createBaseMsgVote(): MsgVote {
  return { proposal_id: "0", voter: "", option: 0, metadata: "", exec: 0 };
}

export const MsgVote = {
  $type: "cosmos.group.v1.MsgVote" as const,

  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
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
          if (tag !== 18) {
            break;
          }

          message.voter = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.option = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.exec = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if (message.option !== 0) {
      obj.option = voteOptionToJSON(message.option);
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    if (message.exec !== 0) {
      obj.exec = execToJSON(message.exec);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgVote>): MsgVote {
    return MsgVote.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposal_id = object.proposal_id ?? "0";
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  $type: "cosmos.group.v1.MsgVoteResponse" as const,

  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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

  fromJSON(_: any): MsgVoteResponse {
    return {};
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    return MsgVoteResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
};

function createBaseMsgExec(): MsgExec {
  return { proposal_id: "0", executor: "" };
}

export const MsgExec = {
  $type: "cosmos.group.v1.MsgExec" as const,

  encode(message: MsgExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
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
          if (tag !== 18) {
            break;
          }

          message.executor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExec {
    return {
      proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
      executor: isSet(object.executor) ? String(object.executor) : "",
    };
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.executor !== "") {
      obj.executor = message.executor;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgExec>): MsgExec {
    return MsgExec.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposal_id = object.proposal_id ?? "0";
    message.executor = object.executor ?? "";
    return message;
  },
};

function createBaseMsgExecResponse(): MsgExecResponse {
  return { result: 0 };
}

export const MsgExecResponse = {
  $type: "cosmos.group.v1.MsgExecResponse" as const,

  encode(message: MsgExecResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExecResponse {
    return { result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = proposalExecutorResultToJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<MsgExecResponse>): MsgExecResponse {
    return MsgExecResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return { address: "", group_id: "0" };
}

export const MsgLeaveGroup = {
  $type: "cosmos.group.v1.MsgLeaveGroup" as const,

  encode(message: MsgLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
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
          if (tag !== 16) {
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

  fromJSON(object: any): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
    };
  },

  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.group_id !== "0") {
      obj.group_id = message.group_id;
    }
    return obj;
  },

  create(base?: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    return MsgLeaveGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}

export const MsgLeaveGroupResponse = {
  $type: "cosmos.group.v1.MsgLeaveGroupResponse" as const,

  encode(_: MsgLeaveGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
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

  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },

  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
};

/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
  /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
  CreateGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse>;
  /** UpdateGroupMembers updates the group members with given group id and admin address. */
  UpdateGroupMembers(
    request: DeepPartial<MsgUpdateGroupMembers>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupMembersResponse>;
  /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
  UpdateGroupAdmin(
    request: DeepPartial<MsgUpdateGroupAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupAdminResponse>;
  /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
  UpdateGroupMetadata(
    request: DeepPartial<MsgUpdateGroupMetadata>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupMetadataResponse>;
  /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
  CreateGroupPolicy(
    request: DeepPartial<MsgCreateGroupPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateGroupPolicyResponse>;
  /** CreateGroupWithPolicy creates a new group with policy. */
  CreateGroupWithPolicy(
    request: DeepPartial<MsgCreateGroupWithPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateGroupWithPolicyResponse>;
  /** UpdateGroupPolicyAdmin updates a group policy admin. */
  UpdateGroupPolicyAdmin(
    request: DeepPartial<MsgUpdateGroupPolicyAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyAdminResponse>;
  /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
  UpdateGroupPolicyDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
  /** UpdateGroupPolicyMetadata updates a group policy metadata. */
  UpdateGroupPolicyMetadata(
    request: DeepPartial<MsgUpdateGroupPolicyMetadata>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse>;
  /** SubmitProposal submits a new proposal. */
  SubmitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse>;
  /** WithdrawProposal withdraws a proposal. */
  WithdrawProposal(
    request: DeepPartial<MsgWithdrawProposal>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawProposalResponse>;
  /** Vote allows a voter to vote on a proposal. */
  Vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse>;
  /** Exec executes a proposal. */
  Exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse>;
  /** LeaveGroup allows a group member to leave the group. */
  LeaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGroup = this.CreateGroup.bind(this);
    this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
    this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
    this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
    this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
    this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
    this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
    this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
    this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.WithdrawProposal = this.WithdrawProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Exec = this.Exec.bind(this);
    this.LeaveGroup = this.LeaveGroup.bind(this);
  }

  CreateGroup(request: DeepPartial<MsgCreateGroup>, metadata?: grpc.Metadata): Promise<MsgCreateGroupResponse> {
    return this.rpc.unary(MsgCreateGroupDesc, MsgCreateGroup.fromPartial(request), metadata);
  }

  UpdateGroupMembers(
    request: DeepPartial<MsgUpdateGroupMembers>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupMembersResponse> {
    return this.rpc.unary(MsgUpdateGroupMembersDesc, MsgUpdateGroupMembers.fromPartial(request), metadata);
  }

  UpdateGroupAdmin(
    request: DeepPartial<MsgUpdateGroupAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupAdminDesc, MsgUpdateGroupAdmin.fromPartial(request), metadata);
  }

  UpdateGroupMetadata(
    request: DeepPartial<MsgUpdateGroupMetadata>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupMetadataResponse> {
    return this.rpc.unary(MsgUpdateGroupMetadataDesc, MsgUpdateGroupMetadata.fromPartial(request), metadata);
  }

  CreateGroupPolicy(
    request: DeepPartial<MsgCreateGroupPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateGroupPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupPolicyDesc, MsgCreateGroupPolicy.fromPartial(request), metadata);
  }

  CreateGroupWithPolicy(
    request: DeepPartial<MsgCreateGroupWithPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateGroupWithPolicyResponse> {
    return this.rpc.unary(MsgCreateGroupWithPolicyDesc, MsgCreateGroupWithPolicy.fromPartial(request), metadata);
  }

  UpdateGroupPolicyAdmin(
    request: DeepPartial<MsgUpdateGroupPolicyAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyAdminResponse> {
    return this.rpc.unary(MsgUpdateGroupPolicyAdminDesc, MsgUpdateGroupPolicyAdmin.fromPartial(request), metadata);
  }

  UpdateGroupPolicyDecisionPolicy(
    request: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse> {
    return this.rpc.unary(
      MsgUpdateGroupPolicyDecisionPolicyDesc,
      MsgUpdateGroupPolicyDecisionPolicy.fromPartial(request),
      metadata,
    );
  }

  UpdateGroupPolicyMetadata(
    request: DeepPartial<MsgUpdateGroupPolicyMetadata>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateGroupPolicyMetadataResponse> {
    return this.rpc.unary(
      MsgUpdateGroupPolicyMetadataDesc,
      MsgUpdateGroupPolicyMetadata.fromPartial(request),
      metadata,
    );
  }

  SubmitProposal(
    request: DeepPartial<MsgSubmitProposal>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request), metadata);
  }

  WithdrawProposal(
    request: DeepPartial<MsgWithdrawProposal>,
    metadata?: grpc.Metadata,
  ): Promise<MsgWithdrawProposalResponse> {
    return this.rpc.unary(MsgWithdrawProposalDesc, MsgWithdrawProposal.fromPartial(request), metadata);
  }

  Vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse> {
    return this.rpc.unary(MsgVoteDesc, MsgVote.fromPartial(request), metadata);
  }

  Exec(request: DeepPartial<MsgExec>, metadata?: grpc.Metadata): Promise<MsgExecResponse> {
    return this.rpc.unary(MsgExecDesc, MsgExec.fromPartial(request), metadata);
  }

  LeaveGroup(request: DeepPartial<MsgLeaveGroup>, metadata?: grpc.Metadata): Promise<MsgLeaveGroupResponse> {
    return this.rpc.unary(MsgLeaveGroupDesc, MsgLeaveGroup.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "cosmos.group.v1.Msg" };

export const MsgCreateGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateGroup.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateGroupResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupMembersDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupMembers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupMembers.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupMembersResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupAdminDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupAdmin.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupAdminResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupMetadata",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupMetadata.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupMetadataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgCreateGroupPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroupPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateGroupPolicy.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateGroupPolicyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgCreateGroupWithPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "CreateGroupWithPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateGroupWithPolicy.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCreateGroupWithPolicyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupPolicyAdminDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupPolicyAdmin.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupPolicyAdminResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupPolicyDecisionPolicyDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyDecisionPolicy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupPolicyDecisionPolicy.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupPolicyDecisionPolicyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateGroupPolicyMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateGroupPolicyMetadata",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateGroupPolicyMetadata.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateGroupPolicyMetadataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgSubmitProposalDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitProposal.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSubmitProposalResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgWithdrawProposalDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWithdrawProposal.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgWithdrawProposalResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgVote.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgVoteResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgExecDesc: UnaryMethodDefinitionish = {
  methodName: "Exec",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExec.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgExecResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgLeaveGroupDesc: UnaryMethodDefinitionish = {
  methodName: "LeaveGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgLeaveGroup.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgLeaveGroupResponse.decode(data);
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

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
