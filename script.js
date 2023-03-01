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
    const valorCompra = document.getElementById('valorCompra').valueAsNumber
    const valorFinanciamento = document.getElementById('valorFinanciamento').valueAsNumber
    const maximoFinanciamento = valorCompra * 0.8;
    const documentacao = valorFinanciamento/105*5
    const vendedor = valorFinanciamento - documentacao
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