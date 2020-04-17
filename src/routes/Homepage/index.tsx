import React from 'react'
import styles from './styles.module.scss'

const Homepage: React.FC = () => {
  return (
    <section className={styles['a-homepage']}>
      <h1 className={styles['a-homepage__title']}>Homepage</h1>
    </section>
  )
}

export default Homepage
