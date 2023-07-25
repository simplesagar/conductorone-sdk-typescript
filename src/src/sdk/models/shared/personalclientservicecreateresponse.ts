/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PersonalClient } from "./personalclient";
import { Expose, Type } from "class-transformer";

/**
 * The PersonalClientServiceCreateResponse message.
 */
export class PersonalClientServiceCreateResponse extends SpeakeasyBase {
    /**
     * The PersonalClient message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => PersonalClient)
    personalClient?: PersonalClient;

    /**
     * The clientSecret field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clientSecret" })
    clientSecret?: string;
}