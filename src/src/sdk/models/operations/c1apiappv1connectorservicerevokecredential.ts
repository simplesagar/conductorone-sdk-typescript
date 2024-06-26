/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type C1ApiAppV1ConnectorServiceRevokeCredentialRequest = {
    connectorServiceRevokeCredentialRequest?:
        | shared.ConnectorServiceRevokeCredentialRequest
        | undefined;
    appId: string;
    connectorId: string;
    id: string;
};

export type C1ApiAppV1ConnectorServiceRevokeCredentialResponse = {
    /**
     * Empty response body. Status code indicates success.
     */
    connectorServiceRevokeCredentialResponse?:
        | shared.ConnectorServiceRevokeCredentialResponse
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
export namespace C1ApiAppV1ConnectorServiceRevokeCredentialRequest$ {
    export type Inbound = {
        ConnectorServiceRevokeCredentialRequest?:
            | shared.ConnectorServiceRevokeCredentialRequest$.Inbound
            | undefined;
        app_id: string;
        connector_id: string;
        id: string;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1ConnectorServiceRevokeCredentialRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ConnectorServiceRevokeCredentialRequest:
                shared.ConnectorServiceRevokeCredentialRequest$.inboundSchema.optional(),
            app_id: z.string(),
            connector_id: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.ConnectorServiceRevokeCredentialRequest === undefined
                    ? null
                    : {
                          connectorServiceRevokeCredentialRequest:
                              v.ConnectorServiceRevokeCredentialRequest,
                      }),
                appId: v.app_id,
                connectorId: v.connector_id,
                id: v.id,
            };
        });

    export type Outbound = {
        ConnectorServiceRevokeCredentialRequest?:
            | shared.ConnectorServiceRevokeCredentialRequest$.Outbound
            | undefined;
        app_id: string;
        connector_id: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1ConnectorServiceRevokeCredentialRequest
    > = z
        .object({
            connectorServiceRevokeCredentialRequest:
                shared.ConnectorServiceRevokeCredentialRequest$.outboundSchema.optional(),
            appId: z.string(),
            connectorId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.connectorServiceRevokeCredentialRequest === undefined
                    ? null
                    : {
                          ConnectorServiceRevokeCredentialRequest:
                              v.connectorServiceRevokeCredentialRequest,
                      }),
                app_id: v.appId,
                connector_id: v.connectorId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace C1ApiAppV1ConnectorServiceRevokeCredentialResponse$ {
    export type Inbound = {
        ConnectorServiceRevokeCredentialResponse?:
            | shared.ConnectorServiceRevokeCredentialResponse$.Inbound
            | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        C1ApiAppV1ConnectorServiceRevokeCredentialResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ConnectorServiceRevokeCredentialResponse:
                shared.ConnectorServiceRevokeCredentialResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ConnectorServiceRevokeCredentialResponse === undefined
                    ? null
                    : {
                          connectorServiceRevokeCredentialResponse:
                              v.ConnectorServiceRevokeCredentialResponse,
                      }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ConnectorServiceRevokeCredentialResponse?:
            | shared.ConnectorServiceRevokeCredentialResponse$.Outbound
            | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        C1ApiAppV1ConnectorServiceRevokeCredentialResponse
    > = z
        .object({
            connectorServiceRevokeCredentialResponse:
                shared.ConnectorServiceRevokeCredentialResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.connectorServiceRevokeCredentialResponse === undefined
                    ? null
                    : {
                          ConnectorServiceRevokeCredentialResponse:
                              v.connectorServiceRevokeCredentialResponse,
                      }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
