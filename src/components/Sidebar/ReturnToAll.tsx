import React, { useContext } from "react";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const ReturnToAll = ({routeHistory}) => {

  const {city} = useDivarContext();

  return (
    <SideItem
      onClick={() => {
        routeHistory.L1 = ""
        routeHistory.L2 = ""
        routeHistory.L3 = ""
      }}
      linkToGo={`/s/${city}`}
      text="همه آگهی‌ها"
      Icon={ArrowRightOutlined}
    />
  );
};

export default ReturnToAll;
