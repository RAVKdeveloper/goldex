import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { ProfileFormEntity } from '@/entities'

describe('testing ProfileFormEntity component', () => {
  const user = userEvent.setup()

  it('render and typing', async () => {
    const component = render(<ProfileFormEntity />)

    const rootComponent = screen.getByTestId('profileForm')
    const uploadAvatarEl = screen.getByTestId('uploadAvatar')
    const textareComponent = screen.getByTestId('input')

    await user.click(uploadAvatarEl)
    await user.type(textareComponent, 'input')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
