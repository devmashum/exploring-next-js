
"use client"
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[])
    return (
        <div>
            Total Users: {users.length}

            {
                users.map((user)=>(
                    <div key={user.id}><div className="card w-9/12 mx-auto bg-gray-300 py-3 my-3   shadow-xl">
 
  <div className="card-body">
    <h2 className="card-title">{
        user.name
    }</h2>
    <p>{user.email}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></div>))
            }
        </div>
    );
};

export default Users;