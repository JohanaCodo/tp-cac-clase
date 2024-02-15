const formRegister = document.querySelector("#formRegister");

const clearValidations = () => {
    document.querySelector("#firstname").classList.remove('error');
    document.querySelector("#lastname").classList.remove('error');
    document.querySelector("#email").classList.remove('error');
    document.querySelector("#password").classList.remove('error');
    document.querySelector("#error-firstname").textContent='';
    document.querySelector("#error-lastname").textContent='';
    document.querySelector("#error-email").textContent='';
    document.querySelector("#error-password").textContent='';
    
}