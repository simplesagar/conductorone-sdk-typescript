/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TaskView, TaskView$ } from "./taskview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceApproveResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The TaskActionsServiceApproveResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export type TaskActionsServiceApproveResponse = {
    /**
     * Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
     */
    taskView?: TaskView | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceApproveResponseExpanded> | null | undefined;
    /**
     * The ID of the ticket (task) approve action created by this request.
     */
    ticketActionId?: string | undefined;
};

/** @internal */
export namespace TaskActionsServiceApproveResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        TaskActionsServiceApproveResponseExpanded,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            "@type": z.string().optional(),
        })
        .catchall(z.any())
        .transform((v) => {
            const { "@type": atType, ...additionalProperties } = v;

            return {
                ...(v["@type"] === undefined ? null : { atType: v["@type"] }),
                additionalProperties,
            };
        });

    export type Outbound = {
        "@type"?: string | undefined;
        [additionalProperties: string]: unknown;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TaskActionsServiceApproveResponseExpanded
    > = z
        .object({
            atType: z.string().optional(),
            additionalProperties: z.record(z.any()),
        })
        .transform((v) => {
            return {
                ...v.additionalProperties,
                ...(v.atType === undefined ? null : { "@type": v.atType }),
            };
        });
}

/** @internal */
export namespace TaskActionsServiceApproveResponse$ {
    export type Inbound = {
        TaskView?: TaskView$.Inbound | undefined;
        expanded?: Array<TaskActionsServiceApproveResponseExpanded$.Inbound> | null | undefined;
        ticketActionId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        TaskActionsServiceApproveResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            TaskView: TaskView$.inboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(z.lazy(() => TaskActionsServiceApproveResponseExpanded$.inboundSchema))
                )
                .optional(),
            ticketActionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.TaskView === undefined ? null : { taskView: v.TaskView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.ticketActionId === undefined ? null : { ticketActionId: v.ticketActionId }),
            };
        });

    export type Outbound = {
        TaskView?: TaskView$.Outbound | undefined;
        expanded?: Array<TaskActionsServiceApproveResponseExpanded$.Outbound> | null | undefined;
        ticketActionId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TaskActionsServiceApproveResponse
    > = z
        .object({
            taskView: TaskView$.outboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(z.lazy(() => TaskActionsServiceApproveResponseExpanded$.outboundSchema))
                )
                .optional(),
            ticketActionId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.taskView === undefined ? null : { TaskView: v.taskView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.ticketActionId === undefined ? null : { ticketActionId: v.ticketActionId }),
            };
        });
}
