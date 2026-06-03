Algoritmo "semnome"

Var
   idade, gr: inteiro
   peso: real

Inicio
   escreval("Digite sua idade : ")
   leia (idade)
   escreval("Digite sua peso : ")
   leia (peso)
   se (idade<20) entao
      se (peso<=60) entao
         escreval ( "Sua nota de risco é : 9")
      senao
         se (peso>60) e (peso<=90) entao
            escreval ( "Sua nota de risco é : 8")
         senao
            se  (peso>90) entao
               escreval ( "Sua nota de risco é : 7")
            fimse
         fimse
      fimse
   senao
      se (idade>=20) e (idade<=50) entao
         se (peso<=60) entao
            escreval ( "Sua nota de risco é : 6")
         senao
            se (peso>60) e (peso<=90) entao
               escreval ( "Sua nota de risco é : 5")
            senao
               se  (peso>90) entao
                  escreval ( "Sua nota de risco é : 4")
               fimse
            fimse
         fimse
      senao
         se (idade>50) entao
            se (peso<=60) entao
               escreval ( "Sua nota de risco é : 3")
            senao
               se (peso>60) e (peso<=90) entao
                  escreval ( "Sua nota de risco é : 2")
               senao
                  se  (peso>90) entao
                     escreval ( "Sua nota de risco é : 1")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse


Fimalgoritmo