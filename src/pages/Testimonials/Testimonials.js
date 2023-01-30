import "./Testimonials.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { testimonialsData } from "../../utils/UserData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";

function Testimonials() {
  return (
    <div
      id="testimonials"
      className="testimonials section animate fadeUp medium"
    >
      <div className="container">
        <SectionTitle title="testimonials" />
        <div className="testimonialsWrapper">
          <div className="clientSlide">
            <Swiper
              modules={[Pagination, Keyboard]}
              pagination={{ clickable: true }}
              autoHeight
              keyboard={{ enabled: true }}
              speed={1500}
            >
              {testimonialsData.clientData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="client">
                    <figure className="clientAvatar">
                      <img
                        className="img"
                        src={data.avt}
                        alt={data.signature}
                      />
                    </figure>
                    <div className="description">
                      <i className="fa-solid fa-quote-left quote"></i>
                      {data.description}
                    </div>
                    <div className="signature">{data.signature}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="logoSlide">
            <Swiper
              modules={[Autoplay]}
              speed={2000}
              centeredSlides
              loop
              allowTouchMove={false}
              loopedSlides={testimonialsData.clientLogoData.length}
              autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
            >
              {testimonialsData.clientLogoData.map((data, index) => (
                <SwiperSlide key={index}>
                  <figure className="logo">
                    <img className="img" src={data.src} alt={data.name} />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
