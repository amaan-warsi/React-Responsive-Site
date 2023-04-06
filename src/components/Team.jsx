import React from 'react'
import TeamCards from './TeamCards'
import product from './TeamList'



export const Team = () => {
  return (
    <>
    
    <section id="team" class="team section-bg">
      <div class="container" >

        <div class="section-title">
          <h2>Team</h2>
          <p>Every IT team is different, based on the culture and needs of its company, 
            the experience and skills of the team members and the types of systems on which 
            they are working.
</p>
        </div>

        <div class="row">


{product.map((elements,index) => {
    return (
        <TeamCards image={elements.image} title={elements.title} job={elements.job} details={elements.details} />
    )
})

}
</div>
</div>
</section>  

    </>
  )
}