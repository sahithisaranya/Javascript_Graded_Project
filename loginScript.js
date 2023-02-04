localStorage.setItem('username', "glearner");
localStorage.setItem('password', "glearning");

const loginBtnElement = document.getElementById('loginBtn');
if (loginBtnElement) {
    loginBtnElement.addEventListener("click", ()=> {
        const userNameElement = document.querySelector('#username');
        const userName = userNameElement.value;

        const passwordElement = document.querySelector('#pswd');
        const pswd = passwordElement.value;

        const userNameLocal = localStorage.getItem('username');
        const pswdLocal = localStorage.getItem('password');

        if (userName === userNameLocal && pswd === pswdLocal) {
            console.log("login successful");
        }
        else {
            console.log("Entered details are incorrect! Try again!!");
        }

    });
}
