export async function moduleLogin(enterPassword,enterlogin){
    console.log("Функция активированна")
    if (enterlogin.value.length < 1) {
        alert("Введите логин");
         return
     }
     else if (enterPassword.length < 1) {
         alert("Введите пароль");
         return
     }
     try {
       const login = enterlogin.value;
       const password = enterPassword.value;
       
       console.log(password)
         const response = await fetch('/enter', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ login, password }),
         });
         const data = await response.json();
         if (response.ok) {
           alert(`Успех: ${data.message}`);
         }
       } catch (err) {
         console.error('Ошибка:', err);
       }
}