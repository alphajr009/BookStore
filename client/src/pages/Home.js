import React, { useState } from 'react';
import '../css/home.css';
import AllBooks from '../components/AllBooks';
import AddNewBook from '../components/AddNewBook';

function Home() {
  const [activeTab, setActiveTab] = useState('AllBooks');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="home-container">
      <div className="left-buttons">
        <button
          onClick={() => handleTabClick('AllBooks')}
          className={activeTab === 'AllBooks' ? 'active' : ''}
        >
          All Books
        </button>
        <button
          onClick={() => handleTabClick('AddNewBook')}
          className={activeTab === 'AddNewBook' ? 'active' : ''}
        >
          Add New Book
        </button>
      </div>
      <div className="right-tabs">
        {activeTab === 'AllBooks' ? <AllBooks /> : <AddNewBook />}
      </div>
    </div>
  );
}

export default Home;
