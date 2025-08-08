# Automação de Testes Web (E2E) com Cypress

[![Cypress](https://img.shields.io/badge/Cypress-009688.svg?style=for-the-badge&logo=cypress&logoColor=white)](https://github.com/cypress) <br> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## 📌 Visão Geral
Este projeto utiliza o **Cypress** para automação de testes de ponta a ponta (E2E) em aplicações web.  
Além disso, utilizamos o recurso de **Custom Commands**, que é uma funcionalidade do próprio Cypress para criar comandos personalizados, deixando os testes mais organizados e reutilizáveis.

## 🛠 Tecnologias Utilizadas
- **Cypress** - Framework moderno de testes E2E.
- **JavaScript** - Linguagem de script utilizada nos testes.

## ✅ Pré-requisitos
- Node.js instalado - [Download](https://nodejs.org/)
- Git instalado - [Download](https://git-scm.com/downloads)

## 🏛 Arquitetura do Projeto
```bash
📦 projeto-cypress
│
├── 📁 e2e
│    └── login.cy.js            # Testes E2E da funcionalidade de login
│
├── 📁 support
│   ├── 📁 commands
│   │   ├── commons.js          # Comandos comuns reutilizáveis
│   │   ├── home.js             # Comandos específicos da home
│   │   └── login.js            # Comandos específicos de login
│   ├── 📁 elements
│   │   ├── home.js             # Selectors/locators da tela home
│   │   └── login.js            # Selectors/locators da tela login
│   ├── commands.js             # Arquivo que importa todos os comandos customizados
│   ├── e2e.js                  # Arquivo principal que carrega suporte
│
├── cypress.config.js           # Arquivo de configuração do Cypress
├── cypress.env.json            # Variáveis de ambiente para os testes
└── README.md                   # Documentação do projeto`
```

### 📥 1. Clonando o repositório
Clone o repositório principal:

```bash
  git clone https://github.com/loomi/test-leap.git
```

### 📂 2. Copiando a pasta de testes
Copie a pasta web-tests-cypress-commands do repositório clonado para o seu projeto.

### 3. Configuração do ambiente
- Navegue até a pasta web-tests-cypress-commands
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

### 📌 5. Executando os testes
Para executar os testes E2E pela interface:
```bash
   npx cypress open
```

Para executar os testes E2E em modo headless:
```bash
   npx cypress run
```

## Documentações
- [Cypress](https://docs.cypress.io/)
- [Node js](https://nodejs.org/pt/download)
- [Allure](https://allurereport.org/docs/cypress/)