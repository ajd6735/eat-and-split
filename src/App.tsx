import './index.css'
import React, { useState} from 'react'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import SplitBillForm from './components/SplitBillForm';


const App: React.FC = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriendBtn() {
    setShowAddFriend(show => !show);
  }

  return (
    <div className="app">

      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <AddFriendForm />}
        <Button onClick={handleAddFriendBtn}> { showAddFriend ?  'Close' : 'Add Friend' }</Button>
      </div>

      <SplitBillForm />
    </div>
  );
}

export default App;
