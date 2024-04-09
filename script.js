const menuIcon = document.querySelector(".navbar-container .menu-icon");
const mobileMenus = document.querySelector(".mobile-menus");

// Function to close the mobile menu
const closeMobileMenu = () => {
  mobileMenus.classList.remove("active");
};

// Toggle mobile menu when menu icon is clicked
menuIcon.addEventListener("click", () => {
  mobileMenus.classList.toggle("active");
});

// Close mobile menu when user clicks outside of it
document.addEventListener("click", (event) => {
  // Check if the clicked element is not within the mobile menu or menu icon
  if (!mobileMenus.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMobileMenu(); // Close the mobile menu
  }
});
