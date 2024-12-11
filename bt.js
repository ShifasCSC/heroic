document.getElementById("btn").addEventListener("click",()=>{

//create an object for http req called xhr
    let xhr= new XMLHttpRequest();
    //open the api
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//get data from api
xhr.onload=()=>{
    console.log(xhr);
    if(xhr.status==200){
        data=JSON.parse(xhr.response)
        console.log(data.id);
        console.log(data.title);  
    }else{
        alert("invalid api")
    }
    
}
//network error
    xhr.onerror=()=>alert("network issue");
    //send xhr
    xhr.send();
})

