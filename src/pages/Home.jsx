import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import Hero from "../components/Hero";
// import FeaturedBlinds from "../components/FeaturedBlinds";
// import Testimonial from "../components/Testimonial";

const Home = ({ scrollToBlinds, setScrollToBlinds }) => {
  useEffect(() => {
    if (scrollToBlinds) {
      const sec = document.getElementById("our-blinds");
      if (sec) {
        const navbarHeight = 70; // 네비게이션 바 높이
        const top = sec.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setScrollToBlinds(false); // 스크롤 후 다시 false로
    }
  }, [scrollToBlinds, setScrollToBlinds]);

  return (
    <>
      <Helmet>
        <title>Nice Blinds | Custom Blinds in Australia</title>
        <meta
          name="description"
          content="Discover premium custom blinds manufactured locally. Perfect fit for your home or office with professional installation."
        />
        <link rel="canonical" href="https://www.niceblinds.com.au/" />
      </Helmet>

      {/* 실제 화면 컴포넌트 */}
      {/* <Hero />
      <FeaturedBlinds />
      <Testimonial /> */}
    </>
  );
};

export default Home;
