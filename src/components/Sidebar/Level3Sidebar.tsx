import React from "react";
import { useDivarContext } from "../context/divarContext";
import SideItem from "./SideItem";
import { useRouter } from "next/router";

interface PropsType {
  subcategoryRoute: string;
  subcategoryText: string
}

const Level3Sidebar = ({level2Subcategories, parentSlug, route, setRoute} : any) => {
  const { routes } = useDivarContext();
  // const {city} = useParams<{city: string}>()
  const {category} = useRouter().query
  const {city} = useDivarContext();


  return (
    <div style={{marginRight: "23px"}}>
      {(category === parentSlug || route.L2 === parentSlug) &&
      level2Subcategories.map(({ name, slug, parent }) =>
        <>
          { 
          <SideItem
            key={slug}
            linkToGo={`/s/${city}/${slug}`}
            text={name}
            style={{color: category === slug ? "red" : "", borderRight: category === slug ? "1px solid red" : "1px solid rgba(0,0,0,0.3)" }}
          />}
        </>
      )}
    </div>
  );
};

export default Level3Sidebar;
