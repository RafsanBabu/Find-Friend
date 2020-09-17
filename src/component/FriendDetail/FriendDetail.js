import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const {id} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setFriend(data))
    },[])
    
    return (
        <div>
            <h3>This is Friend:{friend.name} Detail</h3>
            <p>Country : {friend.country}</p>
            <p>Email : {friend.email}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;