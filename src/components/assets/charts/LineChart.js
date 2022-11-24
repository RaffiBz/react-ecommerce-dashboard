import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, "rgba(10,10,10,.2)");
// gradient.addColorStop(1, "rgba(255,255,255,1)");

export default function LineChart({ data, options }) {
  return <Line options={options} data={data} />;
}
