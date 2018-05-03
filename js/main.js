"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    let buttonOpenInbox = document.getElementById("arrow-chat"); //button for mobbile inbox
    let counterInbox = true; //open or close inbox
    let chatSection = document.getElementById("chat-section"); //whole chat section
    let chatConversation = document.getElementsByClassName("chat-conversation"); // all conversation boxes


    //  open and close inbox on mobile

    buttonOpenInbox.addEventListener("click", function () {
        if (counterInbox) {
            buttonOpenInbox.innerHTML = "INBOX &#8743;";
            chatSection.style.left = "0px";
        } else {
            buttonOpenInbox.innerHTML = "INBOX &#8744;";
            chatSection.style.left = (chatSection.clientWidth * (-1)) + "px";
        }
        counterInbox = !counterInbox;
    })


    //    hover animation of conversation box high

    for (let i = 0; i < chatConversation.length; i++) {
        chatConversation[i].addEventListener("mouseover", function () {
            for (let j = 0; j < chatConversation.length; j++) {
                chatConversation[j].style.height = ((chatConversation[j].parentElement.clientHeight - ((chatConversation.length - 1) * 8) - 8 - 20) / chatConversation.length) + "px";
            }

            this.style.height = ((this.parentElement.clientHeight - ((chatConversation.length - 1) * 8) - 8) / chatConversation.length) + 16 + "px";
        })
    }

    chatConversation[0].parentElement.addEventListener("mouseout", function () {
        for (let j = 0; j < chatConversation.length; j++) {
            const height = ((chatConversation[j].parentElement.clientHeight - ((chatConversation.length - 1) * 8) - 8) / chatConversation.length);
            chatConversation[j].style.height = ((height > 100) ? height : 100) + "px";;
        }
    })



    //    show actual time on calendar


    const now = new Date();
    let actualDate = document.createElement("span");
    let date;
    actualDate.classList.add("line");
    if (4 > 5 || 20 >= 21 || 20 < 7) {
        console.log("poza tabela");
    } else {
        const dateHour = document.querySelectorAll('[data-hour="' + 14 + '"]')
        for (let i = 0; i < dateHour.length; i++) {
            date = dateHour[i].querySelectorAll('[data-day="' + 2 + '"]');
            actualDate.style.height = (15 / 60) * date[0].clientHeight + 'px';
            date[0].appendChild(actualDate);

        }
    }

    //      live version
    
    //    if (now.getDay() > 5 || now.getHours() >= 21 || now.getHours() < 7 ){
    //        console.log("poza tabela");
    //    }
    //    else{
    //        const dateHour = document.querySelectorAll('[data-hour="' + now.getHours() + '"]')
    //        for (let i = 0; i < dateHour.length; i++){
    //            date = dateHour[i].querySelectorAll('[data-day="' + now.getDay() + '"]');
    //            actualDate.style.height = (15 / 60) * date[0].clientHeight + 'px';
    //            date[0].appendChild(actualDate);
    //            
    //        }
    //    }

    
    //      max string length depending on box size in textboxes
    
    let textboxes = document.getElementsByClassName("textbox")
    let height = textboxes[0].parentElement.parentElement.clientHeight;
    let width = textboxes[0].parentElement.parentElement.clientWidth;
    let maxCharacters = ((height - 50) / 20) * ((width - 15) / 10);

    for (let i = 0; i < chatConversation.length; i++) {
        if (textboxes[i].innerText.length > maxCharacters) {
            textboxes[i].innerText = textboxes[i].innerText.substr(0, maxCharacters) + " ...";
        }
    }
    
    let checkbox = document.getElementsByTagName("label")[0];
    let circle = document.getElementsByClassName("circle")[0];
    let ifChecked = true;
    checkbox.addEventListener("click", function () {
        if (ifChecked) {
            circle.style.left = this.clientWidth - 25 + "px";
        } else {
            circle.style.left = "25px";
        }
        ifChecked = !ifChecked;
    })
});
