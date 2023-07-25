/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Role } from "./role";
import { Expose, Type } from "class-transformer";

/**
 * The ListRolesResponse message.
 */
export class ListRolesResponse extends SpeakeasyBase {
    /**
     * The list field.
     */
    @SpeakeasyMetadata({ elemType: Role })
    @Expose({ name: "list" })
    @Type(() => Role)
    list?: Role[];

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