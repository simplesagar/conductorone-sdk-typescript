/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UserExpandMask, UserExpandMask$ } from "./userexpandmask";
import { UserRef, UserRef$ } from "./userref";
import * as z from "zod";

export enum UserStatuses {
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED",
}

/**
 * Search for users based on some filters.
 */
export type SearchUsersRequest = {
    /**
     * The user expand mask is used to indicate which related objects should be expanded in the response.
     *
     * @remarks
     *  The supported paths are 'role_ids', 'manager_ids', 'delegated_user_id', 'directory_ids', and '*'.
     */
    userExpandMask?: UserExpandMask | undefined;
    /**
     * Search for users based on their email (exact match).
     */
    email?: string | undefined;
    /**
     * An array of users IDs to exclude from the results.
     */
    excludeIds?: Array<string> | null | undefined;
    /**
     * Deprecated. Use refs array instead.
     */
    ids?: Array<string> | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | undefined;
    /**
     * Query the apps with a fuzzy search on display name and emails.
     */
    query?: string | undefined;
    /**
     * An array of user refs to restrict the return values to by ID.
     */
    refs?: Array<UserRef> | null | undefined;
    /**
     * Search for users that have any of the role IDs on this list.
     */
    roleIds?: Array<string> | null | undefined;
    /**
     * Search for users that have any of the statuses on this list. This can only be ENABLED, DISABLED, and DELETED
     */
    userStatuses?: Array<UserStatuses> | null | undefined;
};

/** @internal */
export const UserStatuses$ = z.nativeEnum(UserStatuses);

/** @internal */
export namespace SearchUsersRequest$ {
    export type Inbound = {
        UserExpandMask?: UserExpandMask$.Inbound | undefined;
        email?: string | undefined;
        excludeIds?: Array<string> | null | undefined;
        ids?: Array<string> | null | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        query?: string | undefined;
        refs?: Array<UserRef$.Inbound> | null | undefined;
        roleIds?: Array<string> | null | undefined;
        userStatuses?: Array<UserStatuses> | null | undefined;
    };

    export const inboundSchema: z.ZodType<SearchUsersRequest, z.ZodTypeDef, Inbound> = z
        .object({
            UserExpandMask: UserExpandMask$.inboundSchema.optional(),
            email: z.string().optional(),
            excludeIds: z.nullable(z.array(z.string())).optional(),
            ids: z.nullable(z.array(z.string())).optional(),
            pageSize: z.number().int().optional(),
            pageToken: z.string().optional(),
            query: z.string().optional(),
            refs: z.nullable(z.array(UserRef$.inboundSchema)).optional(),
            roleIds: z.nullable(z.array(z.string())).optional(),
            userStatuses: z.nullable(z.array(UserStatuses$)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.UserExpandMask === undefined ? null : { userExpandMask: v.UserExpandMask }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.excludeIds === undefined ? null : { excludeIds: v.excludeIds }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pageToken === undefined ? null : { pageToken: v.pageToken }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.refs === undefined ? null : { refs: v.refs }),
                ...(v.roleIds === undefined ? null : { roleIds: v.roleIds }),
                ...(v.userStatuses === undefined ? null : { userStatuses: v.userStatuses }),
            };
        });

    export type Outbound = {
        UserExpandMask?: UserExpandMask$.Outbound | undefined;
        email?: string | undefined;
        excludeIds?: Array<string> | null | undefined;
        ids?: Array<string> | null | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        query?: string | undefined;
        refs?: Array<UserRef$.Outbound> | null | undefined;
        roleIds?: Array<string> | null | undefined;
        userStatuses?: Array<UserStatuses> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchUsersRequest> = z
        .object({
            userExpandMask: UserExpandMask$.outboundSchema.optional(),
            email: z.string().optional(),
            excludeIds: z.nullable(z.array(z.string())).optional(),
            ids: z.nullable(z.array(z.string())).optional(),
            pageSize: z.number().int().optional(),
            pageToken: z.string().optional(),
            query: z.string().optional(),
            refs: z.nullable(z.array(UserRef$.outboundSchema)).optional(),
            roleIds: z.nullable(z.array(z.string())).optional(),
            userStatuses: z.nullable(z.array(UserStatuses$)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.userExpandMask === undefined ? null : { UserExpandMask: v.userExpandMask }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.excludeIds === undefined ? null : { excludeIds: v.excludeIds }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pageToken === undefined ? null : { pageToken: v.pageToken }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.refs === undefined ? null : { refs: v.refs }),
                ...(v.roleIds === undefined ? null : { roleIds: v.roleIds }),
                ...(v.userStatuses === undefined ? null : { userStatuses: v.userStatuses }),
            };
        });
}
