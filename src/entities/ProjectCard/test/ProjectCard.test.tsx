import { render, screen } from '@testing-library/react'

import { ProjectCardEntity } from '../ui/ProjectCard.ui'

describe('testing ProjectCardEntity component', () => {
  it('render', () => {
    const component = render(<ProjectCardEntity />)

    const rootComponent = screen.getByTestId('projectCard')

    expect(rootComponent).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })
})
