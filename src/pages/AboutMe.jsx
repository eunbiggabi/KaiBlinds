// src/pages/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ShieldCheck, IdCard, Accessibility, Laptop } from "lucide-react"; 

const AboutMe = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Me | KaiBlinds</title>
        <meta
          name="description"
          content="Learn more about me, my passion for sports, family, certifications, and IT background that make me both versatile and reliable."
        />
        <link rel="canonical" href="https://www.kaiblinds.com.au/about" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16 pt-30">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-6 text-center"
        >
          About Me
        </motion.h1>

        {/* Personal Life Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Outside of work, I enjoy{" "}
            <span className="font-semibold text-gray-900">playing soccer and table tennis</span>{" "}
            every week — staying active keeps me sharp both on and off the field.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            In my spare time, I love{" "}
            <span className="font-semibold text-gray-900">video editing</span> and{" "}
            <span className="font-semibold text-gray-900">spending quality time with my kids</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Over the past year, I’ve worked across{" "}
            <span className="font-semibold text-gray-900">
              Brisbane, Sunshine Coast, and Gold Coast
            </span>
            , helping families with{" "}
            <span className="font-semibold text-gray-900">quotes and installations</span>. This
            experience has sharpened my skills and given me{" "}
            <span className="font-semibold text-gray-900">a keen eye for navigating new places</span>{" "}
            quickly.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Whether it’s on the job site or in life, I bring{" "}
            <span className="font-semibold text-gray-900">
              dedication, adaptability, and a passion
            </span>{" "}
            for creating spaces people truly love.
          </p>
        </motion.div>

        {/* Professional Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl shadow-xl p-10 space-y-8"
        >
          <h2 className="text-2xl font-bold mb-6">Professional Background</h2>

          {/* Cards with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* White Card */}
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-10 h-10 text-green-400 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Holder of a{" "}
                <span className="font-semibold">General Construction Induction Card (White Card)</span>, 
                enabling me to work safely on construction-related sites.
              </p>
            </div>

            {/* Blue Card */}
            <div className="flex items-start gap-4">
              <IdCard className="w-10 h-10 text-blue-400 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Certified with a{" "}
                <span className="font-semibold">Blue Card</span>, required for working with people under 18.
              </p>
            </div>

            {/* NDIS Clearance */}
            <div className="flex items-start gap-4">
              <Accessibility className="w-10 h-10 text-purple-400 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Valid{" "}
                <span className="font-semibold">NDIS Worker Screening clearance</span>, 
                allowing seamless work with public institutions, community projects, and women’s centers.
              </p>
            </div>

            {/* IT Background */}
            <div className="flex items-start gap-4">
              <Laptop className="w-10 h-10 text-yellow-400 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Background in{" "}
                <span className="font-semibold">Information Technology</span> — including the design, development, and deployment of this very website.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
