Algoritmo "semnome"

Var
   j, numero, mediaA, mediaB: inteiro

Inicio
   mediaA <- 0
   mediaB <- 0
   para j de 1 ate 10 passo 1 faca
      escreval ("digite o numero ", j, " : ")
      leia (numero)
      se ((numero >=10) e (numero <=20)) entao
         mediaA <- mediaA+1
      senao mediaB <- mediaB+1
      fimse
   fimpara
   escreval( " os valores entre 10 e 20 são", mediaA, ".")
   escreval( " a quantidade de valores diferentes dentre os citados é de ", mediaB, ".")
Fimalgoritmo