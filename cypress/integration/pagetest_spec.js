describe("this is my first page test demo", () => {
  it("visit the music home", () => {
    cy.viewport(1920, 1080)
    cy.visit("https://music.163.com")
    cy.url().should("include", "music.163.com")
  })
})