import React from "react";
import "./footer.css";

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
              <span className="LocEmoji">📍</span> 101, Indiranagar, Bangalore.
            </div>
            <div>
              <span className="PhoneEmoji">📞</span> +91 8080 1818
            </div>
            <div className="lastFText">
              <pre>
                <span className="MailEmoji">✉ </span> support@thesiren.com
              </pre>
            </div>
          </div>

          <div className="FRefernce">
            <h3 className="TheFReferences">References</h3>
            {/* <div className="TheFFood">
              <a className="Flinks" href="https://pinchofyum.com/blog"></a>Home
            </div> */}
            <div className="TheFBollywood">
              <a
                className="Flinks"
                href="https://www.flipkart.com/mobile-phones-store"
              >
                Mobile
              </a>
            </div>
            <div className="TheFHollywood">
              <a
                className="Flinks"
                href="https://www.amazon.in/s?k=tablet&crid=14D0S23UIB2TQ&sprefix=tablet%2Caps%2C344&ref=nb_sb_noss_2"
              >
                Tablet
              </a>
            </div>
            <div className="TheFTechnology">
              <a
                className="Flinks"
                href="https://www.amazon.in/s?k=laptop%27&adgrpid=58360032709&ext_vrnc=hi&hvadid=398120291510&hvdev=c&hvlocphy=9300710&hvnetw=g&hvqmt=e&hvrand=17169184387492782806&hvtargid=kwd-313781558043&hydadcr=26418_2176895&tag=googinhydr1-21&ref=pd_sl_46gg5xmcuk_e"
              >
                Laptop
              </a>
            </div>
            <div className="TheFFitness">
              <a
                className="Flinks"
                href="https://www.amazon.in/s?k=fashion&crid=2QKPZ28X2ZB5&sprefix=fashio%2Caps%2C337&ref=nb_sb_noss_2"
              >
                Fashion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
