/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class AppResourceOwners {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Invokes the c1.api.app.v1.AppResourceOwners.List method.
     */
    async list(
        req: operations.C1ApiAppV1AppResourceOwnersListRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.C1ApiAppV1AppResourceOwnersListResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.C1ApiAppV1AppResourceOwnersListRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/v1/apps/{app_id}/resource_types/{resource_type_id}/resource/{resource_id}/owners",
            req
        );

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.C1ApiAppV1AppResourceOwnersListResponse =
            new operations.C1ApiAppV1AppResourceOwnersListResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listAppResourceOwnersResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ListAppResourceOwnersResponse
                    );
                }
                break;
        }

        return res;
    }
}
