export interface ApiError {
  type: string
  title: string
  status: number
  detail?: string
}

export interface ApiList<T> {
  items: T[]
  total: number
}
