import React from 'react'

const City = ({city}) => {
  return (
    <div>
      {city}
    </div>
  )
}

export const getServerSideProps = (ctx) => {

  const { city } = ctx.params

  return {
    props: {
      city
    }
  }
}

export default City
