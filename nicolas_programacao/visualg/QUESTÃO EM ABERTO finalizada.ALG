Algoritmo "semnome"
//Foi realizada uma pesquisa sobre alguns hábitos e comportamentos que envolvem
//questões ambientais e econômicas dos moradores de uma cidade da Serra Gaúcha.
//Um pessoa (responsável) da residência vai responder o questionário.
//Foram coletados os seguintes dados de cada família do entrevistado :

// - sexo do entrevistado(M-Masculino ou F-Feminino),
// - Número de moradores da residência,
// - renda familiar,

// - responda as seguintes perguntas:

//Os moradores da residência possuem coleta de água da chuva? Sim ou Não.

//Há separação do lixo residencial? Sim ou Não .

//Qual a maior escolaridade entre os moradores da residência?
//As respostas podem ser : 1- Analfabeto  2- Series iniciais
//3- Ensino Fundamental   4- Ensino Médio  5 – Ensino Superior
//6- Pos Graduação   7 - outros

//Todas as entradas de dados devem ser validadas.

//Deve-se validar a entrada do sexo, as perguntas onde a resposta deve ser
//S-para sim e N -Não.


//Caso o usuário digitar um valor errado, deverá aparecer na tela uma mensagem
//informando que esta errado e solicitar para redigitar novamente, até
//o usuário digitar um valor válido. Para facilitar a entrada dos dados,
//sempre imprima na tela orientações para o usuário saber o que deve ser
//digitado como entrado.  Toda vez que cadastrar  a pesquisa de uma residência,
//deve perguntar ao usuário se deseja cadastrar uma nova pesquisa.
//Assim, o programa encerra quando o usuário digitar N(Não), indicando que
//não deseja realizar mais nenhuma pesquisa. Ao finalizar o programa deverá
//ser impresso o relatório final da pesquisa com as informações solicitadas abaixo.

//Faça um ALGORITMO que leia esses dados e gere como relatório:

//- Total de residências pesquisadas

//- Total de residências que coletam e total que não coletam a água da chuva

//- Total de residências que separam o lixo e total que não separam.

//- Total de homens pesquisados e o percentual (%)

//- Total de mulheres pesquisadas e o percentual (%)

//- Média da renda familiar de todos os entrevistados ( soma todas as rendas e divide pelo número de casas pesquisadas)

//- Média de moradores por residência - ( SOMA TODOS OS MORADORES E DIVIDE  PELO TOTAL DE CASAS pesquisadas)

//- Calcule e imprima (pode usar escolha ou comando SE encadeado):

//Total de pesquisados  Analfabetos:  999 REPRESENTANDO  99%

//Total de pesquisados  Series iniciais : 999  REPRESENTANDO  99%

//Total de pesquisados  Ensino Fundamental : 999 REPRESENTANDO  99%

//Total de pesquisados  Ensino Médio  : 999 REPRESENTANDO  99%

//Total de pesquisados  Ensino Superior : 999 REPRESENTANDO  99%

//Total de pesquisados  Pós Graduação: 999 REPRESENTANDO  99%

//Total de pesquisados  como Outros  : 999 REPRESENTANDO  99%



//Pode utilizar o comando de repetição que desejar. Para validar as entradas utilizar o laço repita.. ate.
Var
sexo, aguaCh, lixoRe, repeticao: caractere
Nmorador, escolaridade, rendaF: inteiro

ressex, resNmorador, resrendaF, resaguaCh, reslixoRe: inteiro

analfabetos, SeriesIniciais, EnsinoFundamental, EnsinoMedio, EnsinoSuperior, PosGraduacao, outros: inteiro

residencias: inteiro


Inicio
analfabetos <- 0
SeriesIniciais<- 0
EnsinoFundamental <- 0
EnsinoMedio <- 0
EnsinoSuperior <- 0
PosGraduacao <- 0
outros <- 0


