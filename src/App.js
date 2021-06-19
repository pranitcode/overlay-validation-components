import React,{useState } from 'react'
import MyInput from './components/MyInput'
import MyUserList from './components/MyUserList';
import Overlay from './components/Overlay';

const MyData = [
    {id: 'e1', username: 'Pranitcode', age: "20" },
    { id: 'e2', username: 'Pranitcode',age: "20"},
    {id: 'e3', username: 'Pranitcode', age: "20" }
];

  


const App = () => {
const [newExpense , setNewExpenses] = useState(MyData);

  const addExpenseHandler = expense => {
  setNewExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

return (
        <div>
         <MyInput onAddexpense={addExpenseHandler}/>
    <MyUserList data={newExpense} />
    <Overlay/>
        </div>
    );
};

export default App;
