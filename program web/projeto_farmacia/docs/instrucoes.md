# Instruções do Trabalho - Projeto Farmácia

Este arquivo resume as instruções do professor e transforma o enunciado em um checklist prático para o projeto FarmaSys.

## 1. Visão Geral

O trabalho consiste no desenvolvimento de um website completo em grupo, aplicando os conteúdos vistos ao longo do semestre.

| Entrega        | Prazo              | Foco                    | Valor    | O que entregar                       |
| -------------- | ------------------ | ----------------------- | -------- | ------------------------------------ |
| Entrega 1 (GA) | Metade do semestre | HTML + CSS              | 4 pontos | Site publicado via FTP + Relatório 1 |
| Entrega 2 (GB) | Final do semestre  | HTML + CSS + JavaScript | 4 pontos | Site publicado via FTP + Relatório 2 |

## 2. Tema Escolhido

**Tema 7 - Sistema de Farmácia (Vitrine e Gestão)**
Grupo: Eduardo Luiz, Nicolas e Franco.

O site deve representar uma farmácia fictícia com três pilares principais:

- Gestão de estoque de medicamentos.
- Consulta e apresentação de medicamentos.
- Fluxo de venda, carrinho e geração de documentos.

## 3. Divisão de Tarefas

| Integrante | Responsabilidade principal            |
| ---------- | ------------------------------------- |
| Franco     | Controle de estoque, venda e carrinho |
| Eduardo    | Home e geração de receita             |
| Nicolas    | Catálogo e ficha do medicamento       |

## 4. Páginas Sugeridas Para o Tema

| Página               | Objetivo                                                                       |
| -------------------- | ------------------------------------------------------------------------------ |
| Home                 | Painel resumo com alertas, vendas do dia e atalhos para as seções              |
| Catálogo de Produtos | Lista de medicamentos com nome, laboratório, preço e disponibilidade           |
| Ficha do Medicamento | Detalhes do medicamento, composição, indicação e exigência de receita          |
| Controle de Estoque  | Tabela de produtos, validade, quantidade, mínimo e formulário de entrada/saída |
| Vendas / Carrinho    | Registro de venda, seleção de produtos, total e conferência de receita         |
| Geração de Receita   | Formulário com paciente, médico, CRM, medicamento, dosagem e posologia         |
| Contato / SAC        | Atendimento, horários e localização fictícia da farmácia                       |

Observação: as páginas são sugestões. Para a Entrega 1, o requisito técnico mínimo é ter pelo menos 5 páginas HTML distintas.

## 5. Entrega 1 (GA) - HTML + CSS

Nesta entrega o professor avalia a estrutura e a apresentação visual do site. A camada de JavaScript fica para a Entrega 2.

### 5.1 Mapa do Site

O grupo deve entregar um sitemap junto com o relatório.

Checklist:

- [x] Criar o mapa do site em imagem PNG ou PDF.
- [x] Identificar a página inicial.
- [x] Mostrar todas as páginas secundárias.
- [x] Indicar os links de navegação entre páginas.
- [x] Inserir a imagem no relatório.

Arquivo atual do projeto: `docs/sitemap_farmacia.png`.

### 5.2 Requisitos de HTML

Checklist obrigatório:

- [x] Mínimo de 5 páginas HTML distintas.
- [x] Menu de navegação funcional nas páginas.
- [x] Uso de HTML semântico: `header`, `nav`, `main`, `section`, `article` e `footer`.
- [x] Pelo menos uma página com formulário.
- [x] Uso de cabeçalhos hierárquicos (`h1`, `h2`, `h3`).
- [x] Links internos funcionando.

### 5.3 Requisitos de CSS

Checklist obrigatório:

- [x] CSS em arquivo externo.
- [x] Layout responsivo para desktop e celular.
- [x] Uso de Flexbox ou CSS Grid.
- [x] Paleta de cores consistente.
- [x] Estilização de formulário.
- [x] Estilização de navegação.
- [x] Estilização de grade de conteúdo.
- [x] Uso de media queries.
- [x] Evitar estilos inline e tag `style` dentro do HTML.

Arquivo CSS atual: `src/styles/main.css`.

### 5.4 Publicação

O site deve ser publicado em servidor web via FTP fornecido pelo professor.

O relatório deve conter:

- [x] URL do site publicado.
- [x] URL do projeto no GitHub.

## 6. Relatório da Entrega 1

O relatório deve ser entregue em PDF ou DOCX e conter:

- [x] Nome e matrícula dos integrantes.
- [x] Descrição do tema escolhido.
- [x] Mapa do site incorporado.
- [x] Descrição das páginas criadas.
- [x] URL do site publicado.
- [x] URL do GitHub.
- [x] Dificuldades encontradas e como foram superadas.
- [x] Divisão de tarefas entre os integrantes.
