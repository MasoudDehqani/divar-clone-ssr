import React from 'react'
import { Layout, Menu, Button } from 'antd';
import styles from "./styles.module.scss"

const SubmitAdButton = () => {
  return (
    <Button type="primary" className={styles.submitAdButton}>ثبت آگهی</Button>
  )
}

export default SubmitAdButton
