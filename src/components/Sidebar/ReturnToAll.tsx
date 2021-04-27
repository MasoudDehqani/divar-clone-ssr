import React, { useContext } from "react";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const ReturnToAll = ({route, setRoute}) => {

  const {city} = useDivarContext();
  // const {city} = useRouter().query

  return (
    <SideItem
      linkToGo={`/s/${city}`}
      text="همه آگهی‌ها"
      Icon={ArrowRightOutlined}
    />
  );
};

export default ReturnToAll;
