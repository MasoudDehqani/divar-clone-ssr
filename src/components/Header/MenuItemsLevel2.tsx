import React from "react";
// import { Box, Link } from '@material-ui/core'
// import { Link as RouterLink, useParams } from "react-router-dom"
import styles from "./styles.module.scss";
import { useDivarContext } from "~components/context/DivarContextProvider";
import Link from "next/link";

function MenuItemsLevel2({ itemsToRender }: { itemsToRender: any }) {
  const { city } = useDivarContext();

  return itemsToRender.map((subcategory: any, index: number, array: any) => (
    <div key={subcategory.id} className={styles.submenu}>
      <Link href={`/s/${city}/${subcategory.slug}`}>
        <a>
          {index === array.indexOf(array[array.length - 1]) ? (
            <span
              style={{
                color: "red",
                position: "absolute",
                bottom: "15px",
                left: "15px",
              }}
            >
              {subcategory.name}
            </span>
          ) : (
            <span>{subcategory.name}</span>
          )}
        </a>
      </Link>

      {subcategory.children.map((subcategoryLevel3: any) => (
        <Link
          key={subcategoryLevel3.id}
          href={`/s/${city}/${subcategoryLevel3.slug}`}
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
