const restaurants = {
  Delhi: [
    "Karim's - Mughlai Cuisine",
    "Bukhara - Luxury Dining",
    "Saravana Bhavan - South Indian"
  ],
  Mumbai: [
    "Leopold Cafe - Historic Spot",
    "Trishna - Seafood Special",
    "The Bombay Canteen"
  ],
  Chennai: [
    "Murugan Idli Shop",
    "Annalakshmi - Veg Fine Dining",
    "Dakshin"
  ],
  Kolkata: [
    "6 Ballygunge Place",
    "Peter Cat",
    "Aaheli - Authentic Bengali"
  ]
};

function showRestaurants(city) {
  document.getElementById("city-container").style.display = "none";
  document.getElementById("restaurant-section").style.display = "block";
  document.getElementById("city-name").innerText = `Restaurants in ${city}`;
  
  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";
  restaurants[city].forEach((restaurant) => {
    const li = document.createElement("li");
    li.textContent = restaurant;
    list.appendChild(li);
  });
}

function goBack() {
  document.getElementById("restaurant-section").style.display = "none";
  document.getElementById("city-container").style.display = "flex";
}
