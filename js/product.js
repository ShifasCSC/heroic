let product;
async function fetchProduct(){
const urlParams=new URLSearchParams(window.location.search)
const id=urlParams.get("id");
const res=await fetch(`https://dummyjson.com/products/${id}`);
 product=await res.json();
console.log(product);

// document.getElementById("myimage").src=product.thumbnail
// document.getElementById("p4p").src=product.images
// document.getElementById("sub").innerHTML=` <div class="sub">

//                 <h1>${product.title}</h1>
//                     <p>
//                         <span class="price"><b>₹${product.price}</b></span>
//                         <span class="original-price"><b>₹${Math.ceil(product.price + product.discountPercentage/100 )}</b></span>
//                     </p>
//                     <span class="star">(4.3)</span>
//                     <span class="rating">11,832 Ratings & 664 Reviews</span>
//                 <span class="discount1">22% off</span>
//                 <h2>Available offers</h2>
//                 <ul class="offer">
//                     <li>Bank Offer 5% Cashback on My Cart Axis Bank Card</li>
//                     <li>Special Price Get extra ₹15000 off</li>
//                     <li>Freebie Spotify Premium - 12M at ₹699</li>
//                     <li>Get Extra 5% Off on Next purchase</li>
//                 </ul>
//                 <ul  id="ba">
//                     <li><a id="bt" href="./mycart.html">Add To Cart</a></li>
//                 </ul>
//             </div>
//             </div>`

// str=``
// product.images.map((image)=>{
//     str+=` <div class="my">
//                 <img class="myimage" src="${image}" alt="no image">
//             </div>
            
//            `
// })
// document.getElementById("card").innerHTML=str
}
fetchProduct()