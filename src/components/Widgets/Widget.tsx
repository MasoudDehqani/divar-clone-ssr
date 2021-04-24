import React from 'react'
import { Box } from '@material-ui/core'
import ChatOutlined from "@material-ui/icons/ChatOutlined"

type WidgetProps = {
  widgetData: any
}

const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  ({widgetData}, ref) => {
    return (
      <div ref={ref}>
        <Box p={1} display="flex" justifyContent="space-between" alignItems="center" style={{width: "350px", height: "180px", border: "1px solid rgba(0,0,0,0.2)", borderRadius: "6px", padding: "0 10px"}}>
          <Box style={{height: "150px"}} width="190px" display="flex" flexDirection="column" justifyContent="space-between" >
            <span style={{fontWeight: 900}}>{widgetData.title}</span>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <span style={{color: "grey", fontSize: "0.9rem"}}>{widgetData.description}</span>
              <Box color="grey" display="flex">
                {widgetData.red_text && <span style={{color: "red", fontSize: "0.7rem"}}>{widgetData.red_text}</span>}
                <span style={{color: 'grey', marginRight: "2px", fontSize: "0.7rem"}}>{widgetData.normal_text?.length + widgetData.red_text?.length > 20 ? `${widgetData.normal_text?.substr(0, 22)}...` : widgetData.normal_text}</span>
                {widgetData.has_chat && <ChatOutlined style={{marginRight: "auto"}} />}
              </Box>
            </Box>
          </Box>
          <div style={{ width:'150px', height: '150px', backgroundImage: `url(${widgetData.image})`, backgroundSize: "cover", borderRadius: "6px" }}></div>
        </Box>
      </div>
    )
  }
) 

export default Widget
