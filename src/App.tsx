import { FC } from 'react'

import { useTranslation } from 'react-i18next'

const App: FC = () => {
  const { t } = useTranslation()

  return <div>{t('demo')}</div>
}

export default App
