import React from "react";
import { useDivarContext } from "../context/divarContext";
import { Box } from "@material-ui/core";
import SideItem from "./SideItem";
import { useParams } from "react-router";

interface PropsType {
  subcategoryRoute: string;
  subcategoryText: string
}

const Level3Sidebar = ({level2Subcategories} : {level2Subcategories?: PropsType[]}) => {
  const { routes } = useDivarContext();
  const {city} = useParams<{city: string}>()

  return (
    <Box ml={4} >
      {//@ts-ignore
      level2Subcategories.map(({ subcategoryRoute, subcategoryText }) => {
        return (
          <SideItem
            key={subcategoryRoute}
            onClick={() => { routes.level3 = subcategoryRoute }}
            linkToGo={`/${city}/${subcategoryRoute}`}
            text={subcategoryText}
            actStyle={{ color: "red" }}
          />
        );
      })}
    </Box>
  );
};

export default Level3Sidebar;
