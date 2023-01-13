import React, { useState } from "react";
import "./PortfoliosLightBox.scss";
import { flipInY, flipOutY } from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  flipInY: {
    animationName: flipInY,
    animationDuration: "0.7s",
  },
  flipOutY: {
    animationName: flipOutY,
    animationDuration: "0.7s",
  },
});

export default function PortfoliosLightBox({ lightbox, setLightBox }) {
  const [openLightbox, setOpenLightbox] = useState(lightbox.show);

  const configAnimate = () => {
    if (lightbox.data.type !== "video") {
      if (openLightbox) {
        switch(lightbox.data.lightboxAnimate){
          case 'flip': return "flipY";
          case 'fade': return "fade";
          case 'slide': return "slide"
          default: return "flipY";
        }
      }
      else{
        switch(lightbox.data.lightboxAnimate){
          case 'flip': return "flipOutY";
          case 'fade': return "fadeOut";
          case 'slide': return "slideOut"
          default: return "flipOutY";
        }
      }
    }
    return "";
  };

  const closeLightbox = () => {
    setOpenLightbox(false);
    setTimeout(() => {
      setLightBox({ show: false });
    }, 400);
  };

  return (
    <div className="modal">
      <div className="modalOverlay" onClick={() => closeLightbox()}></div>
      <div className="modalBody">
        <figcaption className={"mediaContain " + configAnimate()}>
          <span className="close" onClick={() => closeLightbox()}>
            &times;
          </span>
          {lightbox.data.type === "video" ? (
            <iframe
              title="video media"
              className="videoMedia"
              src={lightbox.data.url}
            ></iframe>
          ) : (
            <figure className="media">
              <img
                className="img"
                src={lightbox.data.thumbnail}
                alt={lightbox.data.alt}
              />
            </figure>
          )}
        </figcaption>
      </div>
    </div>
  );
}
