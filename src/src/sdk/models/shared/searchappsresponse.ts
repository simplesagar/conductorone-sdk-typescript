/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { App, App$ } from "./app";
import * as z from "zod";

/**
 * The SearchAppsResponse message contains a list of results and a nextPageToken if applicable.
 */
export type SearchAppsResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<App> | null | undefined;
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
export namespace SearchAppsResponse$ {
    export type Inbound = {
        list?: Array<App$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<SearchAppsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            list: z.nullable(z.array(App$.inboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });

    export type Outbound = {
        list?: Array<App$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchAppsResponse> = z
        .object({
            list: z.nullable(z.array(App$.outboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });
}
