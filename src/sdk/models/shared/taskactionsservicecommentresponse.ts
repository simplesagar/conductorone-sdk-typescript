/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskView } from "./taskview";
import { Expose, Type } from "class-transformer";

/**
 * The TaskActionsServiceCommentResponse message.
 */
export class TaskActionsServiceCommentResponse extends SpeakeasyBase {
    /**
     * The TaskView message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskView" })
    @Type(() => TaskView)
    taskView?: TaskView;

    /**
     * The expanded field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}
