import React, { useEffect, useState } from "react";

const Container = ({ cardData, title }) => {
  const [data, setData] = useState(cardData);

  useEffect(() => {
    setData(cardData);
  }, [cardData]);
  return (
    <div className="container_section">
      <div className="container_section_child">
        <div className="titleSection">
            <span className="totalnoVal">{data?.length} </span>
            {title}
        </div>
        <div className="cardSection">
          {data.map((data, index) => (
            <div className="card" key={data?.id}>
              <p className="value_and_status">
                <span>{index +1}</span> {data?.status}
              </p>
              <p> {data?.text}</p>
              <p>Valid till : {data?.date} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
