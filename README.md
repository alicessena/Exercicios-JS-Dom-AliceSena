<div align="center">

# Lista de Exercícios - Manipulação do DOM e Validação em JavaScript
[![Teste Agora](https://i.imgur.com/NjMHH9O.png)](https://alicessena.github.io/landingPageLaslesVPN/)

</div>

Este repositório contém a resolução da **Lista de Exercícios da Aula 37** (Profª *Rafaella Matos*), com foco na consolidação dos fundamentos de **manipulação do DOM**, **eventos** e **validação de formulários** em **JavaScript puro**.

O projeto é composto por quatro exercícios, cada um com um arquivo **HTML** e seu respectivo arquivo **JavaScript externo**.

---

##  Estrutura do Projeto

A organização dos arquivos no repositório é a seguinte:

```
Exercicios-JS-Dom-AliceSena/
├── questao01/
│   ├── questao01.html
│   └── questao01.js
│
├── questao02/
│   ├── questao02.html
│   └── questao02.js
│
├── questao03/
│   ├── questao03.html
│   └── questao03.js
│
├── questao04/
│   ├── questao04.html
│   └── questao04.js
│
├── index.html
└── README.md
```

O arquivo **index.html** serve como um menu central para navegar entre as quatro questões, facilitando a visualização e os testes de cada exercício.

---

##  Exercícios e Objetivos

---

###  **Questão 01 — Manipulação do DOM**

**Arquivos:** `questao01.html`, `questao01.js`

**Objetivo:**  
Capturar o valor de um campo de texto e inseri-lo dinamicamente dentro do `<h1>` de cabeçalho, alterando também o seu estilo (cor).

**Conceitos utilizados:**  
- `document.getElementById()`  
- `.value`  
- `.innerText`  
- `.style.color`

---

###  **Questão 02 — Evento de clique e estilo**

**Arquivos:** `questao02.html`, `questao02.js`

**Objetivo:**  
Implementar um *toggle* (alternância) no estilo de uma `<div>` — de círculo para quadrado — e no texto de um botão utilizando um evento de clique.

**Conceitos utilizados:**  
- Evento `onclick`  
- `.style.borderRadius`  
- Condicionais `if/else`

---

###  **Questão 03 — Formulário e exibição de dados** 

**Arquivos:** `questao03.html`, `questao03.js`

**Objetivo:**  
Capturar múltiplos campos de um formulário de cadastro e concatenar os dados em uma única frase informativa, exibindo o resultado formatado na página.

**Conceitos utilizados:**  
- Captura de múltiplos *inputs*  
- Template Strings (`` `texto ${variavel}` ``)  
- Estilização de texto dinâmico

---

###  **Questão 04 — Validação de formulário**

**Arquivos:** `questao04.html`, `questao04.js`

**Objetivo:**  
Realizar a validação de campos obrigatórios (Nome e CPF) e validar o formato do CPF utilizando **Expressões Regulares (Regex)**. Exibir mensagens de sucesso ou erro com cores distintas.

**Conceitos utilizados:**  
- Validação de campos vazios  
- Expressões Regulares (`.test()`)  
- Fluxo de validação com `if/else if/else`

---

##  Como Executar

Para rodar o projeto localmente e testar as funcionalidades:

### 1️ - Clone o repositório:
```bash
git clone [link-do-seu-repositorio]
cd Exercicios-JS-Dom-AliceSena
```

### 2️ - Abra o arquivo:
Abra o arquivo `index.html` no seu navegador web.  
Recomenda-se usar a extensão **Live Server** do VS Code para uma visualização dinâmica.

### 3️ - Navegue:
Utilize o menu principal presente no `index.html` para acessar e interagir com cada uma das quatro questões.

---


| <img width="120" src="https://github.com/alicessena.png"> |
|:----------------------------------------------------------:|
| **Alice Sena** |
| **Desenvolvedora FullStack** |