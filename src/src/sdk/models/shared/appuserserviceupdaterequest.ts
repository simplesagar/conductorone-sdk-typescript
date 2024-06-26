/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AppUserInput, AppUserInput$ } from "./appuser";
import { AppUserExpandMask, AppUserExpandMask$ } from "./appuserexpandmask";
import * as z from "zod";

/**
 * The AppUserServiceUpdateRequest message contains the app user and the fields to be updated.
 */
export type AppUserServiceUpdateRequest = {
    /**
     * Application User that represents an account in the application.
     */
    appUser?: AppUserInput | undefined;
    /**
     * The AppUserExpandMask message contains a list of paths to expand in the response.
     */
    appUserExpandMask?: AppUserExpandMask | undefined;
    updateMask?: string | null | undefined;
};

/** @internal */
export namespace AppUserServiceUpdateRequest$ {
    export type Inbound = {
        AppUser?: AppUserInput$.Inbound | undefined;
        AppUserExpandMask?: AppUserExpandMask$.Inbound | undefined;
        updateMask?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AppUserServiceUpdateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            AppUser: AppUserInput$.inboundSchema.optional(),
            AppUserExpandMask: AppUserExpandMask$.inboundSchema.optional(),
            updateMask: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.AppUser === undefined ? null : { appUser: v.AppUser }),
                ...(v.AppUserExpandMask === undefined
                    ? null
                    : { appUserExpandMask: v.AppUserExpandMask }),
                ...(v.updateMask === undefined ? null : { updateMask: v.updateMask }),
            };
        });

    export type Outbound = {
        AppUser?: AppUserInput$.Outbound | undefined;
        AppUserExpandMask?: AppUserExpandMask$.Outbound | undefined;
        updateMask?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppUserServiceUpdateRequest> = z
        .object({
            appUser: AppUserInput$.outboundSchema.optional(),
            appUserExpandMask: AppUserExpandMask$.outboundSchema.optional(),
            updateMask: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.appUser === undefined ? null : { AppUser: v.appUser }),
                ...(v.appUserExpandMask === undefined
                    ? null
                    : { AppUserExpandMask: v.appUserExpandMask }),
                ...(v.updateMask === undefined ? null : { updateMask: v.updateMask }),
            };
        });
}
