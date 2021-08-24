/* Open modal */
let buttons = document.getElementsByTagName("button");
for ( i = 0; i < buttons.length; i += 1) {
    buttons[i].onclick = function() {
        if(this.id === "btn1"){
            document.querySelector('.bg-modal1').style.display = "flex";
        }else if(this.id === "btn2"){
            document.querySelector('.bg-modal2').style.display = "flex";
        }
    }
} 
/* Close modal */
let closes = document.getElementsByClassName("close");
let iframe = document.querySelectorAll('.video');
for ( i = 0; i < closes.length; i += 1) {
    closes[i].onclick = function() {
        if(this.id === "close1"){
            document.querySelector('.bg-modal1').style.display = "none";
            iframe[0].src = iframe.src;
        }else if(this.id === "close2"){
            document.querySelector('.bg-modal2').style.display = "none";
            iframe[1].src = iframe.src;
        }
    }
}