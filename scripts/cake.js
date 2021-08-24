/* Open modal */
let buttons = document.getElementsByTagName("button");
for ( i = 0; i < buttons.length; i += 1) {
    buttons[i].onclick = function() {
        if(this.id === "btn1"){
            document.querySelector('.bg-modal1').style.display = "flex";
        }else if(this.id === "btn2"){
            document.querySelector('.bg-modal2').style.display = "flex";
        }
        else if(this.id === "btn3"){
            document.querySelector('.bg-modal3').style.display = "flex";
        }
        else if(this.id === "btn4"){
            document.querySelector('.bg-modal4').style.display = "flex";
        }
        else if(this.id === "btn5"){
            document.querySelector('.bg-modal5').style.display = "flex";
        }
        else if(this.id === "btn6"){
            document.querySelector('.bg-modal6').style.display = "flex";
        }
        else if(this.id === "btn7"){
            document.querySelector('.bg-modal7').style.display = "flex";
        }
        else if(this.id === "btn8"){
            document.querySelector('.bg-modal8').style.display = "flex";
        }
        else if(this.id === "btn9"){
            document.querySelector('.bg-modal9').style.display = "flex";
        }
        else if(this.id === "btn10"){
            document.querySelector('.bg-modal10').style.display = "flex";
        }
        else if(this.id === "btn11"){
            document.querySelector('.bg-modal11').style.display = "flex";
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
            let videosrc1 = iframe1.getAttribute('src');
            iframe1.src = '';
            iframe1.src = videosrc1;
        }else if(this.id === "close2"){
            document.querySelector('.bg-modal2').style.display = "none";
            let iframe2 = document.getElementById('video2');
            let videosrc2 = iframe2.getAttribute('src');
            iframe2.src = '';
            iframe2.src = videosrc2;
        }
        else if(this.id === "close3"){
            document.querySelector('.bg-modal3').style.display = "none";
            let iframe3 = document.getElementById('video3');
            let videosrc3 = iframe3.getAttribute('src');
            iframe3.src = '';
            iframe3.src = videosrc3;
        }
        else if(this.id === "close4"){
            document.querySelector('.bg-modal4').style.display = "none";
            let iframe4 = document.getElementById('video4');
            let videosrc4 = iframe4.getAttribute('src');
            iframe4.src = '';
            iframe4.src = videosrc4;
        }
        else if(this.id === "close5"){
            document.querySelector('.bg-modal5').style.display = "none";
            let iframe5 = document.getElementById('video5');
            let videosrc5 = iframe5.getAttribute('src');
            iframe5.src = '';
            iframe5.src = videosrc5;
        }
        else if(this.id === "close6"){
            document.querySelector('.bg-modal6').style.display = "none";
            let iframe6 = document.getElementById('video6');
            let videosrc6 = iframe6.getAttribute('src');
            iframe6.src = '';
            iframe6.src = videosrc6;
        }
        else if(this.id === "close7"){
            document.querySelector('.bg-modal7').style.display = "none";
            let iframe7 = document.getElementById('video7');
            let videosrc7 = iframe7.getAttribute('src');
            iframe7.src = '';
            iframe7.src = videosrc7;
        }
        else if(this.id === "close8"){
            document.querySelector('.bg-modal8').style.display = "none";
            let iframe8 = document.getElementById('video8');
            let videosrc8 = iframe8.getAttribute('src');
            iframe8.src = '';
            iframe8.src = videosrc8;
        }
        else if(this.id === "close9"){
            document.querySelector('.bg-modal9').style.display = "none";
            let iframe9 = document.getElementById('video9');
            let videosrc9 = iframe9.getAttribute('src');
            iframe9.src = '';
            iframe9.src = videosrc9;
        }
        else if(this.id === "close10"){
            document.querySelector('.bg-modal10').style.display = "none";
            let iframe10 = document.getElementById('video10');
            let videosrc10 = iframe10.getAttribute('src');
            iframe10.src = '';
            iframe10.src = videosrc10;
        }
        else if(this.id === "close3"){
            document.querySelector('.bg-modal11').style.display = "none";
            let iframe11 = document.getElementById('video11');
            let videosrc11 = iframe11.getAttribute('src');
            iframe11.src = '';
            iframe11.src = videosrc11;
        }
    }
}