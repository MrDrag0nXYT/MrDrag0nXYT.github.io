function getSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

function toggleTheme() {
  const theme = document.documentElement.getAttribute("theme");
  const newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = getSystemTheme();

  if (savedTheme) {
    document.documentElement.setAttribute("theme", savedTheme);
  } else {
    document.documentElement.setAttribute("theme", systemTheme);
  }
});



// Переключение мобильного меню

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
