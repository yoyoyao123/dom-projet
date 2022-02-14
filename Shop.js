//const articles=[//
    //{//
       // id :1,//
        //name:"tee-shirt",//
        //quantity:1,//
       // image:"hngjhj",//
       // price : 2500,//
    //},//

  //  {//
      //  id : 2,
       // name :"jupe",
       // quantity :1,
       // image:"jbbjhj",//
       // price :5000,

   // },

    //{
      //  id :3,
       // name : "jean",
       // quantity :1,
        //image:"ghkkuihil",//
       // price :10000,

   // },
   // {
      // id :4,
       // name : "robe",
       // quantity :1,
        //image:"ghkkuihil",//
       // price :3000,    
  
    //}

//];
    const increaseBtn = document.querySelector('#increment');
    const decreaseBtn = document.querySelector('#decrement');

    const quantity = document.getElementById("quantity1");
    let num = 0;

    increaseBtn.addEventListener('click',function increaseQuantity (even){
            num += 1;
            quantity.innerHTML = num;
    })
    decreaseBtn.addEventListener('click',function decreaseQuantity (even){
        num -= 1;
        if(num=== 0){
            decreaseBtn.disabled = true;
        }
        else decreaseBtn.disabled = false;
        quantity.innerHTML = num;
    })