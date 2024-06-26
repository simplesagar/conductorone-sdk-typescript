/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TaskGrantSource, TaskGrantSource$ } from "./taskgrantsource";
import * as z from "zod";

/**
 * The TaskTypeGrant message indicates that a task is a grant task and all related details.
 */
export type TaskTypeGrantInput = {
    /**
     * The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.
     */
    taskGrantSource?: TaskGrantSource | undefined;
};

/** @internal */
export namespace TaskTypeGrantInput$ {
    export type Inbound = {
        TaskGrantSource?: TaskGrantSource$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<TaskTypeGrantInput, z.ZodTypeDef, Inbound> = z
        .object({
            TaskGrantSource: TaskGrantSource$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.TaskGrantSource === undefined
                    ? null
                    : { taskGrantSource: v.TaskGrantSource }),
            };
        });

    export type Outbound = {
        TaskGrantSource?: TaskGrantSource$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskTypeGrantInput> = z
        .object({
            taskGrantSource: TaskGrantSource$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.taskGrantSource === undefined
                    ? null
                    : { TaskGrantSource: v.taskGrantSource }),
            };
        });
}
