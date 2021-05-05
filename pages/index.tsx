import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useDivarContext } from "../src/components/context/DivarContextProvider";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { cityForServerSide } from "~components/context/DivarContextProvider";

export default function Home() {
  
  return <h1>انتخاب شهر</h1>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { city } = ctx.req.cookies;

  if (city) {
    return {
      props: {},
      redirect: {
        destination: `/s/${city}`,
      },
    };
  }

  return {
    props: {},
  };
};
