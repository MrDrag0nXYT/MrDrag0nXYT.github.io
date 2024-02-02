function toggleTheme() {
  if (document.documentElement.hasAttribute("theme")) {
    document.documentElement.removeAttribute("theme");
  } else {
    document.documentElement.setAttribute("theme", "dark");
  }
}

function toggleMobileMenu() {
  const navbar = document.getElementById("navbar");
  const icon = document.getElementById("toggle-mobile-menu-icon");

  if (navbar.style.display == 'flex'){
    navbar.style.display = "none";
    icon.src = 'img/icons/menu.svg'
    
  } else {
    navbar.style.display = "flex";
    icon.src = 'img/icons/close.svg'
  }
}
