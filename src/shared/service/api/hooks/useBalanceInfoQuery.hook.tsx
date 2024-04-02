import { useQuery } from '@tanstack/react-query'

import { BalancesService } from '../../client'

export const useBalanceInfoQuery = () => {
  return useQuery({
    queryKey: ['getBalances'],
    queryFn: BalancesService.getOwnBalance,
  })
}
