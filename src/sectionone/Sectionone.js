import React, { Component } from 'react'
import '../sectionone/sectionone.css'
import banner from '../images/banner.jpg'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
export default class Sectionone extends Component {
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
        
        <h6 className="share ">SHARE</h6>
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
      <div className="container ">
      <div className="row m-5 ">
      <div className="col-md-4 p-0">
      
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project1}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-4 p-0">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project2}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      <div className="col-md-4 p-0">
      <div class="content">
<a href="#" target="_blank">
<div class="content-overlay"></div>
<img className="content-image" src={project3}></img>
<div class="content-details fadeIn-top">
<div class="group">

<p className="pfont">Interior Design</p>
<h4>Bloomfield St.</h4>
<a href="#">
<span className="pfont">View details</span>
</a>
</div>
</div>
</a>
</div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
