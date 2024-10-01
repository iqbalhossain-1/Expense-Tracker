import React, { useState } from 'react'

const TransactionMenu = ({ onIncome, onExpense }) => {
    const [menu, setMenu] = useState(false);
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState();
    const [title, setTitle] = useState('');
    const [transactionType, setTransactionType] = useState('income');

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = {
            id: data.length + 1,
            amount: amount,
            title: title,
            transactionType: transactionType
        }

        if (!amount || !title) {
            alert('you need to fill all field');
        }
        if (transactionType == 'income') {
            onIncome(Number(amount));
        }
        else {
            onExpense(Number(amount));
        }
        setData((data) => [...data, info]);
        setAmount('');
        setTitle('');
        setTransactionType('income');
        setMenu(!menu);
        console.log(data)
    }

    return (
        <div>

            <div>
                <button onClick={() => setMenu(!menu)} className='bg-gradient-to-r from-green-500 to-red-400 px-4 py-3 mt-10 rounded-md text-xl text-sky-950'>Add transaction</button>

            </div>
            {
                menu &&
                (<div className='flex flex-col items-center gap-5 mt-10 transition-opacity duration-1000 delay-700 ease-in-out'>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} required type='number' className='p-2 rounded-lg border border-black text-black' placeholder='Enter amount'></input>

                    <input value={title} onChange={(e) => setTitle(e.target.value)} required type='text' className='p-2 rounded-lg border border-black text-black' placeholder='Enter title'></input>
                    <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} className='p-2 rounded-lg border border-black text-black w-[200px]'>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <button className='px-4 py-2 rounded-md bg-blue-900' onClick={handleSubmit}>Add</button>


                </div>)

            }
            {
                data.length > 0 &&
                data.map(dt => (
                    <div className='flex justify-center mt-4 '>
                        <div className={`flex flex-row justify-between   p-2 font-bold rounded-md w-[200px]
                            ${dt.transactionType === 'expense' ? 'bg-red-700' : 'bg-green-700'}
                            `}>
                            <p className='text-xl'>{dt.title}</p>
                            <p className='text-xl'>{dt.amount}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default TransactionMenu