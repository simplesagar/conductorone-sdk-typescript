/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "./models/errors";
import * as operations from "./models/operations";

export class AppReportAction extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Generate Report
     *
     * @remarks
     * Generate a report for the given app.
     */
    async generateReport(
        input: operations.C1ApiAppV1AppReportActionServiceGenerateReportRequest,
        options?: RequestOptions
    ): Promise<operations.C1ApiAppV1AppReportActionServiceGenerateReportResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) =>
                operations.C1ApiAppV1AppReportActionServiceGenerateReportRequest$.outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.AppActionsServiceGenerateReportRequest, {
            explode: true,
        });

        const pathParams$ = {
            app_id: enc$.encodeSimple("app_id", payload$.app_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/api/v1/apps/{app_id}/report")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "c1.api.app.v1.AppReportActionService.GenerateReport",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: [] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.C1ApiAppV1AppReportActionServiceGenerateReportResponse$.inboundSchema.parse(
                        {
                            ...responseFields$,
                            AppActionsServiceGenerateReportResponse: val$,
                        }
                    );
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
