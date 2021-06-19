import React from 'react'
import UserList from './UserList';

const MyUserList = (props) => {
    console.log(props.data)

    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    };
   
    return (
        <ul className="expenses-list">
            {props.data.map(item => (
                <UserList
                    key={item.id}
                    username={item.username}
                    age={item.age}
                />
            ))}
        </ul>
    );
};

export default MyUserList