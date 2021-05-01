import React from 'react'
import { GetServerSideProps } from 'next'
import { allCategories } from '~components/Sidebar/dataStructured'
import SideItem from '~components/Sidebar/SideItem'
import styles from "./styles.module.scss"

const City = ({city}) => {
  return (
    <div className={styles.sidebarContainer}>

      <h3>دسته بندی‌ها</h3>

      {allCategories.children.map(({ name, icon, id, slug }) =>
        <SideItem
          key={id}
          linkToGo={`/s/${city}/${slug}`}
          text={name}
          Icon={icon}
        />
      )}
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {

  const { city } = ctx.params

  return {
    props: {
      city
    }
  }
}

export default City
