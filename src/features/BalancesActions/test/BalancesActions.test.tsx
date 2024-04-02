import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import * as reduxHooks from '../../../shared/service/store/hooks/hooks'

import { BalancesActionsFeatures } from '../..'

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

describe('testing BalancesActionsFeatures component', () => {
  it('render and clicks', () => {
    jest.spyOn(reduxHooks, 'useAppDispatch')

    const user = userEvent.setup()

    const component = render(<BalancesActionsFeatures />)

    const clickAdding = screen.getByTestId('adding')
    const clickWithdraw = screen.getByTestId('withdraw')
    const rootComponent = screen.getByTestId('root')

    user.click(clickAdding)
    user.click(clickWithdraw)

    expect(component).toMatchSnapshot()
    expect(rootComponent).toBeInTheDocument()
  })
})
