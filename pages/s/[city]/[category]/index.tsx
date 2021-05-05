import { GetServerSideProps } from "next";
import React from "react";
import Header from "~components/Header/Header";
import breadCrumbsHandle from "~components/outsourcing/breadCrumbsHandle";
import Sidebar from "~components/Sidebar/Sidebar";
import Widgets from "~components/Widgets/Widgets";

function Category({ data, breadCrumbs, title }) {

  return (
    <>
      <Sidebar breadCrumbs={breadCrumbs} />
      <Header title={title} />
      <Widgets data={data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { resolvedUrl } = ctx;

  const dataPromise = (
    await fetch(`https://api.divar.ir/v8/web-search/${resolvedUrl.slice(3)}`)
  ).json();
  const data = await dataPromise;

  const breadCrumbs = breadCrumbsHandle(data);
  const title = data.title;

  return {
    props: {
      data,
      breadCrumbs,
      title    
    },
  };
};

export default Category;
