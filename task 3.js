// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

// Order Form Handling
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let food = document.getElementById("food").value;
  let quantity = document.getElementById("quantity").value;

  if (name && email && food && quantity > 0) {
    alert(`✅ Order Confirmed!\n\nName: ${name}\nEmail: ${email}\nFood: ${food}\nQuantity: ${quantity}`);
    this.reset();
  } else {
    alert("⚠ Please fill all fields correctly!");
  }
});

