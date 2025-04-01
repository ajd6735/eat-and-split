import React, { useState } from 'react';
import Button from './Button';

const AddFriendForm: React.FC = () => {
    function handleBtn() {
        
    }
    return (
        <div className='form-container'>
            <form className='form-add-friend' >
                <label htmlFor='friend name'>🙋🏼‍♂️Friend</label>
                <input type='text' className='friend name' placeholder='Name of Your Friend' />

                <label htmlFor='friend image'>📷Image</label>
                <input type='text' className='friend image' placeholder='Image URL of Your Friend' />

                <Button onClick={handleBtn}>Add</Button>
            </form>
        </div>
    );
}

export default AddFriendForm;
