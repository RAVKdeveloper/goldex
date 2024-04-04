import { render, screen } from '@testing-library/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/service/api/api.instance'

import { SidebarWidget } from '../Sidebar.widget'

describe('testing SideBarWidget component', () => {
  it('render', () => {
    const component = render(
      <QueryClientProvider client={queryClient}>
        <SidebarWidget />
      </QueryClientProvider>,
    )

    const sideBar = screen.getByTestId('sidebar')

    expect(sideBar).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
