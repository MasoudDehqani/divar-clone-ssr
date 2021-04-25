import React from 'react'
import { Layout, Menu, Button, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from "./styles.module.scss"

const NavbarMenu = ({children}) => {

  const menu = (
    <Menu className={styles.menu} triggerSubMenuAction="click" mode="horizontal">
      <Menu.Item key="1" className={styles.menuItem}>دیوار من</Menu.Item>
      <Menu.Item key="2" className={styles.menuItem}>چت</Menu.Item>
      <Menu.Item key="3" className={styles.menuItem}>درباره دیوار</Menu.Item>
      <Menu.Item key="4" className={styles.menuItem}>بلاگ</Menu.Item>
      <Menu.Item key="5" className={styles.menuItem}>پشتیبانی</Menu.Item>
    </Menu>
  )

  return (
    <>
      {menu}
      {children}
      <Dropdown trigger={["click"]} overlay={menu} placement="bottomRight">
        <MenuOutlined className={styles.menuIcon} />
      </Dropdown>
    </>
  )
}

export default NavbarMenu
