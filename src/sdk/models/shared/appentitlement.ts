/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvisionPolicy } from "./provisionpolicy";
import { Expose, Transform, Type } from "class-transformer";

export class AppEntitlementDurationUnset extends SpeakeasyBase {}

/**
 * The AppEntitlement message.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 *
 */
export class AppEntitlement extends SpeakeasyBase {
    /**
     * The ProvisionPolicy message.
     *
     * @remarks
     *
     * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
     *   - connector
     *   - manual
     *   - delegated
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provisionerPolicy" })
    @Type(() => ProvisionPolicy)
    provisionPolicy?: ProvisionPolicy;

    /**
     * The alias field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alias" })
    alias?: string;

    /**
     * The appId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * The appResourceId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appResourceId" })
    appResourceId?: string;

    /**
     * The appResourceTypeId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appResourceTypeId" })
    appResourceTypeId?: string;

    /**
     * The certifyPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certifyPolicyId" })
    certifyPolicyId?: string;

    /**
     * The complianceFrameworkValueIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "complianceFrameworkValueIds" })
    complianceFrameworkValueIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * The description field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The displayName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "durationGrant" })
    durationGrant?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "durationUnset" })
    @Type(() => AppEntitlementDurationUnset)
    durationUnset?: AppEntitlementDurationUnset;

    /**
     * The emergencyGrantEnabled field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emergencyGrantEnabled" })
    emergencyGrantEnabled?: boolean;

    /**
     * The emergencyGrantPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emergencyGrantPolicyId" })
    emergencyGrantPolicyId?: string;

    /**
     * The grantCount field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantCount" })
    grantCount?: string;

    /**
     * The grantPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantPolicyId" })
    grantPolicyId?: string;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The revokePolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revokePolicyId" })
    revokePolicyId?: string;

    /**
     * The riskLevelValueId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "riskLevelValueId" })
    riskLevelValueId?: string;

    /**
     * The slug field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug?: string;

    /**
     * The systemBuiltin field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "systemBuiltin" })
    systemBuiltin?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
