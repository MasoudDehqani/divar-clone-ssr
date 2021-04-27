import React from 'react'
import { Layout, Menu, Button, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from "./styles.module.scss"
import { MenuMode } from 'antd/lib/menu';
import Link from 'next/link';

const NavbarMenu = ({children}) => {

  const menuStatusHandle = (mode: MenuMode) => {

    return (
      <Menu triggerSubMenuAction="click" mode={mode}>
        <Menu.Item key="1" className={styles.menuItem}>دیوار من</Menu.Item>
        <Menu.Item key="2" className={styles.menuItem}>چت</Menu.Item>
        <Menu.Item key="3" className={styles.menuItem}>
          <Link href="/about">
            <a>
              درباره دیوار
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" className={styles.menuItem}>
        <Link href="/blog">
            <a target="_blank">
              بلاگ
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5" className={styles.menuItem}>پشتیبانی</Menu.Item>
      </Menu>
    )
  }

  return (
    <>
      <div className={styles.navMenuContainer}>
        {menuStatusHandle("horizontal")}
      </div>
      {children}
      <Dropdown overlayClassName={styles.menu} className={styles.dropdown} trigger={["click"]} overlay={menuStatusHandle("vertical")} placement="bottomRight">
        <MenuOutlined className={styles.menuIcon} />
      </Dropdown>
    </>
  )
}

export default NavbarMenu
