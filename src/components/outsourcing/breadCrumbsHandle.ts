
const breadCrumbsHandle = data => data.seo_details.bread_crumbs.filter(({url}) => url.includes("/")).map(({url}) => url.split("/")[1]).reverse()

export default breadCrumbsHandle;