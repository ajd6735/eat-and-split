import React, { useState } from 'react';
import Button from './Button';
import friends from '../data/friends';
import { Friend } from './FriendsList';

const AddFriendForm: React.FC = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmitForm(e: any) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();

        const newFriend = {
            id: id,
            name: name,
            image: `${image}?=${id}`,
            balance: 0
        };

        console.log(newFriend);
        // friends.push(newFriend);
        setName('');
        setImage('https://i.pravatar.cc/48');
    }

    

    function handleAddBtn() {

        // setName('');
        // setImage('');
    }
    return (
        <div className='form-container' >
            <form className='form-add-friend' onSubmit={handleSubmitForm}>
                <label htmlFor='friend name'>🙋🏼‍♂️Friend</label>
                <input type='text'
                    value={name}
                    className='friend name'
                    placeholder='Name of Your Friend'
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor='friend image'>📷Image</label>
                <input type='text'
                    value={image}
                    className='friend image'
                    placeholder='Image URL of Your Friend'
                    onChange={(e) => setImage(e.target.value)}
                />

                <Button onClick={handleAddBtn}>Add</Button>
            </form>
        </div>
    );
}

export default AddFriendForm;
