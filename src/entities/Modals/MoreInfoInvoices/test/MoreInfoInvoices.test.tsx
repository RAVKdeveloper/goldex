import { render, screen } from '@testing-library/react'

import { MoreInfoInvoicesEntity } from '../ui/MoreInfoInvoices.entity'

import * as reduxHooks from '../../../../shared/service/store/hooks/hooks'

jest.mock('react-redux')

describe('testing MoreInfoInvoices', () => {
  it('render', () => {
    jest.spyOn(reduxHooks, 'useAppDispatch')
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(true)

    const component = render(<MoreInfoInvoicesEntity />)

    const modalComponent = screen.getByTestId('modal')

    expect(component).toMatchSnapshot()
    expect(modalComponent).toBeInTheDocument()
  })
})
