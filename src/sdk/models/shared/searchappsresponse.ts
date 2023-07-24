/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { App } from "./app";
import { Expose, Type } from "class-transformer";

/**
 * The SearchAppsResponse message.
 */
export class SearchAppsResponse extends SpeakeasyBase {
    /**
     * The list field.
     */
    @SpeakeasyMetadata({ elemType: App })
    @Expose({ name: "list" })
    @Type(() => App)
    list?: App[];

    /**
     * The nextPageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;

    /**
     * The notificationToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationToken" })
    notificationToken?: string;
}
