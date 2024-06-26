/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AttributeType, AttributeType$ } from "./attributetype";
import * as z from "zod";

/**
 * ListAttributeTypesResponse is the response for listing attribute types.
 */
export type ListAttributeTypesResponse = {
    /**
     * The list of AttributeTypes.
     */
    list?: Array<AttributeType> | null | undefined;
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
export namespace ListAttributeTypesResponse$ {
    export type Inbound = {
        list?: Array<AttributeType$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAttributeTypesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            list: z.nullable(z.array(AttributeType$.inboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });

    export type Outbound = {
        list?: Array<AttributeType$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAttributeTypesResponse> = z
        .object({
            list: z.nullable(z.array(AttributeType$.outboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });
}
