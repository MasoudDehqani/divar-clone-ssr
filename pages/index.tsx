import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <Link replace href="/s/tehran">
      <a>
        <h1>Tehran</h1>
      </a>
    </Link>
  )
}
