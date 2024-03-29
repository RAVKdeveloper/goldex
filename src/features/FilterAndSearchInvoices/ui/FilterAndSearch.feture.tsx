import { FC } from 'react'

import { TextField, Button } from 'goldex-ui-library'
import { FilterIcon, DowloandIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const FilterAndSearchInvoicesFeature: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={s.root} data-testid='root'>
      <TextField
        variant='search'
        placeholder={t('textField.searchPlaceholder')}
        data-testid='textbox'
      />
      <div className={s.row}>
        <Button
          variant='secondary'
          icon={<FilterIcon width={20} height={20} opacity={1} />}
          size='sm'
          data-testid='btnFilter'
        >
          {t('btn.filter')}
        </Button>
        <Button
          variant='primary'
          icon={<DowloandIcon width={20} height={20} opacity={1} color='#000' />}
          size='sm'
          style={{ textWrap: 'nowrap' }}
          data-testid='btnDowloand'
        >
          {t('btn.dowloand.csv')}
        </Button>
      </div>
      <div className={s.rowMobile}>
        <Button
          variant='secondary'
          icon={<FilterIcon width={20} height={20} opacity={1} />}
          size='es'
        />
        <Button
          variant='primary'
          icon={<DowloandIcon width={20} height={20} opacity={1} color='#000' />}
          size='es'
          style={{ textWrap: 'nowrap' }}
        />
      </div>
    </section>
  )
}
