import React from "react";
import ChartData from "./chartData.json";
import DonutChart from "./../ChartComponents/DonutChart";
import VerticalBarChart from "./../ChartComponents/VerticalBarChart";

const DashboardView = () => {
    const options = {
        donutChart: {},
        verticalBarChart: {}
    };
    return (
        <div className="container__dashboard-view">
            <DonutChart data={ChartData.donutChart} options={options.donutChart} />
            <VerticalBarChart
                data={ChartData.verticalBarChart}
                options={options.verticalBarChart}
            />
        </div>
    );
};

export default DashboardView;
