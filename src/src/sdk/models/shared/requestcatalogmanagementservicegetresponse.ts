/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RequestCatalogView, RequestCatalogView$ } from "./requestcatalogview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogManagementServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The request catalog management service get response returns a request catalog view with the expanded items in the expanded array indicated by the expand mask in the request.
 */
export type RequestCatalogManagementServiceGetResponse = {
    /**
     * The request catalog view contains the serialized request catalog and paths to objects referenced by the request catalog.
     */
    requestCatalogView?: RequestCatalogView | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogManagementServiceGetResponseExpanded> | null | undefined;
};

/** @internal */
export namespace RequestCatalogManagementServiceGetResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        RequestCatalogManagementServiceGetResponseExpanded,
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
        RequestCatalogManagementServiceGetResponseExpanded
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
export namespace RequestCatalogManagementServiceGetResponse$ {
    export type Inbound = {
        RequestCatalogView?: RequestCatalogView$.Inbound | undefined;
        expanded?:
            | Array<RequestCatalogManagementServiceGetResponseExpanded$.Inbound>
            | null
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        RequestCatalogManagementServiceGetResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            RequestCatalogView: RequestCatalogView$.inboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(
                        z.lazy(
                            () => RequestCatalogManagementServiceGetResponseExpanded$.inboundSchema
                        )
                    )
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.RequestCatalogView === undefined
                    ? null
                    : { requestCatalogView: v.RequestCatalogView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });

    export type Outbound = {
        RequestCatalogView?: RequestCatalogView$.Outbound | undefined;
        expanded?:
            | Array<RequestCatalogManagementServiceGetResponseExpanded$.Outbound>
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RequestCatalogManagementServiceGetResponse
    > = z
        .object({
            requestCatalogView: RequestCatalogView$.outboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(
                        z.lazy(
                            () => RequestCatalogManagementServiceGetResponseExpanded$.outboundSchema
                        )
                    )
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.requestCatalogView === undefined
                    ? null
                    : { RequestCatalogView: v.requestCatalogView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });
}
