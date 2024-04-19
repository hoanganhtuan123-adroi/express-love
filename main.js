"use strict";
const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".modal__btn");
const video = document.querySelector(".video");
let count = 0;

document.addEventListener("mousemove", () => {
    setTimeout(() => {
        PlayMusic();
    }, 2000);
});

btnNo.addEventListener("mouseover", handleEventMouseover);

btnYes.addEventListener("click", () => {
    modal.classList.remove("remove");
});

btnModal.addEventListener("click", () => {
    modal.classList.add("remove");
    btnYes.style.scale = 1;
});

function handleEventMouseover() {
    count++;
    let scaleNow = 1;
    let scaleEl = scaleNow - count / 10;
    let x = Math.floor(Math.random() * (window.innerWidth - 150));
    let y = Math.floor(Math.random() * (window.innerHeight - 150));
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.scale = scaleEl;
    if ((btnNo.style.scale = scaleEl === 0.5)) btnNo.style.display = "none";
    btnYes.style.scale = count;
}

function PlayMusic() {
    video.play();
}
