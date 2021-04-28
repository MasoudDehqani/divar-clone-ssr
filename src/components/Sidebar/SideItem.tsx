import React from 'react';
import { List } from "antd";
import Link from 'next/link';

interface PropsType {
  Icon?: React.ElementType; 
  text: string; 
  linkToGo: string; 
  actStyle?: object;
  style?: object; 
  onClick?: (React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement>) | undefined
}

const SideItem = ( { Icon, text, linkToGo, actStyle, onClick, style } : any ) => {


  return (
    <Link href={linkToGo}>
      <a>
        <List.Item style={style} onClick={onClick}>
          <div style={{display: "flex", width: "100%"}}>
            {Icon && <Icon />}
            <span style={{marginRight: '10px'}}>{text}</span>
          </div>
        </List.Item>
      </a>
    </Link>
  )
}

export default SideItem
