#include <stdlib.h>
#include <stdio.h>


int i, j, matrizA[4][4], matrizB[4][4], matrizC[4][4];

int main(){
	printf("\nDe os valores para a matriz A: \n");
	for (i=0; i<4; i++){
		for (j=0; j<4; j++){
			
			//scan matriz A
			printf ("Matriz A (%d, %d): \n", i, j);
			scanf("%d", &matrizA[i][j]);
			
			//scan matriz B
			printf ("Matriz B (%d, %d): \n", i, j);
			scanf("%d", &matrizB[i][j]);
			
			//comparação e alocação
			if (matrizA[i][j]>matrizB[i][j]){
				matrizC[i][j] = matrizA[i][j];
			}
			else{
				matrizC[i][j] = matrizB[i][j];
			}
		}
	}
		
		//impressão matrizC
		
		printf("\nMatriz C (maiores valores):\n");
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			printf("%d ", matrizC[i][j]);
		}
		printf("\n");
	}
		
	return 0;
}
