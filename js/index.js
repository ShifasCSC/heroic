async function getProducts(){
    try {
        const res=await fetch("https://dummyjson.com/products");
        const pro=await res.json();
        // console.log(products);
        str=``
        pro.products.map((product)=>{
            str+=` <div class="card">
        <img src="${product.thumbnail}"  alt="">
        <h3>${product.title}</h3>
        <P>
            <span class="real"><b>${product.price}</b></span>
            <span class="offer"><b>250$</b></span>
        </P>
        <h4>return:${product.shippingInformation}</h4>
    </div>`
        })
        document.getElementById("products").innerHTML=str;
        
        
    } catch (error) {
        console.log(error);  
    }
}
getProducts();




//search

document.getElementById("search").addEventListener("keyup",async(e)=>{
    console.log(e.target.value);
    try {
        const res=await fetch("https://dummyjson.com/products");
        const products=await res.json();
        str=``
        products.products.filter((product)=>product.title.toLowerCase().includes(e.target.value.toLowerCase())).map((product)=>{
            str+=` <div class="card">
        <img src="${product.thumbnail}" alt="no image">
        <h3>${product.title}</h3>
        <P>
            <span class="real"><b>$${product.price}</b></span>
            <span class="offer"><b>250$</b></span>
        </P>
        <h4>${product.shippingInformation}</h4>
    </div>`
        })
        document.getElementById("products").innerHTML=str;
    } catch (error) {
        console.log(error);
        
    }

    
})