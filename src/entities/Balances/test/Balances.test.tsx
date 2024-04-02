import { render, screen } from '@testing-library/react'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/service/api/api.instance'

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
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Balances />
      </QueryClientProvider>,
    )

    const element = screen.getByTestId('balances')

    expect(element).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
