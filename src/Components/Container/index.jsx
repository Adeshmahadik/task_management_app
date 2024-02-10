import React, { useEffect, useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Container = ({ cardData, setdeleteData,  title }) => {
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
              <div className="value_and_status flex-row center-between ">
                <p><span>{index +1}</span> {data?.status}</p>
                <div className="" onClick={() => (setdeleteData(data.id))}>
                 <IoIosRemoveCircleOutline />
                </div>
        
              </div>
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
