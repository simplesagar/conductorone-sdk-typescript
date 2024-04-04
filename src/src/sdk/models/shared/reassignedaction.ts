/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The ReassignedAction object describes the outcome of a policy step that has been reassigned.
 */
export type ReassignedAction = {
    /**
     * The ID of the policy step that was created as a result of this reassignment.
     */
    newPolicyStepId?: string | undefined;
    reassignedAt?: Date | undefined;
    /**
     * The UserID of the person who reassigned this step.
     */
    userId?: string | undefined;
};

/** @internal */
export namespace ReassignedAction$ {
    export type Inbound = {
        newPolicyStepId?: string | undefined;
        reassignedAt?: string | undefined;
        userId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ReassignedAction, z.ZodTypeDef, Inbound> = z
        .object({
            newPolicyStepId: z.string().optional(),
            reassignedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            userId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.newPolicyStepId === undefined
                    ? null
                    : { newPolicyStepId: v.newPolicyStepId }),
                ...(v.reassignedAt === undefined ? null : { reassignedAt: v.reassignedAt }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
            };
        });

    export type Outbound = {
        newPolicyStepId?: string | undefined;
        reassignedAt?: string | undefined;
        userId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReassignedAction> = z
        .object({
            newPolicyStepId: z.string().optional(),
            reassignedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            userId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.newPolicyStepId === undefined
                    ? null
                    : { newPolicyStepId: v.newPolicyStepId }),
                ...(v.reassignedAt === undefined ? null : { reassignedAt: v.reassignedAt }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
            };
        });
}
