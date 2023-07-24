/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementRef } from "./appentitlementref";
import { Expose, Type } from "class-transformer";

/**
 * The RequestCatalogManagementServiceRemoveAppEntitlementsRequest message.
 */
export class RequestCatalogManagementServiceRemoveAppEntitlementsRequest extends SpeakeasyBase {
    /**
     * The appEntitlements field.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementRef })
    @Expose({ name: "appEntitlements" })
    @Type(() => AppEntitlementRef)
    appEntitlements?: AppEntitlementRef[];
}