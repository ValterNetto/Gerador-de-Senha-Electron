const senha = document.querySelector('#senha');
const novaSenha = document.querySelector('#novaSenha');

async function copiarTexto() {
    let text = document.querySelector('#novaSenha').textContent;
    await navigator.clipboard.writeText(text);
}

function gerarSenha() {
    novaSenha.innerHTML = "";

    if (senha.value === '') {
        alert('Digite o tamanho da sua senha')
        return;
    }

    let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ1234567890!@$";
    let password = "";

    for (var i = 0, n = charset.length; i < senha.value; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    let result = document.createTextNode(password);
    return novaSenha.appendChild(result);
}