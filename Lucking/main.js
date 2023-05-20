//Background de Nav
let header =  document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

// Isso permite que você defina estilos diferentes para o cabeçalho com e sem a classe "shadow", criando um efeito visual quando o usuário faz a rolagem da página.

//Filtro das assuntos
$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
    if (value == "all") {
        $(".post-box").show("100")
    } else {
        $(".post-box").not("." + value).hide("100");
        $(".post-box").filter("."+ value).show("100");
    }
    });
    $(".filter-item").click(function(){
        $(this).addClass("activate-filter").siblings().removeClass("activate-filter")
  });
})

//$(document).ready(function() { ... }): Essa função é executada quando o documento HTML é completamente carregado. Ela garante que todo o conteúdo HTML seja carregado antes de executar o código dentro dela.
//$(".filter-item").click(function() { ... }): Aqui, estamos selecionando todos os elementos com a classe "filter-item" e adicionando um ouvinte de evento de clique a eles. Essa função será executada sempre que um elemento com a classe "filter-item" for clicado.
//const value = $(this).attr("data-filter");: Dentro do evento de clique, estamos capturando o valor do atributo data-filter do elemento que foi clicado. O valor é armazenado na variável value.
//if (value == "all") { ... }: Aqui, estamos verificando se o valor capturado é igual a "all". Se for o caso, significa que o usuário selecionou a opção "all" para mostrar todos os itens. Nesse caso, estamos mostrando todos os elementos com a classe "post-box" usando o método show("100"), onde "100" é a velocidade da animação de exibição.
//else { ... }: Se o valor não for igual a "all", significa que o usuário selecionou uma opção específica para filtrar os itens. Nesse caso, estamos ocultando todos os elementos com a classe "post-box" que não correspondem à classe do valor selecionado usando o método hide(100). Em seguida, usamos o método filter() para filtrar os elementos com a classe correspondente ao valor selecionado e os mostramos novamente usando o método show("100").
//$(".filter-item").click(function(){ ... }): Aqui, adicionamos outro ouvinte de evento de clique aos elementos com a classe "filter-item". Dentro dele, estamos adicionando a classe "activate-filter" ao elemento clicado usando o método addClass(). Além disso, estamos removendo a classe "activate-filter" de todos os elementos irmãos do elemento clicado usando o método removeClass().
