import "./Interest.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { interestData } from "../../utils/UserData";

function Interest() {
  const countInterestsToWords = (number) => {
    switch (number) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        return "";
    }
  };

  return (
    <div className="interest section animate fadeUp medium">
      <div className="container">
        <SectionTitle title="interest" />
        <div className="interestWrapper">
          <div className="content">{interestData.description}</div>
          <div
            className={
              "interestList " +
              countInterestsToWords(interestData.interests.length)
            }
          >
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
