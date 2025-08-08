import { home } from "../elements/home";
import { getText } from "../actions";

export default {
  verifyMessage(txt) {
    getText(home.welcomeMessage, txt)
  }
}