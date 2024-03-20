import { FC } from 'react'

import { useTranslation } from 'react-i18next'

const App: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t('hello')}
      {t('check')}
    </div>
  )
}

export default App
