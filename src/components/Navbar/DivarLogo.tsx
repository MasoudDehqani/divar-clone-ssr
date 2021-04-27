import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.scss"

function DivarLogo() {
  return (
    <Link href="/">
      <a>
        <span className={styles.logo} />
      </a>
    </Link>
  )
}

export default DivarLogo
