import React, { useState } from "react";
import {
  ClickAwayListener,
  Hidden,
  Link,
  MenuItem,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function MobileMenu() {
  const [menuState, setMenuState] = useState(false);

  const handleClick = (event: any) => {
    setMenuState(!menuState);
  };

  return (
    <ClickAwayListener onClickAway={() => setMenuState(false)}>
      <div>
        <MenuIcon
          style={{ color: "black", marginRight: "20px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <Paper
          style={{
            display: menuState ? "block" : "none",
            width: "170px",
            position: "absolute",
            top: "60px",
            left: "10px",
          }}
          elevation={3}
        >
          <Link color="inherit" underline="none" href="#">
            <MenuItem style={{ fontFamily: "inherit" }}>دیوار من</MenuItem>
          </Link>
          <Link color="inherit" underline="none" href="#">
            <MenuItem style={{ fontFamily: "inherit" }}>چت</MenuItem>
          </Link>
          <Link color="inherit" underline="none" href="#">
            <MenuItem style={{ fontFamily: "inherit" }}>درباره دیوار</MenuItem>
          </Link>
          <Link color="inherit" underline="none" href="#">
            <MenuItem style={{ fontFamily: "inherit" }}>بلاگ</MenuItem>
          </Link>
          <Link color="inherit" underline="none" href="#">
            <MenuItem style={{ fontFamily: "inherit" }}>پشتیبانی</MenuItem>
          </Link>
        </Paper>
      </div>
    </ClickAwayListener>
  );
}

export default MobileMenu;
