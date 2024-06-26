/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ConnectorView, ConnectorView$ } from "./connectorview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The ConnectorServiceListResponse message contains a list of results and a nextPageToken if applicable
 */
export type ConnectorServiceListResponse = {
    /**
     * List of serialized related objects
     */
    expanded?: Array<ConnectorServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<ConnectorView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | undefined;
};

/** @internal */
export namespace ConnectorServiceListResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        ConnectorServiceListResponseExpanded,
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
        ConnectorServiceListResponseExpanded
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
export namespace ConnectorServiceListResponse$ {
    export type Inbound = {
        expanded?: Array<ConnectorServiceListResponseExpanded$.Inbound> | null | undefined;
        list?: Array<ConnectorView$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ConnectorServiceListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            expanded: z
                .nullable(
                    z.array(z.lazy(() => ConnectorServiceListResponseExpanded$.inboundSchema))
                )
                .optional(),
            list: z.nullable(z.array(ConnectorView$.inboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });

    export type Outbound = {
        expanded?: Array<ConnectorServiceListResponseExpanded$.Outbound> | null | undefined;
        list?: Array<ConnectorView$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorServiceListResponse> = z
        .object({
            expanded: z
                .nullable(
                    z.array(z.lazy(() => ConnectorServiceListResponseExpanded$.outboundSchema))
                )
                .optional(),
            list: z.nullable(z.array(ConnectorView$.outboundSchema)).optional(),
            nextPageToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                ...(v.list === undefined ? null : { list: v.list }),
                ...(v.nextPageToken === undefined ? null : { nextPageToken: v.nextPageToken }),
            };
        });
}
