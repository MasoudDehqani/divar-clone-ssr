import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { DivarContext, useDivarContext } from '../context/divarContext'
import { allCategories, topLevelRoutesTitlesIcons } from './dataStructured'
import Level2Sidebar from './Level2Sidebar'
import Level3Sidebar from './Level3Sidebar'
import ReturnToAll from './ReturnToAll'
import SideItem from './SideItem'
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {

  const [route, setRoute] = useState({L1: "", L2: "", L3: ""})
  const {city} = useDivarContext();

  const {category} = useRouter().query
  
  return (
    <div style={{width: '260px', height: "fit-content", marginTop: "25px", position: "sticky", padding: "0 15px"}}>

      <h3>دسته بندی‌ها</h3>

      {category && <ReturnToAll route={route} setRoute={setRoute} />}

      {allCategories.children.map(({ name, icon, id, slug, children }, index) =>
        <>
          {(!category || category === slug || route.L1 === slug) &&
            <> 
              <SideItem
                onClick={() => setRoute({L1: slug, L2: "", L3: ""})}
                linkToGo={`/s/${city}/${slug}`}
                text={name}
                Icon={icon}
              />
              <Level2Sidebar subCategories={children} parentSlug={slug} route={route} setRoute={setRoute} />
            </>
          }
        </>
        
      )}
    </div>
  )
}

export default Sidebar
