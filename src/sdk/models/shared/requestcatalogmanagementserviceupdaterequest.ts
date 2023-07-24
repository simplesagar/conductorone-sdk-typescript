/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCatalogInput } from "./requestcatalog";
import { RequestCatalogExpandMask } from "./requestcatalogexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The RequestCatalogManagementServiceUpdateRequest message.
 */
export class RequestCatalogManagementServiceUpdateRequestInput extends SpeakeasyBase {
    /**
     * The RequestCatalog message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalog" })
    @Type(() => RequestCatalogInput)
    requestCatalog?: RequestCatalogInput;

    /**
     * The RequestCatalogExpandMask message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => RequestCatalogExpandMask)
    requestCatalogExpandMask?: RequestCatalogExpandMask;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}
