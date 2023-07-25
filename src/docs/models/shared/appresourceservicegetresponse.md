# AppResourceServiceGetResponse

The AppResourceServiceGetResponse message.


## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResourceView`                                                                                                                                                                                     | [AppResourceView](../../models/shared/appresourceview.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                    |  The app resource view returns an app resource with paths for items in the expand mask filled in when this response is returned and a request expand mask has "*" or "app_id" or "resource_type_id".<br/> |
| `expanded`                                                                                                                                                                                            | Record<string, *any*>[]                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                    | The expanded field.                                                                                                                                                                                   |