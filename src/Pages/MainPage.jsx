import React, { useEffect, useState } from 'react';
import "./MainPage.css";
import ButttonComponent from '../Components/Button';
import Modal from '../Components/Modal';
import TaskInput from '../Components/Input';
import Container from '../Components/Container';
import toast from "react-hot-toast";
const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteData, setdeleteData] = useState("");
  const [dropData, setDropData] = useState(null);
  const AllStoredData = JSON.parse(localStorage.getItem("savedItem")) || [];
  console.log(AllStoredData, "AllStoredData");

  const statusTypes = ["todo", "inprogress", "done"];

  const filteredData = statusTypes.map(status => ({
    status,
    data: AllStoredData.filter(tasks => tasks.status === status)
  }));
  useEffect(() => {
    if(deleteData !== "") {

      const arrayOfObjects = AllStoredData.filter(obj => obj.id !== deleteData);
      localStorage.setItem("savedItem", JSON.stringify(arrayOfObjects))
      toast.success("task removed successfully!")
      setdeleteData("")
    }
  }, [deleteData]);



  const updateStatusById = (array, id, newStatus) => {
    const index = array.findIndex(obj => obj.id === id);
  
    if (index !== -1) {
      array[index].status = newStatus;
    }
  
    return array;
  }
  useEffect(() => {
    if(dropData !== null) {
     const arrayOfObjects = updateStatusById(AllStoredData, dropData.id, dropData.title);
     localStorage.setItem("savedItem", JSON.stringify(arrayOfObjects))
    }
  
  }, [dropData])
  
  

  return (
    <div className='MainPage flex-col start-center'>
      <div>
        <ButttonComponent className={"AddTaskBtn"} text="Add Task" handleClick={() => setShowModal(!showModal)} />
      </div>
      <div className='children_Section'>
        {filteredData.map(({ status, data }) => (
          <Container setDropData={setDropData} setdeleteData={setdeleteData} key={status} title={status} cardData={data} />
        ))}
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal} title="Add Task">
          <TaskInput prevTask={AllStoredData} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default MainPage;
