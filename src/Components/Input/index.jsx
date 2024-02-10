import React, { useState } from 'react';
import ButttonComponent from '../Button';

const TaskInput = ({ setShowModal }) => {
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showErr, setShowErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
    if (showErr) {
      setShowErr(false);
    }
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
    if (dateErr) {
      setDateErr(false);
    }
  };

  const handleSaveClick = () => {
    if (taskText === "") {
      setShowErr(true);
    } else if (dueDate === "") {
      setDateErr(true);
    } else {
      // Save task to localStorage
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const newTask = { text: taskText, dueDate };
      savedTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
      

      console.log('Task saved:', newTask);
      setShowModal(false);
    }
  };

  const currentDate = new Date();

  return (
    <div className='add_Task_Section '>
     
      <form style={{rowGap: "10px"}} className='flex-col start-start'>
      <label>Add Task</label>
        <input
          type="text"
          placeholder='add your text'
          value={taskText}
          onChange={handleInputChange}
          required  // added required attribute
        />
        {showErr && <span className='error'>!Please enter field</span>}
        <label>Due Date</label>
        <input
        minDate={currentDate}
          type="date"
          placeholder="select date"
          value={dueDate}
          onChange={handleDateChange}
          required  // added required attribute
        />
        {dateErr && <span className='error'>!Please select a date</span>}
        <div style={{ width: "98%" }} className='flex-row start-end'>
          <ButttonComponent type={"submit"} className={"AddTaskBtn"} text="Add Task" handleClick={handleSaveClick} />
        </div>
      </form>
    </div>
  );
};

export default TaskInput;
