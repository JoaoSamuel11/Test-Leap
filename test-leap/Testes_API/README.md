  <h1>🧪 Testes de API com Cypress</h1>
  <p>Este repositório contém um projeto de testes automatizados de API utilizando o <a href="https://www.cypress.io/">Cypress</a> na abordagem <strong>headless</strong>. A ideia é validar endpoints REST de forma rápida, confiável e escalável.</p>

  <h2>⚙️ Tecnologias</h2>
  <ul>
    <li><a href="https://www.cypress.io/">Cypress</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a> (opcional, se configurado)</li>
    <li><a href="https://github.com/faker-js/faker">Faker.js</a> (para dados fake, opcional)</li>
    <li><a href="https://github.com/motdotla/dotenv">dotenv</a> (para variáveis de ambiente)</li>
  </ul>

  <h2>🚀 Instalação</h2>
  <p>1. Clone o repositório:</p>
  <pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio</code></pre>
  <p>2. Instale as dependências:</p>
  <pre><code>npm install
# ou
yarn</code></pre>
  <p>3. Configure as variáveis de ambiente no arquivo <code>.env</code>:</p>
  <pre><code>API_BASE_URL=https://sua-api.com
API_TOKEN=seu-token-opcional</code></pre>
  <p>4. (Opcional) Configure o TypeScript:</p>
  <pre><code>npx tsc --init</code></pre>

  <h2>🧪 Executando os testes</h2>
  <h3>Rodar todos os testes em modo headless:</h3>
  <pre><code>npx cypress run</code></pre>
  <h3>Rodar os testes com interface (modo interativo):</h3>
  <pre><code>npx cypress open</code></pre>

  <h2>📁 Estrutura de pastas</h2>
  <pre><code>cypress/
  ├── e2e/
  │   ├── api/
  │   │   ├── users.cy.js
  │   │   └── auth.cy.js
  ├── support/
  │   ├── commands.js
  │   └── e2e.js
.env
cypress.config.js</code></pre>

  <h2>✅ Boas práticas</h2>
  <ul>
    <li>Crie testes independentes entre si.</li>
    <li>Utilize fixtures para dados estáticos e mocks.</li>
    <li>Use variáveis de ambiente para manter tokens e URLs fora do código.</li>
    <li>Documente bem os testes com <code>describe</code> e <code>it</code>.</li>
  </ul>

  <h2>🧩 Exemplo de teste de API</h2>
  <pre><code>describe('GET /users', () => {
  it('deve retornar lista de usuários com status 200', () => {
    cy.request(`${Cypress.env('API_BASE_URL')}/users`)
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
      })
  })
})</code></pre>

  <h2>🤝 Contribuindo</h2>
  <p>Pull requests são bem-vindos! Para mudanças maiores, abra uma issue para discutir o que deseja alterar.</p>
  <ol>
    <li>Fork este repositório</li>
    <li>Crie sua feature branch: <code>git checkout -b minha-feature</code></li>
    <li>Commit suas alterações: <code>git commit -m 'feat: nova feature'</code></li>
    <li>Push para a branch: <code>git push origin minha-feature</code></li>
    <li>Abra um Pull Request</li>
  </ol>
