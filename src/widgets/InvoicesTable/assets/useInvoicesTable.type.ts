type Column = {
  Header: string
  accessor: string
}

export interface useInvoicesTableType {
  data: unknown
  columns: Column[]
  isEmpty: boolean
  nextPage: () => void
  prevPage: () => void
  page: number
  totalPages: number
  isFetching: boolean
}
