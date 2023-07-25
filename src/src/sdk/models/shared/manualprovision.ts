/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  Manual provisioning indicates that a human must intervene for the provisioning of this step.
 *
 * @remarks
 *
 */
export class ManualProvision extends SpeakeasyBase {
    /**
     *  This field indicates a text body of instructions for the provisioner to indicate.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "instructions" })
    instructions?: string;

    /**
     *  An array of users that are required to provision during this step.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}