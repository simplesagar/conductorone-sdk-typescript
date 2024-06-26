/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppOwnersAddRequest = {
    addAppOwnerRequest?: shared.AddAppOwnerRequest | undefined;
    appId: string;
    userId: string;
};

export type C1ApiAppV1AppOwnersAddResponse = {
    /**
     * Empty response with a status code indicating success
     */
    addAppOwnerResponse?: shared.AddAppOwnerResponse | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace C1ApiAppV1AppOwnersAddRequest$ {
    export type Inbound = {
        AddAppOwnerRequest?: shared.AddAppOwnerRequest$.Inbound | undefined;
        app_id: string;
        user_id: string;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddRequest, z.ZodTypeDef, Inbound> = z
        .object({
            AddAppOwnerRequest: shared.AddAppOwnerRequest$.inboundSchema.optional(),
            app_id: z.string(),
            user_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.AddAppOwnerRequest === undefined
                    ? null
                    : { addAppOwnerRequest: v.AddAppOwnerRequest }),
                appId: v.app_id,
                userId: v.user_id,
            };
        });

    export type Outbound = {
        AddAppOwnerRequest?: shared.AddAppOwnerRequest$.Outbound | undefined;
        app_id: string;
        user_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddRequest> =
        z
            .object({
                addAppOwnerRequest: shared.AddAppOwnerRequest$.outboundSchema.optional(),
                appId: z.string(),
                userId: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.addAppOwnerRequest === undefined
                        ? null
                        : { AddAppOwnerRequest: v.addAppOwnerRequest }),
                    app_id: v.appId,
                    user_id: v.userId,
                };
            });
}

/** @internal */
export namespace C1ApiAppV1AppOwnersAddResponse$ {
    export type Inbound = {
        AddAppOwnerResponse?: shared.AddAppOwnerResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<C1ApiAppV1AppOwnersAddResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AddAppOwnerResponse: shared.AddAppOwnerResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AddAppOwnerResponse === undefined
                    ? null
                    : { addAppOwnerResponse: v.AddAppOwnerResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AddAppOwnerResponse?: shared.AddAppOwnerResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, C1ApiAppV1AppOwnersAddResponse> =
        z
            .object({
                addAppOwnerResponse: shared.AddAppOwnerResponse$.outboundSchema.optional(),
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.addAppOwnerResponse === undefined
                        ? null
                        : { AddAppOwnerResponse: v.addAppOwnerResponse }),
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
