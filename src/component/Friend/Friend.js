import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {

    const {name,email, id}=props.friend;
    return (
        <div>
           <h1>{name}</h1>
           <p>{email}</p> 
           <p><Link to={`/friend/${id}`}>See detail of firend:{id}</Link></p>
        </div>
    );
};

export default Friend;