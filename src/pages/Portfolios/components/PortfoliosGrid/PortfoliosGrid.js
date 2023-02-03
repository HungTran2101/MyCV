import "./PortfoliosGrid.scss";
import { slideInLeft, slideInRight } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";
import PortfoliosLightBox from "../PortfoliosLightBox/PortfoliosLightBox";

const styles = StyleSheet.create({
  slideInRight: {
    animationName: slideInRight,
    animationDuration: "1s",
  },
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "1s",
  },
});

function PortfoliosGrid({ option, viewAll, gridData }) {
  const [lightbox, setLightBox] = useState({ show: false, data: undefined });

  const threeItemClass = (index) => {
    if (index === 0) return "big";
    return "normal";
  };

  const sixItemClass = (index) => {
    if (index === 0 || index === 3 || index === 5) {
      return "normal";
    } else {
      return "normal";
    }
  };

  const itemAnimateConfig = (animateName) => {
    switch (animateName) {
      case "slideInRight":
        return css(styles.slideInRight);
      case "slideInLeft":
        return css(styles.slideInLeft);
      default:
        return css(styles.slideInLeft);
    }
  };

  const classNameClassifier = (index, contentIndex, animateName) => {
    switch (gridData[contentIndex].type) {
      case "websites":
        return sixItemClass(index) + " " + itemAnimateConfig(animateName);
      default:
        return threeItemClass(index) + " " + itemAnimateConfig(animateName);
    }
  };

  const configTitle = (data) => {
    switch (data.type) {
      case "photo":
        return "image";
      case "video":
        return "video";
      case "url":
        return "page";
      default:
        return "image";
    }
  };

  const configContentViewAll = (index) => {
    if (index !== 0) {
      return viewAll ? "" : " noView";
    }
    return "";
  };

  return (
    <div className="portfoliosGrid">
      {gridData &&
        gridData.map((data, index) => (
          <div key={index} className={"content" + configContentViewAll(index)}>
            {data.items.map((_data, _index) => (
              <figure
                className={
                  "content-item " +
                  classNameClassifier(_index, index, _data.animate)
                }
                key={_index}
                onClick={() =>
                  _data.type === "url"
                    ? window.open(_data.url)
                    : setLightBox({ show: true, data: _data })
                }
              >
                <img
                  className={"img " + _data.captionAnimate}
                  src={_data.thumbnail}
                  alt={_data.alt}
                />
                <figcaption className={"caption " + _data.captionAnimate}>
                  <div className="title">
                    {_data.type === "video" && (
                      <i className="fa fa-play-circle"></i>
                    )}
                    <span>
                      {_data.title}
                      <b>{configTitle(_data)}</b>
                    </span>
                  </div>
                  <div className={"text " + _data.captionAnimate}>
                    {_data.text}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      {lightbox.show && (
        <PortfoliosLightBox lightbox={lightbox} setLightBox={setLightBox} />
      )}
    </div>
  );
}

export default PortfoliosGrid;
