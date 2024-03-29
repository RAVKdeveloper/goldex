import { render, screen } from '@testing-library/react'

import { NotFoundInvoicesEntity } from '../ui/NotFoundInvoices.entity'

describe('testing NotFoundInvoice component', () => {
  it('render', () => {
    const component = render(<NotFoundInvoicesEntity />)

    const rootComponent = screen.getByTestId('notFound')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
