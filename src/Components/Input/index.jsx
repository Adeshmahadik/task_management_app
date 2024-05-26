import React, { useState } from 'react';
import ButttonComponent from '../Button';
import toast from "react-hot-toast";

const TaskInput = ({ prevTask = [], setShowModal }) => {
  const [taskData, setTaskData] = useState({ id: "", text: "", status: "Todo", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    const newData = {
      ...taskData,
      id: currentDate,
      status: "todo",
    };
    if(newData.text === "" && newData.date === "" ){
    toast.error("Please Enter task & select date and inform")
    } else if(newData.text === ""){
      toast.error("Please Enter task")
    } else if(newData.date === "") {
      toast.error("please Select a date")
    } else {
toast.success("all data submitted successfully")
    }
    const submitData = [...prevTask, newData]
    localStorage.setItem("savedItem", JSON.stringify(submitData))
    setTaskData(newData);
    setShowModal(false);
  };
  

  return (
    <div className='add_Task_Section'>
      <form style={{ rowGap: "10px" }} className='flex-col start-start' onSubmit={handleSubmit}>
        <label>Add Task</label>
        <input
          name="text"
          type="text"
          placeholder='add your text'
          value={taskData.text}
          onChange={handleChange} 
          required
        />
        <label>Due Date</label>
        <input
          type="date"
          name="date"
          placeholder="select date"
          value={taskData.date}
          onChange={handleChange}
          required
        />
        <div style={{ width: "98%" }} className='flex-row start-end'>
          <ButttonComponent type={"submit"} className={"AddTaskBtn"} text="Add Task" />
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
