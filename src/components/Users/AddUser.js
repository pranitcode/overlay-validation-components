import React,{useState,useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

const [error, setError] = useState();
  
 const enteredname = useRef();
  const enteredUserAge = useRef();
  

const addUserHandler = (event) => {
  event.preventDefault();
  
  const EnteredName = enteredname.current.value
  const EnteredAge = enteredUserAge.current.value
  
  if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
    setError({ title: "Invalid Input",message: "Input should not be empty"});
    return;}
  if (+EnteredAge< 1) {
    setError({title: "Invalid age", message: "please fill valid age (>0)"});
    return;
  }
  props.onAddUser(EnteredName, EnteredAge);
  enteredname.current.value = '';
  enteredUserAge.current.value = '';
};

  const errorHandler = () => {setError(null) }
  
  
  return (
    <>
     {error&&<ErrorModel title={error.title} onErrorhand={errorHandler} message={error.message}  />} 
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">
          Username
        </label>
        <input
          id="username"
           type="text"
          ref={enteredname}
          />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={enteredUserAge}
          />
        <Button
          type="submit">
          Add User
        </Button>
      </form>
      </Card>
      </>
  );
};

export default AddUser;