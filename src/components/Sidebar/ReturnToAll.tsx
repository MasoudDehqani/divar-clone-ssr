import React, { useContext } from "react";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const ReturnToAll = () => {

  const {city} = useDivarContext();

  return (
    <SideItem
      linkToGo={`/s/${city}`}
      text="همه آگهی‌ها"
      Icon={ArrowRightOutlined}
    />
  );
};

export default ReturnToAll;
