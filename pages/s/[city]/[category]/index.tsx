import { GetServerSideProps } from 'next'
import React from 'react'
import { useDivarContext } from '~components/context/divarContext'
import breadCrumbsHandle from "~components/outsourcing/breadCrumbsHandle"
import { allCategories } from '~components/Sidebar/dataStructured'
import Level2Sidebar from '~components/Sidebar/Level2Sidebar'
import ReturnToAll from '~components/Sidebar/ReturnToAll'
import SideItem from '~components/Sidebar/SideItem'
import styles from "./styles.module.scss"

function Category({category, data}) {

  const {city} = useDivarContext()
  const breadCrumbs = data.seo_details.bread_crumbs.filter(({url}) => url.includes("/")).map(({url}) => url.split("/")[1]).reverse()

  return (
    <div className={styles.sidebarContainer}>

      <h3>دسته بندی‌ها</h3>

      <ReturnToAll />

      {allCategories.children.map(({ name, icon, id, slug, children }) =>
        <>
          {breadCrumbs[0] === slug &&
            <>
              <SideItem
                key={id}
                linkToGo={`/s/${city}/${slug}`}
                text={name}
                Icon={icon}
              />
              <Level2Sidebar breadCrumbs={breadCrumbs} subCategories={children} />
            </>
          }
        </>
        
      )}
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ctx => {

  const { category, city } = ctx.params
  const dataPromise = (await fetch(`https://api.divar.ir/v8/web-search/tehran/${category}`)).json()
  const data = await dataPromise


  return {
    props: {
      category,
      data
    }
  }
}

export default Category
