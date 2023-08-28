import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="TheMainFooter">
      <div className="theFWidth">
        <div className="FGridCont">
          <div className="FSecCon">
            <div className="fLogo">
              <div className="theFProp">
                <div>
                  <h1 className="theFooterLogoPar">
                    {/* <span className="verticleT">The</span> Siren */}
                    ClickCart
                  </h1>
                </div>
              </div>
            </div>
            <div className="FmiddleCon">
              <div className="FmiddleSubCon">
                <div className="FDescription">
                  An All in one, bringing you on the best platform,
                  knowledge and inspiration.
                </div>
                <div className="FCopywrite">
                  <span>©</span>2023.ClickCart. All Rights reserved
                </div>
              </div>
            </div>
          </div>

          <div className="Fcontact">
            <h3>Contact</h3>
            <div>
              <span className="LocEmoji">📍</span>Gomti Nagar, Lucknow
            </div>
            <div>
              <span className="PhoneEmoji">📞</span> +91 987654321
            </div>
            <div className="lastFText">
              <pre>
                <span className="MailEmoji">✉ </span> support@clickcart.com
              </pre>
            </div>
          </div>

          <div className="FRefernce">
            <h3 className="TheFReferences">References</h3>
            {/* <div className="TheFFood">
              <a className="Flinks" href="https://pinchofyum.com/blog"></a>Home
            </div> */}
            <div className="TheFBollywood">
              <Link
                className="Flinks"
                to="/Mobile"
              >
                Mobile
              </Link>
            </div>
            <div className="TheFHollywood">
              <Link
                className="Flinks"
                to="/Tablet"
              >
                Tablet
              </Link>
            </div>
            <div className="TheFTechnology">
              <Link
                className="Flinks"
                to="/Laptop"
              >
                Laptop
              </Link>
            </div>
            <div className="TheFFitness">
              <Link
                className="Flinks"
                to="/Accessories"
              >
                Accessories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
