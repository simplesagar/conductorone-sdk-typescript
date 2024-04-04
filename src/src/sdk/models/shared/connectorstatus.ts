/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The status of the connector sync.
 */
export enum ConnectorStatusStatus {
    SyncStatusUnspecified = "SYNC_STATUS_UNSPECIFIED",
    SyncStatusRunning = "SYNC_STATUS_RUNNING",
    SyncStatusDone = "SYNC_STATUS_DONE",
    SyncStatusError = "SYNC_STATUS_ERROR",
}

/**
 * The status field on the connector is used to track the status of the connectors sync, and when syncing last started, completed, or caused the connector to update.
 */
export type ConnectorStatus = {
    completedAt?: Date | undefined;
    /**
     * The last error encountered by the connector.
     */
    lastError?: string | undefined;
    startedAt?: Date | undefined;
    /**
     * The status of the connector sync.
     */
    status?: ConnectorStatusStatus | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export const ConnectorStatusStatus$ = z.nativeEnum(ConnectorStatusStatus);

/** @internal */
export namespace ConnectorStatus$ {
    export type Inbound = {
        completedAt?: string | undefined;
        lastError?: string | undefined;
        startedAt?: string | undefined;
        status?: ConnectorStatusStatus | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ConnectorStatus, z.ZodTypeDef, Inbound> = z
        .object({
            completedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            lastError: z.string().optional(),
            startedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status: ConnectorStatusStatus$.optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.completedAt === undefined ? null : { completedAt: v.completedAt }),
                ...(v.lastError === undefined ? null : { lastError: v.lastError }),
                ...(v.startedAt === undefined ? null : { startedAt: v.startedAt }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        completedAt?: string | undefined;
        lastError?: string | undefined;
        startedAt?: string | undefined;
        status?: ConnectorStatusStatus | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorStatus> = z
        .object({
            completedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            lastError: z.string().optional(),
            startedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            status: ConnectorStatusStatus$.optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.completedAt === undefined ? null : { completedAt: v.completedAt }),
                ...(v.lastError === undefined ? null : { lastError: v.lastError }),
                ...(v.startedAt === undefined ? null : { startedAt: v.startedAt }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}
