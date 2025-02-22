export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

export interface BaseState {
  pagination: Pagination;
  searchString: string;
}

export interface IModalProps<T> {
  showModal?(): void;
  hideModal(): void;
  visible: boolean;
  loading?: boolean;
  onOk?(payload?: T): Promise<void> | void;
}
