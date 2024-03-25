import { render, screen } from '@testing-library/react'

import { Balances } from '../..'

describe('testing Balances component', () => {
  it('render', () => {
    render(<Balances />)

    const element = screen.getByTestId('balances')

    expect(element).toBeInTheDocument()
  })
})
