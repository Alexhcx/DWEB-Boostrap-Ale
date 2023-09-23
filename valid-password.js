function checkPassword(){
    let password = document.getElementById("senha").value;
    let cnfrmPassword = document.getElementById("confirmarSenha").value;
    let message = document.getElementById("message");
    let nome = document.getElementById("nomeInput").value;
    let email = document.getElementById("emailInput").value;

    if(nome === "" || email === ""){
        alert("O campo de nome e email não podem ficar vazios!");

        } else {

            if(password.length != 0){
                if(password === cnfrmPassword){
                    message.textContent = "As senhas conferem.";
                    message.style.backgroundColor = "#1dcd59";
                    setTimeout(() => { alert("Cadastro concluido!\nbem-vindo ao To The Stars!"); }, 1000);
                    setTimeout(() => { window.location.href = "conteudo.html";}, 4000);
                }
                else{
                    message.textContent = "As senhas não conferem.";
                    message.style.backgroundColor = "#ff4d4d";
                }
            }
            else{
                alert("O campo do senha não pode ficar vazio!");
                message.textContent = "";
            }
        }
}