'use client';

import '@/app/styles/colors.css';

import trWhiteIcon from "@/assets/img/tr-white-icon.png"
import Link from 'next/link';
const CARDS = [
    {
        id: '1',
        name: 'tr-1',
        sn: "123423232",
        status: 1,
        yearOfManufacture: '2020',
        capacity: '1000 KVA',

    },
    {
        id: '2',
        sn: "123423232",
        name: 'tr-2',
        status: 2,
        yearOfManufacture: '2020',
        capacity: '1000 KVA',

    },
    {
        id: '3',
        sn: "123423232",
        name: 'tr-3',
        status: 3,
        yearOfManufacture: '2020',
        capacity: '1000 KVA',

    },
    {
        id: '4',
        sn: "",
        name: '',
        status: 0,
        yearOfManufacture: '',
        capacity: '',

    },
    {
        id: '6',
        sn: "123423232",
        name: '',
        status: 0,
        yearOfManufacture: '',
        capacity: '',

    },
    {
        id: '5',
        sn: "123423232",
        name: 'tr-5',
        status: 1,
        yearOfManufacture: '2020',
        capacity: '1000 KVA',

    },
];

const STATUS_MAP = {
    1: { label: 'Normal', class: 'trans-card--normal' },
    2: { label: 'Monitoring', class: 'trans-card--monitoring' },
    3: { label: 'Need Action', class: 'trans-card--need-action' },
    0: { label: 'Unknown', class: 'trans-card--unknown' },
};

export default function TransCards() {
    const trStatus = (status) => STATUS_MAP[status]?.label ?? 'Unknown';
    const statusClass = (status) => STATUS_MAP[status]?.class ?? 'trans-card--unknown';
    const isFullyUnknown = (card) =>
        card.status === 0 && !card.name && !card.sn && !card.yearOfManufacture && !card.capacity;

    return (
        <div className="trans-cards-container">
            <div className="trans-cards-header">
                <h2>Transformers</h2>
            </div>
            <div className="trans-cards-body">
                {CARDS.map((card) => (
                    <article
                        key={card.id}
                        className={`trans-card ${statusClass(card.status)} ${isFullyUnknown(card) ? 'trans-card--all-na' : ''}`}
                        style={{ border: card.status === 1 ? '4px solid var(--trans-status-green-bg)' : card.status === 2 ? '4px solid var(--trans-status-orange-bg)' : card.status === 3 ? '4px solid var(--trans-status-red-bg)' : '4px solid var(--trans-status-grey-bg)' }}

                    >
                        <div className="trans-card__top">
                            <div className="trans-card__logo">
                                <img src={trWhiteIcon.src} alt="transformer" className="trans-card__logo-img" />
                            </div>
                            <div className="trans-card__service">
                                <span className="trans-card__sn">{card.sn || "N/A"}</span>
                                <span className="trans-card__name">{card.name || "N/A"}</span>
                            </div>
                        </div>
                        <div className="trans-card__glass">
                            <div className="trans-card__glass-name">Transformer Name : {card.name || "N/A"}</div>
                            <div className="trans-card__glass-head">
                                <span className="trans-card__glass-label">SN : {card.sn || "N/A"}</span>
                                <span className="trans-card__glass-dots" aria-hidden>●●</span>
                            </div>
                            <span className="trans-card__glass-number">Year Of Manufacture : {card.yearOfManufacture || "N/A"}</span>
                            <span className="trans-card__glass-number">Capacity : {card.capacity || "N/A"}</span>
                        </div>
                        <div className="trans-card__footer">
                            <span className="trans-card__status">Status : {trStatus(card.status)}</span>
                            <Link href={`/dashboard/transformer?id=${card.id}`} className="trans-card__action" aria-hidden>↗</Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
