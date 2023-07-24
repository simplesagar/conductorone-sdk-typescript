/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementView } from "./appentitlementview";
import { Expose, Type } from "class-transformer";

/**
 * The ListAppEntitlementsResponse message.
 */
export class ListAppEntitlementsResponse extends SpeakeasyBase {
    /**
     * The expanded field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];

    /**
     * The list field.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementView })
    @Expose({ name: "list" })
    @Type(() => AppEntitlementView)
    list?: AppEntitlementView[];

    /**
     * The nextPageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;
}
