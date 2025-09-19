import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle } from "lucide-react";

const qualifications = [
  { year: "2019 – 2021", title: "Diploma of IT" },
  { year: "2013", title: "Certificate III in Aged Care" },
  { year: "2005 – 2009", title: "Bachelor of Hotel Management (Griffith University)" },
];

const Qualifications = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 text-gray-900">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    {/* Section Header */}
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <GraduationCap className="h-12 w-12 text-[#49B9FF]" />
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">
        Qualifications & Training
      </h2>
      <p className="mt-2 text-gray-600">
        A foundation of continuous learning and professional development
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l-2 border-[#49B9FF] pl-6 space-y-6">
      {qualifications.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="flex items-start gap-4"
        >
          <CheckCircle className="h-6 w-6 text-[#49B9FF] mt-1" />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.year}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Qualifications;
