import { GetServerSideProps } from 'next'
import React from 'react'
import initialContextValues from "~components/context/initialContextValues"
import { allCategories } from '~components/Sidebar/dataStructured'
import SideItem from '~components/Sidebar/SideItem'

const City = ({city, response}) => {
  return (
    <div style={{width: '260px', height: "fit-content", marginTop: "25px", position: "sticky", padding: "0 15px"}}>

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

  const { city, category } = ctx.params
  const { baseUrl } = initialContextValues

  const initialResponse = await (await fetch(`${baseUrl}/${city}`)).json()
  const response = await initialResponse

  return {
    props: {
      city,
      response
    }
  }
}

export default City
