import { FC } from 'react'

import { ProjectCard } from 'goldex-ui-library'

import { useProjectCard } from '../logic/useProjectCard.model'
import { ModalProjectCardUi } from './ModalCard.ui'

import s from '../assets/style.module.css'

export const ProjectCardEntity: FC = () => {
  const { open, isOpen, isBlocked, blocked } = useProjectCard()

  return (
    <div className={s.root}>
      <ProjectCard
        name='IJDJI'
        status='active'
        turnover={'35353'}
        minus={-324}
        plus={3243}
        textStatus='eokeot'
        textTurnover='etet'
        cbOptions={open}
      />
      <ModalProjectCardUi isOpen={isOpen} isBlocked={isBlocked} clickToBlocked={blocked} />
    </div>
  )
}
