export interface ContextType {
  city: string | string[];
  baseUrl: string;
}

let initialContextValues = {
  city : "",
  baseUrl : "https://api.divar.ir/v8/web-search",
}

export default initialContextValues