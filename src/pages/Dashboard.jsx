import React from "react";
import KPI from "../components/KPI";
import RevenueChart from "../components/RevenueChart";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Australian Blinds & Curtains Business Dashboard

      </h1>
      <p className="text-xl font-bold mb-6">
        "Retail sales dataset was transformed into a simulated Australian blinds and curtains business dataset. Additional profitability and installation metrics were engineered to perform business intelligence analysis."
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPI title="Revenue" value="$582,400" />
        <KPI title="Profit" value="$187,300" />
        <KPI title="Orders" value="823" />
        <KPI title="Margin" value="32.1%" />
      </div>

      <RevenueChart />
    </div>
  );
}

export default Dashboard;