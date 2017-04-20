export interface ApiResponse {
    success: boolean;
    data: any;
    errors: any[];
}
export declare function isValidResponseJsonStructure(obj: any): obj is ApiResponse;
