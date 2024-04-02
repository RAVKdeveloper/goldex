// import { ReactElement, ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/service/api/api.instance'

import { LoginFormEntity } from '../ui/LoginForm.entity'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

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

describe('testing LoginFormEntity component', () => {
  it('render and typing', () => {
    const user = userEvent.setup()

    const component = render(
      <QueryClientProvider client={queryClient}>
        <LoginFormEntity />
      </QueryClientProvider>,
    )

    const rootComponent = screen.getByTestId('loginForm')
    const loginInput = screen.getByTestId('login')
    const passInput = screen.getByTestId('password')

    user.type(loginInput, 'login')
    user.type(passInput, 'password')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
