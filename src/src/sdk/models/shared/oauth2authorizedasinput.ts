/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * OAuth2AuthorizedAs tracks the user that OAuthed with the connector.
 */
export type OAuth2AuthorizedAsInput = {};

/** @internal */
export namespace OAuth2AuthorizedAsInput$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<OAuth2AuthorizedAsInput, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OAuth2AuthorizedAsInput> =
        z.object({});
}
