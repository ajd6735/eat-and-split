
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
            <p>{friend.name}</p>
            <p>Balance: {friend.balance}</p>
        </>
    );
}

export default FriendsList;