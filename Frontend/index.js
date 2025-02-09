import {moduleLogin} from './modules/login.js'
import {moduleRegister} from './modules/registrate.js'
let userLogin = document.getElementById("userInfoLogin")
let userBalance = document.getElementById("userInfoBalance")
let userOld = document.getElementById("userInfoOld")
let userGmail = document.getElementById("registerEmail")
let login_reg = document.getElementById("loginUsername")
let pass_reg  = document.getElementById ("loginPassword")

//логин и пароль при входе 

let enterPassword = document.getElementById("enterpassword")
let enterlogin = document.getElementById("enterlogin")
// async function getUserInfo() {
//      try { 
//         const response = await fetch("http://localhost:3000/users");
//          const data = await response.json();
//         console.log(data)
//         userLogin.textContent = data.user.login
//         userBalance.textContent = data.user.balance
//         userGmail.textContent = data.user.gmail
//         userOld.textContent = data.user.age
//     } catch (error) {
//         console.error("Ошибка:", error);
//     }}
// getUserInfo() 
//проверка входа 
document.getElementById("button_login").addEventListener("click", async (e) =>{
  console.log('!')
    moduleLogin(enterPassword,enterlogin)
})
// Проверка регистрации

document.getElementById('button_reg').addEventListener('click', async (e) => {
    moduleRegister(login_reg,login_reg,userGmail)
})



// Проверка в][ода
document.getElementById('button_login').addEventListener('click', async (e) => {
  e.preventDefault()
  console.log('!')
 
  // try {
  //     const response = await fetch('/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password, email }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       alert(`Успех: ${data.message}`);
  //     }
  //   } catch (err) {
  //     console.error('Ошибка:', err);
  //   }
  if (2+2 == 4){
    document.querySelectorAll(".openBox").forEach((element,index) =>  { 
      console.log(index)
      element.style.dislpay=""
    });
  }
})
