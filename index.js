 async function getMenu(){
    const url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
    let responce = await fetch(url);
    let data = await responce.json();
    // console.log(data[0].name);
    data.forEach(obj => {
        console.log(obj.name," - ", obj.price);
    });
    // TakeOrder();
    let order = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order1: "Cheeseburger", order2: "Pizza", order3: "Grilled Cheese Sandwich"})
        },2500)
    });
    order.then(TakeOrder);
  }
  
  function TakeOrder(val){
    console.log(val);
    let prepare = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:false})
        },1500)
    });
    prepare.then(orderPrep);
  }
  
  
  function orderPrep(val){
    console.log(val);
    let pay = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:true})
        },1000)
    });
    pay.then(payOrder);
  }
  
  function payOrder(val){
    console.log(val);
    if(val.paid==true){
        thankyouFnc();
    }
  }
  
  function thankyouFnc(){
    alert("thankyou for eating with us today!");
  }
  getMenu();