const form = document.formlanding
const nome = form.nome
const sobrenome = form.sobrenome
const email = form.email
const telefone = form.telefone
const cv = form.cv

const btnEscutar = document.getElementById('btn-form')
btnEscutar.addEventListener('click', validarData)

function validarData(){
	// verificar se o nome está vazio
	if (nome.value == "") {
		alert("Nome não informado")

		// Deixa o input com o focus
		nome.focus()
		// retorna a função e não olha as outras linhas
		return
	} else if (sobrenome.value == "") {
		alert("Sobrenome não informado")
		sobrenome.focus()
		return
	} else if (email.value == "") {
		alert("E-mail não informado")
		email.focus()
		return
	} else if (telefone.value == "") {
		alert("Telefone não informado")
		telefone.focus()
		return;
	} else if (cv.value == "") {
		alert("Seu CV não informado")
		cv.focus()
		return
	}

	enviarData()
}

function enviarData(){
	console.log(nome)
}