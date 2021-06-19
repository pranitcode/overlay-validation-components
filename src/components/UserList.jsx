import React from 'react'
import './UserList.css'
const UserList = (props) => {
    return (
        <div>
            <li>
                <div className="userdiv">
                    <p>{props.username} of age {props.age}</p>
                </div>
            </li>
        </div>
    );
};

export default UserList;
