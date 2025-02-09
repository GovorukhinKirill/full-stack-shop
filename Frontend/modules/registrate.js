export async function moduleRegister(login_reg,pass_reg,userGmail) {
    if (login_reg.value.length < 8) {
        alert("Логин должен содержать не менее 8 символов");
         return
     }
     else if (pass_reg.length < 8) {
         alert("Пароль должен содержать не менее 8 символов");
         return
     }
     try {
       const login = login_reg.value;
       const password = pass_reg.value;
       const Gmail = userGmail.value
       console.log(password)
         const response = await fetch('/register', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ login, password, Gmail }),
         });
         const data = await response.json();
         if (response.ok) {
           alert(`Успех: ${data.message}`);
         }
       } catch (err) {
         console.error('Ошибка:', err);
       }  
}