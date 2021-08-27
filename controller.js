function verificar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var confirmacao = document.getElementById('confirmacao').value;
    var cpf = document.getElementById('cpf').value;
    var nascimento = document.getElementById('nascimento').value;
    var celular = document.getElementById('celular').value;
    var endereco = document.getElementById('endereco').value;

    if (!nome || !email || !usuario || !senha || !confirmacao || !cpf || !nascimento || !celular || !endereco){
        alert('[ERRO] Preencha os campos corretamente!');
    } else{
        alert('Cadastramento Concluido!');
    }
}

function mascaraCPF(){
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "-";
    }
}

function mascaraCelular(){
    if(celular.value.length == 0){
        celular.value += "(";
    } else if(celular.value.length == 3){
        celular.value += ")";
    } else if(celular.value.length == 4){
        celular.value += " ";
    } else if(celular.value.length == 9){
        celular.value += "-";
    }
}