# Automação de Testes Web (E2E) com Cypress

[![Cypress](https://img.shields.io/badge/Cypress-009688.svg?style=for-the-badge&logo=cypress&logoColor=white)](https://github.com/cypress)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)


## 📌 Visão Geral
Este projeto utiliza o **Cypress** para testes automatizados de ponta a ponta (E2E) em aplicações web. Além disso, está integrado com o **Allure** para geração de relatórios detalhados dos testes, facilitando a visualização dos resultados e métricas.

## 🛠 Tecnologias Utilizadas
- **Cypress** - Framework moderno de testes E2E.
- **JavaScript** - Linguagem de script utilizada nos testes.
- **Faker** - Biblioteca para geração de dados fictícios.
- **Allure Reports**  (opcional) - Geração de relatórios de testes mais detalhados.

## ✅ Pré-requisitos
- Node.js instalado - [Download](https://nodejs.org/)
- Git instalado - [Download](https://git-scm.com/downloads) 

## Arquitetura do projeto
``` bash
📦 projeto-cypress
│
├── 📁 allure-results          # Resultados dos testes para gerar o relatório Allure
├── 📁 e2e
│   └── 📁 gui
│       └── login.cy.js         # Testes E2E da funcionalidade de login
│
├── 📁 fixtures
│   ├── 📁 images              # Imagens mockadas usadas nos testes
│   └── 📁 messages
│       ├── msgLogin.json       # Mensagens de erro/sucesso de login
│       └── msgHome.json        # Mensagens utilizadas na home
│
├── 📁 support
│   ├── 📁 elements
│   │   ├── login.js               # Selectors/locators da tela de login
│   │   └── home.js                # Selectors/locators da tela home
│   ├── 📁 pages
│   │   ├── homePage.js         # Page Object da tela Home
│   │   └── loginPage.js        # Page Object da tela Login
│   ├── actions.js              # Ações reutilizáveis em vários testes
│   ├── commands.js             # Comandos customizados para Cypress
│   ├── e2e.js                  # Arquivo principal que carrega suporte
│   └── utils.js                # Funções utilitárias auxiliares
│
├── cypress.config.js           # Arquivo de configuração do Cypress
├── cypress.env.json            # Variáveis de ambiente para os testes
└── README.md                   # Documentação do projeto
```

### 📥 1. Clonando o repositório
Clone o repositório principal:

```bash
  git clone https://github.com/loomi/test-leap.git
```

### 📂 2. Copiando a pasta de testes
Copie a pasta web-tests-cypress do repositório clonado para o seu projeto.

### 3. Configuração do ambiente
- Navegue até a pasta web-tests-cypress
- Atualize URLs e dados de entrada conforme seu ambiente
- Renomeie a pasta ou projeto, se necessário

Configuração de Variáveis de Ambiente:

As variáveis de ambiente são configuradas no arquivo cypress.env.json, que deve ser criado na raiz do projeto.

Exemplo de configuração:
```bash
{
   "BASE_URL": "https://sua-url.com",
   "EMAIL": "teste@teste.com"
}
```
Importante: Não compartilhe esse arquivo em repositórios públicos se ele contiver dados sensíveis.

### 📦 4. Instalando as dependências
No terminal, dentro da pasta do projeto, execute:
```bash
   npm install
```
Isso instalará o Cypress, Allure e outras dependências necessárias.

### 📌 Executando os testes
Para executar os testes E2E:
```bash
   npm run ui:prod
```

Isso instalará o Cypress, Allure e outras dependências necessárias.

## 📊 Relatórios e Logs
Após executar os testes, os resultados ficam salvos na pasta allure-results/.

### 🔍 Visualização temporária (servidor local)
```bash
   allure serve allure-results
```

### 💾 Geração de relatório persistente
Cria a pasta allure-report/ e para visualizar o relatório basta abrir abra o arquivo report.html no navegador.
```bash
   npm run allure:report
```

## Documentações
- [Cypress](https://docs.cypress.io/)
- [Node js](https://nodejs.org/pt/download)
- [Allure](https://allurereport.org/docs/cypress/)