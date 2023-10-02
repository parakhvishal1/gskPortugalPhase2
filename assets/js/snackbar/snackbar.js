const snack = document.querySelector('#snack');
const snackbar = document.querySelector('.snackbar');
const heading = document.querySelector('.snackbar-text-heading');
const closeBtn = document.querySelector('.snackbar-close-btn');

const showSnackbar = (autohide, txt) => {
    log({ "first": "data" });
    if (snackbar.classList.value.includes("isShown")) {
        clearTimeout(window.snackbarTimer);
        snackbar.classList.remove('isShown');
        heading.textContent = "";
    }
    snackbar.classList.add('isShown');
    if (txt) {
        heading.textContent = txt;
    }

    if (autohide) {
        window.snackbarTimer = setTimeout(hideSnackbar, 5000);
    }
};

const hideSnackbar = () => {
    snackbar.classList.remove('isShown');
};

closeBtn.addEventListener('click', hideSnackbar);