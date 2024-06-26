/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppGroupApproval, AppGroupApproval$ } from "./appgroupapproval";
import { AppOwnerApproval, AppOwnerApproval$ } from "./appownerapproval";
import { EntitlementOwnerApproval, EntitlementOwnerApproval$ } from "./entitlementownerapproval";
import { ExpressionApproval, ExpressionApproval$ } from "./expressionapproval";
import { ManagerApproval, ManagerApproval$ } from "./managerapproval";
import { SelfApproval, SelfApproval$ } from "./selfapproval";
import { UserApproval, UserApproval$ } from "./userapproval";
import * as z from "zod";

/**
 * The Approval message.
 *
 * @remarks
 *
 * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
 *   - users
 *   - manager
 *   - appOwners
 *   - group
 *   - self
 *   - entitlementOwners
 *   - expression
 *
 */
export type Approval = {
    /**
     * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
     */
    appGroupApproval?: AppGroupApproval | null | undefined;
    /**
     * App owner approval provides the configuration for an approval step when the app owner is the target.
     */
    appOwnerApproval?: AppOwnerApproval | null | undefined;
    /**
     * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
     */
    entitlementOwnerApproval?: EntitlementOwnerApproval | null | undefined;
    /**
     * The ExpressionApproval message.
     */
    expressionApproval?: ExpressionApproval | null | undefined;
    /**
     * The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task.
     */
    managerApproval?: ManagerApproval | null | undefined;
    /**
     * The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.
     */
    selfApproval?: SelfApproval | null | undefined;
    /**
     * The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.
     */
    userApproval?: UserApproval | null | undefined;
    /**
     * Configuration to allow reassignment by reviewers during this step.
     */
    allowReassignment?: boolean | undefined;
    /**
     * A field indicating whether this step is assigned.
     */
    assigned?: boolean | undefined;
    /**
     * Configuration to require a reason when approving this step.
     */
    requireApprovalReason?: boolean | undefined;
    /**
     * Configuration to require a reason when reassigning this step.
     */
    requireReassignmentReason?: boolean | undefined;
};

