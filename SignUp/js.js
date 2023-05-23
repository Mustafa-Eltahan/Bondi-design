function getInputValue() {
    var password=document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm password").value;
    if(password != confirm_password)
       alert("Password should be the same confirm password")
   else
     alert("sign up successfly")
  }