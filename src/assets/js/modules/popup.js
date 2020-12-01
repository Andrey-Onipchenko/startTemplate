const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelector) {
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.classList.add('modal-open')
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.classList.remove('modal-open')
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove('modal-open')
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.classList.add('modal-open')
        }, time)
    }
    bindModal('.popup__open', '.popup', '.popup .popup__close');
    showModalByTime('.popup', 3000)
};

export default modals;

