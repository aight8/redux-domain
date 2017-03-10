export interface ApiResponse {
  success: boolean,
  data: any,
  errors: any[],
}

export function isValidResponseJsonStructure(obj: any): obj is ApiResponse {
  return 'success' in obj &&
         'data' in obj &&
         'errors' in obj;
}