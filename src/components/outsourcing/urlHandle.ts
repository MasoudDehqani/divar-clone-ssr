
export interface AllQueriesType {
  searchQuery: string | null;
}

const urlHandle = (
  baseUrl: string, 
  pathname: string,
  city: string | null,
  ) => {

  let completeURL: string = baseUrl
  pathname = pathname === "/s" ? `/${city}` : pathname
  completeURL += pathname

  return completeURL
}

export default urlHandle;