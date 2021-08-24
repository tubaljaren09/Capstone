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
for ( i = 0; i < closes.length; i += 1) {
    closes[i].onclick = function() {
        if(this.id === "close1"){
            document.querySelector('.bg-modal1').style.display = "none";
            let iframe1 = document.getElementById('video1');
            let videosrc = iframe1.getAttribute('src');
            iframe1.src = '';
            iframe1.src = videosrc;
        }else if(this.id === "close2"){
            document.querySelector('.bg-modal2').style.display = "none";
            let iframe2 = document.getElementById('video2');
            let videosrc = iframe2.getAttribute('src');
            iframe2.src = '';
            iframe2.src = videosrc;
        }
    }
}