import React, { useState } from 'react'
import './Contact.css'
import axios from "axios"

const Contact = () => {
 const [data,setData]=useState({name:"",phone:""})
 const [update,setUpdate]=useState({...data})

 const handleChange=(e)=>{
    setData(()=>({...data,[e.target.name]:e.target.value}))
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  const res=axios.post(`https://sheetdb.io/api/v1/75m0n0yfeeaus`,data).then((res=>{console.log(res.data);
  })).catch((error)=>{
    console.log(error);
  })
 }
 const handleEdit=()=>{
 const val=axios.delete(`https://sheetdb.io/api/v1/75m0n0yfeeaus/${id}`,data).then((val)=>{
  console.log(val);
  
 }).catch((error)=>{
  console.log(error);
  
 })
 }

  return (
    <>
        <div className="container">
        <h1 className='head'>Contact book</h1>
      <form className='form'>  
      <label>id:</label> <br />
      <input type="text" name='id' onChange={handleChange} placeholder='enter your id' />
            <label>Name:</label>
            <input type="text" name='name' onChange={handleChange} placeholder='enter your username' />
            <label>Mobile number:</label>
            <input type="text" name='phone' onChange={handleChange} placeholder='enter your number' />
        <button onClick={handleSubmit} color='green'>add</button>
        <button onClick={handleEdit}>delete</button>
        </form>  
        </div>
    
    </>
  )
}

export default Contact