Algoritmo "semnome"

Var
   idade, conta, j: inteiro

Inicio
   conta <- 0
   para j de 1 ate 10 passo 1 faca
      escreva("digite a idade ", j, " : ")
      leia(idade)
      se (idade >=18) entao
         conta <- conta+1
      fimse
   fimpara
   escreval("a quantidade de pessoas maiores de 18 anos são", conta, ".")
Fimalgoritmo