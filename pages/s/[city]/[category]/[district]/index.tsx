import { GetServerSideProps } from 'next'
import React from 'react'

const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index

export const getServerSideProps : GetServerSideProps = async ctx => {
  return {
    props: {}
  }
}