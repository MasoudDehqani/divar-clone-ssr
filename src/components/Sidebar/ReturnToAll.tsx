import React, { useContext } from "react";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import ArrowRight from "@material-ui/icons/ArrowRightAlt";
import { useParams } from "react-router";

const ReturnToAll = () => {
  const context = useDivarContext();
  const {city} = useParams<{city: string}>()

  return (
    <SideItem
      onClick={() => {
        context.routes.topLevel = "";
        context.routes.level2 = "";
        context.routes.level3 = "";
      }}
      linkToGo={`/${city}`}
      text="همه آگهی‌ها"
      Icon={ArrowRight}
    />
  );
};

export default ReturnToAll;
