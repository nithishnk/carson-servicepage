import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'
import banner from '../images/banner.jpg'

export default class Sectionfirst extends Component {
  render() {
    return (
      <div className="bg-clr">
      <div>
      <img className="img-property" src={banner}></img>
      </div>
      <div className="container ">
      <div className="row ">
      <div className="col-md-6 pl-5">
        <h2 className="mt-5">PROACTIVELY ENVISIONED</h2>
        <span className="txt-property">Collaboratively administrate empowered markets via plug-and-play networks.</span>
        </div>
        <div className="col-md-6 pr-5">
        <p className="m-5">Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.</p>
        <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter-square p-1"></i>
        <i class="fab fa-google-plus p-1"></i>
        <i class="fab fa-linkedin p-1"></i>
        <i class="fab fa-pinterest-square p-1"></i>
        </div>
        </div> 
      </div>
      </div> 
        
      </div>
    )
  }
}
