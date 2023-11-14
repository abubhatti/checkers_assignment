import Checker from '../support/pages/checkers.PO';

const checkers = new Checker();

describe("Checker's Game", function () {
  beforeEach(function () {
    cy.fixture(Cypress.env('fixtureFile')).then((data) => {
      this.data = data;
      cy.session('Visit Site', () => {
        cy.visit('/');
      });
    });
  });

  it("Should Visit Site And Verify It's Loaded Successfully", function () {
    checkers.verifySiteLoaded(this.data);
  });

  it('First Orange Move', function () {
    checkers.firstOrangeMove(this.data);
  });

  it('Second Orange Move', function () {
    checkers.secondOrangeMove(this.data);
  });

  it('Third Orange Move And Take One Blue', function () {
    checkers.thirdOrangeMoveAndTakeBlue(this.data);
  });

  it('Forth Orange Move', function () {
    checkers.forthOrangeMove(this.data);
  });

  it('Fifth Orange Move And Take One Blue', function () {
    checkers.fifthOrangeMoveAndTakeBlue(this.data);
  });

  it('Restart Game And Verify Its Successful', function () {
    checkers.restartGameAndVerify(this.data);
  });
});
