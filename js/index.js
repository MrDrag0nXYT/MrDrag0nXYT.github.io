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

  if (navbar.style.visibility == 'visible'){
    navbar.style.visibility = "hidden";
    icon.src = 'img/icons/menu.svg'
    
  } else {
    navbar.style.visibility = "visible";
    icon.src = 'img/icons/close.svg'
  }
}
