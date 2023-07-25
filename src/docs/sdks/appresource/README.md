# appResource

### Available Operations

* [get](#get) - Get
* [list](#list) - List

## get

Invokes the c1.api.app.v1.AppResourceService.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appResource.get({
  appId: "consequatur",
  appResourceTypeId: "est",
  id: "d2abd442-6980-42d5-82a9-4bb4f63c969e",
}).then((res: C1ApiAppV1AppResourceServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.C1ApiAppV1AppResourceServiceGetRequest](../../models/operations/c1apiappv1appresourceservicegetrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppResourceServiceGetResponse](../../models/operations/c1apiappv1appresourceservicegetresponse.md)>**


## list

Invokes the c1.api.app.v1.AppResourceService.List method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appResource.list({
  appId: "sint",
  appResourceTypeId: "officia",
}).then((res: C1ApiAppV1AppResourceServiceListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1AppResourceServiceListRequest](../../models/operations/c1apiappv1appresourceservicelistrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1AppResourceServiceListResponse](../../models/operations/c1apiappv1appresourceservicelistresponse.md)>**
