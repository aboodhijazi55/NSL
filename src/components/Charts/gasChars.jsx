"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const COLORS = [
    "#2B75D5", "#4C8FE0", "#6EA9EA", "#90C3F3",
    "#B2DDFF", "#1A4783", "#235EAC",
];

function transformDGAData(data) {
    if (!Array.isArray(data) || data.length === 0) return { years: [], series: [] };

    // Deduplicate years and sort
    const seen = new Set();
    const unique = data.filter((d) => {
        if (seen.has(d.year)) return false;
        seen.add(d.year);
        return true;
    });
    const sorted = [...unique].sort((a, b) => a.year - b.year);
    const years = sorted.map((d) => d.year);

    // Collect all unique gases (preserve first-seen order)
    const gases = [...new Set(data.flatMap((d) => d.results.map((r) => r.gas)))];

    // Build one series per gas, null for missing years
    const series = gases.map((gas) => ({
        name: gas,
        data: sorted.map((d) => d.results.find((r) => r.gas === gas)?.concentration ?? null),
    }));

    return { years, series };
}

export default function GasCharts({ data = [], unit = "ppm", test = "DGA", threshold = null, height = 400 }) {
    const { years, series } = transformDGAData(data);

    if (!years.length || !series.length) {
        return <div style={{ padding: 16, color: "#666" }}>No DGA data available.</div>;
    }

    const annotations = threshold != null ? {
        yaxis: [{
            y: threshold,
            borderColor: "#FF4560",
            strokeDashArray: 5,
            label: {
                text: `Threshold: ${threshold} ${unit}`,
                style: { color: "#fff", background: "#FF4560" },
            },
        }],
    } : {};

    const options = {
        chart: {
            type: "line",
            toolbar: {
                show: true,
                tools: { zoom: true, zoomin: true, zoomout: true, pan: true, reset: true },
            },
            zoom: { enabled: true },
            animations: { enabled: true, speed: 400 },
        },
        colors: COLORS,
        stroke: { curve: "smooth", width: 2.5 },
        markers: { size: 4, hover: { size: 6 } },
        xaxis: {
            categories: years,
            title: { text: "Year" },
            tooltip: { enabled: false },
        },
        yaxis: {
            title: { text: unit },
            labels: { formatter: (val) => (val != null ? String(val) : "") },
        },
        title: {
            text: `${test} (${unit})`,
            align: "left",
            style: { fontSize: "14px", fontWeight: 600 },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: { formatter: (val) => (val != null ? `${val} ${unit}` : "—") },
        },
        legend: {
            position: "bottom",
            onItemClick: { toggleDataSeries: true },
            onItemHover: { highlightDataSeries: true },
        },
        fill: { opacity: 1 },
        grid: { borderColor: "#f0f0f0", strokeDashArray: 3 },
        annotations,
    };

    return (
        <div>
            <Chart options={options} series={series} type="line" height={height} />
        </div>
    );
}
