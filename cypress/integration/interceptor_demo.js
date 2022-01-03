describe('用于测试网络请求拦截', () => {
  it('页面应该展示一个success', () => {
    cy.visit('http://localhost:3000')
    cy.openMock('/example/json')
    cy.contains('success')
  })
})
