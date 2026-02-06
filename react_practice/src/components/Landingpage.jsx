import logo from "../assets/landing_page/logo_light.png";
import insta from "../assets/landing_page/social_light1.png";
import facebook from "../assets/landing_page/social_light2.png";
import user from "../assets/landing_page/user.png";
import pro1 from "../assets/landing_page/product1.png";
import pro2 from "../assets/landing_page/product2.png";
import pro3 from "../assets/landing_page/product3.png";
import logo_footer from "../assets/landing_page/logo.png";
import insta_footer from "../assets/landing_page/social1.png";
import facebook_footer from "../assets/landing_page/social2.png";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo"></img>
          <span className="logo-text">LOGO</span>
        </div>
        <div className="icons">
          <img src={insta} alt="Instagram" className="icons"></img>
          <img src={facebook} alt="Facebook" className="icons"></img>
        </div>
      </div>
      <div className="intro">
        <img src={user} alt="user"></img>
        <div className="intro-text">
          <h2>Introduce Your Product</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut et massa mi.
          </p>
          <h3>Sign Up</h3>
          <form>
            <input type="text" placeholder="Your Name" required></input>
            <input type="email" placeholder="Enter your email" required></input>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="about-section">
        <div className="about">
          <h2>About section</h2>

          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>

            <p>
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet.
            </p>
          </div>
        </div>

        <div className="products">
          <div className="product-row">
            <div className="product-info">
              <h3>Product 1</h3>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt consequatur possimus iure, animi sit qui libero voluptatem sunt dolorem omnis ipsum nam veniam ipsa fugiat labore, totam eaque sapiente. 
              </p>
            </div>
            <div className="product-image">
              <img src={pro1} alt="Product 1" />
            </div>
          </div>

          <div className="product-row">
            <div className="product-info">
              <h3>Product 2</h3>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nesciunt consequatur possimus iure, animi sit qui libero voluptatem sunt dolorem omnis ipsum nam veniam ipsa fugiat labore, totam eaque sapiente.
              </p>
            </div>
            <div className="product-image">
              <img src={pro2} alt="Product 2" />
            </div>
          </div>

          <div className="product-row">
            <div className="product-info">
              <h3>Product 3</h3>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil hic consequuntur atque maiores nam aliquam sint obcaecati adipisci. Quidem vero obcaecati quia impedit nisi voluptatum assumenda iste! Veniam, fuga.
              </p>
            </div>
            <div className="product-image">
              <img src={pro3} alt="Product 3" />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-top">
            <div className="footer-left">
              <h3>Get access</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="footer-right">
              <h4>Sign up</h4>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo-box">
              <img src={logo_footer} alt="Logo" />
              <span>LOGO</span>
            </div>
            <div className="footer-social">
              <img src={insta_footer} alt="Instagram" />
              <img src={facebook_footer} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
