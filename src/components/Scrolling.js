import React,{Component, component} from 'react'

export class Scrolling extends Component{
    render()
    {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" style={{height:"400px"}}>
    <div className="carousel-item active">
      <img src="https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_Exchange-multicolor.jpg?resize=1200,900" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://techcrunch.com/wp-content/uploads/2022/07/this-week-in-apps-splash-2022.webp?resize=1200,637" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-652146145.jpg?resize=1200,851" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" id='next'>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        )
    }
}

export default Scrolling