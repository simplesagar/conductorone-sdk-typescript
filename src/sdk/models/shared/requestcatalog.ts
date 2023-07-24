/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlement, AppEntitlementInput } from "./appentitlement";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The RequestCatalog message.
 */
export class RequestCatalog extends SpeakeasyBase {
    /**
     * The accessEntitlements field.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlement })
    @Expose({ name: "accessEntitlements" })
    @Type(() => AppEntitlement)
    accessEntitlements?: AppEntitlement[];

    /**
     * The appIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appIds" })
    appIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The createdByUserId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserId" })
    createdByUserId?: string;

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

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The published field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "published" })
    published?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The visibleToEveryone field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "visibleToEveryone" })
    visibleToEveryone?: boolean;
}

/**
 * The RequestCatalog message.
 */
export class RequestCatalogInput extends SpeakeasyBase {
    /**
     * The accessEntitlements field.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementInput })
    @Expose({ name: "accessEntitlements" })
    @Type(() => AppEntitlementInput)
    accessEntitlements?: AppEntitlementInput[];

    /**
     * The appIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appIds" })
    appIds?: string[];

    /**
     * The createdByUserId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserId" })
    createdByUserId?: string;

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

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The published field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "published" })
    published?: boolean;

    /**
     * The visibleToEveryone field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "visibleToEveryone" })
    visibleToEveryone?: boolean;
}