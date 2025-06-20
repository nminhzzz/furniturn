document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
        // Thay đổi avatar
        const oldAvatar = document.querySelector(".header__avatar");
        if (oldAvatar) {
            oldAvatar.outerHTML = `<img class="header__avatar" src="assets/image/avatar.jpg" alt="${user.username}">`;
        }

        // Thay đổi tên hiển thị
        const header__name = document.querySelector(".header__name");
        if (header__name) {
            header__name.innerText = user.username;
        }

        // Gán sự kiện click vào avatar mới
        // Vì outerHTML đã thay thẻ mới, cần query lại sau khi thay
        setTimeout(() => {
            const newAvatar = document.querySelector(".header__avatar");
            if (newAvatar) {
                newAvatar.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href = "signin.html";
                });
            }
        }, 0);
    }
});
