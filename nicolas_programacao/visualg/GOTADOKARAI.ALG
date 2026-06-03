Algoritmo "semnome"

Var
   idade, dosagem: inteiro
   peso: real
Inicio
   escreval ( "digite a idade do paciente : ")
   leia (idade)
   escreval ( "digite o peso do paciente : ")
   leia (peso)
   se (idade>=12) entao
      se (peso>=60) entao
         escreval ("O paciente em questão deve tomar 40 gotas do medicamento.")
      senao (peso<60) entao
         escreval ("O paciente em questão deve tomar 35 gotas do medicamento.")
      fimse
   senao
      se (peso>=5) e (peso<=9) entao
         escreval ("O paciente em questão deve tomar 5 gotas do medicamento.")
      senao
         se (peso>=9.1) e (peso<=16) então
            escreval ("O paciente em questão deve tomar 10 gotas do medicamento.")
         senao
            se (peso>=16.1) e (peso<=24) entao
               escreval ("O paciente em questão deve tomar 15 gotas do medicamento.")
            senao
               se (peso>=24.1) e (peso<=30) entao
                  escreval ("O paciente em questão deve tomar 20 gotas do medicamento.")
               senao
                  se (peso>30) entao
                     escreval ("O paciente em questão deve tomar 30 gotas do medicamento.")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
Fimalgoritmo