let href = location.search
let url = new URLSearchParams(href)
let end = url.get("id")
let indexslider = 0;
let slider = ['2.jpg' , '3.jpg','4.jpg','5.jpg','6.jpg']

    
    
    let product = [
    {name:"گلرنگ" , price:10 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:1},
    {name:"جام" , price:20 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:2},
    {name:"پرسیل" , price:30 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:3},
    {name:"پریل" , price:40 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:4},
    {name:"فانتا" , price:50 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:5},
    {name:"المان" , price:60 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:6},
    {name:"خودم" , price:70 , fliter:10 , img:slider[indexslider] ,lorem : "توضیحات بیشتر...........................................", id:7},
]
let card = document.querySelector(".row")

let index = product.find(product =>{
    if(end == product.id){
        return product
    }
})


card.innerHTML =`
<div class='product--green'>
<div class='product_inner'>
<img class="img" src=${index.img} alt="">
<p id="p">${index.name} </p>
<select name="" id="">
<option value="">انتخاب تعداد</option>
<option id="t10"  value="10">10  20</option>
<option id="t20"  value="20">20 30 </option>s
<option id="t30"  value="30">30 40 </option>
<option  id="t40" value="40">40 50 </option>


</select>
<p id="p" class = 'price'></p>
<p id="p">${index.lorem}</p>
<button  onclick="buy(${index.id})">خرید</button>
</div>
<div class='product_overlay'>
<h2>Added to basket</h2>
<i class='fa fa-check'></i>
</div>
</div>
`
let price = document.querySelector('.price')

let all = document.querySelector("select")
let img = document.querySelector(".img")


setInterval(()=>{
    if( indexslider == 4 ){
        indexslider = 0
    }
    indexslider++;
img.setAttribute("src" , slider[indexslider])

},2000)

all.addEventListener("change" ,()=>{
    if(all.value == 10){
          price.innerHTML = "قیمت هر عدد 10 تومن"
        }
        if(all.value == 20){
            price.innerHTML = "قیمت هر عدد 20 تومن"
        }
        if(all.value == 30){
            price.innerHTML = "قیمت هر عدد 30 تومن"
            
        }
        if(all.value == 40){
            price.innerHTML = "قیمت هر عدد 40 تومن"
        }
        if(all.value == ""){
            price.innerHTML =""
        }
        
        
        
    })
    
    
    
function buy(){
    location.href = 'tel:+989219540027'
}