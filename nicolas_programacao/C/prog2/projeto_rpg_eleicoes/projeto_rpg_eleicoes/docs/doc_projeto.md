# PROJETO RPG — Contexto para Claude

> Manda esse arquivo no início da conversa pra eu ter contexto completo sem precisar reexplicar tudo.

---

## Sobre o Projeto

RPG de terminal em C desenvolvido como projeto da disciplina de **Algoritmos e Programação 2**.
Prazo: **1 mês**.
Tema: **Eleições 2026** (exigência da faculdade).

---

## Tema e Narrativa

Candidato independente saindo do zero — sem partido, sem dinheiro, sem jabá.
Atravessa todas as regiões do Brasil conquistando popularidade antes do confronto final em Brasília.

| Atributo RPG | Equivalente político    |
| ------------ | ----------------------- |
| HP           | Reputação               |
| Mana         | Verba de campanha       |
| Ataque       | Poder de convencimento  |
| Defesa       | Resistência a escândalo |
| XP           | Votos acumulados        |

---

## Requisitos Acadêmicos (obrigatórios)

- Structs
- Condicionais
- Laços
- Vetores
- Matrizes
- Leitura e escrita em arquivos

---

## Estrutura de Arquivos Planejada

```c
rpg/
├── main.c
├── personagem.h / personagem.c
├── combate.h   / combate.c
├── mapa.h      / mapa.c
├── inventario.h / inventario.c
├── arquivo.h   / arquivo.c
└── saves/
    └── save1.dat

```

---

## Structs Definidas

```c
typedef struct {
    char nome[50];
    int tipo;        // 0 = arma, 1 = armadura, 2 = poção
    int valor;       // dano, defesa ou cura
    int quantidade;
} Item;

typedef struct {
    char nome[50];
    int hp, hp_max;
    int mana, mana_max;
    int ataque;
    int defesa;
    int nivel;
    int experiencia;
    Item inventario[20];
    int num_itens;
} Personagem;

typedef struct {
    char simbolo;
    int transitavel;
    int tem_inimigo;
    int tem_bau;
} Celula;

typedef struct {
    Celula grid[20][20];
    int largura;
    int altura;
    int jogador_x;
    int jogador_y;
} Mapa;
```

---

## Estrutura de Mapas

6 regiões em **ordem livre** + Brasília como mapa final obrigatório.

| #   | Região       | Paleta               | Boss                   |
| --- | ------------ | -------------------- | ---------------------- |
| 1   | Norte        | Verde escuro, marrom | O Concessionário       |
| 2   | Nordeste     | Amarelo, laranja     | Coronel Zé das Quantas |
| 3   | Centro-Oeste | Dourado, bege        | O Senador Ruralista    |
| 4   | Sudeste      | Cinza, azul escuro   | Prefeito + Governador  |
| 5   | Sul          | Verde gaúcho, branco | O Separatista          |
| 6   | Brasília     | Vermelho, dourado    | O Candidato do Sistema |

O boss de Brasília escala com os bosses anteriores — cada região completada com dificuldade adiciona poder a ele.

### Como Pedir Mapas

Informar:

- **Tema** da área (floresta, dungeon, cidade, etc.)
- **Tamanho** da matriz (ex: 20x20)
- **Quantidade** de inimigos, baús e saídas
- **Conexões** (de onde vem, pra onde vai)

Claude gera o mapa pronto para colar no código.

---

## Inimigos

Lista inicial — será expandida futuramente.

| Inimigo                    | Comportamento                         |
| -------------------------- | ------------------------------------- |
| Lobista                    | Drena mana (verba) por turno          |
| Cabo Eleitoral Corrompido  | Aplica debuff "desinformação"         |
| Jornalista Sensacionalista | Ataque de área, reduz HP de aliados   |
| Bot de Rede Social         | Se multiplica se não eliminado rápido |
| Político Veterano          | Escudo de imunidade parlamentar       |
| Boss de região             | Versão única por mapa                 |

---

## Itens

Lista inicial — será expandida futuramente.

| Item              | Efeito                               |
| ----------------- | ------------------------------------ |
| Santinho          | Poção de HP leve                     |
| Horário Eleitoral | Buff de ataque temporário            |
| Dossiê            | Remove imunidade parlamentar         |
| Caixa 2           | Poderoso, mas gera flag de escândalo |
| Apoio Popular     | Armadura que escala com nível        |

---

## Funcionalidades Confirmadas

- [x] Mapa como matriz 2D com símbolos no terminal
- [x] Movimento do jogador (WASD)
- [x] Sistema de combate por turnos
- [x] Inventário como vetor de structs
- [x] Level up com XP
- [x] Save/Load com `fwrite`/`fread` em arquivo binário
- [x] Ordem livre de regiões — afeta dificuldade naturalmente
- [x] Cores via ANSI Escape Codes
- [x] Animações momentâneas no combate (bloqueantes, com `usleep`)
- [x] Popularidade por região separada — afeta poder do boss final
- [x] Sistema de escândalos — flags acumulativos por ações desonestas
- [x] Aliados recrutáveis — máximo 2 simultâneos
- [x] Placar de votos — contador narrativo no canto da tela

### Aliados Recrutáveis

| Aliado                     | Bônus passivo                |
| -------------------------- | ---------------------------- |
| Líder comunitário do Norte | +resistência a debuffs       |
| Jornalista independente    | Revela HP real dos inimigos  |
| Advogada trabalhista       | Remove imunidade parlamentar |
| Agricultor familiar do Sul | Reduz custo de itens de cura |

---

## Sistema de Cores (ANSI)

```c
#define COR_VERMELHO "\033[31m"
#define COR_VERDE    "\033[32m"
#define COR_AMARELO  "\033[33m"
#define COR_AZUL     "\033[34m"
#define COR_MAGENTA  "\033[35m"
#define COR_CIANO    "\033[36m"
#define COR_BRANCO   "\033[37m"
#define RESET        "\033[0m"
```

---

## Sistema de Animação

Animações são **bloqueantes e momentâneas** — ocorrem durante o combate, travam o loop, tocam e continuam.
Implementadas com `system("clear")` + `usleep()` entre frames.
**Não usar input não-bloqueante** (`termios`/`kbhit`) — fora do escopo.

---

## Cronograma

| Semana | Meta                                             |
| ------ | ------------------------------------------------ |
| 1      | Structs, mapa, movimento básico, cores           |
| 2      | Combate, inimigos, XP, level up                  |
| 3      | Inventário, itens, baús, múltiplas áreas         |
| 4      | Save/load, animações, polish, corrigir segfaults |

---

## Funcionalidades Guardadas para Expansão

- Sistema de dias/agenda até a eleição
- Múltiplos mapas por região
- Animações de combate mais elaboradas
- Sistema de debate completo como alternativa ao combate

---

## Observações

- Projeto pessoal paralelo (sem prazo) será iniciado após o RPG
- Linguagem: **C puro**
- Ambiente: terminal Linux/Windows
- Inimigos e itens serão detalhados em sessões futuras
