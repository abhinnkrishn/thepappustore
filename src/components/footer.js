import React from 'react'
import {Link} from 'react-router-dom'
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
        <Link href="#" ><img src={brandLogo} alt="" style={{width: "10vh" , height: "10vh", marginBottom: "5px"}} /></Link>
        <h3 style={{color: "#ffffff"}}>the<strong>Dukaandar</strong></h3>
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
              <li><Link >About Us</Link></li>
              <li><Link >Track Orders</Link></li>
              <li><Link >Returns</Link></li>
              <li><Link >Jobs</Link></li>
              <li><Link >Shipping</Link></li>
              <li><Link >Blog</Link></li>
            </ul>
            <ul>
              <li><Link >Partners</Link></li>
              <li><Link >Bloggers</Link></li>
              <li><Link >Support</Link></li>
              <li><Link >Terms of Use</Link></li>
              <li><Link >Press</Link></li>
            </ul>
          </div>
        </div>


        <div className="col-lg-4 col-sm-12">
          <div className="footer-widget contact-widget">
            <h2>Address</h2>
            <div className="con-info">
              <p>thedukaandar Pvt. Ltd</p>
            </div>
            <div className="con-info">
              <p>New Delhi -06, P.O. BOX 68</p>
            </div>
            <div className="con-info">
              <p>+91 345 7953 32453</p>
            </div>
            <div className="con-info">
              <p>support@thedukaandar.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="social-links-warp row">
      <div className="container">
        <div className="social-links">
          <Link  className="instagram"><img src={instagram} />  <span>instagram</span></Link>
          <Link  className="pinterest"><img src={pinterest} /><span>pinterest</span></Link>
          <Link  className="facebook"><img src={facebook} /><span>facebook</span></Link>
          <Link  className="tumblr"><img src={linkedin} /> <span>linkedin</span></Link>
          <Link  className="twitter"><img src={twitter} /> <span>twitter</span></Link>
          <Link  className="youtube"><img src={youtube} /> <span>youtube</span></Link>
        </div>
      </div>
    </div>
  </section>
 {/* Footer section end  */}

        </div>
    )
}

export default footer
