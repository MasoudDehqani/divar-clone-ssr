import React from 'react'
import { CommentOutlined } from "@ant-design/icons"
import { Row, Col } from "antd"
import styles from "./styles.module.scss"

type WidgetProps = {
  widgetData: {
    title: string;
    description: string;
    red_text: string;
    normal_text: string;
    has_chat: boolean;
    image: string
  }
}

const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  ({widgetData: {title, description, red_text, normal_text, has_chat, image }}, ref) => {

    return (
      <div ref={ref}>
        
        <Row className={styles.mainWidgetContainer} justify="space-between" align="middle" >
          <Col className={styles.widgetTexts} >
            <span className={styles.title}>{title}</span>
              <div className={styles.info}>
                <span style={{color: "grey", fontSize: "0.9rem"}}>{description}</span>
                <Row className={styles.bottomInfo}>
                  {red_text && <Col className={styles.redText}>{red_text}</Col>}
                  <Col className={styles.details}>{normal_text?.length + red_text?.length > 20 ? `${normal_text?.substr(0, 22)}...` : normal_text}</Col>
                  {has_chat && <Col><CommentOutlined className={styles.chatIcon} /></Col>}
                </Row>
              </div>
          </Col>

          <Col className={styles.widgetImage} style={{ backgroundImage: `url(${image})` }} />

        </Row>
      </div>
    )
  }
) 

export default Widget
