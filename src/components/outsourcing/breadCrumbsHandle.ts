
const breadCrumbsHandle = (response: any, routes: any, districts: any, city: string) => {
  if (!response || !city) return
  const levels: string[] = []
  
  response.seo_details.bread_crumbs.forEach( ({url} : {url: string}) => {
    url.includes("/") && levels.unshift(url.substr(city.length + 1))
  })
  
  routes.topLevel = levels[0] ? levels[0] : "";
  routes.level2 = levels[1] ? levels[1] : "";
  routes.level3 = levels[2] ? levels[2] : "";
  // districts = response.schema.json_schema.properties.districts.properties.vacancies.items.enumNames
}

export default breadCrumbsHandle;