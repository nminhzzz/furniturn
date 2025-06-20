document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const header__name = document.querySelector(".header__name");

    if (user) {
        // Thay đổi avatar
        const oldAvatar = document.querySelector(".header__avatar");
        if (oldAvatar) {
            oldAvatar.outerHTML = `<img class="header__avatar" src="assets/image/avatar.jpg" alt="${user.username}">`;
        }

        // Thay đổi tên hiển thị thành "Đăng xuất"
        if (header__name) {
            header__name.innerText = "Đăng xuất";
        }

        // Gán sự kiện click vào avatar mới
        setTimeout(() => {
            const newAvatar = document.querySelector(".header__avatar");
            if (newAvatar) {
                newAvatar.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href = "signin.html";
                });
            }
        }, 0);

        // Gán sự kiện click vào "Đăng xuất"
        if (header__name) {
            header__name.addEventListener("click", () => {
                localStorage.removeItem("currentUser");
                window.location.reload(); // reload lại để trở về giao diện chưa đăng nhập
            });
        }
    } else {
        // Nếu chưa đăng nhập, gán sự kiện cho icon avatar ban đầu
        const avatar = document.querySelector(".header__avatar");
        if (avatar) {
            avatar.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "signin.html";
            });
        }
    }
});


