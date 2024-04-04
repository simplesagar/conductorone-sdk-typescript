/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The request message for setting the app owners.
 */
export type SetAppOwnersRequest = {
    /**
     * The user_ids field for the users to set as an owner of the app.
     */
    userIds?: Array<string> | null | undefined;
};

/** @internal */
export namespace SetAppOwnersRequest$ {
    export type Inbound = {
        userIds?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<SetAppOwnersRequest, z.ZodTypeDef, Inbound> = z
        .object({
            userIds: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.userIds === undefined ? null : { userIds: v.userIds }),
            };
        });

    export type Outbound = {
        userIds?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SetAppOwnersRequest> = z
        .object({
            userIds: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.userIds === undefined ? null : { userIds: v.userIds }),
            };
        });
}
