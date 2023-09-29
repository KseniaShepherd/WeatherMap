describe('template spec', () => {
  before(()=>{
    cy.visit('http://localhost:3000')
  })
  it('should show the current weather',()=>{
    cy.get('.map').click()

  
    cy.request('GET', 'https://api.mapbox.com/geocoding/v5/mapbox.places/13.277805079310298,52.54121189849107.json?access_token=pk.eyJ1Ijoic2hlcGhlcmQyMSIsImEiOiJjbG1scmlzZnowaHRyMnJ0Y2s3dW56eTA2In0.3imPPphILusqT6AshpRBNg').then(
      (responce)=>{
        expect(responce.status).to.equal(200)
        expect(responce.body).to.have.property('features')
      }
    )
  })

})