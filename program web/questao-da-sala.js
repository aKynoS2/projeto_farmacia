function criarTabela(){
    let linha = Number(prompt("Digite o numero de linhas: "))
    let coluna = Number(prompt("Digite o numero de colunas: "))
    let contador = 1
    let tabela = "<table border='1'>"

    for (let i = 0; i < linha; i++){
        tabela += "<tr>"
        for (let j = 0; j < colunas; j++){
            tabela += "<td>" + contador + "</td>"
            contador++
        }
        tabela += "</tr>"
    }

    tabela += "</table>"
    document.write(tabela)
}


function DesenharTabelaComParametros(linha, coluna){
     
    let contador = 1
    let tabela = "<table border='1'>"

    for (let i = 0; i < linha; i++){
        tabela += "<tr>"
        for (let j = 0; j < coluna; j++){
            tabela += "<td>" + contador + "</td>"
            contador++
        }
        tabela += "</tr>"
    }

    tabela += "</table>"
    document.write(tabela)
}

function Desenha(){
    let linha, coluna;
    linha = Number(document.getElementById("linhas").value)
    coluna = Number(document.getElementById("colunas").value)
    DesenharTabelaComParametros(linha, coluna)
}