"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
    
    let buttonOpenInbox = document.getElementById("arrow-chat");
    let counterInbox = true;
    const chatSection = document.getElementById("chat-section");
    
    buttonOpenInbox.addEventListener("click", function(){
        if (counterInbox){
            buttonOpenInbox.innerHTML = "INBOX &#8743;";
            chatSection.style.left = "0px";
            counterInbox = !counterInbox;
        }
        else{
            buttonOpenInbox.innerHTML = "INBOX &#8744;";
            chatSection.style.left = "-404px";
            counterInbox = !counterInbox;
        }
    })
});
