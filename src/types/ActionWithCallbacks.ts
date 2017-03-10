import { FluxStandardAction } from 'flux-standard-action'

export type ResolveFunction = (data: any) => void;
export type RejectFunction = (data: Error) => void;

export interface Callbacks {
  resolve: ResolveFunction;
  reject: RejectFunction;
}

export interface MetaWithCallbacks {
    callbacks: Callbacks;
}

export interface ActionWithCallbacks<Payload, Meta> extends FluxStandardAction<Payload, Meta> {
    meta: Meta & MetaWithCallbacks;
}