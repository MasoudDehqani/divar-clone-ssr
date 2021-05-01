import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useDivarContext } from '../src/components/context/divarContext'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function Home({params}) {

  const {city} = useDivarContext()
  const router = useRouter()
  console.log(params)

  if (city) {
    router.push(`/s/${city}`)
    return null
  }

  return <h1>انتخاب شهر</h1>
}