import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuItemsLevel2({ itemsToRender }: { itemsToRender: any }) {

  const { pathname, query } = useRouter()

  return itemsToRender.map((subcategory: any, index: number, array: any) => (
    <div key={subcategory.id} className={styles.submenu} >
      <Link href={{pathname: "/s/[city]/[category]", query: {...query, category: subcategory.slug}}}>
        <a>
          <span
            style={index === array.indexOf(array[array.length - 1]) ? {
              color: "red",
              position: "absolute",
              bottom: "15px",
              left: "15px",
            } : null}
            >
            {subcategory.name}
          </span>  
        </a>
      </Link>

      {subcategory.children.map((subcategoryLevel3: any) => (
        <Link
          key={subcategoryLevel3.id}
          href={{pathname: "/s/[city]/[category]", query: {...query, category: subcategory.slug}}}
        >
          <a>
            <span style={{ fontSize: "0.8rem" }}>{subcategoryLevel3.name}</span>
          </a>
        </Link>
      ))}
    </div>
  ));
}

export default MenuItemsLevel2;
