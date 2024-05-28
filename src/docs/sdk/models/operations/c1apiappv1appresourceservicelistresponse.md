# C1ApiAppV1AppResourceServiceListResponse


## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `appResourceServiceListResponse`                                                                         | [shared.AppResourceServiceListResponse](../../../sdk/models/shared/appresourceservicelistresponse.md)    | :heavy_minus_sign:                                                                                       | The AppResourceServiceListResponse message contains a list of results and a nextPageToken if applicable. |
| `contentType`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP response content type for this operation                                                            |
| `statusCode`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP response status code for this operation                                                             |
| `rawResponse`                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                    | :heavy_check_mark:                                                                                       | Raw HTTP response; suitable for custom response parsing                                                  |