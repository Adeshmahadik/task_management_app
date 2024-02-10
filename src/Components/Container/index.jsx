import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { IoIosRemoveCircleOutline } from "react-icons/io";

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

  console.log(isOver, "isOver");

  const addItemToSection = (id) => {
    console.log("dropped", id, "efefer", title);
    setDropData({id: id, title: title})

    // Find the index of the object with id 1

    // You can use the index to perform the necessary logic when an item is dropped
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

const Card = ({ card, setdeleteData, index }) => {

  const id = card?.id;
  console.log(id, "ffff");
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  console.log(isDragging, "isDragging");

  return (
    <div ref={drag} className="card">
      <div className="value_and_status flex-row center-between">
        <p>
          <span>{index + 1}</span> {card.status}
        </p>
        <div className="" onClick={() => setdeleteData(card.id)}>
          <IoIosRemoveCircleOutline />
        </div>
      </div>
      <p>{card.text}</p>
      <p>Valid till : {card.date} </p>
    </div>
  );
};

export default Container;
