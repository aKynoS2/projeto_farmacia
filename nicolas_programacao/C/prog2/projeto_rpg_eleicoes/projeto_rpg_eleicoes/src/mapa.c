#include <stdio.h>
#include <string.h>
#include "../include/mapa.h"

void imprimir_mapa(MAPA *mapa) {
    for (int y = 0; y < mapa->altura; y++) {
        for (int x = 0; x < mapa->largura; x++) {
            char s = mapa->grid[y][x].simbolo;

            if (s == '#')      printf("\033[33m#\033[0m");  // amarelo
            else if (s == '@') printf("\033[36m@\033[0m");  // ciano
            else if (s == 'E') printf("\033[31mE\033[0m");  // vermelho
            else if (s == 'B') printf("\033[35mB\033[0m");  // magenta
            else               printf("\033[37m%c\033[0m", s); // branco
        }
        printf("\n");
    }
}