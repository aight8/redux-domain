declare module 'debug/src/node' {
    const val: any;
    export default val;
}

declare var IS_BROWSER: boolean;
declare var Reactotron: any;
declare module 'redux-domain/decorators/internal/isGenerator' {
	export default function isGenerator(variable: {}): boolean;

}
declare module 'redux-domain/types/SagaIterator' {
	import { Effect } from 'redux-saga'; type SagaIterator = IterableIterator<Effect | Effect[] | Promise<any> | void>;
	export default SagaIterator;

}
declare module 'redux-domain/types/Saga' {
	import SagaIterator from 'redux-domain/types/SagaIterator'; type Saga = (...args: any[]) => SagaIterator;
	export default Saga;

}
declare module 'redux-domain/types/ActionSagaMap' {
	import Saga from 'redux-domain/types/Saga';
	interface ActionSagaMap {
	    [actionType: string]: Saga;
	}
	export default ActionSagaMap;

}
declare module 'redux-domain/types/ActionReducerMap' {
	import { Reducer } from 'redux';
	export interface ActionReducerMap {
	    [actionType: string]: Reducer<any>;
	}
	export default ActionReducerMap;

}
declare module 'redux-domain/types/ActionReducerOrSagaMap' {
	import Saga from 'redux-domain/types/Saga';
	import { Reducer } from 'redux';
	interface ActionReducerOrSagaMap {
	    [actionType: string]: Saga | Reducer<any>;
	}
	export default ActionReducerOrSagaMap;

}
declare module 'redux-domain/utils/pickBy' {
	import ActionReducerOrSagaMap from 'redux-domain/types/ActionReducerOrSagaMap';
	export default function pickBy<T>(obj: ActionReducerOrSagaMap, fn: (val: any) => boolean): {
	    [actionType: string]: T;
	};

}
declare module 'redux-domain/errors/createBadUsageError' {
	export default function createBadUsageError(message: string): any;

}
declare module 'redux-domain/Domain' {
	import ActionSagaMap from 'redux-domain/types/ActionSagaMap';
	import ActionReducerMap from 'redux-domain/types/ActionReducerMap';
	import ActionReducerOrSagaMap from 'redux-domain/types/ActionReducerOrSagaMap';
	import { Store } from 'redux'; abstract class Domain<StateType> {
	    static key: string;
	    private _key;
	    key: string;
	    store: Store<any>;
	    readonly defaultState: StateType;
	    protected handlers: ActionReducerOrSagaMap;
	    constructor();
	    readonly state: StateType;
	    readonly rootState: any;
	    resetStore(): void;
	    getAllReducers(): ActionReducerMap;
	    getAllSagas(): ActionSagaMap;
	}
	export default Domain;

}
declare module 'redux-domain/types/DomainKeyActionReducerMap' {
	import ActionReducerMap from 'redux-domain/types/ActionReducerMap'; type DomainKeyActionReducerMap = {
	    [domainKey: string]: ActionReducerMap;
	};
	export default DomainKeyActionReducerMap;

}
declare module 'redux-domain/types/DomainKeyDefaultStateMap' {
	 type DomainKeyDefaultStateMap = {
	    [domainKey: string]: any;
	};
	export default DomainKeyDefaultStateMap;

}
declare module 'redux-domain/types/ActionSagaDefinition' {
	import Saga from 'redux-domain/types/Saga';
	interface ActionSagaDefinition {
	    actionType: string;
	    saga: Saga;
	}
	export default ActionSagaDefinition;

}
declare module 'redux-domain/types/ActionSagaDefinitions' {
	import ActionSagaDefinition from 'redux-domain/types/ActionSagaDefinition'; type ActionSagaDefinitions = ActionSagaDefinition[];
	export default ActionSagaDefinitions;

}
declare module 'redux-domain/types/KeyDomainMap' {
	import Domain from 'redux-domain/Domain'; type KeyDomainMap = {
	    [key: string]: Domain<any>;
	};
	export default KeyDomainMap;

}
declare module 'redux-domain/DomainManager' {
	import DomainKeyActionReducerMap from 'redux-domain/types/DomainKeyActionReducerMap';
	import DomainKeyDefaultStateMap from 'redux-domain/types/DomainKeyDefaultStateMap';
	import { Store } from 'redux';
	import ActionSagaDefinitions from 'redux-domain/types/ActionSagaDefinitions';
	import KeyDomainMap from 'redux-domain/types/KeyDomainMap';
	export type RootState<T extends KeyDomainMap> = {
	    [K in keyof T]: T[K]['state'];
	};
	export default class DomainManager<T extends KeyDomainMap, RS extends RootState<T>> {
	    readonly domains: T;
	    store: Store<any>;
	    constructor(domains: T);
	    readonly rootState: RS;
	    resetAllStores(): void;
	    getReducers(): DomainKeyActionReducerMap;
	    getDefaultStates(): DomainKeyDefaultStateMap;
	    getSagas(): ActionSagaDefinitions;
	}

}
declare module 'redux-domain/emptyObject' {
	 const val: any;
	export default val;

}
declare module 'redux-domain/models/ActionInterface' {
	import { FluxStandardAction } from 'flux-standard-action';
	export default class ActionInterface<Payload, Meta> {
	    action: FluxStandardAction<Payload, Meta>;
	    dispatch: () => void;
	    dispatchSync: () => Promise<any>;
	}

}
declare module 'redux-domain/models/ActionInterfaceMockAction' {
	import ActionInterface from 'redux-domain/models/ActionInterface';
	import { FluxStandardAction } from 'flux-standard-action'; var _default: (payload?: any, meta?: any, error?: boolean) => ActionInterfaceMockAction<any, any>;
	export default _default;
	export class ActionInterfaceMockAction<Payload, Meta> implements ActionInterface<Payload, Meta> {
	    action: FluxStandardAction<Payload, Meta>;
	    dispatch(): void;
	    dispatchSync(): Promise<any>;
	    constructor(payload: Payload, meta: Meta, error: boolean);
	}

}
declare module 'redux-domain/types/ActionWithCallbacks' {
	import { FluxStandardAction } from 'flux-standard-action';
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

}
declare module 'redux-domain/decorators/internal/createActionInterfaceCreator' {
	import ActionInterface from 'redux-domain/models/ActionInterface';
	import Domain from 'redux-domain/Domain';
	export default function (target: Domain<any>, actionType: string, actionCreator: Function): (...args: any[]) => ActionInterface<any, any>;

}
declare module 'redux-domain/decorators/action' {
	import Domain from 'redux-domain/Domain';
	export default function (actionType: string): (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => void;

}
declare module 'redux-domain/types/SmartReducer' {
	import { FSA } from 'flux-standard-action'; type SmartReducer<State, Payload> = {
	    (payload?: Payload, action?: FSA<Payload, any>): State;
	};
	export default SmartReducer;

}
declare module 'redux-domain/decorators/internal/setActionReducerHandler' {
	import SmartReducer from 'redux-domain/types/SmartReducer'; var _default: <State>(target: any, actionType: string, reducerFunction: SmartReducer<any, any>) => void;
	export default _default;

}
declare module 'redux-domain/decorators/reducerAction' {
	import SmartReducer from 'redux-domain/types/SmartReducer';
	import Domain from 'redux-domain/Domain'; var _default: <State>(actionType: string, reducerFunction: SmartReducer<any, any>) => (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
	export default _default;

}
declare module 'redux-domain/types/SmartSagaFootprint' {
	import SagaIterator from 'redux-domain/types/SagaIterator';
	import { FSA } from 'flux-standard-action'; type SmartSagaFootprint<Payload> = (payload?: Payload, action?: FSA<Payload, any>) => SagaIterator;
	export default SmartSagaFootprint;

}
declare module 'redux-domain/decorators/internal/setActionSagaHandler' {
	import SmartSagaFootprint from 'redux-domain/types/SmartSagaFootprint'; var _default: (target: any, actionType: string, sagaGeneratorFunction: SmartSagaFootprint<any>) => void;
	export default _default;

}
declare module 'redux-domain/decorators/sagaAction' {
	import Domain from 'redux-domain/Domain';
	import SmartSagaFootprint from 'redux-domain/types/SmartSagaFootprint'; var _default: (actionType: string, sagaGeneratorFunction: SmartSagaFootprint<any>) => (target: Domain<any>, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
	export default _default;

}
declare module 'redux-domain/helpers/getCallbackOptionsFromAction' {
	import { FluxStandardAction } from 'flux-standard-action';
	import { MetaWithCallbacks } from 'redux-domain/types/ActionWithCallbacks'; var _default: (action: FluxStandardAction<any, MetaWithCallbacks>) => {
	    resolve: (data: any) => void;
	    reject: (data: Error) => void;
	};
	export default _default;

}
declare module 'redux-domain/node_modules/@types/Qs/index' {
	// Type definitions for qs 6.2.0
	// Project: https://github.com/hapijs/qs
	// Definitions by: Roman Korneev <https://github.com/RWander>, Leon Yu <https://github.com/leonyu>
	// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

