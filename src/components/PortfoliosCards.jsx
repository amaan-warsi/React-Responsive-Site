import React from 'react'

const PortfoliosCards = (props) => {
    return (
        <>

<div class="col-lg-4 col-md-6 portfolio-item filter-app">
  <div class="portfolio-img">
  <img class="img-fluid" alt="" src={props.image} />
    </div>
  <div class="portfolio-info">
    <h4>{props.title}</h4>
    <p>{props.details}</p>
    <a href="../assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
    <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
  </div>
</div>

        </>
    )
}

export default PortfoliosCards;
