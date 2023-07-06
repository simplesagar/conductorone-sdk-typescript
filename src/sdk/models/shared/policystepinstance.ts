/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApprovalInstance } from "./approvalinstance";
import { ProvisionInstance } from "./provisioninstance";
import { Expose, Type } from "class-transformer";

/**
 * The state field.
 */
export enum PolicyStepInstanceState {
    PolicyStepStateUnspecified = "POLICY_STEP_STATE_UNSPECIFIED",
    PolicyStepStateActive = "POLICY_STEP_STATE_ACTIVE",
    PolicyStepStateDone = "POLICY_STEP_STATE_DONE",
}

/**
 * The PolicyStepInstance message.
 *
 * @remarks
 *
 * This message contains a oneof named instance. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *
 */
export class PolicyStepInstance extends SpeakeasyBase {
    /**
     * The ApprovalInstance message.
     *
     * @remarks
     *
     * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
     *   - approved
     *   - denied
     *   - reassigned
     *   - restarted
     *   - reassignedByError
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approval" })
    @Type(() => ApprovalInstance)
    approvalInstance?: ApprovalInstance;

    /**
     * The ProvisionInstance message.
     *
     * @remarks
     *
     * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
     *   - completed
     *   - cancelled
     *   - errored
     *   - reassignedByError
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provision" })
    @Type(() => ProvisionInstance)
    provisionInstance?: ProvisionInstance;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The state field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: PolicyStepInstanceState;
}
