import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Card from "../Card";


const Container = ({ cardData, setDropData, setdeleteData, title }) => {
  const [data, setData] = useState(cardData);

  useEffect(() => {
    setData(cardData);
  }, [cardData]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));


  const addItemToSection = (id) => {
    setDropData({id: id, title: title})
  };

  return (
    <div style={{opacity : isOver ? "30%" : "100%"}} ref={drop} className="container_section">
      <div className="container_section_child">
        <div className="titleSection">
          <span className="totalnoVal">{data?.length} </span>
          {title}
        </div>
        <div className="cardSection">
          {data.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              setdeleteData={setdeleteData}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Container;
