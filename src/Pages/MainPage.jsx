import React, { useState } from 'react';
import "./MainPage.css";
import ButttonComponent from '../Components/Button';
import Modal from '../Components/Modal';
import TaskInput from '../Components/Input';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
const todoData = localStorage.getItem("TasksTodo");
console.log(todoData, "todoData");
  //define localstorage parameters

  return (
    <div className='MainPage flex-col start-center'>
      <div>
        <ButttonComponent className={"AddTaskBtn"} text="Add Task" handleClick={() => setShowModal(!showModal)} />
      </div>
      <div>
        mainContainerSection
      </div>
      {showModal &&
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <TaskInput setShowModal={setShowModal} />
        </Modal>
      }
    </div>
  );
}

export default MainPage;
