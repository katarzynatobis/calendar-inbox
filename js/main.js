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



    //      show actual time on calendar

    //      highlight the day

    const now = new Date();
    let actualDate = document.createElement("span");
    let date;
    actualDate.classList.add("line");

    if (now.getDay() < 6) {
        console.log(now.getDay());
        let today = document.querySelectorAll('[data-day="' + now.getDay() + '"]');
        for (let i = 0; i < today.length; i++) {
            today[i].classList.add('today');
        }
    }

    //      add line with actual time

    if (now.getDay() > 5 || now.getHours() >= 21 || now.getHours() < 7) {
        console.log("poza tabela");
    } else {
        let actualDate = document.createElement("span");
        let date;
        actualDate.classList.add("line");
        const dateHour = document.querySelectorAll('[data-hour="' + now.getHours() + '"]')
        for (let i = 0; i < dateHour.length; i++) {
            date = dateHour[i].querySelectorAll('[data-day="' + now.getDay() + '"]');
            actualDate.style.height = (now.getMinutes() / 60) * date[0].clientHeight + 'px';
            date[0].appendChild(actualDate);

        }
    }


    //      max string length depending on box size in textboxes

    let textboxes = document.getElementsByClassName("textbox");
    let textboxesImportant = document.getElementsByClassName("message-important");
    let height = textboxes[0].parentElement.parentElement.clientHeight;
    let width = textboxes[0].parentElement.parentElement.clientWidth;
    let maxCharacters = ((height - 50) / 20) * ((width - 15) / 10);
    let maxCharactersImportant = ((( width - 15)/ 10) -1) * ((height - 50) / 20);

    for (let i = 0; i < textboxes.length; i++) {
        if (textboxes[i].innerText.length > maxCharacters) {
            textboxes[i].innerText = textboxes[i].innerText.substr(0, maxCharacters) + " ...";
        }
    }
    
    for (let i = 0; i < textboxesImportant.length; i++) {
        if (textboxesImportant[i].innerText.length > maxCharactersImportant) {
            textboxesImportant[i].innerText = textboxesImportant[i].innerText.substr(0, maxCharactersImportant) + " ...";
        }
    }
    
    


    // checkbox circle position - JS bacause IE doesn't support transitions with calc

    let checkbox = document.getElementsByTagName("label")[0];
    let circle = document.getElementsByClassName("circle")[0];
    let ifChecked = false;

    checkbox.addEventListener("click", function () {
        if (ifChecked) {
            circle.style.left = this.clientWidth - 3 + "px";
        } else {
            circle.style.left = "3px";
        }
        ifChecked = !ifChecked;
    })
});
