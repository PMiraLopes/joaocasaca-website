import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import ROUTES from '../../enums/routes'

const Homepage: React.FC = () => {
  const { t } = useTranslation('general')
  return (
    <section className={styles['a-homepage']}>
      <h1 className={styles['a-homepage__title']}>{t('header')}</h1>
      <h1 className={styles['a-homepage__title']}>
        I’m an experience designer by day, and an illustrator by night. No
        matter the medium, I’ve got your back. 🤙.
      </h1>
      <a href={ROUTES.resume}>Resume</a>
    </section>
  )
}

export default Homepage
