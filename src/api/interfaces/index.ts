interface Pagination {
  limit: number,
  offset: number,
  count: number,
  total: number,
}

interface Interaday {
  open: number,
  high: number,
  low: number,
  last: number,
  close: number,
  volume: number,
  date: string,
  symbol: string,
  exchange: string
}

export interface ApiResponse {
  pagination: Pagination,
  data: Interaday[]
}

export interface PaginationParams {
  limit: string,
  offset: string
}
