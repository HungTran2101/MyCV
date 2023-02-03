import "./App.scss";

import { useEffect, useState } from "react";

import Loading from "./pages/Loading/Loading";
import Header from "./pages/components/Header/Header";
import ScrollToTop from "./pages/components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import SideNav from "./pages/components/SideNav/SideNav";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Portfolios from "./pages/Portfolios/Portfolios";
import Interest from "./pages/Interest/Interest";
import Testmonials from "./pages/Testimonials/Testimonials";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/components/Footer/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const animateList = ['fadeUp', 'fadeIn']
  // const selectAnimation = (classList) => {
  // 	for (let i = 0; i < animateList.length; i++) {
  // 		if (classList.contains(animateList[i]))
  // 			return animateList[i]
  // 	}
  // 	return animateList[0]
  // }

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.add("animateDone");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll("div").forEach((div) => {
      observer.observe(div);
    });
  });

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return !loaded ? (
    <Loading />
  ) : (
    <>
      <SideNav />
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolios />
      <Interest />
      <Testmonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      {scrolled && <ScrollToTop />}
    </>
  );
}

export default App;
