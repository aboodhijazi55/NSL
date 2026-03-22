'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import NormalCharts from '@/components/Charts/normalCharts'
import GasCharts from '@/components/Charts/gasChars'
import Breadcrumb from '@/components/layout/Breadcrumb'
import "@/app/styles/colors.css";
// API: GET /api/transformers/:id/tests → [{ test, unit, data: [{ year, value }, ...] }, ...]
const SAMPLE_DATA = [

    {
        test: 'DGA',
        unit: 'ppm',
        DGA: true,
        data: [
            {
                year: 2022,
                results: [
                    { gas: 'H2', concentration: 100 },
                    { gas: 'CH4', concentration: 150 },
                    { gas: 'C2H2', concentration: 60 },
                    { gas: 'CO', concentration: 200 },
                ]
            },
            {
                year: 2023,
                results: [
                    { gas: 'H2', concentration: 120 },
                    { gas: 'CH4', concentration: 170 },
                    { gas: 'C2H2', concentration: 95 },
                    { gas: 'C2H4', concentration: 75 },
                    { gas: 'CO', concentration: 220 },
                ]
            },
            {
                year: 2024,
                results: [
                    { gas: 'H2', concentration: 140 },
                    { gas: 'O2', concentration: 190 },
                    { gas: 'CO2', concentration: 110 },
                    { gas: 'N2', concentration: 90 },
                    { gas: 'H2S', concentration: 250 },
                ]
            },
        ],
    }, {
        test: 'BDV',
        unit: 'V',
        DGA: false,
        data: [
            { year: 2022, value: 10.2 },
            { year: 2023, value: 12.3 },
            { year: 2024, value: 11.8 },
            { year: 2024, value: 11.8 },
            { year: 2025, value: 13.1 },
            { year: 2026, value: 14.2 },
            { year: 2027, value: 15.3 },
            { year: 2028, value: 16.4 },
            { year: 2029, value: 17.5 },
            { year: 2030, value: 18.6 },
            { year: 2031, value: 10.2 },
            { year: 2032, value: 12.3 },
            { year: 2033, value: 11.8 },
            { year: 2034, value: 13.1 },
            { year: 2035, value: 14.2 },
            { year: 2036, value: 15.3 },
            { year: 2037, value: 16.4 },
            { year: 2038, value: 17.5 },
            { year: 2039, value: 18.6 },
        ],
    },

    {
        test: 'DGA',
        unit: 'ml',
        DGA: false,
        data: [
            { year: 2022, value: 8.5 },
            { year: 2023, value: 9.1 },
            { year: 2024, value: 9.7 },
        ],
    },
    {
        test: 'DGA',
        unit: 'ml',
        DGA: false,
        data: [
            { year: 2022, value: 8.5 },
            { year: 2023, value: 9.1 },
            { year: 2024, value: 9.7 },
        ],
    }
]

function TestChart({ test, unit, DGA, data }) {
    if (DGA) {
        return <GasCharts data={data} unit={unit} test={test} height={380} />
    }

    return (
        <NormalCharts
            options={{
                chart: { toolbar: { show: false } },
                colors: ["var(--primary2)"],
                plotOptions: { bar: { borderRadius: 6, dataLabels: { position: "top" } } },
                dataLabels: { enabled: true, style: { fontSize: "12px" } },
                xaxis: { categories: data.map((d) => d.year), title: { text: "Year" } },
                yaxis: { title: { text: unit || "Value" } },
                title: { text: `${test} (${unit})`, align: "left" },
                tooltip: { shared: true, intersect: false },
            }}
            series={[{ name: test, data: data.map((d) => d.value) }]}
            type="bar"
            height={350}
        />
    )
}

export default function Page() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const tests = SAMPLE_DATA

    return (
        <div className="transformer-page">
            <Breadcrumb
                pageTitle="Transformer Details"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Transformer', active: true },
                ]}
            />
            <div className='transformer-charts-row'>
                {tests.map((item, i) => (
                    <div key={i} className={`charts-container${item.DGA ? ' full-width' : ''}`}>
                        <TestChart {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
