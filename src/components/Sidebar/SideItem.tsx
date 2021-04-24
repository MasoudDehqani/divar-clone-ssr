import React from 'react';
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import { NavLink, useParams } from "react-router-dom"
import { ListItem } from '@material-ui/core';

interface PropsType {
  Icon?: React.ElementType; 
  text: string; 
  linkToGo: string; 
  actStyle?: object;
  style?: object; 
  onClick?: (React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement>) | undefined
}

const SideItem = ( { Icon, text, linkToGo, actStyle, onClick, style } : PropsType ) => {

  return (
    <ListItem>
      <Link onClick={onClick} component={NavLink} to={`${linkToGo}`} underline="none" color="textSecondary" activeStyle={actStyle} style={style} >
        <Box display="flex" width="100%">
          {Icon && <Icon />}
          <span style={{marginRight: '10px'}}>{text}</span>
        </Box>
      </Link>
    </ListItem>
  )
}

export default SideItem
