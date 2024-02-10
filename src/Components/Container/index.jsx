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
<div>
  {data.map((data, index) => (
      <div className='cardSection' key={data?.id}>
        <p><span>{index}</span> {data?.status}</p>
       <p> {data?.text}</p>
       <p>Valid till : {data?.date} </p>
     
      </div>
  ))}
</div>
    </div>
  )
}

export default Container