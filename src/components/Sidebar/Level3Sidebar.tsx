import React from "react";
import { useDivarContext } from "../context/DivarContextProvider";
import SideItem from "./SideItem";
import { useRouter } from "next/router";

interface PropsType {
  subcategoryRoute: string;
  subcategoryText: string;
}

const Level3Sidebar = ({
  level2Subcategories,
  breadCrumbs,
  parentSlug,
  pathname,
  query,
}: any) => {
  const { city } = useDivarContext();
  const {
    query: { category },
    asPath,
  } = useRouter();
  let queries = "";
  if (asPath.includes("?")) queries = asPath.slice(asPath.indexOf("?"));

  return (
    <div style={{ marginRight: "23px" }}>
      {level2Subcategories.map(({ name, slug, parent }, index, array) => (
        <>
          {((category === parent || breadCrumbs[1] === parent) && !(index === array.indexOf(array[array.length - 1]))) && (
            <SideItem
              key={slug}
              slug={slug}
              pathname={pathname}
              query={query}
              text={name}
              style={{
                color: category === slug ? "red" : "",
                borderRight:
                  category === slug
                    ? "1px solid red"
                    : "1px solid rgba(0,0,0,0.3)",
              }}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Level3Sidebar;
