import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  let body = document.querySelector("body");

  function handleMobileNav() {
    let mobileNavMenu = document.querySelector(".mobile-nav-item-container");
    let hamburger = document.querySelector(".hamburger-container");

    if (!mobileNav) {
      mobileNavMenu?.classList.remove("hidden");
      hamburger?.classList.add("fixed");
      body?.classList.add("fixed-body");
    } else {
      mobileNavMenu?.classList.add("hidden");
      hamburger?.classList.remove("fixed");
      body?.classList.remove("fixed-body");
      setMobileNav(false);
    }
  }

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="mobile-nav-item-container hidden">
          <div className="mobile-nav-details">
            <svg
              id="mobile-nav-logo"
              className="logo"
              style={{ marginBottom: 20 }}
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.323 26.0546C74.979 40.5076 69.2075 58.2586 57.4705 66.4551C45.782 74.6516 28.128 73.2936 16.0515 64.5151C4.02352 55.6881 -2.37848 39.3921 1.79252 25.6181C5.96352 11.8441 20.756 0.592094 35.6455 0.543594C50.5835 0.446594 65.667 11.6501 70.323 26.0546Z"
                fill="#E7ECEF"
              />
              <path
                d="M50.6529 9.61553C54.9581 11.6766 58.2544 15.9 60.3061 20.4951C62.3578 25.124 63.165 30.0908 63.6696 35.3954C64.1741 40.6663 64.4095 46.275 62.0215 50.2957C59.667 54.3502 54.6554 56.8505 49.8457 59.317C45.0359 61.7834 40.3943 64.2499 35.9208 63.9796C31.4474 63.6755 27.1085 60.6685 23.0723 57.7289C19.0698 54.7894 15.3027 51.9513 12.4437 48.2009C9.61841 44.4505 7.63396 39.754 7.12944 34.7872C6.62491 29.8205 7.56669 24.5496 10.4593 20.9006C13.3855 17.2177 18.2289 15.1229 22.7696 13.2308C27.3103 11.3049 31.5147 9.58175 36.2908 8.6357C41.0333 7.72343 46.3476 7.58828 50.6529 9.61553Z"
                fill="#272932"
              />
              <path
                d="M21.684 48.52V44.2C22.644 44.2 23.34 44.02 23.772 43.66C24.204 43.3 24.42 42.628 24.42 41.644V21.52H29.352L29.388 41.86C29.388 44.476 28.8 46.24 27.624 47.152C26.472 48.064 24.492 48.52 21.684 48.52ZM43.8513 25.408C41.2353 25.408 39.9273 26.272 39.9273 28C39.9273 28.768 40.2513 29.356 40.8993 29.764C41.5473 30.172 43.0593 30.76 45.4353 31.528C47.8353 32.296 49.5153 33.172 50.4753 34.156C51.4353 35.116 51.9153 36.604 51.9153 38.62C51.9153 41.188 51.1353 43.132 49.5753 44.452C48.0153 45.772 45.9753 46.432 43.4553 46.432C41.5833 46.432 39.2913 46.144 36.5793 45.568L35.2833 45.316L35.7873 41.464C39.0033 41.896 41.4633 42.112 43.1673 42.112C45.7113 42.112 46.9833 41.056 46.9833 38.944C46.9833 38.176 46.6833 37.576 46.0833 37.144C45.5073 36.712 44.3433 36.244 42.5913 35.74C39.8073 34.948 37.8393 34.012 36.6873 32.932C35.5593 31.828 34.9953 30.304 34.9953 28.36C34.9953 25.912 35.7393 24.088 37.2273 22.888C38.7153 21.688 40.7553 21.088 43.3473 21.088C45.1233 21.088 47.3793 21.328 50.1153 21.808L51.4113 22.06L51.0153 25.984C47.6313 25.6 45.2433 25.408 43.8513 25.408Z"
                fill="#E7ECEF"
              />
            </svg>
            <div className="cta-image-container">
              <a
                target="blank"
                aria-label="Visit my GitHub profile"
                className="cta-image"
                href="https://github.com/JStone1"
              >
                <i className={"devicon-github-plain language-icon"}></i>
              </a>
              <a
                target="blank"
                aria-label="Visit my LinkedIn profile"
                className="cta-image"
                href="https://www.linkedin.com/in/john-stone-50065618b"
              >
                <i className="devicon-linkedin-plain language-icon"></i>
              </a>
            </div>
          </div>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/projects"
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/contact"
          >
            <li>Contact</li>
          </NavLink>
        </div>
        <ul className="nav-item-container">
          <li>
            <NavLink onClick={() => scrollToTop()} to="/">
              About
            </NavLink>
          </li>

          <li>
            <NavLink onClick={() => scrollToTop()} to="/projects">
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink onClick={() => scrollToTop()} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={handleMobileNav} className={"hamburger-container"}>
          <Hamburger
            toggled={mobileNav}
            toggle={setMobileNav}
            size={24}
            duration={0.8}
            label="Show menu"
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
