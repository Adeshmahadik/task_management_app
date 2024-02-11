import React from 'react';
import { useDrag } from 'react-dnd';
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Card = ({ card, setdeleteData, index }) => {

    const id = card?.id;
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));
  
  
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
        <p style={{fontSize: "16px", textDecoration:card.status === "done" ?  "line-through" : ""}}>{card.text}</p>
        <p>Valid till : {card.date} </p>
      </div>
    );
  };

  export default Card