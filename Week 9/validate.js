function validate(){
    var username =  document.getElementById
    ("username").value;
    var pass = document.getElementById("pass").value;
    if (username!="" && pass!=""){
        return true;
    }
    document.getElementById("Result")
    innerHTML="Please fill all the inputs";
  return false;
}