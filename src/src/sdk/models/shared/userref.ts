/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A reference to a user.
 */
export type UserRef = {
    /**
     * The id of the user.
     */
    id?: string | undefined;
};

/** @internal */
export namespace UserRef$ {
    export type Inbound = {
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UserRef, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserRef> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
