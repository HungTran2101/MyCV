import "./Pricing.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { pricingData } from "../../utils/UserData";

function Pricing() {
  return (
    <div className="pricing section animate fadeUp medium">
      <div className="container">
        <SectionTitle title="pricing" />
        <div className="pricingWrapper">
          {pricingData.map((data, index) => (
            <div className="pricingPackage" key={index}>
              <div className="info">
                <div className="cost">
                  <span className="price">
                    <sup className="currency">$</sup>
                    <em className="number">{data.price}</em>
                  </span>
                  <span className="period">/{data.period}</span>
                </div>
                <span className="name">{data.name}</span>
              </div>
              <div className="features">
                <div className="feature">
                  <span className="capacity">
                    {data.bandwidth.value === -1
                      ? "∞"
                      : data.bandwidth.value + " " + data.bandwidth.unit}
                  </span>
                  Bandwidth
                </div>
                <div className="feature">
                  <span className="capacity">
                    {data.diskspace.value === -1
                      ? "∞"
                      : data.diskspace.value + " " + data.diskspace.unit}
                  </span>
                  Disk Space
                </div>
                <div className="feature">
                  {data.databases === -1 ? "∞" : data.databases} Databases
                </div>
                <div className="feature">Free Domain</div>
                <div className="feature">
                  {data.subdomains === -1 ? "∞" : data.subdomains} Subdomains
                </div>
              </div>
              <div className="purchase">
                <span>Purchase</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
