import { useRouter } from 'next/router'
import React, { useContext, useMemo, useState } from 'react'
import { DivarContext, useDivarContext } from '../context/divarContext'
import { useRouteHistoryContext } from '../context/RouteHistoryContextProvider'
import { allCategories, topLevelRoutesTitlesIcons } from './dataStructured'
import Level2Sidebar from './Level2Sidebar'
import Level3Sidebar from './Level3Sidebar'
import ReturnToAll from './ReturnToAll'
import SideItem from './SideItem'
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {

  // let routeHistory = useMemo(() => ({L1: "", L2: "", L3: ""}), [])
  let routeHistory = useRouteHistoryContext()

  const {city} = useDivarContext();

  const {category} = useRouter().query
  console.log(routeHistory)

  function routeHistoryHandle(slug) {
    routeHistory.L1 = slug
  }

  // routeHistory.L1 = category as string

  
  return (
    <div style={{width: '260px', height: "fit-content", marginTop: "25px", position: "sticky", padding: "0 15px"}}>

      <h3>دسته بندی‌ها</h3>

      {category && <ReturnToAll routeHistory={routeHistory} />}

      {allCategories.children.map(({ name, icon, id, slug, children }, index) =>
        <>
          {(!category || category === slug || routeHistory.L1 === slug) &&
            <>
              <SideItem
                onClick={() => {
                  routeHistory.L1 = slug
                  routeHistory.L2 = ""
                  routeHistory.L3 = ""
                }}
                linkToGo={`/s/${city}/${slug}`}
                text={name}
                Icon={icon}
                // setRouteHistory={() => console.log("123")}
              />
              <Level2Sidebar routeHistory={routeHistory} subCategories={children} />
            </>
          }
        </>
        
      )}
    </div>
  )
}

export default Sidebar