/** @internal */
export namespace Approval$ {
    export type Inbound = {
        AppGroupApproval?: AppGroupApproval$.Inbound | null | undefined;
        AppOwnerApproval?: AppOwnerApproval$.Inbound | null | undefined;
        EntitlementOwnerApproval?: EntitlementOwnerApproval$.Inbound | null | undefined;
        ExpressionApproval?: ExpressionApproval$.Inbound | null | undefined;
        ManagerApproval?: ManagerApproval$.Inbound | null | undefined;
        SelfApproval?: SelfApproval$.Inbound | null | undefined;
        UserApproval?: UserApproval$.Inbound | null | undefined;
        allowReassignment?: boolean | undefined;
        assigned?: boolean | undefined;
        requireApprovalReason?: boolean | undefined;
        requireReassignmentReason?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Approval, z.ZodTypeDef, Inbound> = z
        .object({
            AppGroupApproval: z.nullable(AppGroupApproval$.inboundSchema).optional(),
            AppOwnerApproval: z.nullable(AppOwnerApproval$.inboundSchema).optional(),
            EntitlementOwnerApproval: z
                .nullable(EntitlementOwnerApproval$.inboundSchema)
                .optional(),
            ExpressionApproval: z.nullable(ExpressionApproval$.inboundSchema).optional(),
            ManagerApproval: z.nullable(ManagerApproval$.inboundSchema).optional(),
            SelfApproval: z.nullable(SelfApproval$.inboundSchema).optional(),
            UserApproval: z.nullable(UserApproval$.inboundSchema).optional(),
            allowReassignment: z.boolean().optional(),
            assigned: z.boolean().optional(),
            requireApprovalReason: z.boolean().optional(),
            requireReassignmentReason: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.AppGroupApproval === undefined
                    ? null
                    : { appGroupApproval: v.AppGroupApproval }),
                ...(v.AppOwnerApproval === undefined
                    ? null
                    : { appOwnerApproval: v.AppOwnerApproval }),
                ...(v.EntitlementOwnerApproval === undefined
                    ? null
                    : { entitlementOwnerApproval: v.EntitlementOwnerApproval }),
                ...(v.ExpressionApproval === undefined
                    ? null
                    : { expressionApproval: v.ExpressionApproval }),
                ...(v.ManagerApproval === undefined
                    ? null
                    : { managerApproval: v.ManagerApproval }),
                ...(v.SelfApproval === undefined ? null : { selfApproval: v.SelfApproval }),
                ...(v.UserApproval === undefined ? null : { userApproval: v.UserApproval }),
                ...(v.allowReassignment === undefined
                    ? null
                    : { allowReassignment: v.allowReassignment }),
                ...(v.assigned === undefined ? null : { assigned: v.assigned }),
                ...(v.requireApprovalReason === undefined
                    ? null
                    : { requireApprovalReason: v.requireApprovalReason }),
                ...(v.requireReassignmentReason === undefined
                    ? null
                    : { requireReassignmentReason: v.requireReassignmentReason }),
            };
        });

    export type Outbound = {
        AppGroupApproval?: AppGroupApproval$.Outbound | null | undefined;
        AppOwnerApproval?: AppOwnerApproval$.Outbound | null | undefined;
        EntitlementOwnerApproval?: EntitlementOwnerApproval$.Outbound | null | undefined;
        ExpressionApproval?: ExpressionApproval$.Outbound | null | undefined;
        ManagerApproval?: ManagerApproval$.Outbound | null | undefined;
        SelfApproval?: SelfApproval$.Outbound | null | undefined;
        UserApproval?: UserApproval$.Outbound | null | undefined;
        allowReassignment?: boolean | undefined;
        assigned?: boolean | undefined;
        requireApprovalReason?: boolean | undefined;
        requireReassignmentReason?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Approval> = z
        .object({
            appGroupApproval: z.nullable(AppGroupApproval$.outboundSchema).optional(),
            appOwnerApproval: z.nullable(AppOwnerApproval$.outboundSchema).optional(),
            entitlementOwnerApproval: z
                .nullable(EntitlementOwnerApproval$.outboundSchema)
                .optional(),
            expressionApproval: z.nullable(ExpressionApproval$.outboundSchema).optional(),
            managerApproval: z.nullable(ManagerApproval$.outboundSchema).optional(),
            selfApproval: z.nullable(SelfApproval$.outboundSchema).optional(),
            userApproval: z.nullable(UserApproval$.outboundSchema).optional(),
            allowReassignment: z.boolean().optional(),
            assigned: z.boolean().optional(),
            requireApprovalReason: z.boolean().optional(),
            requireReassignmentReason: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appGroupApproval === undefined
                    ? null
                    : { AppGroupApproval: v.appGroupApproval }),
                ...(v.appOwnerApproval === undefined
                    ? null
                    : { AppOwnerApproval: v.appOwnerApproval }),
                ...(v.entitlementOwnerApproval === undefined
                    ? null
                    : { EntitlementOwnerApproval: v.entitlementOwnerApproval }),
                ...(v.expressionApproval === undefined
                    ? null
                    : { ExpressionApproval: v.expressionApproval }),
                ...(v.managerApproval === undefined
                    ? null
                    : { ManagerApproval: v.managerApproval }),
                ...(v.selfApproval === undefined ? null : { SelfApproval: v.selfApproval }),
                ...(v.userApproval === undefined ? null : { UserApproval: v.userApproval }),
                ...(v.allowReassignment === undefined
                    ? null
                    : { allowReassignment: v.allowReassignment }),
                ...(v.assigned === undefined ? null : { assigned: v.assigned }),
                ...(v.requireApprovalReason === undefined
                    ? null
                    : { requireApprovalReason: v.requireApprovalReason }),
                ...(v.requireReassignmentReason === undefined
                    ? null
                    : { requireReassignmentReason: v.requireReassignmentReason }),
            };
        });
}
