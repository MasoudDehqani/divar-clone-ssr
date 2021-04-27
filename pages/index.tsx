import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useDivarContext } from '../src/components/context/divarContext'
import { GetServerSideProps } from 'next'

export default function Home({params}) {

  const {city} = useDivarContext()
  console.log(params)

  // if (!city) {
  //   return <h1>انتخاب شهر</h1>
  // }

  return (
    <Link href={`/s/${city}`}>
      <a>
        <h1>Tehran</h1>
      </a>
    </Link>
  )
}


export const getServerSideProps : GetServerSideProps = async ctx => {

  const params = ctx.params
  console.log(params)

  return {
    props: {
      params: ctx.query
    },
    // redirect: {
    //   destination: params.city ? `/s/${params.city}` : '/'
    // }
  }
}