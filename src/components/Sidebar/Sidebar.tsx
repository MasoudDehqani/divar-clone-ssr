import React, { useContext } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { DivarContext } from '../context/divarContext'
import TopLevelSidebar from './TopLevelSidebar'

const Sidebar = () => {
  
  return (
    <div style={{width: '260px', height: "fit-content", marginTop: "100px", position: "sticky", padding: "0 15px"}}>

        <h3>دسته بندی‌ها</h3>

        

      <TopLevelSidebar />
    </div>
  )
}

export default Sidebar
