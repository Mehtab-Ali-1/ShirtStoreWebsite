import { CircleUserRound, Menu, MoveLeft, MoveRight, ShoppingCart, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLongArrowAltLeft, FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Home () {
  return (
    <main className="main">
      {/* header   */}
      <div className="navContainer">
            <h5 id="logo">T-SHOP</h5>
            
                <div className="menu">
                    <a href="#">New</a>
                    <a href="#">Women</a>
                    <a href="#">Men</a>
                </div>
                <div className="login">
                    <a id="login1 " href="#">
                    <CircleUserRound />
                    <p>Login</p>
                    <ShoppingCart />
                    </a>
                </div>
            <div className="hemburger">
              <Menu />
            </div>
        </div>
        {/* **************************************** */}
        {/* body */}
          {/* headings */}
          <div className="heading">
            <h1>T SHOP</h1>
            <h4>There is One for Everyone</h4>
        </div>
        {/* shirts  */}
         <div className="ImageContainer">
            <div id="TshirtGradient" className="shirt1"></div> 
            <div id="TshirtGradient" className="shirt2"></div>
            <div id="TshirtGradient" className="shirt3"></div>
         </div>
         {/* secondLineShirt  */}
         <div className="heading">
            <h2>New Drops</h2>
        </div>
        {/* shirts  */}
        {/* ****************************************************************8 */}
        <div className="ImageContainer2">
          <div className="TwoShirtCombine">
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic10.avif" alt="shirt4" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic17.avif" alt="shirt5" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
          </div>
          {/* @@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div className="TwoShirtCombine">
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic18.avif" alt="shirt4" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic19.avif" alt="shirt5" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
          </div>
        </div>

        {/* *******************************  3  ************************************** */}
        <div className="ImageContainer2" id="Container3">
          <div className="TwoShirtCombine">
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic10.avif" alt="shirt4" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic17.avif" alt="shirt5" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
          </div>
          {/* @@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div className="TwoShirtCombine">
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic18.avif" alt="shirt4" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
            <div id="shirtSize" className="shirtL1M">
              <Image className="shirtL1p" src="/pic19.avif" alt="shirt5" width={200} height={200}/>
              <p>New Product</p>
              <p>$15.00</p>
            </div>
          </div>
        </div>
        {/* ******************************* SHOP NEW ************************************** */}
        <div className="shopNew">
          <a href="#">Shop New</a>
        </div>
        {/* ****************** */}
        <div className="SaleOnContainer">
          <div className="saleON">
          <Zap className="zapicon" />
          <h3>SALES IS ON!</h3>
          <h1>25% OFF</h1>
          <p>25% off sitewide using TEES25 at checkout</p>
          </div>
          <div className="ImageBoy">
            <Image className="ImageboySize" src="/pic20.avif" alt="BoyImage" width={200} height={200}/>
          </div>
        </div>
        {/* ********************************************************************** */}
        {/* 10%OFF */}
        <div className="arrowLine">
        <FaLongArrowAltLeft className="arrowLogo"/>
        <p>GET 10% OFF YOUR FIRST ORDER!</p>
        <FaLongArrowAltRight className="arrowLogo"/>
        </div>
        <footer>
          <div className="FOOFirstMain">
            <div className="TshopLogo">
              <h1>T SHOP</h1>
              <h4>ma8317076@gmail.com</h4>
              <h4>Call: +92-322 2917069</h4>
            </div>
            {/* ************************************** */}
            <div className="footerMenu">
              <div className="menuHeading">
                <h2>Shop</h2>
                <ul>
                  <li>New</li>
                  <li>Women</li>
                  <li>Men</li>
                </ul>
              </div>
              <div className="menuHeading">
                <h2>Our Store</h2>
                <ul>
                  <li>About Us</li>
                  <li>Subscribe</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="menuHeading">
                <h2>Terms & Conditions</h2>
                <ul>
                  <li>Store Policy</li>
                  <li>Shipping & Returns</li>
                  <li>Payment Methods</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ********************** secondLine Footer  ***************** */}
          <div className="FooSecondMain">
            <div className="logos">
              <Link className="logo" href="#"><FaFacebookF /></Link>
              <Link className="logo" href="#"><FaInstagram /></Link>
              <Link className="logo" href="#"><FaYoutube /></Link>
              <Link className="logo" href="#"><FaPinterestP /></Link>
              <Link className="logo" href="#"><FaTiktok /></Link>
            </div>
            <div className="line">
                <h5>© 2035 by T Shop. Powered and secured by <span>Wix</span></h5>
            </div>
          </div>
        </footer>
    </main>
  )
};