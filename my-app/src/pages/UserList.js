// src/pages/UserList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../slices/userSlices';

const UserList = () => {
  const users = useSelector((state) => state.userInfo.users);
  console.log("list---",users)
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    console.log(index)
    dispatch(deleteUser(index));
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user,index) => (
          <div>
            <p>Name :</p>
          <span key={user.name}>{user.name}</span>
          <p>Email ID:</p>
          <span key={user.emaispand}>{user.emailId}</span>
          <p>Age:</p>
          <span key={user.age}>{user.age}</span>
          <p>Phone:</p>
          <span key={user.phone}>{user.phone}</span>
          <p>Address:</p>
          <span key={user.address}>{user.address}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <p>---------------------------------------</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
