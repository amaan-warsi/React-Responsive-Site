import React from 'react'
import PortfoliosCards from './PortfoliosCards'
import product from './PortfoliosList'


export const Portfolios = () => {
  return (
    <>
    
    <section id="portfolio" class="portfolio">
      <div class="container" >

        <div class="section-title">
          <h2>Our recent launched projects</h2>
          <p>Atech IT Company can offer a range of flexible IT & data services. We are in the enviable position of having access to our own data centre & infrastructure.
</p>
        </div>

        <ul id="portfolio-flters" class="d-flex justify-content-center" >
           
        </ul>

        <div class="row portfolio-container" >

{product.map((elements,index) => {
    return (
        <PortfoliosCards image={elements.image} title={elements.title} details={elements.details} />
    )
})

}
</div>
</div>
</section>  

    </>
  )
}