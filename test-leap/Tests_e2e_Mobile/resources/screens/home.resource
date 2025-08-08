*** Settings ***
Documentation    Elementos e acoes da tela de login
Library           AppiumLibrary

Resource    login.resource
Resource    ../environment/environment.resource

*** Variables ***
# seletores
${BTN_DESPESAS}                                     xpath=//*[@content-desc="Despesas"]
${BTN_RELATORIOS}                                   xpath=//*[@content-desc="Relatórios"]
${BTN_ADIANTAMENTOS}                                xpath=//*[@content-desc="Adiantamentos"]
${BTN_REEMBOLSOS}                                   xpath=//*[@content-desc="Reembolso"]
${BTN_PERFIL}                                       xpath=//*[@content-desc="go_to_profile_screen_button"]
# textos validacao de tela
${TELA_ADIANTAMENTOS}                               Adiantamento
${TELA_RELATORIOS}                                  Relatórios
${TELA_DESPESAS}                                    Despesas
${TELA_PERFIL}                                      Perfil

*** Keywords ***
Go to despesas
    Do login                             EMAIL=${EMAIL}    SENHA=${SENHA}
    Wait Until Page Contains             ${MENSAGEM_DE_LOGIN_COM_SUCESSO}                   20
    Click Element                        ${BTN_DESPESAS}
    Wait Until Page Contains             ${TELA_DESPESAS}                                   20

Go to roletorios
    Do login                             EMAIL=${EMAIL}    SENHA=${SENHA}
    Wait Until Page Contains             ${MENSAGEM_DE_LOGIN_COM_SUCESSO}                   20
    Click Element                        ${BTN_RELATORIOS}
    Wait Until Page Contains             ${TELA_RELATORIOS}                                 20

Go to adiantamentos
    Do login                             EMAIL=${EMAIL}    SENHA=${SENHA}
    Wait Until Page Contains             ${MENSAGEM_DE_LOGIN_COM_SUCESSO}                   20
    Click Element                        ${BTN_ADIANTAMENTOS}
    Wait Until Page Contains             ${TELA_ADIANTAMENTOS}                              20

Go to reembolsos
    Do login                             EMAIL=${EMAIL}    SENHA=${SENHA}
    Wait Until Page Contains             ${MENSAGEM_DE_LOGIN_COM_SUCESSO}                   20
    Click Element                        ${BTN_REEMBOLSOS}
    Wait Until Page Contains             ${TELA_DESPESAS}                                   20

Go to perfil
    Do login                             EMAIL=${EMAIL}    SENHA=${SENHA}
    Wait Until Page Contains             ${MENSAGEM_DE_LOGIN_COM_SUCESSO}                   20
    Click Element                        ${BTN_PERFIL}
    Wait Until Page Contains             ${TELA_PERFIL}                                     20