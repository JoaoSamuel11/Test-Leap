
<h1>Robot Framework + Appium - Testes Automatizados Mobile</h1>

<h2>📌 Visão Geral</h2>
    <p>Este projeto utiliza <strong>Robot Framework</strong> e <strong>Appium</strong> para automação de testes mobile em aplicativos Android e iOS. Ele permite realizar testes funcionais, validar fluxos de usuários e garantir a estabilidade do app em diferentes dispositivos.</p>

<h2>🛠 Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Robot Framework</strong> - Framework de automação de testes</li>
        <li><strong>Appium</strong> - Ferramenta para automação de aplicações mobile</li>
        <li><strong>Python</strong> - Linguagem base para o Robot Framework</li>
        <li><strong>AppiumLibrary</strong> - Biblioteca para integração entre Robot Framework e Appium</li>
    </ul>

 <h2>🚀 Configuração do Ambiente</h2>

   <h3>📌 Requisitos</h3>
    <p>Antes de começar, instale os seguintes requisitos:</p>
    <ol>
        <li><strong>Python 3.7+</strong>: <a href="https://www.python.org/downloads/">Download</a></li>
        <li><strong>Node.js & npm</strong>: <a href="https://nodejs.org/">Download</a></li>
        <li><strong>Appium</strong>:<br><code>npm install -g appium</code><br><code>appium-doctor</code> - Verificar dependências</li>
        <li><strong>Appium Python Client</strong>:<br><code>pip install Appium-Python-Client</code></li>
        <li><strong>Robot Framework & AppiumLibrary</strong>:<br><code>pip install robotframework robotframework-appiumlibrary</code></li>
        <li><strong>Emulador Android ou Dispositivo Físico</strong><br>Para Android: Habilitar <strong>Depuração USB</strong> e <strong>Modo Desenvolvedor</strong><br>Para iOS: Configurar com <strong>Xcode</strong> e <strong>WebDriverAgent</strong></li>
    </ol>

<h2>📂 Estrutura do Projeto</h2>
    <pre><code>
appium-robot/
├── app/                          # Pasta que o apk vai ficar
│   └── app.apk             
├── logs/                         # Onde os relatórios gerados vao ficar
│   ├── log.html                  
│   ├── output.xml                
│   └── report.html               
├── resources/                    
│   │  └── base.resource          # Comandos globais como o start e close session  
│   └── screens/                  # Diretório contendo os screens/page Object            
│         ├── login.resource      
│         └── home.resource
├── testcases/                         # Testes end-to-end
│   ├── login.robot                
│   └── home.robot  
    </code></pre>

<h2>⚙️ Configuração do Appium</h2>
    <p>Arquivo <code>config.robot</code>:</p>
    <pre><code>
*** Variables ***
${REMOTE_URL}    http://localhost:4723/wd/hub
${PLATFORM_NAME}    Android
${DEVICE_NAME}    emulator-5554
${APP_PACKAGE}    com.example.app
${APP_ACTIVITY}    com.example.app.MainActivity
    </code></pre>

<h2>✅ Exemplo de Caso de Teste</h2>
    <p>Arquivo <code>login_test.robot</code>:</p>
    <pre><code>
*** Settings ***
Library    AppiumLibrary
Resource   ../resources/config.robot

*** Test Cases ***
Login com sucesso
    Open Application    ${REMOTE_URL}
    ...    platformName=${PLATFORM_NAME}
    ...    deviceName=${DEVICE_NAME}
    ...    appPackage=${APP_PACKAGE}
    ...    appActivity=${APP_ACTIVITY}
    
Input Text    xpath=//android.widget.EditText[@content-desc='username']    usuario_teste
    Input Text    xpath=//android.widget.EditText[@content-desc='password']    senha123
    Click Element    xpath=//android.widget.Button[@content-desc='login']
    Wait Until Element Is Visible    xpath=//android.widget.TextView[@content-desc='home']
    Capture Page Screenshot
    Close Application
    </code></pre>

<h2>🎯 Comandos Úteis</h2>

<h3>📌 Inicialização e Fechamento</h3>
<pre><code>
Open Application    ${REMOTE_URL}    platformName=Android    deviceName=emulator-5554
Close Application
    </code></pre>

<h3>📌 Interação com Elementos</h3>
    <pre><code>
Click Element    xpath=//android.widget.Button[@content-desc='botao']
Input Text    xpath=//android.widget.EditText[@content-desc='campo']    texto exemplo
Clear Text    xpath=//android.widget.EditText[@content-desc='campo']
Get Text    xpath=//android.widget.TextView[@content-desc='titulo']
    </code></pre>

<h3>📌 Esperas</h3>
<pre><code>
Wait Until Element Is Visible    xpath=//android.widget.TextView[@content-desc='carregado']    timeout=10s
Wait Until Page Contains    Texto esperado    timeout=5s
    </code></pre>

<h3>📌 Verificação de Elementos</h3>
<pre><code>
Element Should Be Visible    xpath=//android.widget.Button[@content-desc='botao']
Element Should Contain Text    xpath=//android.widget.TextView[@content-desc='titulo']    Título Esperado
    </code></pre>

<h3>📌 Captura de Tela</h3>
<pre><code>
Capture Page Screenshot
</code></pre>

<h2>📌 Execução dos Testes</h2>
    <p>Para rodar todos os testes:</p>
    <pre><code>
robot -d results testcases/
    </code></pre>

<p>Para rodar um teste específico:</p>
<pre><code>
robot -d results testcases/login_test.robot
</code></pre>

<h2>📊 Relatórios e Logs</h2>
<p>Após a execução, os relatórios ficam na pasta <code>results/</code>, incluindo:</p>
<ul>
        <li><strong>report.html</strong> → Relatório detalhado da execução</li>
        <li><strong>log.html</strong> → Logs dos testes</li>
        <li><strong>output.xml</strong> → Saída estruturada do Robot Framework</li>
</ul>

<p>📌 <strong>Dúvidas ou sugestões?</strong> Abra uma issue ou entre em contato! 🚀</p>
</body>
</html>
