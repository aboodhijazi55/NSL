"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function NormalCharts({ options = {}, series = [], type = "bar", height = 350 }) {
    return (
        <div>
            <Chart options={options} series={series} type={type} height={height} />
        </div>
    );
}
