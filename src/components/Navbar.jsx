// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";
import { Loader } from "@googlemaps/js-api-loader";

const Navbar = ({ setScrollToBlinds }) => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Work", path: "/my_work" },
    { name: "About Me", path: "/about_me" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formRef = useRef();
  const addressInputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Google Places Autocomplete만 로드
  useEffect(() => {
    if (!isFormOpen) return;
    if (autocompleteRef.current) return;

    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    let listener = null;

    loader.load().then(() => {
      if (!addressInputRef.current) return;

      const input = addressInputRef.current;
      input.setAttribute("autocomplete", "off");

      const ac = new window.google.maps.places.Autocomplete(input, {
        types: ["geocode"],
        componentRestrictions: { country: "au" },
        fields: ["formatted_address"], // geometry 제거
      });

      autocompleteRef.current = ac;

      listener = ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        setAddress(place?.formatted_address || input.value || "");
      });
    }).catch(err => console.error("Google Maps API 로드 실패:", err));

    return () => {
      if (listener) window.google.maps.event.removeListener(listener);
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, [isFormOpen]);

  // Email 전송
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wj2fibl",
        "template_o6r1nft",
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert("Your quote request has been successfully submitted! 📩");
          setIsFormOpen(false);
        },
        (error) => {
          console.error(error);
          alert("Oops! Something went wrong 😢 Please try again.");
        }
      );
  };

  // 메뉴 클릭 핸들러
  const handleNavClick = (path) => {
    if (path === "/") {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (path === "/our_blinds") {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => setScrollToBlinds(true), 50);
      } else {
        setScrollToBlinds(true);
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-gray-800 text-white py-4 md:py-6"}`}>
        <button onClick={() => handleNavClick("/")}>
          <img src={assets.kaiblindslogo} alt="logo" className={`h-12 ${isScrolled && "invert opacity-80"}`} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <button key={i} onClick={() => handleNavClick(link.path)} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
              {link.name}
              <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
            </button>
          ))}

          <button onClick={() => setIsFormOpen(true)} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
            Quote Request
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 md:hidden">
          <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="menu" className={`${isScrolled && "invert"} h-4`} />
        </div>

        <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
          </button>

          {navLinks.map((link, i) => (
            <button key={i} onClick={() => handleNavClick(link.path)}>{link.name}</button>
          ))}

          <button onClick={() => setIsFormOpen(true)} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">Quote Request</button>
        </div>
      </nav>

      {/* Quote Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg text-black relative">
            <h2 className="text-xl font-bold mb-4">Request a Quote</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input type="text" name="from_name" className="w-full border p-2 rounded-md" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" name="from_email" className="w-full border p-2 rounded-md" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input type="tel" name="phone" className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  ref={addressInputRef}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="w-full border p-2 rounded-md"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Notes</label>
                <textarea name="notes" className="w-full border p-2 rounded-md h-32"></textarea>
              </div>

              <button type="submit" className="bg-[#49B9FF] text-black px-4 py-2 rounded-lg w-full font-bold mt-2 hover:bg-[#36A6E0] active:bg-[#2A89C0]">
                Submit Request
              </button>
            </form>

            <button className="absolute top-2 right-2 text-gray-600" onClick={() => setIsFormOpen(false)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
