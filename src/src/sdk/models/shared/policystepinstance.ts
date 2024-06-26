/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AcceptInstance, AcceptInstance$ } from "./acceptinstance";
import { ApprovalInstance, ApprovalInstance$ } from "./approvalinstance";
import { ProvisionInstance, ProvisionInstance$ } from "./provisioninstance";
import { RejectInstance, RejectInstance$ } from "./rejectinstance";
import * as z from "zod";

/**
 * The state of the step, which is either active or done.
 */
export enum PolicyStepInstanceState {
    PolicyStepStateUnspecified = "POLICY_STEP_STATE_UNSPECIFIED",
    PolicyStepStateActive = "POLICY_STEP_STATE_ACTIVE",
    PolicyStepStateDone = "POLICY_STEP_STATE_DONE",
}

/**
 * The policy step instance includes a reference to an instance of a policy step that tracks state and has a unique ID.
 *
 * @remarks
 *
 * This message contains a oneof named instance. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *   - accept
 *   - reject
 *
 */
export type PolicyStepInstance = {
    /**
     * This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
     *
     * @remarks
     *  The instance is just a marker for it being copied into an active policy.
     */
    acceptInstance?: AcceptInstance | null | undefined;
    /**
     * The approval instance object describes the way a policy step should be approved as well as its outcomes and state.
     *
     * @remarks
     *
     * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
     *   - approved
     *   - denied
     *   - reassigned
     *   - restarted
     *   - reassignedByError
     *
     */
    approvalInstance?: ApprovalInstance | null | undefined;
    /**
     * A provision instance describes the specific configuration of an executing provision policy step including actions taken and notification id.
     *
     * @remarks
     *
     * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
     *   - completed
     *   - cancelled
     *   - errored
     *   - reassignedByError
     *
     */
    provisionInstance?: ProvisionInstance | null | undefined;
    /**
     * This policy step indicates that a ticket should have a denied outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
     *
     * @remarks
     *  The instance is just a marker for it being copied into an active policy.
     */
    rejectInstance?: RejectInstance | null | undefined;
    /**
     * The ID of the PolicyStepInstance. This is required by many action submission endpoints to indicate what step you're approving.
     */
    id?: string | undefined;
    /**
     * The policy generation id refers to the version of the policy that this step was created from.
     */
    policyGenerationId?: string | undefined;
    /**
     * The state of the step, which is either active or done.
     */
    state?: PolicyStepInstanceState | undefined;
};

/** @internal */
export const PolicyStepInstanceState$ = z.nativeEnum(PolicyStepInstanceState);

/** @internal */
export namespace PolicyStepInstance$ {
    export type Inbound = {
        AcceptInstance?: AcceptInstance$.Inbound | null | undefined;
        ApprovalInstance?: ApprovalInstance$.Inbound | null | undefined;
        ProvisionInstance?: ProvisionInstance$.Inbound | null | undefined;
        RejectInstance?: RejectInstance$.Inbound | null | undefined;
        id?: string | undefined;
        policyGenerationId?: string | undefined;
        state?: PolicyStepInstanceState | undefined;
    };

    export const inboundSchema: z.ZodType<PolicyStepInstance, z.ZodTypeDef, Inbound> = z
        .object({
            AcceptInstance: z.nullable(AcceptInstance$.inboundSchema).optional(),
            ApprovalInstance: z.nullable(ApprovalInstance$.inboundSchema).optional(),
            ProvisionInstance: z.nullable(ProvisionInstance$.inboundSchema).optional(),
            RejectInstance: z.nullable(RejectInstance$.inboundSchema).optional(),
            id: z.string().optional(),
            policyGenerationId: z.string().optional(),
            state: PolicyStepInstanceState$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.AcceptInstance === undefined ? null : { acceptInstance: v.AcceptInstance }),
                ...(v.ApprovalInstance === undefined
                    ? null
                    : { approvalInstance: v.ApprovalInstance }),
                ...(v.ProvisionInstance === undefined
                    ? null
                    : { provisionInstance: v.ProvisionInstance }),
                ...(v.RejectInstance === undefined ? null : { rejectInstance: v.RejectInstance }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.policyGenerationId === undefined
                    ? null
                    : { policyGenerationId: v.policyGenerationId }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });

    export type Outbound = {
        AcceptInstance?: AcceptInstance$.Outbound | null | undefined;
        ApprovalInstance?: ApprovalInstance$.Outbound | null | undefined;
        ProvisionInstance?: ProvisionInstance$.Outbound | null | undefined;
        RejectInstance?: RejectInstance$.Outbound | null | undefined;
        id?: string | undefined;
        policyGenerationId?: string | undefined;
        state?: PolicyStepInstanceState | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PolicyStepInstance> = z
        .object({
            acceptInstance: z.nullable(AcceptInstance$.outboundSchema).optional(),
            approvalInstance: z.nullable(ApprovalInstance$.outboundSchema).optional(),
            provisionInstance: z.nullable(ProvisionInstance$.outboundSchema).optional(),
            rejectInstance: z.nullable(RejectInstance$.outboundSchema).optional(),
            id: z.string().optional(),
            policyGenerationId: z.string().optional(),
            state: PolicyStepInstanceState$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptInstance === undefined ? null : { AcceptInstance: v.acceptInstance }),
                ...(v.approvalInstance === undefined
                    ? null
                    : { ApprovalInstance: v.approvalInstance }),
                ...(v.provisionInstance === undefined
                    ? null
                    : { ProvisionInstance: v.provisionInstance }),
                ...(v.rejectInstance === undefined ? null : { RejectInstance: v.rejectInstance }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.policyGenerationId === undefined
                    ? null
                    : { policyGenerationId: v.policyGenerationId }),
                ...(v.state === undefined ? null : { state: v.state }),
            };
        });
}
