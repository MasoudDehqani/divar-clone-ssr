import React from 'react';
import { List } from "antd";
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PropsType {
  Icon?: React.ElementType; 
  text: string; 
  linkToGo: string; 
  actStyle?: object;
  style?: object; 
  onClick?: (React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement>) | undefined
}

const SideItem = ( { Icon, text, onClick, style, slug, query } : any ) => {

  return (
    <Link href={{ pathname: `/s/[city]/[category]`, query: {...query, category: slug } }}>
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
