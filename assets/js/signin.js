const signin__input1 = document.querySelector(".signin__input1")
const signin__input2 = document.querySelector(".signin__input2")
const signin__submit = document.querySelector(".signin__submit")
const signin__signup = document.querySelector(".signin__signup")

const error__phone = document.querySelector(".signin__error--phone")
const error__password1 = document.querySelector(".signin__error--password1")

let users = JSON.parse(localStorage.getItem("users")) || [];
signin__submit.addEventListener("click", (e) => {
    e.preventDefault();

    const username = signin__input1.value;
    const password = signin__input2.value;

    // Tìm user phù hợp
    const foundUser = users.find(user =>
        user.username === username && user.password === password
    );

    if (foundUser) {
        error__phone.innerHTML = "";
        error__password1.innerHTML = "";
        alert("Đăng nhập thành công!");
        localStorage.setItem("currentUser", JSON.stringify(foundUser));


        window.location.href = "index.html"; // hoặc chuyển sang trang bạn muốn
    } else {
        // Kiểm tra username trước
        const usernameExists = users.some(user => user.username === username);

        if (!usernameExists) {
            error__phone.innerHTML = "Tài khoản không đúng";
        } else {
            error__phone.innerHTML = "";
        }

        error__password1.innerHTML = "Mật khẩu không đúng";
    }
});

signin__signup.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "signup.html"
})

