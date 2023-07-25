/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Approval, ApprovalInput } from "./approval";
import { Provision } from "./provision";
import { Expose, Type } from "class-transformer";

/**
 * The PolicyStep message.
 *
 * @remarks
 *
 * This message contains a oneof named step. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *
 */
export class PolicyStep extends SpeakeasyBase {
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
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approval" })
    @Type(() => Approval)
    approval?: Approval;

    /**
     *  The provision step references a provision policy for this step.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provision" })
    @Type(() => Provision)
    provision?: Provision;
}

/**
 * The PolicyStep message.
 *
 * @remarks
 *
 * This message contains a oneof named step. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *
 */
export class PolicyStepInput extends SpeakeasyBase {
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
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approval" })
    @Type(() => ApprovalInput)
    approval?: ApprovalInput;

    /**
     *  The provision step references a provision policy for this step.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provision" })
    @Type(() => Provision)
    provision?: Provision;
}