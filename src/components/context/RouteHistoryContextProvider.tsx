import React, { createContext, useContext, useMemo } from 'react'

const RouteHistoryContext = createContext({L1: "", L2: "", L3: ""})
export const useRouteHistoryContext = () => useContext(RouteHistoryContext)

let routeHistory = {L1: "", L2: "", L3: ""}

function RouteHistoryContextProvider({children}) {

  return (
    <RouteHistoryContext.Provider value={routeHistory}>{children}</RouteHistoryContext.Provider>
  )
}

export default RouteHistoryContextProvider
