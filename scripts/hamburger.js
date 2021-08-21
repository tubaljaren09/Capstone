let openBtn = document.querySelector('.openbtn');
let closeBtn = document.querySelector('.closebtn');

openBtn.addEventListener('click', () => {
    document.querySelector('.menu-container').style.width = "250px";
});

closeBtn.addEventListener('click', () => {
    document.querySelector('.menu-container').style.width = "0";
});