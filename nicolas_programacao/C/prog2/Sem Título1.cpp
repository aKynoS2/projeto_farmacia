#include <stdio.h>

// =============================
// Módulo 1: com retorno
// =============================
int potenciaReturn(int A, int B) {
    int resultado = 1;

    for (int i = 0; i < A; i++) {
        resultado *= B;
    }

    return resultado;
}

// =============================
// Módulo 2: usando ponteiro (referência)
// =============================
void potenciaReferencia(int A, int B, int *resultado) {
    *resultado = 1;

    for (int i = 0; i < A; i++) {
        *resultado *= B;
    }
}

// =============================
// Função principal
// =============================
int main() {
    int A, B;

    printf("Digite o valor de A: ");
    scanf("%d", &A);

    printf("Digite o valor de B: ");
    scanf("%d", &B);

    // Módulo com retorno
    int resultado1 = potenciaReturn(A, B);

    // Módulo com "referência" (ponteiro)
    int resultado2;
    potenciaReferencia(A, B, &resultado2);

    // Impressão
    printf("\nResultado usando return: %d\n", resultado1);
    printf("Resultado usando referencia: %d\n", resultado2);

    return 0;
}
