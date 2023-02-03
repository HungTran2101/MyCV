import "./Contact.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import InputField from "./components/InputField/InputField";
import GoogleMapReact from "google-map-react";

function Contact() {
  const defaultProps = {
    center: {
      lat: 10.762622,
      lng: 106.660172,
    },
    zoom: 11,
  };

  return (
    <div className="contact section animate fadeUp medium">
      <div className="container">
        <SectionTitle title="contact" />
        <div className="contactWrapper">
          <div className="contactForm">
            <InputField name="name" />
            <InputField name="subject" />
            <InputField name="email" type="email" />
            <InputField name="message" type="textarea" />
            <div className="send">send</div>
          </div>
          <div className="googleMapPlugin">
            <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
