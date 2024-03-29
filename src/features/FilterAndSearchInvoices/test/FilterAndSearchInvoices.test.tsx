import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { FilterAndSearchInvoicesFeature } from '../..'

describe('testing FilterAndSearchInvoices', () => {
  it('render and click buttons and typing search', () => {
    const user = userEvent.setup()

    const component = render(<FilterAndSearchInvoicesFeature />)

    const rootComponent = screen.getByTestId('root')
    const searchComponent = screen.getByTestId('textbox')
    const btnFilter = screen.getByTestId('btnFilter')
    const btnDowloand = screen.getByTestId('btnDowloand')

    user.type(searchComponent, 'search')
    user.click(btnFilter)
    user.click(btnDowloand)

    expect(rootComponent).toBeInTheDocument()
    expect(searchComponent).toBeInTheDocument()
    expect(btnFilter).toBeInTheDocument()
    expect(btnDowloand).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
