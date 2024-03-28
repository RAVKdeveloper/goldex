import { render, screen } from '@testing-library/react'

import { TitlePage } from '../ui/TitlePage.entity'

describe('testing TitlePage component', () => {
  it('render', () => {
    render(<TitlePage title='Title' subtitle='Subtitle' />)

    const element = screen.getByTestId('titlapage')

    expect(element).toBeInTheDocument()
  })
})
