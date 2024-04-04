/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Accept, Accept$ } from "./accept";
import { Approval, Approval$ } from "./approval";
import { Provision, Provision$ } from "./provision";
import { Reject, Reject$ } from "./reject";
import * as z from "zod";

/**
 * The PolicyStep message.
 *
 * @remarks
 *
 * This message contains a oneof named step. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *   - accept
 *   - reject
 *
 */
export type PolicyStep = {
    /**
     * This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
     */
    accept?: Accept | null | undefined;
    /**
     * The Approval message.
     *
     * @remarks
     *
     * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
     *   - users
     *   - manager
     *   - appOwners
     *   - group
     *   - self
     *   - entitlementOwners
     *   - expression
     *
     */
    approval?: Approval | null | undefined;
    /**
     * The provision step references a provision policy for this step.
     */
    provision?: Provision | null | undefined;
    /**
     * This policy step indicates that a ticket should have a denied outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
     */
    reject?: Reject | null | undefined;
};

/** @internal */
export namespace PolicyStep$ {
    export type Inbound = {
        Accept?: Accept$.Inbound | null | undefined;
        Approval?: Approval$.Inbound | null | undefined;
        Provision?: Provision$.Inbound | null | undefined;
        Reject?: Reject$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<PolicyStep, z.ZodTypeDef, Inbound> = z
        .object({
            Accept: z.nullable(Accept$.inboundSchema).optional(),
            Approval: z.nullable(Approval$.inboundSchema).optional(),
            Provision: z.nullable(Provision$.inboundSchema).optional(),
            Reject: z.nullable(Reject$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.Accept === undefined ? null : { accept: v.Accept }),
                ...(v.Approval === undefined ? null : { approval: v.Approval }),
                ...(v.Provision === undefined ? null : { provision: v.Provision }),
                ...(v.Reject === undefined ? null : { reject: v.Reject }),
            };
        });

    export type Outbound = {
        Accept?: Accept$.Outbound | null | undefined;
        Approval?: Approval$.Outbound | null | undefined;
        Provision?: Provision$.Outbound | null | undefined;
        Reject?: Reject$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PolicyStep> = z
        .object({
            accept: z.nullable(Accept$.outboundSchema).optional(),
            approval: z.nullable(Approval$.outboundSchema).optional(),
            provision: z.nullable(Provision$.outboundSchema).optional(),
            reject: z.nullable(Reject$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accept === undefined ? null : { Accept: v.accept }),
                ...(v.approval === undefined ? null : { Approval: v.approval }),
                ...(v.provision === undefined ? null : { Provision: v.provision }),
                ...(v.reject === undefined ? null : { Reject: v.reject }),
            };
        });
}
