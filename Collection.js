import { products } from "./product.js";

// Offer bar close
const offerBar = document.querySelector(".offer-bar");
document.getElementById("offer-close").addEventListener("click", () => {
  offerBar.style.display = "none";
});

// Side navbar toggle
const sideNavMenu = document.querySelector(".navbar-menu-toggle");
const sidenavbar = document.querySelector(".side-navbar");
sideNavMenu.addEventListener("click", () => {
  sidenavbar.style.marginLeft = "0px";
});
document.getElementById("side-navbar-close").addEventListener("click", () => {
  sidenavbar.style.marginLeft = "-60%";
});

// Render products
const container = document.querySelector(".products");
products.forEach((product) => {
  const createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = `
    <img style="width: 20vw;" src="img/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <span class="product-tags" style="display: none;">${product.tags.join(",")}</span>
  `;
  container.append(createItem);
});

// Filtering logic
let filterList = [];
const tags = document.querySelectorAll(".tag-filter");

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      filterList.push(value);
    } else {
      filterList = filterList.filter((item) => item !== value);
    }
    update();
  });
});

function update() {
  const productList = document.querySelectorAll(".product");
  productList.forEach((product) => {
    const tagText = product.querySelector(".product-tags").innerHTML;
    const tagArray = tagText.split(",");
    const match = filterList.some((tag) => tagArray.includes(tag));

    if (!match && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}