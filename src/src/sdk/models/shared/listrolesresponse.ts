/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Role, Role$ } from "./role";
import * as z from "zod";

/**
 * The ListRolesResponse message contains a list of results and a nextPageToken if applicable.
 */
export type ListRolesResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<Role> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | undefined;
};

/** @internal */
export namespace ListRolesResponse$ {
    export type Inbound = {
        list?: Array<Role$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListRolesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            list: z.nullable(z.array(Role$.inboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });

    export type Outbound = {
        list?: Array<Role$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListRolesResponse> = z
        .object({
            list: z.nullable(z.array(Role$.outboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });
}
