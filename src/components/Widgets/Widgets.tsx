import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDivarContext } from '../context/divarContext'
import { Row, Col } from "antd"
import Widget from './Widget'
import { useRouter } from 'next/router'

interface DataType {
  widget_list: string[]
  seo_details: string[]
}

const Widgets = ({data} : {data: any}) => {

  const [ widgetsData, setWidgetsData ] = useState(data)
  const [ nextPageNumber, setNextPageNumber ] = useState(2)
  // console.log(widgetsData)

  useEffect(() => {
    setWidgetsData(data)
  }, [data])

  const { baseUrl } = useDivarContext()
  const { asPath } = useRouter()

  let observer = useRef(null)
  
  const lastWidgetRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver( ([entry]) => {
      if (entry.isIntersecting && widgetsData.seo_details?.next) {
        const getData = async () => {
          const res = await fetch(`${baseUrl}/${asPath.slice(3)}${asPath.includes("?") ? `&page=${nextPageNumber}` : `?page=${nextPageNumber}`}`);
          console.log(res)
          const response = await res.json()
          console.log(response)
          setWidgetsData( prev => ({...prev, widget_list: prev.widget_list.concat(response.widget_list)}))
          setNextPageNumber(nextPageNumber + 1)
        }
        getData()
      }
    })
    if (node) observer.current.observe(node)
  }, [nextPageNumber, baseUrl, asPath, widgetsData])

  useEffect(() => {

  }, [])

  return (
    <Row gutter={2} style={{width: "calc(100vw - 280px)", marginTop: "20px", marginRight: "260px"}}>
      {widgetsData.widget_list?.map((widget: any, index: number) => {
        if (widgetsData.widget_list.length === index + 1) {
          return(
            <Col key={index}>
              <Widget ref={lastWidgetRef} widgetData={widget.data} />
            </Col>
          )
        }
        return (
          <Col key={index}>
            <Widget widgetData={widget.data} />
          </Col>
        )
      }
      )}
    </Row>
  )
}

export default Widgets