import React from "react";
import { List } from "antd"
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { allCategories, topLevelRoutesTitlesIcons } from "./dataStructured";
import Level2Sidebar from "./Level2Sidebar";
import ReturnToAll from "./ReturnToAll";
import { useRouter } from "next/router"
// import { useParams } from "react-router";

const TopLevelSidebar = () => {

  const { routes } = useDivarContext();
  // const {city} = useParams<{city: string}>()
  const {city, category} = useRouter().query
  

  return (
    <List>
      {allCategories.children.map(({ name, icon, id, slug, children }, index) =>
        <>
          <SideItem
            // onClick={onClick}
            linkToGo={`/s/${city}/${slug}`}
            text={name}
            Icon={icon}
          />
        </>
      )}
      {/* {topLevelRoutesTitlesIcons.map(({ route, text, icon, subCategories }, index) => {
        if (route === routes.topLevel) {
          return (
            <div key={route}>
              <SideItem
                onClick={() => {
                  routes.topLevel = route;
                  routes.level2 = "";
                  routes.level3 = "";
                }}
                linkToGo={`/s/${city}/${route}`}
                text={text}
                Icon={icon}
                style={{ color: routes.topLevel === route ? "black" : "" }}
              />

              <Level2Sidebar subCategories={subCategories} />
            </div>
          );
        }

        if (!routes.topLevel) {
          return (
            <SideItem
              key={route}
              onClick={() => {
                routes.topLevel = route;
                routes.level2 = "";
                routes.level3 = "";
              }}
              linkToGo={`/s/${city}/${route}`}
              Icon={icon}
              text={text}
            />
          );
        }
        return undefined
      })} */}
      
    </List>
  );
};

export default TopLevelSidebar;