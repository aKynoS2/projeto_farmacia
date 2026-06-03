#include <stdio.h>
#include <string.h>
#include "../include/personagem.h"
#include "../include/mapa.h"

int main () {
  MAPA mapa;
  mapa.largura = 20;
  mapa.altura = 20;
  mapa.jogador_x = 8;
  mapa.jogador_y = 10;

  char layout[20][21] = {
    "####################",
    "#..................#",
    "#..................#",
    "#..###...###.......#",
    "#..#.......#.......#",
    "#..#...E...#.......#",
    "#..###...###.......#",
    "#..................#",
    "#....E.............#",
    "#..................#",
    "#.......@..........#",
    "#..................#",
    "#.........E........#",
    "#..................#",
    "#..###...###.......#",
    "#..#.......#.......#", 
    "#..#.......#...B...#",
    "#..###...###.......#",
    "#..................#",
    "####################"
  };

  for (int y = 0; y < mapa.altura; y++) {
    for (int x = 0; x < mapa.largura; x++) {
      mapa.grid[y][x].simbolo = layout[y][x];
      if (layout[y][x] == '#') {
        mapa.grid[y][x].transitavel = 0;
      } else {
        mapa.grid[y][x].transitavel = 1;
      }
    }
  }

  while (1) {
    system("cls"); // Limpa a tela (use "clear" no Linux/Mac)
    
    // Variáveis para nova posição do jogador
    int novo_x = mapa.jogador_x;
    int novo_y = mapa.jogador_y;

    imprimir_mapa(&mapa);

    // Marca a posição atual do jogador como transitável antes de mover
    mapa.grid[mapa.jogador_y][mapa.jogador_x].simbolo = '.';

    char tecla = getchar(); // Lê a tecla pressionada
    
    // Atualiza a nova posição com base na tecla pressionada
    if (tecla == 'w') novo_y--;
    else if (tecla == 's') novo_y++;
    else if (tecla == 'a') novo_x--;
    else if (tecla == 'd') novo_x++;

    // Verifica se a nova posição é transitável antes de mover o jogador
    if (mapa.grid[novo_y][novo_x].transitavel == 1) {
      mapa.jogador_x = novo_x;
      mapa.jogador_y = novo_y;
    }

    // Marca a nova posição do jogador no mapa
    mapa.grid[mapa.jogador_y][mapa.jogador_x].simbolo = '@';
  }
}