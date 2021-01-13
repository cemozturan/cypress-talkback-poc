describe('Tests the app', () => {

  before(() => {
    cy.visit('/')
  })

  it('gets the users', () => {
    const mockUserName1 = 'Front enders'
    const mockUserName2 = 'PA Consulting'
    cy.get(`[data-testid=get-users-button]`).click()
    cy.get(`[data-testid=user-1]`).contains(mockUserName1)
    cy.get(`[data-testid=user-2]`).contains(mockUserName2)
  })
})
