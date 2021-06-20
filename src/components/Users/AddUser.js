import React,{useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState( );

const addUserHandler = (event) => {
event.preventDefault();
  if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    setError({

      title: "Invalid Input",
      message: "Input should not be empty"
    });
    return;
  }
  if (+enteredAge < 1) {
    setError({

      title: "Invalid age",
      message: "please fill valid age (>0)"
    });
    return;
  }
  // console.log(enteredUsername, enteredAge)
  props.onAddUser(enteredUsername, enteredAge);
  setEnteredUsername(' ');
  setEnteredAge(' ');
};

  
  
  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
};

  const errorHandler = () => {
    setError(null)
  }
  
  
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
          value={enteredUsername}
          onChange={usernameChangedHandler}
          type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enteredAge}
          onChange={ageChangedHandler}
          type="number" />
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