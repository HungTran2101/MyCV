import "./Portfolios.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { portfoliosData } from "../../utils/UserData";
import { useEffect, useState } from "react";
import PortfoliosNav from "./components/PortfoliosNav/PortfoliosNav";
import PortfoliosGrid from "./components/PortfoliosGrid/PortfoliosGrid";

export default function Portfolios() {
  const [option, setOption] = useState("all");
  const [viewAll, setViewAll] = useState(false);
  const [gridData, setGridData] = useState();

  useEffect(() => {
    switch (option) {
      case "logo":
        setGridData([portfoliosData.find((it) => it.type === "logo")]);
        break;
      case "dribble":
        setGridData([portfoliosData.find((it) => it.type === "dribble")]);
        break;
      case "websites":
        setGridData([portfoliosData.find((it) => it.type === "websites")]);
        break;
      default: setGridData(portfoliosData);
    }
  }, [option]);

  return (
    <div id="portfolios" className="portfolios section animate fadeUp medium">
      <div className="container">
        <div className="portfolios-inner">
          <SectionTitle title="portfolios" />
          <PortfoliosNav
            portfoliosData={portfoliosData}
            option={option}
            setOption={setOption}
          />
          <PortfoliosGrid
            option={option}
            viewAll={viewAll}
            gridData={gridData}
          />
          {option === "all" && (
            <div className="viewAll" onClick={() => setViewAll(!viewAll)}>
              <i className={viewAll ? "fas fa-arrow-up" : "fas fa-plus"}></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
