window.onload = pageLoad;

function pageLoad() {
    
    const form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm(event) {
    const errorMsg = document.getElementById("errormsg");
    const form = document.forms["myRegister"];
  
    const firstname = form["firstname"].value.trim();
    const lastname = form["lastname"].value.trim();
    const gender = form["gender"].value;
    const bday = form["bday"].value;
    const email = form["email"].value.trim();
    const username = form["username"].value.trim();
    const passwords = form["password"];
    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

  
    if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !retypePassword) {
        errorMsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        errorMsg.style.color = "red";
        if (event) event.preventDefault();
        return false;
    }

    
    if (password !== retypePassword) {
        errorMsg.innerHTML = "รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่อีกครั้ง";
        errorMsg.style.color = "red";
        if (event) event.preventDefault();
        return false;
    }

    
    errorMsg.innerHTML = "";

    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");

    
    if (event) event.preventDefault();
    window.location.href = "login.html";
    return true;
}