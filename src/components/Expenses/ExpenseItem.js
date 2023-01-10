import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
//    const [title, setTitle] = useState(0)

//     const changeTitleHandler = () => {
//         setTitle((prevState => prevState + 1))
//     }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick ={changeTitleHandler}>{title}</button> */}
    </Card>
  );
}

export default ExpenseItem;