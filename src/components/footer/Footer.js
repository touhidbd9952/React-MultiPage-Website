import React from 'react'

function Footer() {
  return (
    <div>
        <div class="footer_section">
    <div class="container">
      <div class="footer_location_text">
        <ul>
          <li>
            <img src="images/map-icon.png"/>
                <span class="padding_left_10">
                    <a href="#">Loram Ipusm hosting web</a>
                </span>
            </li>
          <li>
            <img src="images/call-icon.png"/>
                <span class="padding_left_10">
                <a href="#">Call : +7586656566</a>
                </span>
          </li>
          <li>
            <img src="images/mail-icon.png"/>
            <span class="padding_left_10">
            <a href="#">demo@gmail.com</a>
            </span>
        </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <h2 class="useful_text">Useful link </h2>
          <div class="footer_menu">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="repair.html">Service</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h2 class="useful_text">Repair</h2>
          <p class="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscinaliqua Loreadipiscing </p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h2 class="useful_text">social media</h2>
          <div class="social_icon">
            <ul>
              <li><a href="#"><img src="images/fb-icon.png"/></a></li>
              <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
              <li><a href="#"><img src="images/linkedin-icon.png"/></a></li>
              <li><a href="#"><img src="images/youtub-icon.png"/></a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <h1 class="useful_text">Our Repair center</h1>
          <p class="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscinaliquaLoreadipiscing </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer