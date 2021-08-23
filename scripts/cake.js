let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = "flex";
});

let close = document.querySelector('.close');
let iframe = document.getElementById('video');
close.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = "none";
    iframe.src = iframe.src;
});