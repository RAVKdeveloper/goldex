import { render, screen } from '@testing-library/react'

import { InvoicesTableWidget } from '../..'

describe('testing InvoicesTableWidget', () => {
  it('render', () => {
    const component = render(<InvoicesTableWidget />)

    const tableComponent = screen.getByTestId('table')

    expect(tableComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
