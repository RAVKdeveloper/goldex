import { render } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import App from './App'

jest.mock('react-redux')

it('render application', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  )
})
