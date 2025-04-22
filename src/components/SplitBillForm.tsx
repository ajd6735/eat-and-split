import React, { useState } from 'react';
import Button from './Button';
import { FriendInterface } from '../types/friend';

interface FriendProp {
    selectedFriend: FriendInterface;
}


const SplitBillForm: React.FC<FriendProp> = ({ selectedFriend }) => {
    const [bill, setBill] = useState<number | ''>('');
    const [paidByUser, setPaidByUser] = useState<number | ''>('');
    const [whoIsPaying, setWhoIsPaying] = useState<string>('user');

    const billValue = Number(bill) || 0;
    const paidByUserValue = Number(paidByUser) || 0;
    const paidByFriend = billValue - paidByUserValue;

    function handleSplitBillBtn() {

    }

    function handleExpenses(e: any) {
        const value = e.target.value;
        const num = Number(value);

        if (value === '') {
            setPaidByUser('');
        } else if (num >= 0 && num <= billValue) {
            setPaidByUser(num);
        }
    }

    return (
        <div className='form-container'>
            <form className='form-split-bill' >
                <h2>Split a bill with {selectedFriend.name}</h2>

                <label htmlFor='bill'>💰Bill Value</label>
                <input type='text'
                    className='bill'
                    value={bill}
                    onChange={(e) => setBill(e.target.value === '' ? '' : Number(e.target.value))}
                />

                <label htmlFor='your bill'>🧍🏻‍♂️Your Expense</label>
                <input type='text'
                    className='your bill'
                    value={paidByUser}
                    onChange={handleExpenses}
                />

                <label htmlFor='friend expense'>🙋🏼‍♂️ {selectedFriend.name}'s Expense</label>
                <input type='text'
                    className='friend expense'
                    value={paidByFriend}
                    disabled />

                <label htmlFor='select'>🪙Who is Paying the Bill?</label>
                <select className='select'
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                >
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>

                <Button onClick={handleSplitBillBtn}>Split Bill</Button>
            </form>
        </div>
    );
}

export default SplitBillForm;