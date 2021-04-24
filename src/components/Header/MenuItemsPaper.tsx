import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper"
import { allCategories } from "../Sidebar/dataStructured"
import { Box, Link, makeStyles } from '@material-ui/core'
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import {Link as RouterLink, useParams} from "react-router-dom"
import MenuItemsLevel2 from './MenuItemsLevel2'

const useStyle = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)"
    }
  }
})

function MenuItemsPaper() {

  const {city} = useParams<{city: string}>()

  const [menuItemOpen, setMenuItemOpen] = useState({
    id: 0,
    isOpen: false
  })

  const classes = useStyle()

  return (
    <Box display="flex" style={{position: "absolute", zIndex: 10}} height="550px" >
    <Paper style={{padding: "10px", display: 'flex', flexDirection: 'column', width: 200}}>
      <Link component={RouterLink} color="textPrimary" underline="none" to={`/${city}`}>
        <span onMouseOver={() => setMenuItemOpen({id: -1, isOpen: false})} style={{marginBottom: "10px"}}>همه آگهی‌ها</span>  
      </Link>
      {allCategories.children.map((category =>
          <Link key={category.id} color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${category.slug}`}>
            <Box onClick={() => setMenuItemOpen({id: -1, isOpen: false})} onMouseOver={() => setMenuItemOpen({id: category.id, isOpen: true})} className={classes.root} py={1} display="flex" justifyContent="space-between" alignItems="center" style={{cursor: "pointer"}}>
              <span>{category.name}</span>
              <ArrowLeft />
            </Box>
          </Link>
      ))}
    </Paper>
    <Paper style={{padding: "10px", display: !menuItemOpen.isOpen ? "none" : "flex", width: "550px", flexDirection: "column", flexWrap: 'wrap', fontSize: "0.9rem"}}>
    {allCategories.children.map(category => {
      if (category.id === menuItemOpen.id) {
        return <MenuItemsLevel2 key={category.id} itemsToRender={category.children} />
      }
      return undefined
    }
    )}
    </Paper>
    </Box>
  )
}

export default MenuItemsPaper
