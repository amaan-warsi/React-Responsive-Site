import React from 'react'

const TeamCards = (props) => {
    return (
        <>

<div class="col-lg-6 mt-4" >
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={props.image} class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>{props.title}</h4>
                <span>{props.job}</span>
                <p>{props.details}</p>
              </div>
            </div>
          </div>



        </>
    )
}

export default TeamCards;
