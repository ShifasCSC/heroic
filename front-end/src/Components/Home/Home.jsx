import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link,useNavigate } from 'react-router-dom'
import Api from '../Api'
function Home() {
    const [user,setUser]=useState([])
    const api=Api()

    useEffect(()=>{
 async function fetchData(){
    try{
const res=await axios.get(`${api}getusers`)
console.log(res);
if(res.status===200){
    setUser(res.data.undo)
}

    }catch(error){
        console.log(error);
        
    }
}
fetchData()
},[])

    const deleteUser=async(_id)=>{
        try{
const del=await axios.delete(`${api}deleteuser/${_id}`)
console.log(del.data);
// if(del.data.undo){
//     setUser(del.data.undo)
// }else{
//     return console.error("unexpected json formate:",del.data);
    
// }
setUser(user.filter((users)=>users._id!==_id))
if(del.status==201){
    alert(del.data.msg)
}

        }catch(error){
            console.log(error);
            
        }
    }

  return (
    <div className="form">
        <Link to={"/create"}>            <button>Add</button>        </Link>
        <table>
            <thead><tr>
                <th>Name</th>
                <th>phone</th>
                <th>email</th>
                <th>designation</th>
                <th>buttons</th>
                </tr></thead>
            <tbody>
                {user.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.designation}</td>
                        <td>
                           
                            <Link to={`/edit/${data._id}`}> <button>edit</button></Link>
                            <button onClick={()=>deleteUser(data._id)}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home