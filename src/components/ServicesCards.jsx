import React from 'react'

const ServicesCards = (props) => {
    return (
        <>
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch" >
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="#">{props.title}</a></h4>
              <p>{props.details}</p>

            </div>
          </div>


        </>
    )
}

export default ServicesCards;
