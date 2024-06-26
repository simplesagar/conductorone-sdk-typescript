/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppUserView, AppUserView$ } from "./appuserview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppUserServiceUpdateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The AppUserServiceUpdateResponse message.
 */
export type AppUserServiceUpdateResponse = {
    /**
     * The AppUserView contains an app user as well as paths for apps, identity users, and last usage in expanded arrays.
     */
    appUserView?: AppUserView | undefined;
    /**
     * The expanded field.
     */
    expanded?: Array<AppUserServiceUpdateResponseExpanded> | null | undefined;
};

/** @internal */
export namespace AppUserServiceUpdateResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        AppUserServiceUpdateResponseExpanded,
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
        AppUserServiceUpdateResponseExpanded
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
export namespace AppUserServiceUpdateResponse$ {
    export type Inbound = {
        AppUserView?: AppUserView$.Inbound | undefined;
        expanded?: Array<AppUserServiceUpdateResponseExpanded$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AppUserServiceUpdateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AppUserView: AppUserView$.inboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(z.lazy(() => AppUserServiceUpdateResponseExpanded$.inboundSchema))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.AppUserView === undefined ? null : { appUserView: v.AppUserView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });

    export type Outbound = {
        AppUserView?: AppUserView$.Outbound | undefined;
        expanded?: Array<AppUserServiceUpdateResponseExpanded$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppUserServiceUpdateResponse> = z
        .object({
            appUserView: AppUserView$.outboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(z.lazy(() => AppUserServiceUpdateResponseExpanded$.outboundSchema))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appUserView === undefined ? null : { AppUserView: v.appUserView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });
}
