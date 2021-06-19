import React,{useState} from 'react'
import './MyInputForm.css'

const MyInputForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState(" ");
    const [enteredAge, setEnteredAge] = useState(" ");
    const [validation, setValidation] = useState(false);


    const usernameChangeHnad = (event) => {
     setEnteredUsername(event.target.value)
    };
    const ageChangeHand = (event) => {
    setEnteredAge(event.target.value)
    };


const SubmitHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0) {
        setValidation(true)
        return;
    }
    const userData = {
            username: enteredUsername,
            age: enteredAge,
         };
        props.onSaveExpenseData(userData);
        setEnteredUsername('');
        setEnteredAge('');
    }
    
return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div className="Inputcontrols">
                    <div className="Inputcontrols">
                        <label>Username</label>
                        <input
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHnad}
                    />
                    </div>
                    <div className="Inputcontrols">
                        <label htmlFor="">Age</label>
                        <input
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHand}
                    />
                    </div>
                </div>
                <div className="Buttonactions">
                    <button type="submit"> Add Expense </button>
                </div>
            </form>
        </div>
    );
};

export default MyInputForm
