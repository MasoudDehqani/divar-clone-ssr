import { useRouter } from 'next/router'
import React, { useContext, useMemo, useState } from 'react'
import { DivarContext, useDivarContext } from '../context/divarContext'
import { allCategories, topLevelRoutesTitlesIcons } from './dataStructured'
import Level2Sidebar from './Level2Sidebar'
import Level3Sidebar from './Level3Sidebar'
import ReturnToAll from './ReturnToAll'
import SideItem from './SideItem'
import TopLevelSidebar from './TopLevelSidebar'
import styles from "./styles.module.scss"

const Sidebar = ({breadCrumbs} : {breadCrumbs: string[]}) => {

  const {city} = useDivarContext();
  
  return (
    <div className={styles.sidebarContainer}>
        
      <h3>دسته بندی‌ها</h3>

      {breadCrumbs[0] && <ReturnToAll />}

      {allCategories.children.map(({ name, icon, id, slug, children }) =>
        <>
          {(!breadCrumbs[0] || breadCrumbs[0] === slug) && 
            <SideItem
              key={id}
              linkToGo={`/s/${city}/${slug}`}
              text={name}
              Icon={icon}
            />
          }
          <Level2Sidebar subCategories={children} breadCrumbs={breadCrumbs} />
        </>
      )}
  </div>       
  )
}

export default Sidebar

// {category && <ReturnToAll />}

//       {allCategories.children.map(({ name, icon, id, slug, children }, index) =>
//         <>
//           {(!category || category === slug) &&
//             <>
//               <SideItem
//                 linkToGo={`/s/${city}/${slug}`}
//                 text={name}
//                 Icon={icon}
//               />
//               <Level2Sidebar subCategories={children} />
//             </>
//           }
//         </>
//               )}
