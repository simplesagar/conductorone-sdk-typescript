/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1AppEntitlementSearchServiceSearchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    @SpeakeasyMetadata()
    appEntitlementSearchServiceSearchResponse?: shared.AppEntitlementSearchServiceSearchResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}