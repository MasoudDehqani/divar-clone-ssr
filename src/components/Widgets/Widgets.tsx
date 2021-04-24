import { Grid } from '@material-ui/core'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDivarContext } from '../context/divarContext'
import Widget from './Widget'

const Widgets = () => {

  const { data, setData, completeURL } = useDivarContext()
  let observer = useRef(null)
  let nextPageNumber = data.seo_details?.next[data?.seo_details?.next.length - 1]
  

  const lastWidgetRef = useCallback( node => {
    //@ts-ignore
    if (observer.current) observer.current.disconnect()
    //@ts-ignore
    observer.current = new IntersectionObserver( ([entry]) => {
      if (entry.isIntersecting) {
        const getData = async () => {
          const response = await ((await fetch(`${completeURL}${completeURL.includes("?") ? `&page=${nextPageNumber}` : `?page=${nextPageNumber}`}`)).json())          
          //@ts-ignore
          setData( prev => ({...prev, widget_list: prev.widget_list.concat(response.widget_list)}))
        }
        getData()
      }
    })
    //@ts-ignore
    if (node) observer.current.observe(node)
  }, [completeURL, nextPageNumber, setData])

  useEffect(() => {

  }, [])

  return (
    <Grid spacing={2} direction="row" container style={{width: "calc(100vw - 280px)", marginTop: "20px"}}>
      {data.widget_list?.map((widget: any, index: number) => {
        if (data.widget_list.length === index + 1) {
          return(
            <Grid key={index} item>
              <Widget ref={lastWidgetRef} widgetData={widget.data} />
            </Grid>
          )
        }
        return (
          <Grid key={index} item>
            <Widget widgetData={widget.data} />
          </Grid>
        )
      }
      )}
    </Grid>
  )
}

export default Widgets