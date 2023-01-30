import "./Interest.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { interestData } from "../../utils/UserData";

function Interest() {


  return (
    <div className="interest section animate fadeUp medium">
      <div className="container">
        <SectionTitle title="interest" />
        <div className="interestWrapper">
          <div className="content">{interestData.description}</div>
          <div className="interestList">
            {interestData.interests.map((data, index) => (
              <div
                className={
                  index % 2 === 0
                    ? "interestItems green"
                    : "interestItems white"
                }
                key={index}
              >
                <div className={data.classIconFA + " icon"}></div>
                <div className="text">{data.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
