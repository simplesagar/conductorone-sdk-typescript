/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlementRef, AppEntitlementRef$ } from "./appentitlementref";
import * as z from "zod";

/**
 * The RequestCatalogManagementServiceAddAppEntitlementsRequest object is used to add app requestable app entitlements to a request catalog.
 */
export type RequestCatalogManagementServiceAddAppEntitlementsRequest = {
    /**
     * List of entitlements to add to the request catalog.
     */
    appEntitlements?: Array<AppEntitlementRef> | null | undefined;
};

/** @internal */
export namespace RequestCatalogManagementServiceAddAppEntitlementsRequest$ {
    export type Inbound = {
        appEntitlements?: Array<AppEntitlementRef$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        RequestCatalogManagementServiceAddAppEntitlementsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appEntitlements: z.nullable(z.array(AppEntitlementRef$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlements === undefined
                    ? null
                    : { appEntitlements: v.appEntitlements }),
            };
        });

    export type Outbound = {
        appEntitlements?: Array<AppEntitlementRef$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RequestCatalogManagementServiceAddAppEntitlementsRequest
    > = z
        .object({
            appEntitlements: z.nullable(z.array(AppEntitlementRef$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlements === undefined
                    ? null
                    : { appEntitlements: v.appEntitlements }),
            };
        });
}
