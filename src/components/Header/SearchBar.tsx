import React, { useState } from 'react'
import { Input, Select } from "antd"
import { useRouter } from 'next/router'

const SearchBar = ({ title }) => {

  const { pathname, query, push } = useRouter()
  const { q, ...queryWithoutSearch } = query
  const [searchValue, setSearchValue] = useState(q)

  return (
    <Input.Search
      allowClear
      size="large"
      placeholder={`جستجو در ${title}`}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onPressEnter={() => searchValue && push({pathname: pathname, query: {...query, q: searchValue}})}
      onSearch={() => q && push({pathname: pathname, query: { ...queryWithoutSearch }})}
    />
  )
}

export default SearchBar
