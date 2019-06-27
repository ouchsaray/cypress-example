const blogHero = '.blog-featured-article__figure--container'

export function checkImAtBlogPage() {
    cy.url().should('include', '/blog')
    cy.get(blogHero).should('be.visible')
}
