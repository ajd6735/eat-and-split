import './index.css'
import React, { useState} from 'react'
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import SplitBillForm from './components/SplitBillForm';
import initFriends from './data/friends-data';
import { FriendInterface } from './types/friend';

const App: React.FC = () => {
  const [friends, setFriends] = useState<FriendInterface[]>(initFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendInterface | null>(null);

  function handleAddFriendBtn() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend: FriendInterface) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend: FriendInterface) {
    setSelectedFriend((curSelected) =>
        (curSelected?.id === friend.id) ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    if (!selectedFriend) return;
    
    setFriends(friends => friends.map(friend =>  friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
  }

  return (
    <div className="app">

      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection} />
        
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
        
        <Button onClick={handleAddFriendBtn}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>

      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
