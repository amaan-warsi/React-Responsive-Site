import React from 'react'
import ServicesCards from './ServicesCards'
import product from './ServicesList'


export const Services = () => {
  return (
    <>
<section id="services" class="services section-bg">  
<div class="container">
<div class="section-title">
          <h2>Services</h2>
          <p>We enable the world’s leading companies with cutting-edge digital & IT service as a competitive advantage ahead of schedule.

</p>
        </div>
        <div class="row">
{product.map((elements,index) => {
    return (
        <ServicesCards   title={elements.title} details={elements.details} />
    )
})

}
</div>
</div>
</section>  

    </>
  )
}