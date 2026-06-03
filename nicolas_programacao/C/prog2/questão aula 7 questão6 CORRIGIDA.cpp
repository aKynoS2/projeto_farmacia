#include <stdlib.h>
#include <stdio.h>

void ler(int M[4][4]){
    int i, j;
    for (i=0; i<4; i++){
        for (j=0; j<4; j++){
            printf("Valor (%d,%d): ", i, j);
            scanf("%d", &M[i][j]);
        }
    }
}

void comparar(int A[4][4], int B[4][4], int C[4][4]){
    int i, j;
    for (i=0; i<4; i++){
        for (j=0; j<4; j++){
            if (A[i][j] > B[i][j]){
                C[i][j] = A[i][j];
            } else {
                C[i][j] = B[i][j];
            }
        }
    }
}

void imprimir(int M[4][4]){
    int i, j;
    for (i=0; i<4; i++){
        for (j=0; j<4; j++){
            printf("%d ", M[i][j]);
        }
        printf("\n");
    }
}

int main(){
    int matrizA[4][4], matrizB[4][4], matrizC[4][4];

    printf("Digite os valores da matriz A:\n");
    ler(matrizA);

    printf("\nDigite os valores da matriz B:\n");
    ler(matrizB);

    comparar(matrizA, matrizB, matrizC);

    printf("\nMatriz C (maiores valores):\n");
    imprimir(matrizC);

    return 0;
}