	export = QueryString;
	export as namespace qs; namespace QueryString {
	    interface IStringifyOptions {
	        delimiter?: string;
	        strictNullHandling?: boolean;
	        skipNulls?: boolean;
	        encode?: boolean;
	        encoder?: (str: string) => any;
	        filter?: Array<string | number> | ((prefix: string, value: any) => any);
	        arrayFormat?: 'indices' | 'brackets' | 'repeat';
	        indices?: boolean;
	    }

	    interface IParseOptions {
	        delimiter?: string | RegExp;
	        depth?: number;
	        decoder?: (str: string) => any;
	        arrayLimit?: number;
	        parseArrays?: boolean;
	        allowDots?: boolean;
	        plainObjects?: boolean;
	        allowPrototypes?: boolean;
	        parameterLimit?: number;
	        strictNullHandling?: boolean;
	    }

	    function stringify(obj: any, options?: IStringifyOptions): string;
	    function parse(str: string, options?: IParseOptions): any;
	}

}
declare module 'redux-domain/api-request-pool/errors/base/RequestError' {
	import { AxiosResponse } from 'axios';
	export enum RequestErrorTypeEnum {
	    TimeoutError,
	    ConnectionError,
	    NetworkError,
	    CancelError,
	    InvalidStatus,
	    InvalidResponseType,
	    ExpressProxyError,
	    ApiError,
	    ApiFatalError,
	}
	export type RequestErrorType = 'TIMEOUT_ERROR' | 'CONNECTION_ERROR' | 'NETWORK_ERROR' | 'CANCEL_ERROR' | 'INVALID_STATUS' | 'INVALID_RESPONSE_TYPE' | 'INVALID_JSON_STRUCTURE' | 'EXPRESS_PROXY_ERROR' | 'API_ERROR' | 'API_FATAL_ERROR';
	export default class RequestError extends Error {
	    readonly problem: RequestErrorType;
	    readonly innerError: Error;
	    readonly axiosResponse: AxiosResponse;
	    constructor(problem: RequestErrorType, innerError?: Error, axiosResponse?: AxiosResponse);
	}

}
declare module 'redux-domain/api-request-pool/errors/WrappedError' {
	export default class WrappedError {
	    originalError: Error;
	    handled: boolean;
	    constructor(originalError: Error, handled: boolean);
	}

}
declare module 'redux-domain/api-request-pool/errors/ApiError' {
	import RequestError from 'redux-domain/api-request-pool/errors/base/RequestError';
	export default class ApiError extends RequestError {
	    readonly errors: any;
	    constructor(errors: any);
	}

}
declare module 'redux-domain/api-request-pool/errors/guards/ExpressJsProxyError' {
	export interface ExpressJsProxyError extends Error {
	    address: string;
	    family: string | null;
	    host: string;
	    code: string;
	    errno: string;
	    port: string;
	    syscall: string;
	}
	export function isExpressJsProxyError(obj: Object): obj is ExpressJsProxyError;

}
declare module 'redux-domain/api-request-pool/errors/guards/TimeoutError' {
	export interface TimeoutError extends Error {
	    config: any;
	    code: any;
	    response: any;
	}
	export function isTimeoutError(err: any): err is TimeoutError;

}
declare module 'redux-domain/api-request-pool/errors/guards/ConnectionError' {
	export interface ConnectionError extends Error {
	    code: string;
	    errno: number | string;
	    syscall: string;
	    hostname: string;
	    host: string;
	    port: number;
	    config: any;
	    response: any;
	}
	export function isNodeJsConnectionError(err: any): err is ConnectionError;

}
declare module 'redux-domain/api-request-pool/errors/guards/ServerStatusError' {
	export interface ServerStatusError extends Error {
	    config: any;
	    response: any;
	}
	export function isServerStatusError(err: any): err is ServerStatusError;

}
declare module 'redux-domain/api-request-pool/errors/guards/NetworkError' {
	import { AxiosRequestConfig, AxiosResponse } from 'axios';
	export interface NetworkError extends Error {
	    config: AxiosRequestConfig;
	    response: AxiosResponse;
	}
	export function isNetworkError(obj: any): obj is NetworkError;

}
declare module 'redux-domain/api-request-pool/models/ApiResponse' {
	export interface ApiResponse {
	    success: boolean;
	    data: any;
	    errors: any[];
	}
	export function isValidResponseJsonStructure(obj: any): obj is ApiResponse;

}
declare module 'redux-domain/api-request-pool/ApiRequestPool' {
	import RequestError from 'redux-domain/api-request-pool/errors/base/RequestError';
	export type METHOD = 'get' | 'post';
	export interface Request {
	    url?: string;
	    method?: METHOD;
	    data?: any;
	    headers?: {
	        [headerName: string]: any;
	    };
	}
	export interface Response {
	    body?: any;
	    status?: number;
	    headers?: {
	        [headerName: string]: any;
	    };
	}
	export type ErrorHandler = (err: RequestError) => boolean;
	export type LogHandler = (request: Request, response: Response, duration: number) => void;
	export type ApiRequestPoolOptions = {
	    baseURL?: string;
	    errorHandler?: ErrorHandler;
	    logHandler?: LogHandler;
	    timeout?: number;
	    nodeRequest?: any;
	};
	export type ApiRequestOptions = {
	    cancelPrev?: boolean;
	    uniqueRequestHasher?: (req: {
	        method: METHOD;
	        url: string;
	        rawData: any;
	    }) => string;
	};
	export default class ApiRequestPool {
	    private options;
	    private axios;
	    private cancelTokens;
	    constructor(options?: ApiRequestPoolOptions);
	    private throwWrappedError(requestError);
	    private throwNewError(type, innerError?, response?);
	    protected request(method: METHOD, url: string, rawData?: any, options?: ApiRequestOptions): Promise<any>;
	    private innerRequest(method, url, rawData?, options?);
	}

}
declare module 'redux-domain/helpers/createReducer' {
	import { ReducersMapObject, Action } from 'redux';
	import DomainKeyActionReducerMap from 'redux-domain/types/DomainKeyActionReducerMap';
	import DomainKeyDefaultStateMap from 'redux-domain/types/DomainKeyDefaultStateMap'; var _default: (domainActionReducerMap: DomainKeyActionReducerMap, domainDefaultStates: DomainKeyDefaultStateMap, mergeReducersMapObject?: ReducersMapObject) => <A extends Action>(state: {}, action: A) => {};
	export default _default;

}
declare module 'redux-domain/helpers/createReducerImmutable' {
	import { ReducersMapObject, Action } from 'redux';
	import DomainKeyActionReducerMap from 'redux-domain/types/DomainKeyActionReducerMap';
	import DomainKeyDefaultStateMap from 'redux-domain/types/DomainKeyDefaultStateMap'; var _default: (domainActionReducerMap: DomainKeyActionReducerMap, domainDefaultStates: DomainKeyDefaultStateMap, mergeReducersMapObject?: ReducersMapObject) => <A extends Action>(state: {}, action: A) => {};
	export default _default;

}
declare module 'redux-domain/helpers/createSagaFork' {
	 var _default: (actionType: string, innerGenerator: any) => any;
	export default _default;

}
declare module 'redux-domain/helpers/createRootSaga' {
	import ActionSagaDefinition from 'redux-domain/types/ActionSagaDefinition';
	import { Effect, effects } from 'redux-saga'; var _default: (sagas: ActionSagaDefinition[], additionalForks?: IterableIterator<effects.TakeEffect<any> | effects.PutEffect<any> | effects.RaceEffect | effects.CallEffect | effects.CpsEffect | effects.ForkEffect | effects.JoinEffect | effects.CancelEffect | effects.SelectEffect | effects.ActionChannelEffect<any> | effects.CancelledEffect | Effect[]>[]) => () => IterableIterator<IterableIterator<effects.TakeEffect<any> | effects.PutEffect<any> | effects.RaceEffect | effects.CallEffect | effects.CpsEffect | effects.ForkEffect | effects.JoinEffect | effects.CancelEffect | effects.SelectEffect | effects.ActionChannelEffect<any> | effects.CancelledEffect | Effect[]>>;
	export default _default;

}
declare module 'redux-domain/UserState' {
	import { Middleware, Reducer, Store, StoreEnhancer } from 'redux';
	import { SagaIterator } from 'redux-saga';
	import DomainManager from 'redux-domain/DomainManager';
	export interface UserStoreOptions {
	    reducer?: Reducer<any>;
	    preloadedState?: any;
	    middlewares?: Middleware[];
	    enhancers?: StoreEnhancer<any>[];
	    reduxDevToolsCompose?: boolean;
	    reactotron?: boolean;
	    rootSaga?: () => SagaIterator;
	}
	export default class UserStore<DM extends DomainManager<any, any>> {
	    private options;
	    readonly domainManager: DM;
	    readonly store: Store<any>;
	    private sagaMiddleware;
	    private sagaRootTask;
	    constructor(options?: UserStoreOptions, domainManager?: DM);
	    private static generateOptionsByDomainManager(domainManager);
	    startRootSaga(): void;
	    finalizeSaga(restart?: boolean): Promise<any>;
	}

}
declare module 'redux-domain/index' {
	import DomainManager from 'redux-domain/DomainManager';
	import Domain from 'redux-domain/Domain';
	import action from 'redux-domain/decorators/action';
	import reducerAction from 'redux-domain/decorators/reducerAction';
	import sagaAction from 'redux-domain/decorators/sagaAction';
	import ActionInterface from 'redux-domain/models/ActionInterface';
	import getCallbackOptionsFromAction from 'redux-domain/helpers/getCallbackOptionsFromAction';
	import Action from 'redux-domain/models/ActionInterfaceMockAction';
	import ApiRequestPool from 'redux-domain/api-request-pool/ApiRequestPool';
	import UserState from 'redux-domain/UserState';
	import createReducer from 'redux-domain/helpers/createReducer';
	import createRootSaga from 'redux-domain/helpers/createRootSaga';
	import createSagaFork from 'redux-domain/helpers/createSagaFork';
	export { UserState, DomainManager, Domain, ActionInterface, Action, reducerAction, sagaAction, action, createReducer, createRootSaga, createSagaFork, getCallbackOptionsFromAction, ApiRequestPool };

}
