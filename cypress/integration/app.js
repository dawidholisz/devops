describe('App',()=>{
    it('displays posts list',()=>{
        cy.server()
        cy.route('/posts').as('posts')
        cy.visit('http://localhost:3000')

        cy.get('[data-testId="posts-block"]').should('be.visible').within(()=>{
            cy.get('[data-testId="post-1"]').should('be.visible').within(()=>{
                cy.get('[data-testId="post-title"]').should('be.visible')
                cy.get('[data-testId="post-body"]').should('be.visible')
            })
            cy.get('[data-testId="post-100"]').should('be.visible')
        })
    })
})