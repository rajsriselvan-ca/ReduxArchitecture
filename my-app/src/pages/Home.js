import React from 'react';
import '../styles/home.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlices';

const Home = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        emailId: "",
        age: "",
        phone: "",
        address: "",
    });

const handleChange = (event) => {
    const {name, value} = event.target;
    setFormInput((currentVal) => {
        return {
            ...currentVal,
            [name] : value
        }
    });
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    dispatch(setUser(formInput)); 
}

  return (
    <div>
    <h1>Home Page</h1>
    <form>
        <div className="form-group">
            <label>User Name</label>
            <input name="name" type="text" value={formInput.name} onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label>Email ID</label>
            <input  name="emailId" type="email" value={formInput.emailId} onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label>Age</label>
            <input  name="age" type="number" value={formInput.age} onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input  name="phone" type="text" value={formInput.phone} onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label>Address</label>
            <input name="address"  type="text"  value={formInput.address} onChange={handleChange}></input>
        </div>
        <div className="form-group">
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </form>
</div>
  );
};

export default Home;