import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import * as reduxHooks from '../../../../shared/service/store/hooks/hooks'
import { WithdrawModalEntity } from '../ui/WithdrawModal.entity'

jest.mock('react-redux')

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('testing WithdrawModalEntity component', () => {
  it('render and typing', () => {
    jest.spyOn(reduxHooks, 'useAppDispatch')
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({ isOpen: true })

    const user = userEvent.setup()

    const component = render(<WithdrawModalEntity />)

    const modalComponent = screen.getByTestId('modal')
    const amountInput = screen.getByTestId('amount')
    const addressInput = screen.getByTestId('address')

    user.type(amountInput, '3243432')
    user.type(addressInput, 'Tlwqwrhi35fkfk93j')

    expect(component).toMatchSnapshot()
    expect(modalComponent).toBeInTheDocument()
  })
})
