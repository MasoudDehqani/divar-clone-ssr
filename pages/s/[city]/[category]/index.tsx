import { GetServerSideProps } from 'next'
import React from 'react'

function Category({category}) {
  return (
    <div>
      {category}
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ctx => {

  const { category } = ctx.params

  return {
    props: {
      category
    }
  }
}

export default Category
