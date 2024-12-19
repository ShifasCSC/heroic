async function fetchProduct(){
    try{

        const urlparams=new URLSearchParams(window.location.search)
        const id=urlparams.get("id");
        const res=await fetch("https://dummyjson.com/products")
        const product=await res.json();
        document.getElementById("img").src=product.thumbnail
        str=``
        products.images.map((image)=>{
            str+=`  <div class="photo" id="img">
            <img src="${image}" alt="no image">
            </div>`
            
            
        })
        document.getElementById("card").innerHTML=str
    }catch(error){
        console.log(error);
        
    }
}
fetchProduct()