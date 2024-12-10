
let personDetails=[]
document.getElementById("sub").addEventListener("click",(e)=>{
    e.preventDefault()
    const name=document.getElementById("name").value
    const age=document.getElementById("age").value

    data={name:name,age:age}
    personDetails.push(data)    
    data.id=personDetails.indexOf(data)
    console.log(personDetails);
      
    const user=JSON.stringify(data)
    localStorage.setItem(personDetails.indexOf(data),user)
    console.log(data);

    
})

function remItem(){
    localStorage.removeItem(document.getElementById("remove").value)
    
}

function getItem(){
    g=localStorage.getItem(document.getElementById("remove").value);
    document.getElementById("getitm").textContent=g
    
}