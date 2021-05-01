import React from "react";
import Link from "next/link";
import { Button } from "antd";
import styles from "./styles.module.scss"

interface CityButtonPropsType {
  isActive: boolean;
}

// const CityButton = styled(Button)({
//   color: ({ isActive }: CityButtonPropsType) => isActive ? "white" : "#a62626",
//   border: "1px solid rgba(166,38,38,.56)",
//   width: "140px",
//   height: "40px",
//   fontFamily: "Vazir",
//   fontWeight: "bold",
//   backgroundColor: ({ isActive }) => (isActive ? "#a62626" : ""),
// });

interface PropsType {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  to: string;
}

const CitySelectionButton = ({ to, text, onClick }: PropsType) => {
  
  // const isActive = useRouteMatch<{ city: string }>("/:city")?.params.city === to.substr(1);

  return (
    <Link href={to}>
      <a>
        <Button type="primary" onClick={onClick}>
          {text}
        </Button>
      </a>
    </Link>
  );
};

export default CitySelectionButton;

// #a12727
// #be3737
// #a62626
// rgba(166,38,38,.56)
