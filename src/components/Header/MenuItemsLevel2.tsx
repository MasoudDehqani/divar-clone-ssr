import React from 'react'
import { Box, Link } from '@material-ui/core'
import { Link as RouterLink, useParams } from "react-router-dom"

function MenuItemsLevel2({itemsToRender} : {itemsToRender: any}) {

  const {city} = useParams<{city: string}>()

  return (
    itemsToRender.map((subcategory: any, index: number, array: any) =>
      <Box key={subcategory.id} width="fit-content" height="fit-content" display='flex' flexDirection="column" mb={2} mr={1} flexWrap="wrap">
        <Link color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${subcategory.slug}`}>
          {index === array.indexOf(array[array.length - 1]) ? 
          <span style={{color: 'red', position: "absolute", bottom: "15px", left: "15px"}}>{subcategory.name}</span> :
          <span>{subcategory.name}</span>}            
        </Link>

        {subcategory.children.map((subcategoryLevel3: any) =>
          <Link key={subcategoryLevel3.id} color="textSecondary" component={RouterLink} underline="none" to={`/${city}/${subcategoryLevel3.slug}`}>
            <span style={{fontSize: "0.8rem"}}>{subcategoryLevel3.name}</span>  
          </Link> 
            )} 
      </Box>
    )
  )
}

export default MenuItemsLevel2
