
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


function Login() {
    let logado = 0;
    
    if(username == 'adm' && password == 'adm'){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("acesso negado. dados incorretos");
    }


}