/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1AppResourceServiceGetRequest = {
    appId: string;
    appResourceTypeId: string;
    id: string;
};

export type C1ApiAppV1AppResourceServiceGetResponse = {
    /**
     * The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask.
     */
    appResourceServiceGetResponse?: shared.AppResourceServiceGetResponse | undefined;
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
export namespace C1ApiAppV1AppResourceServiceGetRequest$ {
    export type Inbound = {
        app_id: string;
        app_resource_type_id: string;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1AppResourceServiceGetRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            app_id: z.string(),
            app_resource_type_id: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                appId: v.app_id,
                appResourceTypeId: v.app_resource_type_id,
                id: v.id,
            };
        });

    export type Outbound = {
        app_id: string;
        app_resource_type_id: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1AppResourceServiceGetRequest
    > = z
        .object({
            appId: z.string(),
            appResourceTypeId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                app_id: v.appId,
                app_resource_type_id: v.appResourceTypeId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace C1ApiAppV1AppResourceServiceGetResponse$ {
    export type Inbound = {
        AppResourceServiceGetResponse?: shared.AppResourceServiceGetResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1AppResourceServiceGetResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            AppResourceServiceGetResponse:
                shared.AppResourceServiceGetResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AppResourceServiceGetResponse === undefined
                    ? null
                    : { appResourceServiceGetResponse: v.AppResourceServiceGetResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AppResourceServiceGetResponse?: shared.AppResourceServiceGetResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1AppResourceServiceGetResponse
    > = z
        .object({
            appResourceServiceGetResponse:
                shared.AppResourceServiceGetResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.appResourceServiceGetResponse === undefined
                    ? null
                    : { AppResourceServiceGetResponse: v.appResourceServiceGetResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
