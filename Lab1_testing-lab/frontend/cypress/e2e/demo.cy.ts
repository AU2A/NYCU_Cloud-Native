describe('My Todo Website Test', () => {
  it('Should load my website "/" and contain title "My Todos"', () => {
    cy.visit('/')
    cy.contains('My Todos')
  })
})

describe('Add Todo Testing', () => {
  describe('Add first todo', () => {
    it('Should add "Shop" todo', () => {
      cy.visit('/')
      cy.get('#name').type('Shop')
      cy.get('#description').type('buy apples, bananas, and oranges')
      cy.get('button').contains('Add Todo').click()
    })
  })
  describe('Add second todo', () => {
    it('Should add "Wash" todo', () => {
      cy.visit('/')
      cy.get('#name').type('Wash')
      cy.get('#description').type('wash car')
      cy.get('button').contains('Add Todo').click()
    })
  })
  describe('Add third todo', () => {
    it('Should add "Laundry" todo', () => {
      cy.visit('/')
      cy.get('#name').type('Laundry')
      cy.get('#description').type('do the laundry')
      cy.get('button').contains('Add Todo').click()
    })
  })
})

describe('Complete Todo Testing', () => {
  describe('Complete second todo', () => {
    it('Should complete "Wash" todo', () => {
      cy.visit('/')
      cy.get('div.Card').contains('h1', 'Wash').parent('.Card--text').parent('.Card').as('targetDiv')
      cy.get('@targetDiv').find('.Card--button__done').click()
    })
  })
  describe('Complete third todo', () => {
    it('Should complete "Laundry" todo', () => {
      cy.visit('/')
      cy.get('div.Card').contains('h1', 'Laundry').parent('.Card--text').parent('.Card').as('targetDiv')
      cy.get('@targetDiv').find('.Card--button__done').click()
    })
  })
})

describe('Delete Todo Testing', () => {
  describe('Delete first todo', () => {
    it('Should delete "Shop" todo', () => {
      cy.visit('/')
      cy.get('div.Card').contains('h1', 'Shop').parent('.Card--text').parent('.Card').as('targetDiv')
      cy.get('@targetDiv').find('.Card-button__delete').click()
    })
  })
  describe('Delete third todo', () => {
    it('Should delete "Laundry" todo', () => {
      cy.visit('/')
      cy.get('div.Card').contains('h1', 'Laundry').parent('.Card--text').parent('.Card').as('targetDiv')
      cy.get('@targetDiv').find('.Card-button__delete').click()
    })
  })
})
