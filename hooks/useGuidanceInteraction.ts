import { GuidanceStateCallbackUpdate, GuidanceStateUpdate } from 'types/StateUpdate';
import { SuggestionModel } from 'types/SuggestionModel';
import { useCallback } from 'react';

const backendUrl = 'ws://localhost:8019/';

type JSONParameters = SuggestionModel | GuidanceStateUpdate | GuidanceStateCallbackUpdate;

async function post(route: string, parameters: JSONParameters): Promise<unknown> {
    const requestURL = `${backendUrl}/${route}`;

    return fetch(requestURL, {
        body: JSON.stringify(parameters),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
}

export function useAcceptGuidance() {
    return useCallback((interaction: SuggestionModel) => {
        return post(`guidance/accept`, interaction);
    }, []);
}

export function useRejectGuidance() {
    return useCallback((interaction: SuggestionModel) => {
        return post(`guidance/reject`, interaction);
    }, []);
}

export function useUpdateState() {
    return useCallback((update: GuidanceStateUpdate) => {
        return post(`guidance/state/update`, update);
    }, []);
}

export function useUpdateStateWithCallback() {
    return useCallback((update: GuidanceStateCallbackUpdate) => {
        return post(`guidance/state/update_with_callback`, update);
    }, []);
}
