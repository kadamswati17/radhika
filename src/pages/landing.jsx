import { useState } from "react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";
import womanImg from "../assests/woman.png";
import { FiSearch } from "react-icons/fi";

// Home page components
import OurProducts from "../components/ourproducts";
import ProductsGrid from "../components/ProductsGrid";
import OurCertifications from "../components/ourcertifications";
import BlogSection from "../components/blogstrend";
import EnquiryForm from "../components/EnquiryForm";
import OurGifiting from "../components/ourgifiting";
import OurServices from "../components/ourservices";

// Other pages
import About from "./About";
import Contract from "./Contract";
import PrivateLabelling from "./PrivateLabelling";
import CorporateGifting from "./CorporateGifting";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const enquiryRef = useRef(null);
  const productsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#enquiry") {
      enquiryRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#products") {
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="overflow-hidden min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#FEFEFE] text-[#666666] px-4 py-4 shadow">
        <div className="flex flex-wrap items-center justify-between max-w-[1440px] mx-auto w-full">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6 flex-1 flex-wrap">
            <div className="text-2xl font-bold">🌿</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 font-medium">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/contract" className="hover:underline">
                Contract Manufacturing
              </Link>
              <Link to="/private" className="hover:underline">
                Private Labelling
              </Link>
              <Link to="/corporate" className="hover:underline">
                Corporate Gifting
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex ml-auto">
              <div className="flex items-center border border-[#7E9E86] bg-white rounded-md px-3 py-1.5">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-none text-gray-600 text-base bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right: Sign-In + Bag */}
          <div className="hidden md:flex items-center gap-4 pl-4">
            <button className="hover:underline">Sign-In</button>
            <span>👜</span>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-3xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 text-sm font-medium px-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/contract"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Contract Manufacturing
            </Link>
            <Link
              to="/private"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Private Labelling
            </Link>
            <Link
              to="/corporate"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Corporate Gifting
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="hover:underline text-left"
            >
              Sign-In
            </button>
          </div>
        )}
      </nav>

      {/* Routes & Hero Section */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <div className="bg-gradient-to-b from-light to-olive rounded-b-3xl overflow-hidden">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 pt-20 h-auto md:h-[350px]">
                  {/* Text Block */}
                  <div className="flex-1 flex flex-col justify-start text-center md:text-left space-y-2">
                    <p className="text-[#3D3D3D] text-[#28] font-light pb-[#24]">
                      Makeup & Skincare, Made for Your Brand.
                    </p>
                    <h2 className="text-[#72] md:text-6xl font-bold text-[#666666] font-[Lora] pb-8">
                      Radhika Herbals
                    </h2>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      <Link to="/#enquiry">
                        <button className=" bg-olive-dark text-white px-4 py-2 rounded-[12px] font-semibold">
                          Contact Us
                        </button>
                      </Link>
                      <Link to="/#products">
                        <button className="bg-[#FFFFFF] text-[#6F8675] px-4 py-2 rounded-[12px] font-semibold">
                          View Products
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Image Block */}
                  <div className="flex-1 flex items-end justify-center mt-6 md:mt-0">
                    <img
                      src={womanImg}
                      alt="Woman holding product"
                      className="w-[677px] md:w-[460px] ml-44"
                    />
                  </div>
                </div>
              </div>

              {/* Home Sections */}
              <OurServices />
              <div ref={productsRef}>
                <OurProducts />
                <ProductsGrid />
              </div>
              <OurCertifications />
              <OurGifiting />
              <ProductsGrid />
              <BlogSection />
              <div ref={enquiryRef}>
                <EnquiryForm />
              </div>
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/private" element={<PrivateLabelling />} />
        <Route path="/corporate" element={<CorporateGifting />} />
      </Routes>
    </div>
  );
}
