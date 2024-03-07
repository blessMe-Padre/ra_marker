export const initNavModal = () => {
    const btns = document.querySelectorAll('.header__lk-button');
    const modals = document.querySelectorAll('.header__modal-wrapper');

    btns.forEach((btn) => {
        const modal = btn.nextElementSibling;

        btn.addEventListener('click', function () {

            if (modal.classList.contains('is-active')) {
                modal.classList.remove('is-active');
            } else {
                modals.forEach((item) => {
                    item.classList.remove('is-active');
                });
                modal.classList.toggle('is-active');
            }
        });
    });
}
