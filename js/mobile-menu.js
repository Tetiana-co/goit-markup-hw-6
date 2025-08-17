(() => {
    const refs = {
        // Додати атрибут mobile-menu-open на кнопку відкриття
        openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
        // Додати атрибут mobile-menu-close на кнопку закриття
        closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
        // Додати атрибут mobile-menu на меню
        mobileMenu: document.querySelector("[data-mobile-menu]"),
    };

    refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

    function toggleMobileMenu() {
        // is-open це клас який буде додаватися/забиратися на меню при натисканні на кнопки
        refs.mobileMenu.classList.toggle("is-open");
    }
})();