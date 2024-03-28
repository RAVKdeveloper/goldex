import { useAppDispatch } from '../../../shared/service/store/hooks/hooks'

import {
  setIsOpenAddingModal,
  setIsOpenWithdrawModal,
} from '../../../shared/service/store/slices/balanceInfo/balanceInfo.slice'

import type { useBalancesActionsType } from '../assets/useBalancesActions.type'

export const useBalancesActions = (): useBalancesActionsType => {
  const dispatch = useAppDispatch()

  const openAddingModal = () => dispatch(setIsOpenAddingModal(true))

  const openWithdrawModal = () => dispatch(setIsOpenWithdrawModal(true))

  return {
    openAddingModal,
    openWithdrawModal,
  }
}
