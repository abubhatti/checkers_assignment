class Checker {
  getMessageText() {
    return '#message';
  }

  getFirstMove() {
    return '[name="space22"]';
  }

  getSecondMove() {
    return '[name="space42"]';
  }

  getThirdMove() {
    return '[name="space51"]';
  }

  getFifthMove() {
    return '[name="space11"]';
  }

  getFirstMovePosition() {
    return '[name="space13"]';
  }

  getSecondMovePosition() {
    return '[name="space33"]';
  }

  getForthMovePosition() {
    return '[name="space04"]';
  }

  visitSite(data) {
    cy.session('Visit Site', () => {
      cy.visit(Cypress.env('/'));
    });
  }

  verifySiteLoaded(data) {
    cy.get(this.getMessageText()).should('have.text', data.selectMessageText);
  }

  firstOrangeMove(data) {
    cy.get(this.getFirstMove()).click();
    cy.get(this.getFirstMovePosition()).click().wait(5000);

    cy.get(this.getMessageText()).should('have.text', data.makeMoveText);
  }

  secondOrangeMove(data) {
    cy.get(this.getSecondMove()).click();
    cy.get(this.getSecondMovePosition()).click().wait(5000);

    cy.get(this.getMessageText()).should('have.text', data.makeMoveText);
  }

  thirdOrangeMoveAndTakeBlue(data) {
    cy.get(this.getThirdMove()).click();
    cy.get(this.getSecondMovePosition()).click().wait(5000);

    cy.get(this.getMessageText()).should('have.text', data.makeMoveText);
  }

  forthOrangeMove(data) {
    cy.get(this.getFirstMovePosition()).click();
    cy.get(this.getForthMovePosition()).click().wait(5000);

    cy.get(this.getMessageText()).should('have.text', data.makeMoveText);
  }

  fifthOrangeMoveAndTakeBlue(data) {
    cy.get(this.getFifthMove()).click();
    cy.get(this.getSecondMovePosition()).click().wait(5000);

    cy.get(this.getMessageText()).should('have.text', data.makeMoveText);
  }

  restartGameAndVerify(data) {
    cy.contains('a', 'Restart').click();
    cy.get(this.getMessageText()).should('have.text', data.selectMessageText);
  }
}
export default Checker;
