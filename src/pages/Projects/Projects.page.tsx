import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { TitlePage, ProjectCardEntity } from '@/entities'
import { SearchProjectsFeatures } from '@/features'

import s from './style.module.css'

const ProjectsPage: FC = () => {
  const { t } = useTranslation()

  return (
    <main>
      <div className={s.container}>
        <TitlePage title={t('title.projects')} subtitle={t('subtitle.projects')} />
        <SearchProjectsFeatures />
        <ProjectCardEntity />
      </div>
    </main>
  )
}

export default ProjectsPage
