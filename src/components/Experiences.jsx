import React from "react";
import { motion } from "framer-motion";
import {
Database,
BarChart3,
Briefcase,
Users,
TrendingUp,
} from "lucide-react";

const experiences = [
{
icon: Database,
title: "SQL & Database Projects",
desc: "Designed and managed PostgreSQL databases, wrote SQL queries for data extraction, transformation, and reporting.",
},
{
icon: BarChart3,
title: "Power BI Dashboards",
desc: "Built interactive dashboards to visualize sales performance, customer trends, and business KPIs.",
},
{
icon: TrendingUp,
title: "Data Analysis",
desc: "Used Python and analytical thinking to clean, transform, and analyze datasets for actionable insights.",
},
{
icon: Briefcase,
title: "Business Operations Experience",
desc: "Worked across sales, quotations, customer service, and project coordination, gaining a strong understanding of real-world business processes.",
},
{
icon: Users,
title: "Stakeholder Communication",
desc: "Collaborated with customers and team members to understand requirements and deliver practical solutions.",
},
];

const Experience = () => {
return ( <section className="relative py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900 pt-30"> <div className="max-w-6xl mx-auto px-6 lg:px-12">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">
        Professional Experience & Skills
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Combining hands-on business experience with modern data analytics
        tools to transform raw data into meaningful business insights.
        My focus includes SQL, PostgreSQL, Python, Power BI, and
        business intelligence reporting.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <exp.icon className="h-10 w-10 text-[#49B9FF]" />

          <div>
            <h3 className="text-xl font-semibold">
              {exp.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {exp.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


);
};

export default Experience;
