import React from "react";
import { Button, styled } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { NavLink, useRouteMatch } from "react-router-dom";

interface CityButtonPropsType {
  isActive: boolean;
}

const CityButton = styled(Button)({
  color: ({ isActive }: CityButtonPropsType) => isActive ? "white" : "#a62626",
  border: "1px solid rgba(166,38,38,.56)",
  width: "140px",
  height: "40px",
  fontFamily: "Vazir",
  fontWeight: "bold",
  backgroundColor: ({ isActive }) => (isActive ? "#a62626" : ""),
});

interface PropsType {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  to: string;
}

const CitySelectionButton = ({ to, text, onClick }: PropsType) => {
  
  const isActive = useRouteMatch<{ city: string }>("/:city")?.params.city === to.substr(1);

  return (
    <Link component={NavLink} to={to} underline="none">
      <CityButton isActive={isActive} onClick={onClick} variant="outlined">
        {text}
      </CityButton>
    </Link>
  );
};

export default CitySelectionButton;

// #a12727
// #be3737
// #a62626
// rgba(166,38,38,.56)
