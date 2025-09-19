import React from "react";
import { motion } from "framer-motion";
import { Wrench, FileText, Hammer, ClipboardList, Truck } from "lucide-react";

const experiences = [
  {
    icon: FileText,
    title: "Quotations & Paperwork",
    desc: "Prepared accurate quotations, invoices, worksheets, and managed complete project documentation.",
  },
  {
    icon: Hammer,
    title: "Fabrication",
    desc: "Manufactured custom blinds with precision, ensuring durability and premium quality.",
  },
  {
    icon: Truck,
    title: "Onsite Installation",
    desc: "Delivered and installed blinds directly at client sites with professional fitting.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Handled end-to-end processes from consultation to delivery, maintaining timelines and client satisfaction.",
  },
  {
    icon: Wrench,
    title: "Hands-on Service",
    desc: "Provided after-service support, adjustments, and ensured long-term customer trust.",
  },
];

const Experience = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900 pt-30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
          <p className="mt-2 text-gray-500">
            NiceBlinds | Brisbane | Jul 2024 – Sep 2025
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <exp.icon className="h-10 w-10 text-[#49B9FF]" />
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 mt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
