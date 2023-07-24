/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectorStatus } from "./connectorstatus";
import { OAuth2AuthorizedAs } from "./oauth2authorizedas";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The Connector message.
 */
export class ConnectorInput extends SpeakeasyBase {
    /**
     * The ConnectorStatus message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => ConnectorStatus)
    connectorStatus?: ConnectorStatus;

    /**
     * The OAuth2AuthorizedAs message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauthAuthorizedAs" })
    @Type(() => OAuth2AuthorizedAs)
    oAuth2AuthorizedAs?: OAuth2AuthorizedAs;

    /**
     * The appId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * The catalogId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalogId" })
    catalogId?: string;

    /**
     * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config?: Record<string, any>;

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
     * The downloadUrl field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "downloadUrl" })
    downloadUrl?: string;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The userIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}

/**
 * The Connector message.
 */
export class Connector extends SpeakeasyBase {
    /**
     * The ConnectorStatus message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => ConnectorStatus)
    connectorStatus?: ConnectorStatus;

    /**
     * The OAuth2AuthorizedAs message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauthAuthorizedAs" })
    @Type(() => OAuth2AuthorizedAs)
    oAuth2AuthorizedAs?: OAuth2AuthorizedAs;

    /**
     * The appId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * The catalogId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalogId" })
    catalogId?: string;

    /**
     * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config?: Record<string, any>;

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

    /**
     * The downloadUrl field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "downloadUrl" })
    downloadUrl?: string;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The userIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}
