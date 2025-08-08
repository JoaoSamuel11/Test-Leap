*** Settings ***
Library           AppiumLibrary

Resource    ../resources/base.resource

Test Setup       Start session
Test Teardown    Close session


*** Test Cases ***
Deve logar com sucesso
    Do login                                           EMAIL=${EMAIL}                           SENHA=${SENHA}
    Wait Until Page Contains                           ${MENSAGEM_DE_LOGIN_COM_SUCESSO}         10

Deve logar com sucesso como aprovador
    Do login                                           EMAIL=${EMAIL_APROVADOR}                           SENHA=${SENHA_APROVADOR}
    Wait Until Page Contains                           ${MENSAGEM_DE_LOGIN_COM_SUCESSO}         10

Deve tentar logar com email em branco
    Do login                                           EMAIL=                                   SENHA=${SENHA}
    Wait Until Page Contains                           ${MENSAGEM_DE_ERRO_CAMPO_OBRIGATORIO}    10

Deve tentar logar com senha em branco
    Do login                                           EMAIL=${EMAIL}                           SENHA=
    Wait Until Page Contains                           ${MENSAGEM_DE_ERRO_CAMPO_OBRIGATORIO}    10

Deve tentar logar com email inválido
    Do login                                           EMAIL=TESTE                              SENHA=${SENHA}
    Wait Until Page Contains                           ${MENSAGEM_DE_ERRO_LOGIN_INVALIDO}       10
