*** Settings ***
Documentation    Elementos e acoes da tela de login
Library           AppiumLibrary

*** Variables ***
# seletores
${CAMPO_LOGIN}                           xpath=//*[@resource-id="loginFieldLoginScreenKey"]
${CAMPO_SENHA}                           xpath=//*[@resource-id="passwordFieldLoginScreenKey"]
${BTN_ENTRAR}                            xpath=//*[@content-desc="Entrar"]
# mensgens de erro e validacao de tela
${EMAIL_INVALIDO}                        Email_invalido
${MENSAGEM_DE_ERRO_LOGIN_INVALIDO}       Usuário ou senha inválido
${MENSAGEM_DE_ERRO_CAMPO_OBRIGATORIO}    Campo obrigatório
${MENSAGEM_DE_LOGIN_COM_SUCESSO}         Home

*** Keywords ***
Do login
    [Arguments]    ${EMAIL}    ${SENHA}
    Wait Until Element Is Visible        ${CAMPO_LOGIN}                  20
    Click Element                        ${CAMPO_LOGIN}
    Input Text Into Current Element      ${EMAIL}
    Wait Until Element Is Visible        ${CAMPO_SENHA}                  20
    Click Element                        ${CAMPO_SENHA}
    Input Text Into Current Element      ${SENHA}
    Hide Keyboard
    Click Element                        ${BTN_ENTRAR}