import { Link, List, ListItem } from "@material-ui/core";
import React from "react";

function DesktopNav() {
  return (
    <List style={{ display: "flex", marginLeft: "20px", marginRight: "auto" }}>
      <Link underline="none" href="#">
        <ListItem style={{ width: "fit-content", color: "black" }}>
          دیوار من
        </ListItem>
      </Link>
      <Link underline="none" href="#">
        <ListItem style={{ width: "fit-content", color: "black" }}>چت</ListItem>
      </Link>
      <Link underline="none" href="#">
        <ListItem style={{ width: "fit-content", color: "black" }}>
          درباره دیوار
        </ListItem>
      </Link>
      <Link underline="none" href="#">
        <ListItem style={{ width: "fit-content", color: "black" }}>
          بلاگ
        </ListItem>
      </Link>
      <Link underline="none" href="#">
        <ListItem style={{ width: "fit-content", color: "black" }}>
          پشتیبانی
        </ListItem>
      </Link>
    </List>
  );
}

export default DesktopNav;
