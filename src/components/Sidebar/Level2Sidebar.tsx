import React, { useContext } from "react";
import { List } from "antd";
import { useDivarContext } from "../context/divarContext";
import Level3Sidebar from "./Level3Sidebar";
import SideItem from "./SideItem";
import { useRouter } from "next/router";

interface SubCategoriesType {
  subCategoryRoute: string;
  subCategoryText: string;
  level2SubCategories: any
}

const Level2Sidebar = ({ subCategories, routeHistory } : any) => {

  const { routes } = useDivarContext();
  // const {city} = useParams<{city: string}>()
  const {category} = useRouter().query
  const {city} = useDivarContext();

  console.log(category)

  function routeHistoryHandle(slug) {
    routeHistory.L2 = slug
  }

  // routeHistory.L2 = category

  // routeHistory.L2 = category

  return (
    <List style={{marginRight: "35px"}}>
      {subCategories.map(({ name, slug, children, parent }, index) =>
        <>
          {(category === parent || category === slug || routeHistory.L2 === slug) && 
            <div key={slug}>
              <SideItem
                onClick={() => routeHistory.L2 = slug}
                linkToGo={`/s/${city}/${slug}`}
                text={name}
                style={{fontWeight: routeHistory.L2 === slug ? "bold" : ""}}
                // setRouteHistory={() => routeHistoryHandle(slug)}
              />
            </div>
          }
          <Level3Sidebar parentSlug={slug} level2Subcategories={children} routeHistory={routeHistory} />
        </>
      )}
    </List>
  );
};

export default Level2Sidebar;


{/* <div>
        {//@ts-ignore
        subCategories.map(({ subCategoryRoute, subCategoryText, level2SubCategories }, index) => {
          if (subCategoryRoute === routes.level2) {
            return (
              <div key={subCategoryRoute}>
                <SideItem
                  onClick={() => { routes.level2 = subCategoryRoute }}
                  linkToGo={`/s/${city}/${subCategoryRoute}`}
                  text={subCategoryText}
                  style={{ color: routes.level2 === subCategoryRoute ? "black" : "" }}
                />

                <Level3Sidebar level2Subcategories={level2SubCategories} />

              </div>
            );
          }

          if (!routes.level2) {
            return (
              <SideItem
                key={subCategoryRoute}
                onClick={() => { routes.level2 = subCategoryRoute }}
                linkToGo={`/s/${city}/${subCategoryRoute}`}
                text={subCategoryText}
              />
            );
          }
          return undefined
        }
      )}
    </div> */}