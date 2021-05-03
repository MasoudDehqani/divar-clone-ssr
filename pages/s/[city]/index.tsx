import React from 'react'
import { GetServerSideProps } from 'next'
import { allCategories } from '~components/Sidebar/dataStructured'
import SideItem from '~components/Sidebar/SideItem'
import styles from "./styles.module.scss"
import { useDivarContext } from '~components/context/divarContext'
import Widgets from '~components/Widgets/Widgets'
import Sidebar from '~components/Sidebar/Sidebar'
import breadCrumbsHandle from "~components/outsourcing/breadCrumbsHandle"
import Header from '~components/Header/Header'

const City = ({data, breadCrumbs}) => {

  return (
    <>
      <Sidebar breadCrumbs={breadCrumbs} />
      <Header categoryText="همه آگهی‌ها" />
      <Widgets data={data} />
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {

  const { city } = ctx.params
  const dataPromise = (await fetch(`https://api.divar.ir/v8/web-search/${city}`)).json()
  const data = await dataPromise

  const breadCrumbs = breadCrumbsHandle(data)

  return {
    props: {
      data,
      breadCrumbs
    }
  }
}

export default City
