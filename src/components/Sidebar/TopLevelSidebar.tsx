import React from "react";
import { List } from "@material-ui/core";
import SideItem from "./SideItem";
import { useDivarContext } from "../context/divarContext";
import { topLevelRoutesTitlesIcons } from "./dataStructured";
import Level2Sidebar from "./Level2Sidebar";
import ReturnToAll from "./ReturnToAll";
import { useParams } from "react-router";

const TopLevelSidebar = () => {

  const { routes } = useDivarContext();
  const {city} = useParams<{city: string}>()
  

  return (
    <List>
      {routes.topLevel && <ReturnToAll />}
      {topLevelRoutesTitlesIcons.map(({ route, text, icon, subCategories }, index) => {
        if (route === routes.topLevel) {
          return (
            <div key={route}>
              <SideItem
                onClick={() => {
                  routes.topLevel = route;
                  routes.level2 = "";
                  routes.level3 = "";
                }}
                linkToGo={`/${city}/${route}`}
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
              linkToGo={`/${city}/${route}`}
              Icon={icon}
              text={text}
            />
          );
        }
        return undefined
      })}
      
    </List>
  );
};

export default TopLevelSidebar;