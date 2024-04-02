import { render, screen } from '@testing-library/react'

import { NotFoundInvoicesEntity } from '../ui/NotFoundInvoices.entity'

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

describe('testing NotFoundInvoice component', () => {
  it('render', () => {
    const component = render(<NotFoundInvoicesEntity />)

    const rootComponent = screen.getByTestId('notFound')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
