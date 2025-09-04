describe('Engage Sphere - Teste Básico', () => {
  it('deve carregar a página inicial', () => {
    cy.visit('/')
    cy.title().should('not.be.empty')
  })
});

it('navegando pelo site', function() {
  cy.visit('https://engage-sphere.vercel.app')
  cy.get('.CookieConsent_buttons__usQFh :nth-child(1) button').click();
  cy.get('[data-testid="name"]').click();
  cy.get('[data-testid="name"]').type('Marie');
  cy.get('h2').should('be.visible');
  cy.get('[data-testid="name"]').clear();
  cy.get('[data-testid="name"]').type('Randerson');
  cy.get('h2').should('be.visible');
  cy.get('[data-testid="name"]').type('Lorena');
  cy.get('h2').should('be.visible');
});
