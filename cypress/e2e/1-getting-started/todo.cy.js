/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('https://www.saucedemo.com/',{failOnStatusCode: true})//cy.visit('/', {failOnStatusCode: false});
    //cy.wait(3000)
  })

  it('loggin', () => {
   // cy.title().should("eq","Swag Labs")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get('#login-button').click()  
    cy.wait(2000)

    //order products by name
    cy.get('.product_sort_container').select('az');
    cy.wait(2000)
    // Seleccionar "Name (Z to A)"
    cy.get('.product_sort_container').select('za');
    cy.wait(2000)
    
    //order products by price
    // Seleccionar "Price (low to high)"
    cy.get('.product_sort_container').select('lohi');
    cy.wait(2000)
    // Seleccionar "Price (high to low)"
    cy.get('.product_sort_container').select('hilo');
    cy.wait(2000)


    //add product to car, backpack
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //backpack
    cy.wait(500)
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() //bikeLight
    cy.wait(500)
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() //mameluco
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() //Tshirt red
    //cy.get('[data-test="shopping-cart-badge"]')//abrir carrito de compras
    cy.wait(2000)
    
    //remove product backpack
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    //check out
    cy.get('[data-test="shopping-cart-badge"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.wait(500)
    cy.get('[data-test="firstName"]').type("teamVIK")
    cy.get('[data-test="lastName"]').type("UAutonoma_Manizales")
    cy.get('[data-test="postalCode"]').type("170001")
    cy.get('[data-test="continue"]').click()
    cy.wait(1000)
    cy.get('[data-test="finish"]').click()
    cy.wait(500)
    cy.get('[data-test="back-to-products"]').click()


    //logout
    cy.get('#react-burger-menu-btn').click()
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()//logout-sidebar-link
  })

 /* it('logout', () => {
       cy.get('#react-burger-menu-btn')
       cy.get('#logout-sidebar-link').click()//logout-sidebar-link
     // .should('have.length', 3)
      //.last()
      //.should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click()

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist')
    })
  })*/
})
