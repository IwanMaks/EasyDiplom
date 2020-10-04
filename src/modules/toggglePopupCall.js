const toggglePopupCall = () => {
    const popupCall = document.querySelector('.popup-call');

    document.body.addEventListener('click', event => {
        const target = event.target;
        event.preventDefault();

        if (target.classList.contains('call-btn')) {
            popupCall.style.display = 'block';
        }

        if (target.classList.contains('popup-close') || (!target.closest('.popup-content') && !target.classList.contains('call-btn'))) {
            popupCall.style.display = 'none';
        }
    });
};

export default toggglePopupCall;
