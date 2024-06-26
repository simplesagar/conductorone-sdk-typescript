/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Empty response with a status code indicating success.
 */
export type DirectoryServiceDeleteResponse = {};

/** @internal */
export namespace DirectoryServiceDeleteResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DirectoryServiceDeleteResponse, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectoryServiceDeleteResponse> =
        z.object({});
}
