import { useQuery } from '@tanstack/react-query'
import { UsersService } from '../../client'

export const useMeQuery = () => {
  return useQuery({
    queryKey: ['getAuthMe'],
    queryFn: UsersService.getMyData,
  })
}
