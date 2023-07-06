/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskExpandMask } from "./taskexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The TaskServiceCreateRevokeRequest message.
 */
export class TaskServiceCreateRevokeRequest extends SpeakeasyBase {
    /**
     *  Make sure to update the TicketExpandMask
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => TaskExpandMask)
    taskExpandMask?: TaskExpandMask;

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
     * The description field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The identityUserId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identityUserId" })
    identityUserId?: string;
}
