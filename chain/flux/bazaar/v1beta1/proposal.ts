/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ClassCommission } from "./product";

export interface UpdateClassCommissionsProposal {
  title: string;
  description: string;
  class_commissions: ClassCommission[];
}

function createBaseUpdateClassCommissionsProposal(): UpdateClassCommissionsProposal {
  return { title: "", description: "", class_commissions: [] };
}

export const UpdateClassCommissionsProposal = {
  $type: "flux.bazaar.v1beta1.UpdateClassCommissionsProposal" as const,

  encode(message: UpdateClassCommissionsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.class_commissions) {
      ClassCommission.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateClassCommissionsProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateClassCommissionsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.class_commissions.push(ClassCommission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateClassCommissionsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      class_commissions: Array.isArray(object?.class_commissions)
        ? object.class_commissions.map((e: any) => ClassCommission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateClassCommissionsProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.class_commissions?.length) {
      obj.class_commissions = message.class_commissions.map((e) => ClassCommission.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateClassCommissionsProposal>): UpdateClassCommissionsProposal {
    return UpdateClassCommissionsProposal.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateClassCommissionsProposal>): UpdateClassCommissionsProposal {
    const message = createBaseUpdateClassCommissionsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.class_commissions = object.class_commissions?.map((e) => ClassCommission.fromPartial(e)) || [];
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
