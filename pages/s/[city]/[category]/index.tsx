import { GetServerSideProps } from 'next'
import React from 'react'
import { useDivarContext } from '../../../../src/components/context/divarContext'
import { useRouteHistoryContext } from '../../../../src/components/context/RouteHistoryContextProvider'
import breadCrumbsHandle from "../../../../src/components/outsourcing/breadCrumbsHandle"

function Category({category, data}) {

  const routeHistory = useRouteHistoryContext()
  const {city} = useDivarContext()

  console.log(data)

  breadCrumbsHandle(data, routeHistory, data.seo_details.bread_crumbs[data.seo_details.bread_crumbs.length - 2].url)
  console.log(routeHistory)

  return (
    <div>
      {category}
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ctx => {

  const { category } = ctx.params
  const dataPromise = await fetch(`https://api.divar.ir/v8/web-search/tehran/${category}`)
  const data = await dataPromise.json()


  return {
    props: {
      category,
      data
    }
  }
}

export default Category
