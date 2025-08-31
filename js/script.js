document.addEventListener('DOMContentLoaded', function () {

    const mobile_menu_toggle = document.querySelector('#mobile-menu-toggle-button');
    const mobile_canvas = document.querySelector('.mobile-canvas');
    mobile_menu_toggle.addEventListener('click', function () {
        mobile_canvas.classList.toggle('active');
    })
})