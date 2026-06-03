#include <stdio.h>
#include <stdlib.h>

int i;
float vetor[3], media;

int main (){
    for (i=0; i<3; i++){
        printf("Digite os numeros para a media: ");
        scanf("%f", &vetor[i]);
    }
    media = (vetor[0] + vetor[1] + vetor[2]) / 3;
    printf("A media dos numeros digitados e: %.2f", media);
    return 0;}
