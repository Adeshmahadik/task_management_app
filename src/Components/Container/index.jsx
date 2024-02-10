import React, { useEffect, useState } from 'react'

const Container = ({cardData, title}) => {
  const [data, setData] = useState(cardData);


  useEffect(() => {
    setData(cardData)
  }, [cardData])
  return (
    <div className='container_section'>
<div className='titleSection'>
<p> <span className='totlanoVal'>{data?.length} </span>{title}</p>
</div>
    </div>
  )
}

export default Container