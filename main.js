"use strict";

const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".modal__btn");
const video = document.querySelector(".video");
let count = 0;

function PlayMusic() {
    video.play().catch((error) => {
        console.log("Autoplay blocked:", error);
        // Thử lại khi có tương tác người dùng
        document.addEventListener(
            "click",
            () => {
                video.play();
            },
            { once: true }
        );
    });
}

// Thử phát nhạc ngay khi tải trang
PlayMusic();

btnNo.addEventListener("mouseover", handleEventMouseover);

btnYes.addEventListener("click", () => {
    modal.classList.remove("remove");
});

btnModal.addEventListener("click", () => {
    modal.classList.add("remove");
    btnYes.style.transform = "scale(1)"; // Đặt lại kích thước nút Yes
});

function handleEventMouseover() {
    count++;
    let scaleEl = Math.max(0.5, 1 - count / 10); // Giới hạn thu nhỏ tối thiểu 0.5
    let maxX = window.innerWidth - btnNo.offsetWidth; // Giới hạn x bằng chiều rộng màn hình trừ chiều rộng nút
    let maxY = window.innerHeight - btnNo.offsetHeight; // Giới hạn y bằng chiều cao màn hình trừ chiều cao nút
    let x = Math.floor(Math.random() * maxX); // Vị trí ngẫu nhiên trong giới hạn x
    let y = Math.floor(Math.random() * maxY); // Vị trí ngẫu nhiên trong giới hạn y

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.transform = `scale(${scaleEl})`; // Sử dụng transform để thay đổi kích thước
    if (scaleEl <= 0.5) {
        btnNo.style.display = "none";
    }

    let yesScale = Math.min(2, 1 + count / 10); // Giới hạn kích thước nút Yes
    btnYes.style.transform = `scale(${yesScale})`;
}

window.addEventListener("resize", () => {
    let maxX = window.innerWidth - btnNo.offsetWidth;
    let maxY = window.innerHeight - btnNo.offsetHeight;
    btnNo.style.left = `${Math.min(parseInt(btnNo.style.left) || 0, maxX)}px`;
    btnNo.style.top = `${Math.min(parseInt(btnNo.style.top) || 0, maxY)}px`;
});
