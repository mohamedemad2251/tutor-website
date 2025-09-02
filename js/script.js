document.addEventListener('DOMContentLoaded', function () {

    const mobile_menu_toggle = document.querySelector('#mobile-menu-toggle-button');
    const mobile_canvas = document.querySelector('.mobile-canvas');

    const header = document.querySelector('.header');

    mobile_menu_toggle.addEventListener('click', function () {
        mobile_canvas.classList.toggle('active');

        const list = document.querySelector('.mobile-menu-list');
        console.log(list);
        list.addEventListener('click', function () {
            mobile_canvas.classList.remove('active');
        })
    })

    document.addEventListener('scroll', function () {
        // console.log(window.scrollY);
        if (window.scrollY === 0) {
            header.classList.remove('scroll');
        }
        else {
            header.classList.add('scroll')
        }
    })
})