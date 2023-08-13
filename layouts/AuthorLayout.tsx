import React from 'react'
import { ProfileCard } from '~/components/ProfileCard'
import { PageSeo } from '~/components/SEO'
import type { AuthorLayoutProps } from '~/types'
import { useTranslation } from 'next-i18next'

export function AuthorLayout({ children }: AuthorLayoutProps) {
  let { t } = useTranslation('common')
  let title = t('menu_sobremi')
  let description = t('about_description')

  return (
    <>
      <PageSeo
        title={`${title} - ${t('siteMetadata.author')} - ${t('siteMetadata.title')}`}
        description={`${title} - ${t('siteMetadata.title')} - ${t('siteMetadata.description')}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <p className="text-base md:text-lg md:leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="items-start space-y-2 pt-8 xl:grid xl:grid-cols-3 xl:space-y-0">
          <ProfileCard />
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-2 xl:pl-10">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorLayout
