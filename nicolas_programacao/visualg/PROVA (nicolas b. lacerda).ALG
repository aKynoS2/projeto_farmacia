Algoritmo "semnome"


var

   i, cod_prod, val_prod, valF, quant_prod, Nparcel : inteiro
   frete, freteF, val_com_acre : real
   freteA, freteB : inteiro
Inicio
   frete <- 60
   freteA <- 0
   freteB <- 0
   para i de 1 ate 30 passo 1 faca
      escreval ("Digite o código do produto : ")
      leia (cod_prod)
      escreval ("Digite o valor do produto : ")
      leia (valF)
      repita
         escreval ("Digite a quantidade de produtos : ")
         leia (quant_prod)
      ate (quant_prod > 0)
      val_prod <- valF * quant_prod
      se (quant_prod >= 15) entao
         freteF <- frete-(frete*0.06)
         freteA <- freteA + 1
      senao
         se quant_prod < 15 entao
            freteF <-  (frete-(frete*0.03))
            freteB <- freteB + 1
         fimse
      fimse
      escreval ("Informe o número de parcelas : ")
      leia (Nparcel)
      escolha Nparcel
      caso 0
         val_com_acre <- val_prod + 0
      caso 1
         val_com_acre <- ((val_prod * 0.05) + val_prod)
         escreval ("Sua compra terá 5% de acrécimo")
      caso 2
         val_com_acre <- ((val_prod * 0.1) + val_prod)/2
         escreval ("Sua compra terá 10% de acrécimo")
      caso 3
         val_com_acre <- ((val_prod * 0.12) + val_prod)/3
         escreval ("Sua compra terá 12% de acrécimo")
      caso 4
         val_com_acre <- ((val_prod * 0.14) + val_prod)/4
         escreval ("Sua compra terá 14% de acrécimo")
      fimescolha
      se (Nparcel < 0) e (Nparcel > 4) entao
         Nparcel = 0
      fimse
      se (Nparcel =0) e (Nparcel =1) entao
         escreval ("O valor final é : ", val_com_acre,"R$.")
      senao escreval ("O valor final de cada parcela é : ", val_com_acre:5:2,"R$ em ", Nparcel, "vezes.")
      fimse
      escreval ("O valor do frete é de ", freteF, "R$.")
      escreval ("O valor final da compra é de ",val_com_acre+freteF, "R$.")
   fimpara
   escreval ("A quantidade de fretes com 6% é de : ", freteA)
   escreval ("A quantidade de fretes com 3% é de : ", freteB)
Fimalgoritmo