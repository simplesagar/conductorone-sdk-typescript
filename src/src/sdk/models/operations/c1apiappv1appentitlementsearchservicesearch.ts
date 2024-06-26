/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppEntitlementSearchServiceSearchResponse = {
    /**
     * Successful response
     */
    appEntitlementSearchServiceSearchResponse?:
        | shared.AppEntitlementSearchServiceSearchResponse
        | undefined;
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
export namespace C1ApiAppV1AppEntitlementSearchServiceSearchResponse$ {
    export type Inbound = {
        AppEntitlementSearchServiceSearchResponse?:
            | shared.AppEntitlementSearchServiceSearchResponse$.Inbound
            | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1AppEntitlementSearchServiceSearchResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            AppEntitlementSearchServiceSearchResponse:
                shared.AppEntitlementSearchServiceSearchResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AppEntitlementSearchServiceSearchResponse === undefined
                    ? null
                    : {
                          appEntitlementSearchServiceSearchResponse:
                              v.AppEntitlementSearchServiceSearchResponse,
                      }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AppEntitlementSearchServiceSearchResponse?:
            | shared.AppEntitlementSearchServiceSearchResponse$.Outbound
            | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1AppEntitlementSearchServiceSearchResponse
    > = z
        .object({
            appEntitlementSearchServiceSearchResponse:
                shared.AppEntitlementSearchServiceSearchResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.appEntitlementSearchServiceSearchResponse === undefined
                    ? null
                    : {
                          AppEntitlementSearchServiceSearchResponse:
                              v.appEntitlementSearchServiceSearchResponse,
                      }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
