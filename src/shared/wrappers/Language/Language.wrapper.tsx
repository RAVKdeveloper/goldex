import { FC, ReactNode, Suspense } from 'react'

export const LanguageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense fallback='Loading...'>{children}</Suspense>
}
