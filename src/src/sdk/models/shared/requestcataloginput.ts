/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppEntitlementInput, AppEntitlementInput$ } from "./appentitlement";
import * as z from "zod";

/**
 * The RequestCatalog is used for managing which entitlements are requestable, and who can request them.
 */
export type RequestCatalogInput = {
    /**
     * An array of app entitlements that, if the user has, can view the contents of this catalog.
     */
    accessEntitlements?: Array<AppEntitlementInput> | null | undefined;
    /**
     * The Apps contained in this request catalog.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * The id of the user this request catalog was created by.
     */
    createdByUserId?: string | undefined;
    /**
     * The description of the request catalog.
     */
    description?: string | undefined;
    /**
     * The display name of the request catalog.
     */
    displayName?: string | undefined;
    /**
     * The id of the request catalog.
     */
    id?: string | undefined;
    /**
     * Whether or not this catalog is published.
     */
    published?: boolean | undefined;
    /**
     * Whether all the entitlements in the catalog can be requests at once. Your tenant must have the bundles feature to use this.
     */
    requestBundle?: boolean | undefined;
    /**
     * If this is true, the access entitlement requirement is ignored.
     */
    visibleToEveryone?: boolean | undefined;
};

/** @internal */
export namespace RequestCatalogInput$ {
    export type Inbound = {
        accessEntitlements?: Array<AppEntitlementInput$.Inbound> | null | undefined;
        appIds?: Array<string> | null | undefined;
        createdByUserId?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        published?: boolean | undefined;
        requestBundle?: boolean | undefined;
        visibleToEveryone?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<RequestCatalogInput, z.ZodTypeDef, Inbound> = z
        .object({
            accessEntitlements: z.nullable(z.array(AppEntitlementInput$.inboundSchema)).optional(),
            appIds: z.nullable(z.array(z.string())).optional(),
            createdByUserId: z.string().optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            id: z.string().optional(),
            published: z.boolean().optional(),
            requestBundle: z.boolean().optional(),
            visibleToEveryone: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accessEntitlements === undefined
                    ? null
                    : { accessEntitlements: v.accessEntitlements }),
                ...(v.appIds === undefined ? null : { appIds: v.appIds }),
                ...(v.createdByUserId === undefined
                    ? null
                    : { createdByUserId: v.createdByUserId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.published === undefined ? null : { published: v.published }),
                ...(v.requestBundle === undefined ? null : { requestBundle: v.requestBundle }),
                ...(v.visibleToEveryone === undefined
                    ? null
                    : { visibleToEveryone: v.visibleToEveryone }),
            };
        });

    export type Outbound = {
        accessEntitlements?: Array<AppEntitlementInput$.Outbound> | null | undefined;
        appIds?: Array<string> | null | undefined;
        createdByUserId?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        published?: boolean | undefined;
        requestBundle?: boolean | undefined;
        visibleToEveryone?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestCatalogInput> = z
        .object({
            accessEntitlements: z.nullable(z.array(AppEntitlementInput$.outboundSchema)).optional(),
            appIds: z.nullable(z.array(z.string())).optional(),
            createdByUserId: z.string().optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            id: z.string().optional(),
            published: z.boolean().optional(),
            requestBundle: z.boolean().optional(),
            visibleToEveryone: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accessEntitlements === undefined
                    ? null
                    : { accessEntitlements: v.accessEntitlements }),
                ...(v.appIds === undefined ? null : { appIds: v.appIds }),
                ...(v.createdByUserId === undefined
                    ? null
                    : { createdByUserId: v.createdByUserId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.published === undefined ? null : { published: v.published }),
                ...(v.requestBundle === undefined ? null : { requestBundle: v.requestBundle }),
                ...(v.visibleToEveryone === undefined
                    ? null
                    : { visibleToEveryone: v.visibleToEveryone }),
            };
        });
}