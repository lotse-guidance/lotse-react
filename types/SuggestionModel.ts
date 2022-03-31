/* eslint-disable @typescript-eslint/no-explicit-any */

export type InteractionTypes = 'make' | 'accept' | 'reject' | 'preview start' | 'preview end' | 'retract';

export class SuggestionModel {
    suggestion: Suggestion;
    interaction: InteractionTypes;
    type = 'guidance';

    constructor(suggestion: Suggestion, interaction: InteractionTypes) {
        this.suggestion = suggestion;
        this.interaction = interaction;
    }
}

export type GuidanceDegree = 'orienting' | 'directing' | 'prescribing';

export interface Suggestion {
    title: string;
    description: string;
    id: number;
    degree: GuidanceDegree;
    event: SuggestionContent;
    strategy: string;
}

export interface SuggestionContent {
    value: any;
    action_id: string;
}
