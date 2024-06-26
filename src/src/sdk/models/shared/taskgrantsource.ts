/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.
 */
export type TaskGrantSource = {
    /**
     * The external url source of the grant ticket.
     */
    externalUrl?: string | undefined;
    /**
     * The integration id for the source of tickets.
     */
    integrationId?: string | undefined;
    /**
     * the request id for the grant ticket if the source is external
     */
    requestId?: string | undefined;
};

/** @internal */
export namespace TaskGrantSource$ {
    export type Inbound = {
        externalUrl?: string | undefined;
        integrationId?: string | undefined;
        requestId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskGrantSource, z.ZodTypeDef, Inbound> = z
        .object({
            externalUrl: z.string().optional(),
            integrationId: z.string().optional(),
            requestId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalUrl === undefined ? null : { externalUrl: v.externalUrl }),
                ...(v.integrationId === undefined ? null : { integrationId: v.integrationId }),
                ...(v.requestId === undefined ? null : { requestId: v.requestId }),
            };
        });

    export type Outbound = {
        externalUrl?: string | undefined;
        integrationId?: string | undefined;
        requestId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskGrantSource> = z
        .object({
            externalUrl: z.string().optional(),
            integrationId: z.string().optional(),
            requestId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalUrl === undefined ? null : { externalUrl: v.externalUrl }),
                ...(v.integrationId === undefined ? null : { integrationId: v.integrationId }),
                ...(v.requestId === undefined ? null : { requestId: v.requestId }),
            };
        });
}
