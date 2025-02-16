import axios from 'axios';
import React, { useState } from 'react'
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [add,setAdd]=useState({email:"",phone:"",designation:"",username:""})
  const api=Api()
  const navigate=useNavigate()
  const addData=async(e)=>{
    e.preventDefault()
    try{
const res=await axios.post(`${api}setuser`,add)
console.log(res);
if(res.status===201){
  alert(res.data.msg)
  setAdd(res.data)
  navigate("/")
}
}catch(error){
  alert(error.response.data.msg)
}
}
const handlebutton=(e)=>{
  setAdd((pre)=>({...pre,[e.target.name]:e.target.value}))
  console.log(add);
  
}
  return (
    <div className="form">
       <table>
        <tbody>
          <tr>
            <td><label htmlFor="username">username:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='username' onChange={handlebutton}   /></td>
          </tr>
          <tr>
            <td><label htmlFor="email">email:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='email' onChange={handlebutton} /></td>
          </tr>
          <tr>
            <td><label htmlFor="phone">phone:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='phone' onChange={handlebutton} /></td>
          </tr>
          <tr>
            <td><label htmlFor="designation">designation:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='designation' onChange={handlebutton} /></td>
          </tr>
          <tr>
            <td><button onClick={addData}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Create