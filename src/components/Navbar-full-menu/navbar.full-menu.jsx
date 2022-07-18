/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";

const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="">
              {theme ? (
                theme === "light" ? (
                  <img src={appData.darkLogo} alt="logo" />
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <a
                        href="https://docs.web3mon.io/"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <span className="nm">01.</span>Whitepaper
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a
                        href="https://web3mon-beta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <span className="nm">02.</span>Game Demo
                      </a>
                    </div>
                  </li>
                  <li>
        
                    <div className="o-hidden">
                      <a
                        href="https://drive.google.com/file/d/1_zVtsEb95VAS3qOtvmqgH_GWZJTVnpvS/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <span className="nm">03.</span>Game Guidance
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a
                        href="https://drive.google.com/file/d/10ycxtygaL_h6RB4DPnmUYRUMrM66P3jE/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      > 
                        <span className="nm">04.</span>PitchDeck
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a
                        a
                        href="mailto:hello@web3mon.io"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <span className="nm">05.</span>Contact
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Twitter :</h6>
                  <a
                    a
                    href="https://twitter.com/web3mon"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <p> @web3mon</p>
                  </a>
                </div>

                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a
                      a
                      href="mailto:hello@web3mon.io"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      hello@web3mon.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
