function validar(){
	var nome = formUser.nome.value;
	var email = formUser.email.value;
	var telefone = formUser.telefone.value;
	var endereco = formUser.endereco.value;
	var senha = formUser.senha.value;
	var cpf = formUser.cpf.value;
	var cnpj = formUser.cnpj.value;
	
	if(nome =="" || nome.length <=3){
		alert("Informe o nome completo!");
		formUser.nome.focus();
		return false;
	}
	
	if(email == "" || email.length < 10){
		alert("E-mail não atende os requisitos!");
		formUser.email.focus();
		return false;
	}
	
	if(telefone == "" || telefone.length <= 10){
		alert("Informe telefone com DDD!");
		formUser.telefone.focus();
		return false;
	}
	
	if(endereco == "" || endereco.length <= 5){
		alert("Informe endereço completo!");
		formUser.endereco.focus();
		return false;
	}
	
	if(senha == "" || senha.length <= 6){
		alert("Informe senha minimo 6 digitos!");
		formUser.senha.focus();
		return false;
	}

	if ((cpf == "") && (cnpj.length !== 14)) {
		alert("Informe os 14 números do CNPJ.");
		formUser.cnpj.focus();
		return false;
	} else if ((cnpj == "") && (cpf.length !== 11)) {
		alert("Informe os 11 números do CPF.");
		formUser.cpf.focus();
		return false;
	} else if ((cpf !== "")&&(cnpj !== "")) {
		alert("Informe somente o CPF ou CNPJ.")
		return false;
	}
}