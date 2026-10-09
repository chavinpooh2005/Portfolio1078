window.onload = loginLoad;

function loginLoad() {
    
    const form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(event) {
  
    if (event) {
        event.preventDefault();
    }

   
    const users = [{username: "admin", password: "123456"}]; 

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    
    if (storedUsername && storedPassword) {
        users.push({
            username: storedUsername,
            password: storedPassword
        });
    }

    
    if (users.length === 0) {
        alert("ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาลงทะเบียนที่หน้า Register ก่อน");
        window.location.href = "register.html";
        return false;
    }

    
    const inputUsername = document.forms["myLogin"]["username"].value.trim();
    const inputPassword = document.forms["myLogin"]["password"].value;

    
    let isLoginSuccess = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === inputUsername && users[i].password === inputPassword) {
            isLoginSuccess = true;
            break;
        }
    }

    
    if (isLoginSuccess) {
        alert("Login success! ยินดีต้อนรับเข้าสู่ระบบ");
        return true;
    } else {
        alert("Username หรือ password ไม่ถูกต้อง");
        return false;
    }
}