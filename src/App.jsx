import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Progress from "./components/Progress";
import MyWork from "./pages/MyWork"
import Blog from "./pages/Blog"
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  const [scrollToBlinds, setScrollToBlinds] = useState(false);

  return (
    <BrowserRouter> {/* ✅ Router로 감싸기 */}
      <Helmet>
        <title>Nice Blinds | Custom Blinds in Australia</title>
        <meta
          name="description"
          content="Premium custom blinds for homes and offices in Australia. Locally made, durable, and stylish."
        />
        <link rel="canonical" href="https://www.niceblinds.com.au/" />
      </Helmet>

      <Navbar setScrollToBlinds={setScrollToBlinds} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              scrollToBlinds={scrollToBlinds}
              setScrollToBlinds={setScrollToBlinds}
            />
          }
        />
        <Route path="/my_work" element={<MyWork />} />
        <Route path="/about_me" element={<AboutMe />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
