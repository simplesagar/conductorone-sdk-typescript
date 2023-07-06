/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskRevokeSource } from "./taskrevokesource";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The outcome field.
 */
export enum TaskTypeRevokeOutcome {
    RevokeOutcomeUnspecified = "REVOKE_OUTCOME_UNSPECIFIED",
    RevokeOutcomeRevoked = "REVOKE_OUTCOME_REVOKED",
    RevokeOutcomeDenied = "REVOKE_OUTCOME_DENIED",
    RevokeOutcomeError = "REVOKE_OUTCOME_ERROR",
    RevokeOutcomeCancelled = "REVOKE_OUTCOME_CANCELLED",
}

/**
 * The TaskTypeRevoke message.
 */
export class TaskTypeRevoke extends SpeakeasyBase {
    /**
     * The TaskRevokeSource message.
     *
     * @remarks
     *
     * This message contains a oneof named origin. Only a single field of the following list may be set at a time:
     *   - review
     *   - request
     *   - expired
     *   - nonUsage
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    @Type(() => TaskRevokeSource)
    taskRevokeSource?: TaskRevokeSource;

    /**
     * The appEntitlementId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlementId" })
    appEntitlementId?: string;

    /**
     * The appId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * The appUserId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUserId" })
    appUserId?: string;

    /**
     * The identityUserId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identityUserId" })
    identityUserId?: string;

    /**
     * The outcome field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "outcome" })
    outcome?: TaskTypeRevokeOutcome;

    @SpeakeasyMetadata()
    @Expose({ name: "outcomeTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    outcomeTime?: Date;
}
