/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The externalRefSource field.
 */
export enum ExternalRefExternalRefSource {
    Unspecified = "UNSPECIFIED",
    Jira = "JIRA",
}

/**
 * The ExternalRef message.
 */
export class ExternalRef extends SpeakeasyBase {
    /**
     * The externalRefSource field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "externalRefSource" })
    externalRefSource?: ExternalRefExternalRefSource;

    /**
     * The name field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The url field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
