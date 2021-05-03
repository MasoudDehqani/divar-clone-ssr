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

  // const { data, setData, completeURL } = useDivarContext()

  const [ widgetsData, setWidgetsData ] = useState(data)
  const [ nextPageNumber, setNextPageNumber ] = useState(2)

  useEffect(() => {
    setWidgetsData(data)
  }, [data])

  const { baseUrl } = useDivarContext()
  const { query: { city, category }, asPath } = useRouter()
  let queries = ""
  if (asPath.includes("?")) queries = asPath.slice(asPath.indexOf("?"))
  let observer = useRef(null)
  // let nextPageNumber = data.seo_details?.next[data?.seo_details?.next.length - 1]
  

  const lastWidgetRef = useCallback( node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver( ([entry]) => {
      if (entry.isIntersecting && data.seo_details?.next) {
        const getData = async () => {
          const response = await ((await fetch(`${baseUrl}/${asPath.slice(3)}${queries}${asPath.includes("?") ? `&page=${nextPageNumber}` : `?page=${nextPageNumber}`}`)).json())          
          if (data.seo_details?.next && response.seo_details?.next) {
            setWidgetsData( prev => ({...prev, widget_list: prev.widget_list.concat(response.widget_list)}))
            setNextPageNumber(nextPageNumber + 1)
          }
        }
        getData()
      }
    })
    if (node) observer.current.observe(node)
  }, [nextPageNumber])

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