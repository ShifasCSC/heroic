async function getProduct(){
    try{
        const res=await fetch(`https://dummyjson.com/products`)
        const pro=await res.json();
        str=``
        pro.products.map((product)=>{
            str+=`<a href="./product.html?id=${product.id}">
            <div class="card">
            <img src="${product.thumbnail}" alt="no image">
            <h3><b>${product.title.length>=10?`${product.title.substring(0,9)}...`:product.title}</b></h3>
           <p> <span class="discount">$${Math.ceil(product.price + product.discountPercentage/100 )}</span>
            <span><b>price:$${Math.floor(product.price)}</b></span></p>
            <span class="rating">${product.rating}<i class="fa-solid fa-star"></i></span>
            <span class="offer"><b>${product.discountPercentage}%OFF</b></span>
            <p>
                
            </p>
        </div>
                </a>
        `
        })
      document.getElementById("prod").innerHTML=str
    }catch(error){
         console.log(error);
         
    }

}
getProduct()

// search

