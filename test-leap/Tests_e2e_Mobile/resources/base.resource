*** Settings ***
Documentation    Tudo deve comecar nesse arquivo
Library           AppiumLibrary

Resource    screens/login.resource
Resource    screens/home.resource


*** Keywords ***
Start session
    Open Application	http://localhost:4723
    ...                 platformName=Android
    ...	                deviceName=Meu Android
    ...	                automationName=UIAutomator2
    ...	                app=${EXECDIR}/app/opentrips.apk
    ...	                udid=USY9JN5P7XYHDIA6
    ...                 autoGrantPermissions=true
    
    Wait Until Page Contains       Login    10

Close session
    Close Application
