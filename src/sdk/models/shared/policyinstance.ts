/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Policy } from "./policy";
import { PolicyStep } from "./policystep";
import { PolicyStepInstance } from "./policystepinstance";
import { Expose, Type } from "class-transformer";

/**
 * The PolicyInstance message.
 */
export class PolicyInstance extends SpeakeasyBase {
    /**
     * The Policy message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => Policy)
    policy?: Policy;

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
    @SpeakeasyMetadata()
    @Expose({ name: "current" })
    @Type(() => PolicyStepInstance)
    policyStepInstance?: PolicyStepInstance;

    /**
     * The history field.
     */
    @SpeakeasyMetadata({ elemType: PolicyStepInstance })
    @Expose({ name: "history" })
    @Type(() => PolicyStepInstance)
    history?: PolicyStepInstance[];

    /**
     * The next field.
     */
    @SpeakeasyMetadata({ elemType: PolicyStep })
    @Expose({ name: "next" })
    @Type(() => PolicyStep)
    next?: PolicyStep[];
}
