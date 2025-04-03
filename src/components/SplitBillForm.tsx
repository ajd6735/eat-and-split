import React, { useState } from 'react';
import Button from './Button';
import friends from '../data/friends-data';
import { FriendInterface } from '../types/friend';

interface Friend{
    friend: FriendInterface;
}


const SplitBillForm: React.FC = ({ }) => {
    function handleBtn() {
        
    }
    return (
        <div className='form-container'>
            <form className='form-split-bill' >
                <h2>Split a bill with a friend</h2>

                <label htmlFor='bill'>💰Bill Value</label>
                <input type='text' className='bill' placeholder='$0.00' />

                <label htmlFor='your bill'>🧍🏻‍♂️Your Bill</label>
                <input type='text' className='your bill' placeholder='$0.00' />

                <label htmlFor='friend expense'>🙋🏼‍♂️Friend's Expense</label>
                <input type='text' className='friend expense' disabled />

                <label>🪙Who is Paying the Bill?</label>
                <select>
                    <option value="user">You</option>
                    <option value="friend">X</option>
                </select>

                <Button onClick={handleBtn}>Split Bill</Button>
            </form>
        </div>
    );
}

export default SplitBillForm;