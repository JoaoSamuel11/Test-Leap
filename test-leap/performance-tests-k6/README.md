# Testes de Performance - K6

[![k6](https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white)](https://github.com/grafana/k6)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)


## 📌 Visão Geral
Este projeto utiliza o **K6** para realização de testes de performance. Ele permite simular altos volumes de tráfego para avaliar o desempenho, escalabilidade e a confiabilidade da sua aplicação sob estresse. O K6 fornece insights sobre o comportamento do seu sistema sob diferentes condições de carga.

## 🛠 Tecnologias Utilizadas
- **K6** - Uma ferramenta moderna para testes de carga, ideal para testar APIs, sites e serviços.
- **JavaScript** - Linguagem de script utilizada para escrever os testes no K6.

## Pré-requisitos
- Instalar o [Node.js](https://nodejs.org/)
- Instalar o [Git](https://git-scm.com/downloads) 

## Arquitetura do projeto
``` bash
k6-performance-test
  |-- reports               # Relatórios gerados pelos testes de performance
  |-- tests                 # Scripts dos testes de performance
  |   ├── login             # Pasta com testes específicos de login
  |   │   └── login-smoke-test.js
  |   ├── users             # Pasta com testes específicos de usuários
  |   │   └── users-smoke-test.js
  |-- utils                 # Arquivos utilitários para suporte aos testes
  |   ├── config.js         # Configurações gerais para os testes
  |   ├── helpers.js
  |-- README.md             # Documentação do projeto
```

## 🚀 Configuração do Ambiente para Testes de Performance com K6

### 📌 Requisitos

Antes de começar, instale as dependências necessárias:

1. **K6**: 
   - [Baixe o K6](https://k6.io/docs/getting-started/) ou use um dos gerenciadores de pacotes abaixo:
     - **Homebrew** (Mac/Linux): `brew install k6`
     - **Chocolatey** (Windows): `choco install k6`

---

### Clonando o Repositório e Adaptando a POC de Testes de Performance

#### 1. Clonar o Repositório

Clone o repositório principal para obter o código-fonte do projeto:

```bash
  git clone https://github.com/loomi/test-leap.git
```

#### 2. Copiar a Pasta de Testes de Performance

Copie a pasta `test-performance-k6` do repositório clonado para o seu projeto de teste, em um local desejado.

#### 3. Adaptar a POC para o Seu Projeto

Agora que a pasta de testes foi copiada, faça as seguintes adaptações:

1. **Abrir a pasta copiada**: Navegue até a pasta `test-performance-k6`.
2. **Revisar e ajustar os arquivos**:
   - **URLs de teste**: Atualize as URLs de teste conforme necessário.
   - **Dados de entrada e parâmetros**: Modifique conforme as necessidades do seu projeto.
   - **Nome do Projeto e Pasta**: Alterar o nome do projeto e as pastas de teste, se necessário, para refletir a estrutura do seu projeto.

## Exemplos de Script de Teste com K6

### Script de Teste: Teste de Carga

```bash
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const response = http.get('https://sua-api-endpoint.com');

  // Verificações básicas de status e tempo de resposta
  check(response, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1); // Simula o tempo de espera do usuário entre as requisições
}
```

### Script de Teste: Teste de Stress
```bash
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Aumenta de 0 a 10 usuários virtuais em 30 segundos
    { duration: '1m', target: 10 },  // Mantém 10 usuários virtuais por 1 minuto
    { duration: '30s', target: 0 },  // Diminui de 10 a 0 usuários virtuais em 30 segundos
  ],
};

export default function () {
  const response = http.get('https://sua-api-endpoint.com');

  check(response, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simula o tempo de espera do usuário entre as requisições
}
```

### 📌 Executando os testes
Para rodar os testes do K6 na sua máquina local, garanta que o K6 esteja instalado corretamente.
```bash
  k6 run tests/login/login-smoke-test.js
```

## 📊 Relatórios e Logs
Após executar os testes, os resultados serão armazenados na pasta results/:
```bash
  report.html → Relatório detalhado com as métricas de teste.
```
Para visualizar o relatório, basta abrir o arquivo report.html diretamente no navegador.

## Documentações
- [Documentação K6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
- [Node js](https://nodejs.org/pt/download)