import { useRouter } from 'next/router'
import React, { useContext, useMemo, useState } from 'react'
import { DivarContext, useDivarContext } from '../context/divarContext'
import { allCategories, topLevelRoutesTitlesIcons } from './dataStructured'
import Level2Sidebar from './Level2Sidebar'
import Level3Sidebar from './Level3Sidebar'
import ReturnToAll from './ReturnToAll'
import SideItem from './SideItem'
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {

  const {city} = useDivarContext();

  const {category} = useRouter().query
  
  return (
    <div style={{width: '260px', height: "fit-content", marginTop: "25px", position: "sticky", padding: "0 15px"}}>

      <h3>دسته بندی‌ها</h3>

      {category && <ReturnToAll />}

      {allCategories.children.map(({ name, icon, id, slug, children }, index) =>
        <>
          {(!category || category === slug) &&
            <>
              <SideItem
                linkToGo={`/s/${city}/${slug}`}
                text={name}
                Icon={icon}
              />
              <Level2Sidebar subCategories={children} />
            </>
          }
        </>
        
      )}
    </div>
  )
}

export default Sidebar
