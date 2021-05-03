import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useDivarContext } from '~components/context/divarContext'
import Header from '~components/Header/Header'
import SearchBar from '~components/Header/Searchbar'
import breadCrumbsHandle from "~components/outsourcing/breadCrumbsHandle"
import { allCategories } from '~components/Sidebar/dataStructured'
import Level2Sidebar from '~components/Sidebar/Level2Sidebar'
import ReturnToAll from '~components/Sidebar/ReturnToAll'
import Sidebar from '~components/Sidebar/Sidebar'
import SideItem from '~components/Sidebar/SideItem'
import Widgets from '~components/Widgets/Widgets'
import styles from "./styles.module.scss"

function Category({data, breadCrumbs, title}) {

  return (
    <>
      <Sidebar breadCrumbs={breadCrumbs} />
      <Header categoryText={title} />
      <Widgets data={data} />
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async ctx => {

  const { category, city } = ctx.params
  const dataPromise = (await fetch(`https://api.divar.ir/v8/web-search/${city}/${category}`)).json()
  const data = await dataPromise

  const breadCrumbs = breadCrumbsHandle(data)
  const title = data.title

  return {
    props: {
      data,
      breadCrumbs,
      title
    }
  }
}

export default Category
