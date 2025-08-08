function click(el) {
  waitElement(el);
  cy.get(el, { timeout: 10000 }).click();
}

function clickIndex(el, index) {
  waitElement(el);
  cy.get(el).eq(index).click();
}

function clickForce(el) {
  waitElement(el);
  cy.get(el).click({ force: true });
  return click;
}

function clickByText(txt) {
  cy.contains(txt).click();
}

function waitElement(el) {
  return cy.get(el, { timeout: 10000}).should("be.visible");
}

function getText(el, expectedText) {
  waitElement(el);
  cy.get(el, { timeout: 50000 })
    .invoke('text')
    .should('equal', expectedText);
}

function set(el, text, option) {
  waitElement(el);
  cy.get(el).clear().type(text, option);
}

function setFieldAndPressEnter(el, text) {
  cy.get(el).type(`${text}{enter}`);
}

function getMessages(el, expectedMessages) {
  cy.get(el).each(($el, index) => {
      cy.wrap($el)
        .should('be.visible')
        .invoke('text')
        .should('equal', expectedMessages[index]);
    });
}

function selectOptionByValue(index, value) {
  cy.get('select')
    .eq(index)
    .select(value, { force: true })
}

function validateByText(text) {
  cy.contains(text).should('be.visible');
}

function upload(el, img) {
  cy.get(el).selectFile(img, { force: true });
}

function clear(el) {
  waitElement(el);
  cy.get(el).clear({force: true});
}

module.exports = {
  set, 
  click, 
  waitElement, 
  getText, 
  getMessages, 
  clickIndex, 
  clickForce, 
  clear, 
  upload, 
  setFieldAndPressEnter, 
  clickByText,
  selectOptionByValue,
  validateByText,
};