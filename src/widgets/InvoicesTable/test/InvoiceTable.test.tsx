import { render, screen } from '@testing-library/react'

import { InvoicesTableWidget } from '../..'

import * as reduxHooks from '../../../shared/service/store/hooks/hooks'

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

describe('testing InvoicesTableWidget', () => {
  it('render', () => {
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({})
    jest.spyOn(reduxHooks, 'useAppDispatch')

    const component = render(<InvoicesTableWidget />)

    const tableComponent = screen.getByTestId('table')

    expect(tableComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
