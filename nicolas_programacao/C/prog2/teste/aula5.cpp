#include <stdio.h>
#include <locale.h>

void troca(int *x, int *y){
    int aux;
    aux = *x;
    *x = *y;
    *y = aux;
}
int main() {
    setlocale(LC_ALL, "");
    int a=10, b=20;
    printf("\nantes da troca a: %d  b=%d", a,b);
    troca(&a,&b);
    printf("\ndepois da troca a: %d  b=%d", a,b);
    return 0;
}