type Column = {
  Header: string
  accessor: string
}

export interface useInvoicesTableType {
  data: unknown
  columns: Column[]
  isEmpty: boolean
}
