# 💊 FarmaSys

Sistema web de gestão para farmácias fictícias desenvolvido como projeto acadêmico da disciplina de Programação Web.

O FarmaSys simula o ambiente operacional de uma farmácia moderna, integrando funcionalidades de catálogo de medicamentos, controle de estoque, fluxo de vendas e geração de receitas médicas.

Desenvolvido inteiramente com HTML5 e CSS3, sem frameworks externos, o projeto prioriza organização estrutural, identidade visual consistente e responsividade manual utilizando media queries. Porque sofrer com CSS faz parte do ritual de passagem da computação. É praticamente um boss obrigatório da faculdade.

---

## 🚀 Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Recursos adicionais

- Font Awesome (ícones)
- CSS Grid
- Flexbox
- Media Queries

---

## 📂 Estrutura do Projeto

```bash
PROJETO_FARMACIA/
│
├── docs/
│   ├── instrucoes.md
│   └── sitemap_farmacia.png
│
├── src/
│   │
│   ├── components/
│   │   ├── footer.html
│   │   └── nav.html
│   │
│   ├── pages/
│   │   ├── carrinho.html
│   │   ├── catalogo.html
│   │   ├── estoque.html
│   │   ├── ficha.html
│   │   ├── index.html
│   │   └── receita.html
│   │
│   └── styles/
│       └── main.css
│
└── README.md
```

---

# 📌 Funcionalidades

## 🏠 Home

Painel principal do sistema com:

- métricas operacionais
- alertas de estoque
- produtos mais vendidos
- histórico de vendas
- status do turno atual

---

## 💊 Catálogo de Produtos

Exibição visual dos medicamentos disponíveis contendo:

- nome comercial
- laboratório
- preço
- disponibilidade
- classificação do medicamento

---

## 📄 Ficha do Medicamento

Consulta detalhada contendo:

- composição química
- contraindicações
- posologia
- classificação regulatória
- informações técnicas

---

## 📦 Controle de Estoque

Sistema de inventário com:

- quantidade disponível
- validade
- controle de reposição
- alertas de estoque crítico
- entradas e saídas de produtos

---

## 🛒 Carrinho / Vendas

Fluxo de vendas da farmácia:

- seleção de produtos
- cálculo de valores
- controle de quantidades
- validação de receita médica
- comprovante fictício

---

## 🧾 Geração de Receita

Sistema de receitas médicas fictícias com:

- múltiplos tipos de receituário
- dados do médico e paciente
- pré-visualização em tempo real
- histórico de receitas
- impressão formatada

---

# 🎯 Objetivo do Projeto

O FarmaSys foi desenvolvido com foco em praticar conceitos fundamentais de desenvolvimento web, incluindo:

- Estruturação semântica com HTML5
- Estilização avançada com CSS3
- Responsividade manual
- Organização de componentes
- Arquitetura visual consistente
- Navegação entre páginas
- Trabalho colaborativo com GitHub

---

# 📱 Responsividade

O projeto foi desenvolvido com adaptação para diferentes tamanhos de tela utilizando media queries manuais.

### Breakpoints utilizados

- 768px
- 480px
- 360px

A interface foi construída inicialmente para desktop e posteriormente adaptada para dispositivos móveis.

Porque aparentemente cada celular existente no planeta decidiu ter um tamanho diferente só para irritar desenvolvedores front-end.

---

# 🛠️ Organização do CSS

A arquitetura visual utiliza:

- CSS Grid para estruturas principais
- Flexbox para componentes internos
- Variáveis CSS para identidade visual
- Sistema padronizado de espaçamentos e layout

---

# 🧠 Desafios do Desenvolvimento

## 🔀 Conflitos de Merge

O desenvolvimento colaborativo gerou conflitos no CSS compartilhado, resolvidos através de:

- branches separadas
- reorganização do fluxo de trabalho
- revisão conjunta do código

Experiência clássica de Git:

> "funciona na minha máquina" versus a realidade objetiva do universo.

---

## 📐 Responsividade

A adaptação para múltiplos dispositivos exigiu:

- reestruturação de layouts
- reorganização de componentes
- ajustes manuais em breakpoints

---

## 🎨 Grid vs Flexbox

Foi definida uma convenção interna:

- Grid para layouts macro
- Flexbox para alinhamentos internos

Isso reduziu conflitos e tornou o CSS mais previsível e organizado.

Milagre raro em projetos acadêmicos: padronização antes do colapso mental coletivo.

---

# 👥 Equipe

| Integrante       | Responsabilidade                |
| ---------------- | ------------------------------- |
| Eduardo Luiz     | Home e Receita                  |
| Nicolas Lacerda  | Catálogo e Ficha do Medicamento |
| Franco Mascarelo | Estoque e Carrinho              |

A estilização global e a responsividade foram desenvolvidas de forma colaborativa.

---

# 🚀 Como Executar

## 1. Clone o repositório

```bash
git clone https://github.com/aKynoS2/projeto_farmacia.git
```

---

## 2. Abra a pasta do projeto

```bash
cd projeto_farmacia
```

---

## 3. Execute o sistema

Abra o arquivo abaixo no navegador:

```bash
src/pages/index.html
```

---

# 📷 Documentação

O projeto contém documentação complementar na pasta:

```bash
docs/
```

Incluindo:

- instruções
- sitemap do sistema

---

# 📚 Disciplina

Projeto desenvolvido para a disciplina de Programação Web.

**FTEC - ADS 2026/1**

---

# 👨‍💻 Repositório

[GitHub do Projeto](https://github.com/aKynoS2/projeto_farmacia?utm_source=chatgpt.com)

---

# 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.
