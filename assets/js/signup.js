const signup__input1 = document.querySelector(".signup__input1");
const signup__input2 = document.querySelector(".signup__input2");
const signup__input3 = document.querySelector(".signup__input3");
const signup__signup = document.querySelector(".signup__signup");

const error__phone = document.querySelector(".signup__error--phone");
const error__password1 = document.querySelector(".signup__error--password1");
const error__password2 = document.querySelector(".signup__error--password2");


let storageusers = JSON.parse(localStorage.getItem("users")) || [];


signup__signup.addEventListener("click", (e) => {
    e.preventDefault();
    let check = true;
    if (signup__input1.value === "" || !/^[0-9]{9,11}$/.test(signup__input1.value)) {
        error__phone.innerHTML = "sđt không hợp lệ";
        check = false;
    }
    // Kiểm tra trùng username
    else if (storageusers.some(user => user.username === signup__input1.value)) {
        error__phone.innerHTML = "sđt đã tồn tại";
        check = false;
    } else {
        error__phone.innerHTML = "";
    }
    if (signup__input2.value === "") {
        error__password1.innerHTML = "mật khẩu không hợp lệ"
        check = false;
    } else if (signup__input2.value.length < 6) {
        error__password1.innerHTML = "mật khẩu không được ít hơn 6 kí tự"
        check = false;

    } else {
        error__password1.innerHTML = "";
    }
    if (signup__input3.value !== signup__input2.value) {
        error__password2.innerHTML = "mật khẩu phải trùng nhau"
        check = false;
    } else {
        error__password2.innerHTML = "";
    }
    if (check) {
        const newUser = {
            username: signup__input1.value,
            password: signup__input2.value
        }
        storageusers.push(newUser)
        localStorage.setItem("users", JSON.stringify(storageusers));
        alert("Đăng ký thành công!");

        signup__input1.value = "";
        signup__input2.value = "";
        signup__input3.value = "";

        window.location.href = "signin.html"
    }

});
