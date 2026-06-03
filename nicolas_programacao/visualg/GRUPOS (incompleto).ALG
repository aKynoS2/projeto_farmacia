Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi


Var

   ga, gb, gc, valor, total, totalA, totalB, totalC, pontos: real
   gp, laco: caractere


Inicio
   ga <- 0
   gb <- 0
   gc <- 0
   repita
      valor <- 0
      pontos <- 0
      repita
         escreval ("Digite o valor arrecadado pelo grupo : ")
         leia (valor)
         se (valor <= 0) entao
            escreval ("Digite um valor válido!")
         fimse
      ate (valor > 0)
      
      se (valor < 10000) entao
      pontos <- pontos + 10 senao
         se (valor > 10000) e (valor < 20000) entao
         pontos <- pontos + 20 senao
            se (valor > 20000) e (valor <= 30000) entao
               pontos <- pontos + 30
            fimse
         fimse
      fimse
      escreval ("Digite a letra correspondente do seu grupo : ")
      leia (gp)
      escolha (gp)
      caso "A"
         ga <- ga + pontos
         totalA <- totalA + valor
      caso "B"
         gb <- gb + pontos
         totalB <- totalB + valor
      caso "C"
         gc <- gc + pontos
         totalC <- totalC + valor
      fimescolha
      escreval ("Deseja adicionar mais valores arrecadados? S | N")
      repita
         leia (laco)
         se (laco <> "S") e (laco <> "N") entao
            escreval ("Digite um digito válido!")
         fimse
      ate (laco = "S") ou (laco = "N")
   ate (laco ="N")
   total <- totalA + totalB + totalC
   escreval ("Valor total arrecadado por todos os grupos juntos é :", total, "R$.")
   escreval ("Valor arrecadado por cada grupo : ")
   escreval ("Grupo A
Fimalgoritmo