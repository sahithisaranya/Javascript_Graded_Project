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

        const displayElement=document.getElementById('msg');

        if (userName === userNameLocal && pswd === pswdLocal) {
            displayElement.innerHTML="Redirecting...";
            console.log("login successful");
        }
        else {
            displayElement.innerHTML="Invalid username/password";
            console.log("Entered details are incorrect! Try again!!");
        }

        event.preventDefault();
    });
}
