import { login } from "../elements/login";
import { click, set, getText } from "../actions";

const fillLoginField = (field, value) => {
  if (value !== '') {
    click(field);
    set(field, value, { log: false })
  }
}

export default {  
  fillLoginFields(email, password) {
    fillLoginField(login.emailField, email)
    fillLoginField(login.passField, password)
      
    click(login.submitBtn)
  },

  verifyMessage(txt) {
    getText(login.alertError, txt)
  }
}