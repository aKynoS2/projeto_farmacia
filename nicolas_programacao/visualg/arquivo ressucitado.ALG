Algoritmo "semnome"

Var

   i: inteiro

Inicio
   escreval ("digite a idade do paciente : ")
   leia (i)
   se (i <= 10) entao
      escreval (" O valor a ser pago é : 30 R$")
   senao
      se (i > 10) e (i <= 29) entao
         escreval (" O valor a ser pago é : 60 R$")
      senao
         se (i > 30) e (i <= 45) entao
            escreval (" O valor a ser pago é : 120 R$")
         senao
            se (i > 46) e (i <= 59) entao
               escreval (" O valor a ser pago é : 150 R$")
            senao
               se (i > 60) e (i <= 65) entao
                  escreval (" O valor a ser pago é : 250 R$")
               senao
                  se(i > 65) entao
                     escreval (" O valor a ser pago é : 400 R$")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse




Fimalgoritmo