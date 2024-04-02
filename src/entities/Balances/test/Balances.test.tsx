import { render, screen } from '@testing-library/react'

import { Balances } from '../..'

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

describe('testing Balances component', () => {
  it('render', () => {
    const component = render(<Balances />)

    const element = screen.getByTestId('balances')

    expect(element).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
