*** Settings ***
Library           AppiumLibrary

Resource    ../resources/base.resource

Test Setup       Start session
Test Teardown    Close session

*** Test Cases ***
Deve ir para a tela de despesas
    Go to despesas

Deve ir para a tela de relatórios
    Go to roletorios

Deve ir para a tela de adiantamentos
    Go to adiantamentos

Deve ir para a tela de reembolsos
    Go to reembolsos

Deve ir para a tela de perfil
    Go to perfil