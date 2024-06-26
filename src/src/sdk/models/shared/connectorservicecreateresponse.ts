/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ConnectorView, ConnectorView$ } from "./connectorview";
import * as z from "zod";

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ConnectorServiceCreateResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties: Record<string, any>;
};

/**
 * The ConnectorServiceCreateResponse is the response returned from creating a connector.
 */
export type ConnectorServiceCreateResponse = {
    /**
     * The ConnectorView object provides a connector response object, as well as JSONPATHs to related objects provided by expanders.
     */
    connectorView?: ConnectorView | undefined;
    /**
     * The array of expanded items indicated by the request.
     */
    expanded?: Array<ConnectorServiceCreateResponseExpanded> | null | undefined;
};

/** @internal */
export namespace ConnectorServiceCreateResponseExpanded$ {
    export type Inbound = {
        [additionalProperties: string]: unknown;

        "@type"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        ConnectorServiceCreateResponseExpanded,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            "@type": z.string().optional(),
        })
        .catchall(z.any())
        .transform((v) => {
            const { "@type": atType, ...additionalProperties } = v;

            return {
                ...(v["@type"] === undefined ? null : { atType: v["@type"] }),
                additionalProperties,
            };
        });

    export type Outbound = {
        "@type"?: string | undefined;
        [additionalProperties: string]: unknown;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ConnectorServiceCreateResponseExpanded
    > = z
        .object({
            atType: z.string().optional(),
            additionalProperties: z.record(z.any()),
        })
        .transform((v) => {
            return {
                ...v.additionalProperties,
                ...(v.atType === undefined ? null : { "@type": v.atType }),
            };
        });
}

/** @internal */
export namespace ConnectorServiceCreateResponse$ {
    export type Inbound = {
        ConnectorView?: ConnectorView$.Inbound | undefined;
        expanded?: Array<ConnectorServiceCreateResponseExpanded$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<ConnectorServiceCreateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ConnectorView: ConnectorView$.inboundSchema.optional(),
            expanded: z
                .nullable(
                    z.array(z.lazy(() => ConnectorServiceCreateResponseExpanded$.inboundSchema))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.ConnectorView === undefined ? null : { connectorView: v.ConnectorView }),
                ...(v.expanded === undefined ? null : { expanded: v.expanded }),
            };
        });

    export type Outbound = {
        ConnectorView?: ConnectorView$.Outbound | undefined;
        expanded?: Array<ConnectorServiceCreateResponseExpanded$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorServiceCreateResponse> =
        z
            .object({
                connectorView: ConnectorView$.outboundSchema.optional(),
                expanded: z
                    .nullable(
                        z.array(
                            z.lazy(() => ConnectorServiceCreateResponseExpanded$.outboundSchema)
                        )
                    )
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.connectorView === undefined ? null : { ConnectorView: v.connectorView }),
                    ...(v.expanded === undefined ? null : { expanded: v.expanded }),
                };
            });
}
