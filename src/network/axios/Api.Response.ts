
export interface ApiResponse<T extends any = any> {
  message: string;
  status: number;
  data: T;
  success: boolean;
}