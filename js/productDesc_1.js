let items = JSON.parse(localStorage.getItem("items"));
let index = JSON.parse(localStorage.getItem("index"));

function showDesc() {
  let desc_1 = document.getElementById("c1-slider_1");
  let div_desc1 = document.createElement("div");

  let p_name = document.createElement("h1");
  p_name.innerHTML = items[index].name;

  let detail = document.createElement("p");
  detail.innerHTML = items[index].detail_1;

  let price = document.createElement("h3");
  price.innerHTML = items[index].price_detail;

  let actualPrice = document.createElement("h2");
  actualPrice.innerHTML = items[index].price;

  let innerDiv = document.createElement("div");

  let tax = document.createElement("span");
  tax.innerText = "Includes all taxes";
  innerDiv.append(tax);

  let color_div = document.getElementById("colorbox");

  let img_6 = document.createElement("img");
  img_6.src = items[index].img_5;
  color_div.append(img_6);

  div_desc1.append(p_name, detail, price, actualPrice, innerDiv);

  desc_1.append(div_desc1);
}
showDesc();

console.log(items[index].name);

function productDescc() {
  let img_1 = document.getElementById("img_1");
  let img_2 = document.getElementById("img_2");
  let img_3 = document.getElementById("img_3");
  let img_4 = document.getElementById("img_4");
  let img_5 = document.getElementById("img_5");

  img_1.src = items[index].img_1;
  img_2.src = items[index].img_2;
  img_3.src = items[index].img_3;
  img_4.src = items[index].img_4;
  img_5.src = items[index].img_5;

  let main_1 = document.getElementById("main_1");
  let main_2 = document.getElementById("main_2");
  let main_3 = document.getElementById("main_3");
  let main_4 = document.getElementById("main_4");
  let main_5 = document.getElementById("main_5");

  main_1.src = items[index].img_1;
  main_2.src = items[index].img_2;
  main_3.src = items[index].img_3;
  main_4.src = items[index].img_4;
  main_5.src = items[index].img_5;
}

productDescc();

function addToCart() {
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(items[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
