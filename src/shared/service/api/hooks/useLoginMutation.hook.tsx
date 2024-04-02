import { useMutation } from '@tanstack/react-query'
import { LoginService } from '../../client'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: LoginService.login,
    mutationKey: ['loginUser'],
  })
}
