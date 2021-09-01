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

function CPF(){
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "-";
    }
}

function Celular(){
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
        function verifica() {
          if (document.forms[0].email.value.length == 0) {
            alert('Por favor, informe o seu EMAIL.');
            document.frmEnvia.email.focus();
            return false;
          }
          return true;
        }
        function checarEmail(){
if( document.forms[0].email.value==""
   || document.forms[0].email.value.indexOf('@')==-1
     || document.forms[0].email.value.indexOf('.')==-1 )
    {
      alert( "Por favor, informe um E-MAIL válido!" );
      return false;
    }
}