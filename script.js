if (window.innerWidth <= 480) {
    // alert("Внимание! Этот сайт может выглядеть неправильно на мобильных устройствах. Я в будущем это поправлю, если не забью на этот сайт. Спасибо за понимание");
}

mobileMenu.style.display = (mobileMenu.style.display === 'flex' || mobileMenu.style.display === '') ? 'none' : 'flex';

function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = (mobileMenu.style.display === 'flex' || mobileMenu.style.display === '') ? 'none' : 'flex';

    var menuIcon = document.getElementById('mobileMenuButtonIMG');

    if (menuIcon.src.endsWith('menu.svg')) {
        menuIcon.src = 'images/close.svg';
    } else {
        menuIcon.src = 'images/menu.svg';
    }
}