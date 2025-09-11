export interface ITODO {
  _id?: string;
  todo?: string;
  isDone?:boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITodoPayload {
  todo?: string;
  isDone?: boolean;
}
