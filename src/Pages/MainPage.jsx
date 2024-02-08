import React, { useState } from 'react';
import "./MainPage.css";
import ButttonComponent from '../Components/Button';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='MainPage flex-col start-center'>
      <div>
        <ButttonComponent text="Add Task" handleClick={() => setShowModal(!showModal)} />
      </div>
      <div>
        mainContainerSection
      </div>
      {showModal &&
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
            <p>Modal content here</p>
          </div>
        </div>
      }
    </div>
  );
}

export default MainPage;
