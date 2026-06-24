import React from "react";
import dashboard from "../assets/dashboard.png";
import model from "../assets/data-model.png"; // 나중에 추가

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-20">

      {/* Header */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Sales Performance Dashboard
        </h1>

        <p className="text-gray-600 text-lg">
          End-to-end Business Intelligence project built using
          PostgreSQL, Python, Power BI and React.
        </p>
      </section>

      {/* Dashboard Screenshot */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Dashboard Preview
        </h2>

        <img
          src={dashboard}
          alt="Power BI Dashboard"
          className="rounded-xl shadow-lg border"
        />
      </section>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Project Overview
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          This project demonstrates a complete, end-to-end Business Intelligence workflow 
          utilizing **simulated operational data from a custom window blinds and curtains business**. 
          Raw data—encompassing quotes, sales, and installation metrics—was modeled in PostgreSQL 
          using a star schema design. Power BI was then deployed to build dynamic KPI reports and 
          interactive visualizations, delivering actionable insights into revenue streams, profit margins, 
          product performance, employee productivity, and contractor installation efficiency.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center shadow">
            PostgreSQL
          </div>

          <div className="border rounded-lg p-4 text-center shadow">
            Python
          </div>

          <div className="border rounded-lg p-4 text-center shadow">
            Power BI
          </div>

          <div className="border rounded-lg p-4 text-center shadow">
            React
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Key KPIs
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold">$37.62M</p>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-gray-500">Profit</h3>
            <p className="text-3xl font-bold">$17.25M</p>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-3xl font-bold">15K</p>
          </div>

          <div className="border rounded-lg p-6 shadow">
            <h3 className="text-gray-500">Margin</h3>
            <p className="text-3xl font-bold">45.86%</p>
          </div>

        </div>
      </section>

      {/* Key Insights */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Business Insights
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Maintained an exceptional **Profit Margin of 45.86%**, generating **$17.25M in Total Profit** out of $37.62M in Revenue.</li>
          <li>The **Shutter category is the primary powerhouse**, accounting for **41.46% ($15.6M) of total revenue**.</li>
          <li>Demonstrated excellent supply chain resilience, with revenue evenly distributed across major manufacturers like **Shaw, Wilson, and Luxaflex** ($4.5M to $4.8M each).</li>
          <li>Showcased a highly balanced team structure; **Luke generated the highest revenue ($3.8M)**, while **Chris completed the most jobs (1,547 orders)**, with minimal gaps among top performers.</li>
          <li>Identified a distinct **seasonal dip between December and February** (the summer season), contrasted by peak order volumes exceeding 440 orders monthly from April through August.</li>
        </ul>
      </section>

     {/* Data Model Architecture (기존 빈 섹션 고도화) */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          Data Architecture & Modeling (ERD)
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Designed a robust relational star schema database optimized for analytical queries and BI performance.
        </p>

        {/* Model Image Frame */}
        <div className="border rounded-xl shadow-lg overflow-hidden bg-white p-2 mb-6">
          <img
            src={model}
            alt="Database Star Schema Entity Relationship Diagram"
            className="w-full h-auto object-contain max-h-[550px]"
          />
        </div>

        {/* Schema Information Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5 bg-slate-50/50 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
              📋 Fact Tables (Transactional Data)
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-base">
              <li><strong className="text-slate-900 font-medium">public fact_sales:</strong> Stores central business metrics including transactional costs, sales quantities, employee IDs, and direct relations to manufacturers.</li>
              <li><strong className="text-slate-900 font-medium">public fact_quotes:</strong> Tracks customer lead inquiries, estimated quote values, and operational status workflows.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-slate-50/50 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
              📐 Dimension Tables (Context Attributes)
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-base">
              <li><strong className="text-slate-900 font-medium">dim_date / products / customers:</strong> Supports granular filtering by calendar timelines, item categories (Shutters, Blinds), and demographic locations.</li>
              <li><strong className="text-slate-900 font-medium">installers / employees / manufacturers:</strong> Powers operational tracking for contractor efficiency and supply chain performance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="flex gap-4">

        <a
          href="https://github.com/eunbiggabi/blinds-sales-analytics"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View GitHub
        </a>

        <a
          href="/blinds_data_analysis.pbix"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Download PBIX
        </a>

      </section>

    </div>
  );
};

export default Dashboard;