import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";

const Statistic = () => {

    const ChartComponent = ({ statisticsData }) => {
        useEffect(() => {
          const fetchData = async () => {
            try {
              const labels = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              const dataArr = labels.map(
                (month, index) => statisticsData[index + 1] || 0
              );
    
              const ctx = document.getElementById("myChart");
              new Chart(ctx, {
                type: "bar",
                data: {
                  labels: labels,
                  datasets: [
                    {
                      label: "# of Schools from 01-01-2023 to 31-12-2023",
                      data: dataArr,
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                },
              });
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
    
          fetchData();
        }, [statisticsData]);
    
        return <canvas id="myChart" width="400" height="200"></canvas>;
      };
  return (
    <Row>
      <Col span={3} className="col-3"></Col>
      <Col span={18} className="col-18">
        <div>
        <ChartComponent />
        </div>
      </Col>
      <Col span={3} className="col-3"></Col>
    </Row>
  );
};

export default Statistic;
