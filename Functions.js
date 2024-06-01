function FormValidation(){
    var userName = document.getElementById('name').value;
    debugger;
    var password = document.getElementById('pass').value;

    if(userName == "DFL7ZQD" || password == "Priya"){
        window.alert("Login Successful!")
    }
    else{
        window.alert("Login Failed!");
    }
}