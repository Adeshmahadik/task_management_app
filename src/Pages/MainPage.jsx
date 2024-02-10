import React, { useState } from 'react';
import "./MainPage.css";
import ButttonComponent from '../Components/Button';
import Modal from '../Components/Modal';
import TaskInput from '../Components/Input';
import Container from '../Components/Container';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
const AllStoredData = JSON.parse(localStorage.getItem("savedItem"));
console.log(AllStoredData, "AllStoredData");
  //define localstorage parameters

  return (
    <div className='MainPage flex-col start-center'>
      <div>
        <ButttonComponent className={"AddTaskBtn"} text="Add Task" handleClick={() => setShowModal(!showModal)} />
      </div>
      <div>
        <Container title="todo" cardData={AllStoredData} />
        <Container title="In progress" cardData={AllStoredData} />
        <Container title="Done" cardData={AllStoredData} />
        
      </div>
      {showModal &&
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <TaskInput prevTask={AllStoredData ? AllStoredData :[]} setShowModal={setShowModal} />
        </Modal>
      }
    </div>
  );
}

export default MainPage;