ressex <- 0
residencias <- 0
resNmorador <- 0
resrendaF <- 0
resaguaCh <- 0
reslixoRe <- 0
repita
   repita
      escreval ("Qual seu sexo? (F) ou (M)")
      leia(sexo)
      se(sexo <> "F") e (sexo <> "M") entao
         escreval ("É necessário digitar um sexo válido.")
      fimse
   ate (sexo = "F") ou (sexo ="M")
   se (sexo = "F") entao
      ressex <- ressex + 1
   fimse
   repita
      escreval ("Digite um número de moradores.")
      leia (Nmorador)
      se (Nmorador<=0) entao
         escreval ("Inválido")
      fimse
   ate (Nmorador>0)
   resNmorador <- resNmorador + Nmorador
   repita
      escreval ("Qual é a renda familiar?")
      leia(rendaF)
      se (rendaF<=0) entao
         escreval ("Inválido")
      fimse
   ate (rendaF>0)
   resrendaF <- resrendaF + rendaF
   escreval ("Os moradores da residência possuem coleta de água da chuva? (S) ou (N)")
   repita
      leia(aguaCh)
      se(aguaCh <> "S") e (aguaCh <> "N") entao
         escreval ("É necessário digitar um caracter válido.")
      fimse
   ate (aguaCh = "S") ou (aguaCh ="N")
   se (aguaCh = "S") entao
      resaguaCh <- resaguaCh + 1
   fimse
   escreval ("Há separação do lixo residencial? (S) ou (N)")
   repita
      leia (lixoRe)
      se(lixoRe <> "S") e (lixoRe <> "N") entao
         escreval ("É necessário digitar um caracter válido.")
      fimse
   ate (lixoRe = "S") ou (lixoRe ="N")
   se (lixoRe = "S") entao
      reslixoRe <- reslixoRe + 1
   fimse
   repita
      escreval ("Qual a maior escolaridade entre os moradores da residência? As respostas podem ser : 1- Analfabeto  2- Series iniciais 3- Ensino Fundamental   4- Ensino Médio  5 – Ensino Superior 6- Pos Graduação   7 - outros")
      leia (escolaridade)
      se (escolaridade <> 1) e (escolaridade <> 2) e (escolaridade <> 3) e (escolaridade <> 4) e (escolaridade <> 5) e (escolaridade <> 6) e (escolaridade <> 7) entao
         escreval ("Inválido")
      fimse
   ate (escolaridade = 1) ou (escolaridade = 2) ou (escolaridade = 3) ou (escolaridade = 4) ou (escolaridade = 5) ou(escolaridade = 6) ou (escolaridade = 7)
   se (escolaridade = 1)entao
      analfabeto <- analfabeto + 1
   senao
      se (escolaridade = 2) entao
         SeriesIniciais <- SeriesIniciais + 1
      senao
         se (escolaridade = 3) entao
            EnsinoFundamental <- EnsinoFundamental + 1
         senao
            se (escolaridade = 4) entao
               EnsinoMedio <- EnsinoMedio + 1
            senao
               se (escolaridade = 5) entao
                  EnsinoSuperior <- EnsinoSuperior + 1
               senao
                  se (escolaridade = 6) entao
                     PosGraduacao <- PosGraduacao + 1
                  senao
                     se (escolaridade = 7) entao
                        outros <- outros + 1
                     fimse
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
   residencias <- residencias + 1
   repita
      escreval ("Deseja cadastrar uma nova pesquisa? (S) ou (N)")
      leia (repeticao)
      se (repeticao <> "S") e (repeticao <> "N") entao
         escreval ("Inválido")
      fimse
   ate (repeticao = "S") ou (repeticao = "N")
ate (repeticao = "N")
escreval ("**REGISTRO FINAL**")
escreval (" ")
escreval (" ")
escreval (" ")
escreval ("Total de residencias = ", residencias,".")
escreval (" ")
escreval ("Residencias que coletam água da chuva = ", resaguaCh,".")
escreval ("Residencias que não coletam água da chuva = ",(residencias-resaguaCh),".")
escreval (" ")
escreval ("Residencias que separam o lixo seletivo = ", reslixoRe,".")
escreval ("Residencias que não separam o lixo seletivo = ",(residencias-reslixoRe),".")
escreval (" ")
escreval ("Total de pesquisados homens = ",residencias-ressex, " REPRESENTANDO ", (residencias-ressex)/(residencias)*100, "%.")
escreval ("Total de pesquisados mulheres = ",ressex, " REPRESENTANDO ", (ressex)/(residencias)*100, "%.")
escreval (" ")
escreval ("Média de renda por residensidencia = ", (resrendaF/residencias), "R$.")
escreval (" ")
escreval ("Média de moradores por residencia = ", (resNmorador/residencias), ".")
escreval (" ")
escreval ("Total de pesquisados  Analfabetos = ", analfabetos, " REPRESENTANDO ", (analfabetos/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Series iniciais = ", SeriesIniciais, " REPRESENTANDO ", (SeriesIniciais/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Ensino Fundamental = ", EnsinoFundamental, " REPRESENTANDO ", (EnsinoFundamental/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Ensino Médio = ", EnsinoMedio, " REPRESENTANDO ", (EnsinoMedio/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Ensino Superior = ", EnsinoSuperior, " REPRESENTANDO ", (EnsinoSuperior/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Pós Graduação = ", PosGraduacao, " REPRESENTANDO ", (PosGraduacao/residencias)*100, "%.")
escreval (" ")
escreval ("Total de pesquisados  Outros = ", outros, " REPRESENTANDO ", (outros/residencias)*100, "%.")

Fimalgoritmo
