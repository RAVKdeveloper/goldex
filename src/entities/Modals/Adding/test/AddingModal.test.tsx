import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { AddingModalEntity } from '../AddingModal.entity'

import * as reduxHooks from '../../../../shared/service/store/hooks/hooks'

jest.mock('react-redux')

describe('testing AddingModalEntity', () => {
  const user = userEvent.setup()

  it('render and typing', () => {
    jest.spyOn(reduxHooks, 'useAppDispatch')
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({ isOpenModal: true })

    const component = render(<AddingModalEntity />)

    const modal = screen.getByTestId('modal')
    const amountInput = screen.getByTestId('field')

    user.type(amountInput, 'this amount')

    expect(component).toMatchSnapshot()
    expect(modal).toBeInTheDocument()
  })
})
