import React from "react";
import DashboardSideNav from "./DashboardSideNav/DashboardSideNav";

const Dashboard = () => {
  return (
    <>
      <section>
        <div className="deshboardMainContainer grid md:grid-cols-2 gap-4 lg:grid-cols-2">
          <div className="deshobardLeftSideNav md:w-2/5 lg:w-2/5 xl:w-2/5">
            <DashboardSideNav></DashboardSideNav>
          </div>
          <div className="deshobardRightSideContent md:w-3/5 lg:w-3/5 xl:w-3/5">
            <h1>Hello Deshboadrd</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
