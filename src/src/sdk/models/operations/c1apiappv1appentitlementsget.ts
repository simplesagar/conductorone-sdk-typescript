/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppEntitlementsGetRequest = {
    appId: string;
    id: string;
};

export type C1ApiAppV1AppEntitlementsGetResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The get app entitlement response returns an entitlement view containing paths in the expanded array for the objects expanded as indicated by the expand mask in the request.
     */
    getAppEntitlementResponse?: shared.GetAppEntitlementResponse | undefined;
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
export namespace C1ApiAppV1AppEntitlementsGetRequest$ {
    export type Inbound = {
        app_id: string;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1AppEntitlementsGetRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            app_id: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                appId: v.app_id,
                id: v.id,
            };
        });

    export type Outbound = {
        app_id: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1AppEntitlementsGetRequest
    > = z
        .object({
            appId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                app_id: v.appId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace C1ApiAppV1AppEntitlementsGetResponse$ {
    export type Inbound = {
        ContentType: string;
        GetAppEntitlementResponse?: shared.GetAppEntitlementResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1AppEntitlementsGetResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            GetAppEntitlementResponse: shared.GetAppEntitlementResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetAppEntitlementResponse === undefined
                    ? null
                    : { getAppEntitlementResponse: v.GetAppEntitlementResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        GetAppEntitlementResponse?: shared.GetAppEntitlementResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1AppEntitlementsGetResponse
    > = z
        .object({
            contentType: z.string(),
            getAppEntitlementResponse: shared.GetAppEntitlementResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getAppEntitlementResponse === undefined
                    ? null
                    : { GetAppEntitlementResponse: v.getAppEntitlementResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
