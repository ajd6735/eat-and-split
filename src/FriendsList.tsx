
import innitialFriends from './data/initial-friends';

interface FriendProps{
    id: number;
    name: string;
    image: string;
    balance: number;
}

interface FriendComponentsProps{
    friend: FriendProps;
}

const FriendsList: React.FC = () => {

    return (
        <ul>
            {innitialFriends.map((friend, index) => (
                <Friend friend={friend} key={friend.id}/>
            ))}
        </ul>
    );
}

const Friend: React.FC<FriendComponentsProps> = ({ friend }) => {
    return (
        <>
            <img src={friend.image} alt={friend.name}></img>
            <h3>{friend.name}</h3>

            {friend.balance < 0 && <p className='red'>You owe {friend.name} ${Math.abs(friend.balance)}</p>} 
            {friend.balance > 0 && <p className='green'>{friend.name} owes you ${Math.abs(friend.balance)}</p>} 
            {friend.balance === 0 && <p>You and {friend.name} are even!</p>} 
            
        </>
    );
}

export default FriendsList;