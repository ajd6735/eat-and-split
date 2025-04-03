import React from 'react';
import Button from './Button';
import { FriendInterface } from '../types/friend';

interface FriendProp{
    selectedFriend: FriendInterface;
}


const SplitBillForm: React.FC<FriendProp> = ({ selectedFriend }) => {
    
    function handleSplitBillBtn() {
        
    }

    return (
        <div className='form-container'>
            <form className='form-split-bill' >
                <h2>Split a bill with { selectedFriend.name }</h2>

                <label htmlFor='bill'>💰Bill Value</label>
                <input type='text' className='bill' placeholder='$0.00' />

                <label htmlFor='your bill'>🧍🏻‍♂️Your Bill</label>
                <input type='text' className='your bill' placeholder='$0.00' />

                <label htmlFor='friend expense'>🙋🏼‍♂️ {selectedFriend.name }'s Expense</label>
                <input type='text' className='friend expense' disabled />

                <label htmlFor='select'>🪙Who is Paying the Bill?</label>
                <select className='select'>
                    <option value="user">You</option>
                    <option value="friend">{ selectedFriend.name }</option>
                </select>

                <Button onClick={handleSplitBillBtn}>Split Bill</Button>
            </form>
        </div>
    );
}

export default SplitBillForm;