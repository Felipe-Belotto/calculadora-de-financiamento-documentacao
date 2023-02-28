let btnmais = document.getElementById('btn_mais')
let informativo = document.querySelector('#informativo')
let btnCalcular = document.getElementById('btn_calcular')
let resposta = document.getElementById('resposta')
let mostra = (referencia, texto) => {referencia.innerHTML= texto}
btnmais.addEventListener('click', saibamais)
btnCalcular.addEventListener('click', Calcular)

    function saibamais() {
        if(informativo.style.display == "none"){
        informativo.style.display="flex";  
        btnmais.innerHTML="-";  
        }
        else{
        informativo.style.display="none";
        btnmais.innerHTML="+";    
        }
        
    }

   

    function Calcular(){
    let valorCompra = document.getElementById('valorCompra').valueAsNumber
    let valorFinanciamento = document.getElementById('valorFinanciamento').valueAsNumber
    let maximoFinanciamento = valorCompra * 0.8;
    let documentacao = valorFinanciamento/105*5
    let vendedor = valorFinanciamento - documentacao
    let modificaDinheiroReal = (valor) => {return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});}

    resposta.style.display="flex";

    if(valorCompra < 62000){
        mostra(resposta, `O valor de compra inicia em ${modificaDinheiroReal(62000)}`)
    }
    else if (maximoFinanciamento < documentacao + vendedor){
        mostra(resposta, `O valor de financiamento extrapola os 80%`)
    }
    else{
        mostra(resposta,`Financiamento máximo: <br>
        Valor para o vendedor ${modificaDinheiroReal(vendedor)}<br>
        Valor para documentação ${modificaDinheiroReal(documentacao)}`)
    }
    
}   