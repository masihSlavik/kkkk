// $(function() {

//   "use strict"
  
//   var init = "No items yet!";
//   var counter = 0;

//   // Initial Cart
//   $(".counter").html(init);
  
//   // Add Items To Basket
//   function addToBasket() {
//     counter++;
//     $(".counter").html(counter).animate({
//       'opacity' : '0'
//     },300, function() {
//       $(".counter").delay(300).animate({
//         'opacity' : '1'
//       })
//     })
//   }

//   // Add To Basket Animation
//   $("button").on("click", function() {
//     addToBasket(); $(this).parent().parent().find(".product_overlay").css({
//       'transform': ' translateY(0px)',
//       'opacity': '1',
//       'transition': 'all ease-in-out .45s'
//     }).delay(1500).queue(function() {
//       $(this).css({
//         'transform': 'translateY(-500px)',
//         'opacity': '0',
//         'transition': 'all ease-in-out .45s'
//       }).dequeue();
//     });
//   });
// });
let product = [
  {name:"گلرنگ" , price:10 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:1},
  {name:"جام" , price:20 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:2},
  {name:"پرسیل" , price:30 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:3},
  {name:"پریل" , price:40 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:4},
  {name:"فانتا" , price:50 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:5},
  {name:"المان" , price:60 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:6},
  {name:"خودم" , price:70 , fliter:10 , img:"1.png" ,lorem : "توضیحات کم تر...........................................", id:7},
]
let card = document.querySelector(".row")

product.forEach(index =>{
card.innerHTML +=`
<div class='product--green'>
<div class='product_inner'>
<img src=${index.img} alt="">
  <p id="p">${index.name} </p>
  <p id="p">${index.lorem}</p>
  <button  onclick="buy(${index.id})">اطلاعات بیشتر</button>
</div>
<div class='product_overlay'>
  <h2>Added to basket</h2>
  <i class='fa fa-check'></i>
</div>
</div>
`


})

function buy(id){
  location.href = "buy.html?id="+id
}