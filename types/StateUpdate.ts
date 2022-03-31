/* eslint-disable @typescript-eslint/no-explicit-any */

interface StateUpdate {
    re_evaluate_strategies?: boolean;
    re_evaluate_actions?: boolean;
}

export interface GuidanceStateUpdate extends StateUpdate {
    updates: { [key: string]: any };
}

export interface GuidanceStateCallbackUpdate extends StateUpdate {
    callback: string;
    params: { [key: string]: any };
}
