import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { LoginFormEntity } from '../ui/LoginForm.entity'

describe('testing LoginFormEntity component', () => {
  it('render and typing', () => {
    const user = userEvent.setup()

    const component = render(<LoginFormEntity />)

    const rootComponent = screen.getByTestId('loginForm')
    const loginInput = screen.getByTestId('login')
    const passInput = screen.getByTestId('password')

    user.type(loginInput, 'login')
    user.type(passInput, 'password')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
