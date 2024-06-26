/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FacetValue, FacetValue$ } from "./facetvalue";
import * as z from "zod";

/**
 * The FacetValueItem message.
 */
export type FacetValueItem = {
    /**
     * An array of facet values.
     */
    values?: Array<FacetValue> | null | undefined;
};

/** @internal */
export namespace FacetValueItem$ {
    export type Inbound = {
        values?: Array<FacetValue$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<FacetValueItem, z.ZodTypeDef, Inbound> = z
        .object({
            values: z.nullable(z.array(FacetValue$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });

    export type Outbound = {
        values?: Array<FacetValue$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FacetValueItem> = z
        .object({
            values: z.nullable(z.array(FacetValue$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });
}
