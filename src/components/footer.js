import React from 'react'
import brandLogo from './img/logo1.png'
import instagram from "./svg/instagram.svg" 
import linkedin from "./svg/linkedin.svg" 
import youtube from "./svg/youtube.svg" 
import facebook from "./svg/facebook.svg" 
import twitter from "./svg/twitter.svg" 
import pinterest from "./svg/pinterest.svg" 

function footer() {
    return (
        <div>

              <section className="footer-section">
    <div className="container">
      <div className="footer-logo text-center">
        <a href="index.html"><img src={brandLogo} alt="" style={{width: "10vh" , height: "10vh"}} /></a>
        <h3 style={{color: "#ffffff"}}>thepappustore</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="footer-widget about-widget">
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
        <div className="col-lg-4 col-sm-12">
          <div className="footer-widget about-widget">
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


        <div className="col-lg-4 col-sm-12">
          <div className="footer-widget contact-widget">
            <h2>Address</h2>
            <div className="con-info">
              <p>thepappustore Ltd</p>
            </div>
            <div className="con-info">
              <p>New Delhi -06, P.O. BOX 68</p>
            </div>
            <div className="con-info">
              <p>+91 345 7953 32453</p>
            </div>
            <div className="con-info">
              <p>office@youremail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="social-links-warp row">
      <div className="container">
        <div className="social-links">
          <a href="" className="instagram"><img src={instagram} />  <span>instagram</span></a>
          <a href="" className="pinterest"><img src={pinterest} /><span>pinterest</span></a>
          <a href="" className="facebook"><img src={facebook} /><span>facebook</span></a>
          <a href="" className="tumblr"><img src={linkedin} /> <span>linkedin</span></a>
          <a href="" className="twitter"><img src={twitter} /> <span>twitter</span></a>
          <a href="" className="youtube"><img src={youtube} /> <span>youtube</span></a>
        </div>
      </div>
    </div>
  </section>
 {/* Footer section end  */}

        </div>
    )
}

export default footer
