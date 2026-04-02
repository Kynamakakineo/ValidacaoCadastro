function cadastrar(event) {
    event.preventDefault(); 

    let nome = document.getElementById("nome").value;
    if (nome.trim().length < 4) {
        alert("Nome completo deve ter pelo menos 4 caracteres");
        return;
    }

    let email = document.getElementById("email").value.trim();
    let regexEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    if (!regexEmail.test(email)) {
        alert("Email inválido");
        return;
    }

    let cpf = document.getElementById("cpf").value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        alert("CPF deve conter 11 dígitos");
        return;
    }

    let curso = document.getElementById("curso").value;
    if (curso.trim() === "") {
        alert("Por favor, digite o seu curso");
        return;
    }

    let dataInput = document.getElementById("dtNascimento").value;
    let regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexData.test(dataInput)) {
        alert("Insira a data no formato DD/MM/AAAA");
        return;
    }

    let genero = document.getElementById("genero").value;
    if (genero.trim() === "") {
        alert("Por favor, digite o seu gênero");
        return;
    }

    alert("Cadastrado com sucesso!");
    document.getElementById("form-cadastro").reset(); 
}