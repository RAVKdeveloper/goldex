import { render, screen } from '@testing-library/react'

import { TitlePage } from '../ui/TitlePage.entity'

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

describe('testing TitlePage component', () => {
  it('render', () => {
    const component = render(<TitlePage title='Title' subtitle='Subtitle' />)

    const element = screen.getByTestId('titlapage')

    expect(element).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
