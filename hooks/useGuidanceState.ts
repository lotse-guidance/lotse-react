import { createGlobalState } from 'react-use';
import { webSocket } from 'rxjs/webSocket';
import { Subject } from 'rxjs';
import { SuggestionModel } from 'types/guidance-backend/SuggestionModel';
import { useEffect } from 'react';

const backendWebsocketUrl = 'ws://localhost:8019/guidance';

const apiPrefix = 'channels';
const userId = 'user';

const useGuidanceWebsocketSubject = createGlobalState<Subject<SuggestionModel>>(
    webSocket<SuggestionModel>(`${backendWebsocketUrl}/${apiPrefix}/${userId}`)
);

export default function useOnGuidanceUpdate(onUpdate: (suggestion: SuggestionModel) => void) {
    const [guidanceWebsocketSubject] = useGuidanceWebsocketSubject();

    useEffect(() => {
        const subscription = guidanceWebsocketSubject.subscribe(onUpdate);

        // Cleanup subscription on unmount.
        return () => {
            subscription.unsubscribe();
        };
    }, [guidanceWebsocketSubject, onUpdate]);
}
