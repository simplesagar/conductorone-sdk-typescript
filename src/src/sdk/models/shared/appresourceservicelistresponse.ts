/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppResourceView, AppResourceView$ } from "./appresourceview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The AppResourceServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type AppResourceServiceListResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<AppResourceServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppResourceView> | null | undefined;
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
export namespace AppResourceServiceListResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        AppResourceServiceListResponseExpanded,
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
        AppResourceServiceListResponseExpanded
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
export namespace AppResourceServiceListResponse$ {
    export type Inbound = {
        expanded?: Array<AppResourceServiceListResponseExpanded$.Inbound> | null | undefined;
        list?: Array<AppResourceView$.Inbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AppResourceServiceListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            expanded: z
                .nullable(
                    z.array(z.lazy(() => AppResourceServiceListResponseExpanded$.inboundSchema))
                )
                .optional(),
            list: z.nullable(z.array(AppResourceView$.inboundSchema)).optional(),
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
        expanded?: Array<AppResourceServiceListResponseExpanded$.Outbound> | null | undefined;
        list?: Array<AppResourceView$.Outbound> | null | undefined;
        nextPageToken?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppResourceServiceListResponse> =
        z
            .object({
                expanded: z
                    .nullable(
                        z.array(
                            z.lazy(() => AppResourceServiceListResponseExpanded$.outboundSchema)
                        )
                    )
                    .optional(),
                list: z.nullable(z.array(AppResourceView$.outboundSchema)).optional(),
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
