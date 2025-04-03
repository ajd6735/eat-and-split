import Button from './Button';
import { FriendInterface } from '../types/friend';

interface FriendsListProps {
    friend: FriendInterface;
    selectedFriend: FriendInterface | null;
    onSelection: (friend: FriendInterface) => void;
}

interface FriendsArr {
    friends: FriendInterface[];
    selectedFriend: FriendInterface | null;
    onSelection: (friend: FriendInterface) => void;
}

const FriendsList: React.FC<FriendsArr> = ({ friends, selectedFriend, onSelection }) => {

    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection} />
            ))}
        </ul>
    );
}

export const Friend: React.FC<FriendsListProps> = ({ friend, selectedFriend, onSelection }) => {

    const isSelected = (friend.id === selectedFriend?.id);

    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={friend.image} alt={friend.name}></img>
            <h3>{friend.name}</h3>

            {friend.balance < 0 && <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p>}
            {friend.balance > 0 && <p className='green'>{friend.name} owes you ${Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p>You and {friend.name} are even!</p>}

            <Button
                onClick={() => onSelection(friend)} >
                {isSelected ? 'Close' : 'Select'}
            </Button>
        </li>
    );
}

export default FriendsList;