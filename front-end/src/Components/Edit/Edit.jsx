import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../Api'

function Edit() {
    const {_id}=useParams()
    const [user,setUser]=useState({username:"",email:"",phone:"",designation:""})
    const [edit,setEdit]=useState(false)
    const navigate=useNavigate()
    const api=Api()

    useEffect(()=>{
        async function fetchData(){
           try{
       const res=await axios.get(`${api}getuser/${_id}`)
       console.log(res);
       if(res.status==200){
           setUser(res.data.undo)
        alert(res.data.msg)
       }
       
           }catch(error){
               console.log(error.response);
               
           }
        }
        fetchData()
    },[])

    const handleChange=(e)=>{
 setUser((pre)=>({...pre,[e.target.name]:e.target.value}))
 console.log(user);
 
    }
    const handleEdit=async()=>{
try{
const data=await axios.put(`${api}edituser/${_id}`,user)
console.log(data);
if (data.status===200){
  alert(data.data.msg)
  setEdit(false)
  navigate("/")
}

}catch(error){
  console.log(error);
  
}
    }
  return (
    <div className="main">
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="username">username:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='username' onChange={handleChange} value={user.username} readOnly={!edit}  /></td>
          </tr>
          <tr>
            <td><label htmlFor="email">email:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='email' onChange={handleChange} value={user.email} readOnly={!edit} /></td>
          </tr>
          <tr>
            <td><label htmlFor="phone">phone:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='phone' onChange={handleChange} value={user.phone} readOnly={!edit} /></td>
          </tr>
          <tr>
            <td><label htmlFor="designation">designation:</label></td>
          </tr>
          <tr>
            <td><input type="text" name='designation' onChange={handleChange} value={user.designation} readOnly={!edit} /></td>
          </tr>
          <tr>
            <td><button onClick={edit?handleEdit:()=>setEdit(true)}>{edit?"save":"edit"}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Edit