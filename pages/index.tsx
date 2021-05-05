
import { GetServerSideProps } from "next";

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
