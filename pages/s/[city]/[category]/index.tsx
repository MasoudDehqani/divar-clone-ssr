import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useDivarContext } from '~components/context/divarContext'
import Header from '~components/Header/Header'
import SearchBar from '~components/Header/SearchBar'
import breadCrumbsHandle from "~components/outsourcing/breadCrumbsHandle"
import queryHandle from '~components/outsourcing/queryHandle'
import { allCategories } from '~components/Sidebar/dataStructured'
import Level2Sidebar from '~components/Sidebar/Level2Sidebar'
import ReturnToAll from '~components/Sidebar/ReturnToAll'
import Sidebar from '~components/Sidebar/Sidebar'
import SideItem from '~components/Sidebar/SideItem'
import Widgets from '~components/Widgets/Widgets'
import styles from "./styles.module.scss"

function Category({data, breadCrumbs, title, searchQuery}) {

  const { pathname, query } = useRouter()

  return (
    <>
      <Sidebar breadCrumbs={breadCrumbs} pathname={pathname} query={query} />
      <Header title={title} />
      <Widgets data={data} />
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async ctx => {

  const { params: {city, category}, query, resolvedUrl } = ctx

  const queries = queryHandle(query, resolvedUrl, ctx.params )

  const dataPromise = (await fetch(`https://api.divar.ir/v8/web-search/${resolvedUrl.slice(3)}`)).json()
  const data = await dataPromise

  const breadCrumbs = breadCrumbsHandle(data)
  const title = data.title

  return {
    props: {
      data,
      breadCrumbs,
      title,
      searchQuery: !ctx.query.q ? "" : ctx.query.q
    }
  }
}

export default Category
