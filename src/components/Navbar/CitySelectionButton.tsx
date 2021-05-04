import React, { useContext } from "react";
// import { Button } from '@material-ui/core'
// import { LocationOnRounded } from '@material-ui/icons'
import { EnvironmentOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDivarContext } from "../context/DivarContextProvider";
import styles from "./styles.module.scss";
import { allCitiesCleaned } from "~components/Sidebar/dataStructured";

const CitySelectionButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {

  const { city } = useDivarContext();
  let cityName = ""
  
  allCitiesCleaned.topCities.forEach(({title, url}) => {
    if (city === url) cityName = title
  })

  return (
    <Button
      className={styles.cityButton}
      icon={<EnvironmentOutlined />}
      onClick={onClick}
    >
      {!city && "انتخاب شهر"}
      {city && cityName}
    </Button>
  );
};

export default CitySelectionButton;
