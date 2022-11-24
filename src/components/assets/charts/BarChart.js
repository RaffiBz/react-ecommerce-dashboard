import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  barThickness: 20,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  layout: {
    padding: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        // borderDash: [4, 2],
        color: "#F3F4F6",
      },
      stacked: true,
      ticks: {
        color: "#A6ACBE",
        font: {
          size: "12",
          weight: "400",
        },
        padding: 0,
        stepSize: 5000,
        //     showLabelBackdrop:false,
        //     callback: function(label, index, labels) {
        //         return label/1000+'k';
        //     },
        // },
        // scaleLabel: {
        //     display: true,
        //     labelString: '1k = 1000'
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        borderColor: "white",
      },
      ticks: {
        color: "#A6ACBE",
        font: {
          size: "16",
          weight: "400",
        },
      },
    },
  },
};

export default function BarChart({ className, data }) {
  return (
    <div className={className}>
      <Bar options={options} data={data} />
    </div>
  );
}
