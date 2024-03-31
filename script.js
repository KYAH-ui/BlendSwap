// Sample data for demonstration
const items = [
    { id: 1, name: "Vintage Jacket", price: 20 },
    { id: 2, name: "Retro Sunglasses", price: 10 },
    { id: 3, name: "Denim Jeans", price: 15 }
];

// Function to display items on the webpage
function displayItems() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = ""; // Clear existing items

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        itemList.appendChild(itemElement);
    });
}

// Function to add item to cart (just a placeholder)
function addToCart(itemId) {
    // alert(Item with ID ${itemId} added to cart.);
}

// Display items when the page loads
window.onload = displayItems;