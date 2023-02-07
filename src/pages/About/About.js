import "./About.scss";
import { aboutData } from "../../utils/UserData";

function About() {
  return (
    <div id="about" className="about section animate fadeIn slow">
      <div className="container">
        <div className="about-inner">
          <div className="about-body">{aboutData.description}</div>
          <div className="about-footer">
            <a
              href="https://www.topcv.vn/xem-cv/AFcDAAVTAlIHBVNfAFNTAgdSBgUEVAAGXAVTVAd9ce"
              target="_blank"
              rel="noreferrer"
              className="about-button"
            >
              download cv
            </a>
            <a href="#contact" className="about-button">
              contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
