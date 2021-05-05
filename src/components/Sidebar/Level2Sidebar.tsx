import React, { useContext } from "react";
import { List } from "antd";
import { useDivarContext } from "../context/DivarContextProvider";
import Level3Sidebar from "./Level3Sidebar";
import SideItem from "./SideItem";
import { useRouter } from "next/router";

interface SubCategoriesType {
  subCategoryRoute: string;
  subCategoryText: string;
  level2SubCategories: any;
}

const Level2Sidebar = ({ subCategories, breadCrumbs }: any) => {

  const { query: { category } } = useRouter();

  return (
    <List style={{ marginRight: "35px" }}>
      {subCategories.map(({ name, slug, children, parent }, index, array) => (
        <>
          {((category === parent || slug === breadCrumbs[1]) && !(index === array.indexOf(array[array.length - 1]))) && (
            <>
              <div key={slug}>
                <SideItem
                  slug={slug}
                  text={name}
                  style={{ fontWeight: breadCrumbs[1] === slug ? "bold" : "" }}
                />
              </div>
              <Level3Sidebar
                breadCrumbs={breadCrumbs}
                parentSlug={parent}
                level2Subcategories={children}
              />
            </>
          )}
        </>
      ))}
    </List>
  );
};

export default Level2Sidebar;

{
  /* <div>
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
    </div> */
}
