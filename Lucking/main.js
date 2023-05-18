//Background de Nav
let header =  document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

// Isso permite que você defina estilos diferentes para o cabeçalho com e sem a classe "shadow", criando um efeito visual quando o usuário faz a rolagem da página.