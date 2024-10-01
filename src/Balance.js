import React, { useState } from 'react'
import TransactionMenu from './TransactionMenu';

const Balance = () => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const onIncome = (amount) => {

        setBalance(balance + amount);
        setIncome(income + amount)
    }
    const onExpense = (amount) => {

        setBalance(balance - amount);
        setExpense(expense + amount)
    }


    return (
        <div className='text-white'>
            <div className='pt-16'>
                <h1 className={`text-2xl ${balance > 0 ? 'bg-green-400' : 'bg-red-400'} p-2  rounded-md w-fit mx-auto`}>Balance:<span className={`  font-bold `}>{balance}</span> {balance > 0 ? '😊' : '😥'}</h1>
            </div>
            <div className=' flex justify-center items-center pt-16 space-x-10'>
                <h1 className=' text-xl bg-green-700 w-fit p-3 rounded'>Income:<span className='font-bold'>{income}</span></h1>
                <h1 className='text-xl bg-red-700 w-fit p-3 rounded'>Expense:<span className='font-bold'>{expense}</span></h1>
            </div>
            <div>
                <TransactionMenu onIncome={onIncome} onExpense={onExpense} ></TransactionMenu>
            </div>

        </div>
    )
}

export default Balance