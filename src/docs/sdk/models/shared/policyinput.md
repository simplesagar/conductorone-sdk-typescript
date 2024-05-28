# PolicyInput

A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.


## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The description of the Policy.                                                                                                                                             |
| `displayName`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | The display name of the Policy.                                                                                                                                            |
| `policySteps`                                                                                                                                                              | Record<string, [shared.PolicySteps](../../../sdk/models/shared/policysteps.md)>                                                                                            | :heavy_minus_sign:                                                                                                                                                         | A map of string(policy type) to steps in a policy. This structure is leftover from a previous design, and should only ever have one key->value set.                        |
| `policyType`                                                                                                                                                               | [shared.PolicyPolicyType](../../../sdk/models/shared/policypolicytype.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | Indicates the type of this policy. Can also be used to get the value from policySteps.                                                                                     |
| `postActions`                                                                                                                                                              | [shared.PolicyPostActions](../../../sdk/models/shared/policypostactions.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                                         | An array of actions (ordered) to take place after a policy completes processing.                                                                                           |
| `reassignTasksToDelegates`                                                                                                                                                 | *boolean*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                         | A policy configuration option that allows for reassinging tasks to delgated users. This level of delegation refers to the individual delegates users set on their account. |
| `rules`                                                                                                                                                                    | [shared.Rule](../../../sdk/models/shared/rule.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                                         | The rules field.                                                                                                                                                           |