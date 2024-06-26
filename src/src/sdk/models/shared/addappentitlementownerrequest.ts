/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The request message for adding an app entitlement owner.
 */
export type AddAppEntitlementOwnerRequest = {
    /**
     * The user_id field for the user to add as an owner of the app entitlement.
     */
    userId?: string | undefined;
};

/** @internal */
export namespace AddAppEntitlementOwnerRequest$ {
    export type Inbound = {
        userId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AddAppEntitlementOwnerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            userId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.userId === undefined ? null : { userId: v.userId }),
            };
        });

    export type Outbound = {
        userId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddAppEntitlementOwnerRequest> =
        z
            .object({
                userId: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.userId === undefined ? null : { userId: v.userId }),
                };
            });
}
