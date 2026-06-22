// src/pages/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Me | KaiBlinds</title>
        <meta
          name="description"
          content="Learn more about my journey to becoming a Data Analyst, combining years of hands-on business operations in Queensland with technical expertise in SQL, Python, and Power BI."
        />
        <link rel="canonical" href="https://www.kaiblinds.com.au/about" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16 pt-30">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-8"
        >
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Bridging Business Insights with Data-Driven Solutions
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I am an aspiring <span className="font-semibold text-gray-900">Data Analyst</span> based in Brisbane, Australia, with a core passion for transforming raw, fragmented data into clear, actionable business strategies. In today’s fast-paced market, numbers tell a story, and I thrive on being the one who translates those numbers into meaningful insights that drive growth and operational efficiency.
            </p>
          </div>

          {/* Professional Background */}
          <p className="text-lg leading-relaxed text-gray-700">
            My professional journey is deeply rooted in practical, hands-on business operations. Over the years, I have worked extensively across <span className="font-semibold text-gray-900">sales, custom quoting, client services, and end-to-end installation logistics</span> throughout Brisbane, the Sunshine Coast, and the Gold Coast. Operating directly on the frontline has given me an intuitive understanding of supply chains, customer behavior, and workflow bottlenecks—knowledge that cannot be learned from textbooks alone.
          </p>

          {/* Technical Toolkit */}
          <p className="text-lg leading-relaxed text-gray-700">
            To complement this commercial expertise, I have built a robust technical foundation. Currently, I design and implement data projects utilizing <span className="font-semibold text-gray-900">SQL, PostgreSQL, Python, Power BI, and React</span>. Rather than just writing queries, I focus on building comprehensive, end-to-end pipelines—from setting up structured databases and cleaning messy raw data to creating dynamic, interactive dashboards that empower stakeholders to make informed decisions at a glance.
          </p>

          {/* Unique Strength */}
          <p className="text-lg leading-relaxed text-gray-700">
            What sets me apart is this unique blend of <span className="font-semibold text-gray-900">real-world business acumen and technical problem-solving</span>. Having collaborated closely with both backend operations and front-facing clients, I understand that data analysis is only as valuable as the real-world problems it solves. I look at data through a commercial lens, always aiming to reduce overheads, optimize sales performance, and maximize customer satisfaction.
          </p>

          {/* Personal Life / Values */}
          <p className="text-lg leading-relaxed text-gray-700">
            When I am away from my dual screens and database schemas, I stay grounded through active pursuits. I am a keen soccer player and an avid table tennis enthusiast, activities that sharpen my tactical thinking, split-second decision-making, and teamwork. Balancing my professional goals with a dedicated family life and digital content creation keeps me disciplined, highly organized, and constantly eager to learn and adapt to new challenges.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;