//2. Declare uma matriz 3 x 3. Preencha com 1 a diagonal principal e com 0 os demais elementos da matriz. Escreva ao final a matriz obtida.

#include <stdio.h>

int main(){
	int matriz [3][3] = {
	{1, 0, 0},
	{0, 1, 0},
	{0, 0, 1}
	};
	
for (int i = 0; i <3; i++ ) {
	for (int j = 0; j <3; j++){
		printf("%d \t", matriz[i][j]);
	}
	printf("\n");
}
	
	return 0;
}


