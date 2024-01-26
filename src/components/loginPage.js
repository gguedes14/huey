'use strict';

class HueyLoginPage {
    constructor() {
        this.userInput = document.getElementById('user');
        this.passwordInput = document.getElementById('password');
        this.loginButton = document.getElementById('loginButon');

        this.loginButton.addEventListener('click', () => this.login());
        
        this.userInput.addEventListener('keyup', (event) => this.handleKeyPress(event));
        this.passwordInput.addEventListener('keyup', (event) => this.handleKeyPress(event));
    }

    login() {
        const userEmail = this.userInput.value;
        const userPassword = this.passwordInput.value;

        if (userEmail === "admin" && userPassword === "admin") {
            window.location.href = "../../public/home.html";
        } else {
            document.getElementById('error').innerHTML = "Erro de login. Verifique os dados e tente novamente"
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.login();
        }
    }
}

const hueyLoginPage = new HueyLoginPage();
