
//as variáveis abaixo pegam a referência das divs, pelo ID
var sobreMim = document.getElementById("sobremim");
var formacaoeducacional = document.getElementById("formacaoeducacional");
var portfolio = document.getElementById("portfolio");
var contato = document.getElementById("contato");


function exibirSobreMim(){  
 
    sobreMim.style.display="block" //exibir conteúdo sobre mim
  
}

function exibirFormEduc(){ 

    formacaoeducacional.style.display="block" //exibir conteúdo formação educacional
  
}

function exibirPortfolio(){

    portfolio.style.display="block" //exibir conteúdo portfólio
  
}

function exibirContato(){ 
 
    contato.style.display="block" //exibir conteúdo contato
  
}


//essa função é chamada assim que a página é aberta
function iniciarPagina(){

  //removerá os conteúdos formação educacional, portfólio e contato da página
  formacaoeducacional.style.display="none"
  portfolio.style.display="none"
  contato.style.display="none"
}

iniciarPagina(); //página abre executando esta função

//ao clicar no link sobre mim, executa a funão exibirSobreMim() e esconde as outras divs com informações
document.getElementById("link_sobremim").addEventListener("click",function(){
  exibirSobreMim();
  formacaoeducacional.style.display="none"
  portfolio.style.display="none"
  contato.style.display="none"
});

//ao clicar no link sobre mim, executa a funão exibirFormEduc() e esconde as outras divs com informações

document.getElementById("link_fe").addEventListener("click",function(){
  exibirFormEduc();
  sobreMim.style.display="none"
  portfolio.style.display="none"
  contato.style.display="none"
  });

//ao clicar no link sobre mim, executa a funão exibirPortfolio() e esconde as outras divs com informações

document.getElementById("link_pf").addEventListener("click",function(){
  exibirPortfolio();
  sobreMim.style.display="none"
  formacaoeducacional.style.display="none"
  contato.style.display="none"
  });

  //ao clicar no link sobre mim, executa a funão exibirContato() e esconde as outras divs com informações

document.getElementById("link_ct").addEventListener("click",function(){
  exibirContato();
  sobreMim.style.display="none"
  portfolio.style.display="none"
  formacaoeducacional.style.display="none"
  });