const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"
  },
  {
    id: 3,
    name: "Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f"
  },
  {
    id: 4,
    name: "Headphones",
    price: 999,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 6,
    name: "T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  container.appendChild(card);
});

function addToCart(id) {
  const selectedProduct = products.find(p => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selectedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart ✅");
}