'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['Vegetable','Fish','Meat','Fruit','Rice','Bread','Soy','Cheese','Cake','Chocolate','Cookie','Olive','Egg','Beef','Tomato','Broccoli','Noodles','Potato','Beer','Shrimp','Mochi','Sandwich'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
