/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The DirectoryExpandMask message.
 */
export class DirectoryExpandMask extends SpeakeasyBase {
    /**
     * The paths field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paths" })
    paths?: string[];
}
