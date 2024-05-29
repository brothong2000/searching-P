const menuProducts = [
  {category:"mac",title:"iMac 2017",price:"1200$",imageSrc:"./img/img 2.png"},
  {category:"msi",title:"Msi 2018",price:"1000$",imageSrc:"./img/img 3.png"},
  {category:"msi",title:"Msi 2019",price:"1700$",imageSrc:"./img/img 4.png"},
  {category:"mac",title:"iMac 2020",price:"1200$",imageSrc:"./img/img 6.png"},
  {category:"dell",title:"Dell 2017",price:"1500$",imageSrc:"./img/img 7.png"},
  {category:"mac",title:"iMac 2021",price:"900$",imageSrc:"./img/img 8.png"},
  {category:"asus",title:"Asus 2022",price:"700$",imageSrc:"./img/img 9.png"},
  {category:"dell",title:"Dell 2022",price:"1250$",imageSrc:"./img/img 10.png"},
  {category:"dell",title:"Dell 2018",price:"880$",imageSrc:"./img/img 11.png"},
  {category:"asus",title:"Asus 2023",price:"1100$",imageSrc:"./img/img 12.png"},
  {category:"msi",title:"Msi 2017",price:"2000$",imageSrc:"./img/img 13.png"},
  {category:"msi",title:"Msi 2023",price:"1200$",imageSrc:"./img/img 15.png"},
  {category:"asus",title:"Asus 2018",price:"690$",imageSrc:"./img/img 16.png"},
  {category:"dell",title:"Dell 2016",price:"999$",imageSrc:"./img/img 17.png"},
  {category:"asus",title:"Asus 2016",price:"885$",imageSrc:"./img/img 18.png"},
  {category:"mac",title:"iMac 2024",price:"1200$",imageSrc:"./img/img 19.png"},
]
const getProducts = document.querySelector(".menu-wrapper");
const allBtn = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-contaiener");

window.addEventListener("DOMContentLoaded",() => {
  storProducts(menuProducts);
});
// --button--
btnContainer.addEventListener("click",(e)=>{
 const btnId = e.target.dataset.id;
allBtn.forEach((bt)=>{
  if(btnId){
    bt.classList.remove("active");
    e.target.classList.add("active");
  }
})
})
//--searching--
allBtn.forEach((bt)=>{
  bt.addEventListener("click",(e)=>{
    const id = e.currentTarget.dataset.id;
    const filterMenu = menuProducts.filter((item)=>{
      return item.category == id;
    })
    if(id=="all"){
      storProducts(menuProducts);
    }
    else{
      storProducts(filterMenu);
    }
  })
})
//--storProducts
const storProducts =( arrayProducts)=>{
  const displayProduct = arrayProducts.map((p)=>{
    return  ` <article>
    <img src="${p.imageSrc}" alt="${p.title}" class="img">
    <h3 class="card-heading">${p.title}</h3>
    <span class="price">${p.price}</span>
    </article>`;
    }).join("");
    getProducts.innerHTML=displayProduct;
  }
