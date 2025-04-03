import Button from './Button';
import { FriendInterface } from '../types/friend';

interface FriendComponentsProps {
    friend: FriendInterface;
}

interface FriendsArr {
    friends: FriendInterface[]
}

const FriendsList: React.FC<FriendsArr> = ({friends}) => {

    return (
        <ul>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
}

export const Friend: React.FC<FriendComponentsProps> = ({ friend }) => {
    
    function handleBtn() {
        //add the logic here
    }

    return (
        <li>
            <img src={friend.image} alt={friend.name}></img>
            <h3>{friend.name}</h3>

            {friend.balance < 0 && <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p>} 
            {friend.balance > 0 && <p className='green'>{friend.name} owes you ${Math.abs(friend.balance)}</p>} 
            {friend.balance === 0 && <p>You and {friend.name} are even!</p>} 

            <Button onClick={handleBtn}>Select</Button>           
        </li>
    );
}

export default FriendsList;