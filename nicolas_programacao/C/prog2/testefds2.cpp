#include <stdio.h>
#include <stdlib.h>

int media(int a, int b, int c) {
    return (a + b + c) / 3;
}

int main() {
    int a, b, c;
    printf("Digite tres numeros: ");
    scanf("%d %d %d", &a, &b, &c);
    printf("A media dos numeros e: %d\n", media(a, b, c));
    return 0;
}
