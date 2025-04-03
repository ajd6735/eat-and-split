import './index.css'
import React, { useState} from 'react'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import SplitBillForm from './components/SplitBillForm';
import initFriends from './data/friends';


const App: React.FC = () => {
  const [friends, setFriends] = useState(initFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriendBtn() {
    setShowAddFriend(show => !show);
  }

  return (
    <div className="app">

      <div className="sidebar">
        <FriendsList friends={friends}/>
        {showAddFriend && <AddFriendForm />}
        <Button onClick={handleAddFriendBtn}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      <SplitBillForm />
    </div>
  );
}

export default App;
