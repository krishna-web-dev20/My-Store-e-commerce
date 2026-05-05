let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

// 🔹 Display Cart Items
function displayCart() {
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<h3>Your cart is empty</h3>";
    totalElement.innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    container.appendChild(div);
  });

  updateTotal();
}

// 🔹 Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(); // refresh UI
}

// 🔹 Update Total
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalElement.innerText = "Total: ₹" + total;
}

// 🔹 Initial Call
displayCart();