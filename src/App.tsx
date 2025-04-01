import './App.css'
import React from 'react'
import FriendsList from './FriendsList';


const App: React.FC = () => {
  
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
      </div>
    </div>
  );
}

export default App;
