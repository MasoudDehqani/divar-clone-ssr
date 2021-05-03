import React, { useState } from 'react'
import { Select } from "antd"
import { useRouter } from 'next/router'

const SearchBar = ({ categoryText }) => {

  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  console.log(searchValue)

  return (
    <Select 
      allowClear 
      showSearch 
      showArrow={false} 
      size="large" 
      placeholder={`جستجو در ${categoryText}`}
      searchValue={searchValue}
      // value={searchValue}
      // onChange={(v: string) => setSearchValue(v)}
      onSearch={(v: string) => setSearchValue(v)}
      // onInputKeyDown={() => router.push(`/s/${city}/${category}`)}
      open={false}
    />
  )
}

export default SearchBar
