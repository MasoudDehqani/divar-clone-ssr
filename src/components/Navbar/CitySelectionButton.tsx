import React, { useContext } from 'react'
// import { Button } from '@material-ui/core'
// import { LocationOnRounded } from '@material-ui/icons'
import { EnvironmentOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useDivarContext } from '../context/divarContext'
import styles from "./styles.module.scss"

const CitySelectionButton = ({onClick} : {onClick: React.MouseEventHandler<HTMLButtonElement>}) => {

  const {city} = useDivarContext()

  return (
    <Button className={styles.cityButton} icon={<EnvironmentOutlined />} onClick={onClick}>
      {!city && "انتخاب شهر"}
      {city && "تهران"}
    </Button>
  )
}

export default CitySelectionButton
