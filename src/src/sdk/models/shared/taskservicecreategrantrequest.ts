/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TaskExpandMask, TaskExpandMask$ } from "./taskexpandmask";
import { TaskGrantSource, TaskGrantSource$ } from "./taskgrantsource";
import * as z from "zod";

/**
 * Create a grant task.
 */
export type TaskServiceCreateGrantRequest = {
    /**
     * The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.
     */
    taskExpandMask?: TaskExpandMask | undefined;
    /**
     * The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.
     */
    taskGrantSource?: TaskGrantSource | undefined;
    /**
     * The ID of the app entitlement to grant access to.
     */
    appEntitlementId: string;
    /**
     * The ID of the app that is associated with the entitlement.
     */
    appId: string;
    /**
     * The ID of the app user to grant access for. This field and identityUserId cannot both be set for a given request.
     */
    appUserId?: string | undefined;
    /**
     * The description of the request.
     */
    description?: string | undefined;
    /**
     * Boolean stating whether or not the task is marked as emergency access.
     */
    emergencyAccess?: boolean | undefined;
    grantDuration?: string | undefined;
    /**
     * The ID of the user associated with the app user we are granting access for. This field cannot be set if appUserID is also set.
     */
    identityUserId?: string | undefined;
};

/** @internal */
export namespace TaskServiceCreateGrantRequest$ {
    export type Inbound = {
        TaskExpandMask?: TaskExpandMask$.Inbound | undefined;
        TaskGrantSource?: TaskGrantSource$.Inbound | undefined;
        appEntitlementId: string;
        appId: string;
        appUserId?: string | undefined;
        description?: string | undefined;
        emergencyAccess?: boolean | undefined;
        grantDuration?: string | undefined;
        identityUserId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskServiceCreateGrantRequest, z.ZodTypeDef, Inbound> = z
        .object({
            TaskExpandMask: TaskExpandMask$.inboundSchema.optional(),
            TaskGrantSource: TaskGrantSource$.inboundSchema.optional(),
            appEntitlementId: z.string(),
            appId: z.string(),
            appUserId: z.string().optional(),
            description: z.string().optional(),
            emergencyAccess: z.boolean().optional(),
            grantDuration: z.string().optional(),
            identityUserId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.TaskExpandMask === undefined ? null : { taskExpandMask: v.TaskExpandMask }),
                ...(v.TaskGrantSource === undefined
                    ? null
                    : { taskGrantSource: v.TaskGrantSource }),
                appEntitlementId: v.appEntitlementId,
                appId: v.appId,
                ...(v.appUserId === undefined ? null : { appUserId: v.appUserId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.emergencyAccess === undefined
                    ? null
                    : { emergencyAccess: v.emergencyAccess }),
                ...(v.grantDuration === undefined ? null : { grantDuration: v.grantDuration }),
                ...(v.identityUserId === undefined ? null : { identityUserId: v.identityUserId }),
            };
        });

    export type Outbound = {
        TaskExpandMask?: TaskExpandMask$.Outbound | undefined;
        TaskGrantSource?: TaskGrantSource$.Outbound | undefined;
        appEntitlementId: string;
        appId: string;
        appUserId?: string | undefined;
        description?: string | undefined;
        emergencyAccess?: boolean | undefined;
        grantDuration?: string | undefined;
        identityUserId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskServiceCreateGrantRequest> =
        z
            .object({
                taskExpandMask: TaskExpandMask$.outboundSchema.optional(),
                taskGrantSource: TaskGrantSource$.outboundSchema.optional(),
                appEntitlementId: z.string(),
                appId: z.string(),
                appUserId: z.string().optional(),
                description: z.string().optional(),
                emergencyAccess: z.boolean().optional(),
                grantDuration: z.string().optional(),
                identityUserId: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.taskExpandMask === undefined
                        ? null
                        : { TaskExpandMask: v.taskExpandMask }),
                    ...(v.taskGrantSource === undefined
                        ? null
                        : { TaskGrantSource: v.taskGrantSource }),
                    appEntitlementId: v.appEntitlementId,
                    appId: v.appId,
                    ...(v.appUserId === undefined ? null : { appUserId: v.appUserId }),
                    ...(v.description === undefined ? null : { description: v.description }),
                    ...(v.emergencyAccess === undefined
                        ? null
                        : { emergencyAccess: v.emergencyAccess }),
                    ...(v.grantDuration === undefined ? null : { grantDuration: v.grantDuration }),
                    ...(v.identityUserId === undefined
                        ? null
                        : { identityUserId: v.identityUserId }),
                };
            });
}
