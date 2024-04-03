import { useQuery } from '@tanstack/react-query'
import { InvoicesService } from '../../client'

interface useInvoicesInfoQueryType {
  page: number
  size: number
}

export const useInvoicesInfoQuery = ({ page = 1, size = 8 }: useInvoicesInfoQueryType) => {
  return useQuery({
    queryKey: ['invoicesInfo', page],
    queryFn: () => InvoicesService.readInvoicesList({ page, size }),
  })
}
