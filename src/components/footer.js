import React from 'react'
import brandLogo from './img/logo1.png'

function footer() {
    return (
        <div>

              <section class="footer-section">
    <div class="container">
      <div class="footer-logo text-center">
        <a href="index.html"><img src={brandLogo} alt="" style={{width: "10vh" , height: "10vh"}} /></a>
        <h3 style={{color: "#ffffff"}}>thepappustore</h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="footer-widget about-widget">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, accusantium quas excepturi sint dolor animi, placeat
              quisquam similique ipsam aut asperiores, perferendis inventore?
              Tenetur in accusamus rem! Incidunt, nostrum rem.
            </p>
            <img src="img/cards.png" alt="" />
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="footer-widget about-widget">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Track Orders</a></li>
              <li><a href="">Returns</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Shipping</a></li>
              <li><a href="">Blog</a></li>
            </ul>
            <ul>
              <li><a href="">Partners</a></li>
              <li><a href="">Bloggers</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Terms of Use</a></li>
              <li><a href="">Press</a></li>
            </ul>
          </div>
        </div>


        <div class="col-lg-4 col-sm-12">
          <div class="footer-widget contact-widget">
            <h2>Address</h2>
            <div class="con-info">
              <p>thepappustore Ltd</p>
            </div>
            <div class="con-info">
              <p>New Delhi -06, P.O. BOX 68</p>
            </div>
            <div class="con-info">
              <p>+91 345 7953 32453</p>
            </div>
            <div class="con-info">
              <p>office@youremail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-links-warp row">
      <div class="container">
        <div class="social-links">
          <a href="" class="instagram"><i class="fa fa-instagram"></i><span>instagram</span></a>
          <a href="" class="pinterest"><i class="fa fa-pinterest"></i><span>pinterest</span></a>
          <a href="" class="facebook"><i class="fa fa-facebook"></i><span>facebook</span></a>
          <a href="" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a>
          <a href="" class="youtube"><i class="fa fa-youtube"></i><span>youtube</span></a>
          <a href="" class="tumblr"><i class="fa fa-tumblr-square"></i><span>tumblr</span></a>
        </div>
      </div>
    </div>
  </section>
 {/* Footer section end  */}

        </div>
    )
}

export default footer
