function showcart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  const summary = document.querySelector(".summary-subtotal");
  if (cart == null) {
    summary.style.display = "none";
    alert("Cart is empty!");
  } else {
    summary.style.display = "block";
    let bag = document.getElementById("bag");
    cart.forEach(function (el, i) {
      let product = document.createElement("div");
      product.setAttribute("class", "basket-product");
      product.innerHTML = `<div class="item">
            <div class="product-image">
              <img src="${el.img_1}">
            </div>
            <div class="product-details">
              <h1><strong><span class="item-quantity">1</span> ${el.name}</strong> ${el.detail}</h1>
            
            </div>
          </div>
          <div class="price">${el.price}</div>
          <div class="quantity">
            <input type="number" value="1" min="1" class="quantity-field">
          </div>
          <div class="subtotal">${el.price}</div>
          <div class="remove">
            <button id="rmbtn${i}" value="${i}">Remove</button>
          </div>`;
      bag.append(product);
    });
  }
}
showcart();

function openWin() {
  let total = document.getElementById("basket-total").innerText;
  localStorage.setItem("basket-total", JSON.stringify(total));

  let subtotal = document.getElementById("basket-subtotal").innerText;
  localStorage.setItem("basket-subtotal", JSON.stringify(subtotal));

  window.open("checkout.html");
}

/* Set values + misc */
var promoCode;
var promoPrice;
var shippingRate = 100;
var fadeTime = 300;

/* Assign actions */
$(".quantity input").change(function () {
  updateQuantity(this);
});

$(".remove button").click(function () {
  removeItem(this);
});

$(document).ready(function () {
  updateSumItems();
});

$(".promo-code-cta").click(function () {
  promoCode = $("#promo-code").val();

  if (promoCode == "MASAI" || promoCode == "masai") {
    //If promoPrice has no value, set it as 10 for the 10OFF promocode
    if (!promoPrice) {
      promoPrice = 500;
    } else if (promoCode) {
      promoPrice = promoPrice * 1;
    }
  } else if (promoCode != "") {
    alert("Invalid Promo Code");
    promoPrice = 0;
  }
  //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
  if (promoPrice) {
    $(".summary-promo").removeClass("hide");
    $(".promo-value").text(promoPrice.toFixed(2));
    recalculateCart(true);
  }
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  $(".basket-product").each(function () {
    subtotal += parseFloat($(this).children(".subtotal").text());
  });

  /* Calculate totals */
  var total = subtotal;
  var shipping = subtotal > 0 ? shippingRate : 0;
  var total = shipping + subtotal;
  //If there is a valid promoCode, and subtotal < 10 subtract from total
  var promoPrice = parseFloat($(".promo-value").text());
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert("Order must be more than £10 for Promo code to apply.");
      $(".summary-promo").addClass("hide");
    }
  }

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $(".total-value").fadeOut(fadeTime, function () {
      $("#basket-total").html(total.toFixed(2));
      $(".total-value").fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $(".final-value").fadeOut(fadeTime, function () {
      $("#basket-subtotal").html(subtotal.toFixed(2));
      $("#basket-shipping").html(shipping.toFixed(2));
      $("#basket-total").html(total.toFixed(2));

      if (total == 0) {
        $(".checkout-cta").fadeOut(fadeTime);
      } else {
        $(".checkout-cta").fadeIn(fadeTime);
      }
      $(".final-value").fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput) {
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children(".price").text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children(".subtotal").each(function () {
    $(this).fadeOut(fadeTime, function () {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });

  productRow.find(".item-quantity").text(quantity);
  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  $(".quantity input").each(function () {
    sumItems += parseInt($(this).val());
  });
  $(".total-items").text(sumItems);
}

/* Remove item from cart */
function removeItem(removeButton) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(removeButton.value, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function () {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  });
}
recalculateCart();
