/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlementView, AppEntitlementView$ } from "./appentitlementview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type GetAppEntitlementResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The get app entitlement response returns an entitlement view containing paths in the expanded array for the objects expanded as indicated by the expand mask in the request.
 */
export type GetAppEntitlementResponse = {
    /**
     * The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.
     */
    appEntitlementView?: AppEntitlementView | undefined;
    /**
     * List of serialized related objects.
     */
    expanded?: Array<GetAppEntitlementResponseExpanded> | null | undefined;
};

/** @internal */
export namespace GetAppEntitlementResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetAppEntitlementResponseExpanded,
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
        GetAppEntitlementResponseExpanded
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
export namespace GetAppEntitlementResponse$ {
    export type Inbound = {
        AppEntitlementView?: AppEntitlementView$.Inbound | undefined;
        expanded?: Array<GetAppEntitlementResponseExpanded$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetAppEntitlementResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AppEntitlementView: AppEntitlementView$.inboundSchema.optional(),
            expanded: z
                .nullable(z.array(z.lazy(() => GetAppEntitlementResponseExpanded$.inboundSchema)))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.AppEntitlementView === undefined
                    ? null
                    : { appEntitlementView: v.AppEntitlementView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });

    export type Outbound = {
        AppEntitlementView?: AppEntitlementView$.Outbound | undefined;
        expanded?: Array<GetAppEntitlementResponseExpanded$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAppEntitlementResponse> = z
        .object({
            appEntitlementView: AppEntitlementView$.outboundSchema.optional(),
            expanded: z
                .nullable(z.array(z.lazy(() => GetAppEntitlementResponseExpanded$.outboundSchema)))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlementView === undefined
                    ? null
                    : { AppEntitlementView: v.appEntitlementView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });
}
