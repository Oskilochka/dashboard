import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { routes } from "./route";
import {
  AreaChart,
  BarChart,
  Calendar,
  ColorMappingChart,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  FinancialChart,
  Kanban,
  LineChart,
  Orders,
  PieChart,
  PyramidChart,
  StackedChart,
} from "./pages";
import { Navbar, Sidebar } from './components'

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              type="button"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            Sidebar w-0
          </div>
        )}

        <div className={`dark:bg-main-dark-bg bg-main-bg  min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>

        <div>
          <Routes>
            <Route path={routes.base} element={<Ecommerce />} />
            <Route path={routes.ecommerce} element={<Ecommerce />} />

            {/* Pages */}
            <Route path={routes.orders} element={<Orders />} />
            <Route path={routes.employees} element={<Employees />} />
            <Route path={routes.customers} element={<Customers />} />

            {/* Apps */}
            <Route path={routes.kanban} element={<Kanban />} />
            <Route path={routes.editor} element={<Editor />} />
            <Route path={routes.calendar} element={<Calendar />} />
            <Route path={routes.colorPicker} element={<ColorPicker />} />

            {/* Charts */}
            <Route path={routes.chartLine} element={<LineChart />} />
            <Route path={routes.chartArea} element={<AreaChart />} />
            <Route path={routes.chartBar} element={<BarChart />} />
            <Route path={routes.chartPie} element={<PieChart />} />
            <Route path={routes.chartFinancial} element={<FinancialChart />} />
            <Route path={routes.chartColorMapping} element={<ColorMappingChart />} />
            <Route path={routes.chartPyramid} element={<PyramidChart />} />
            <Route path={routes.chartStacked} element={<StackedChart />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>

  );
};

export default App;
