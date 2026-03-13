'use client';

import '@/app/styles/colors.css';

import trWhiteIcon from "@/assets/img/tr-white-icon.png"

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

export default function TransCards() {
    const trStatus = (status) => {
        switch (status) {
            case 1:
                return 'Normal';
            case 2:
                return 'Monitoring';
            case 3:
                return 'Need Action';
            default:
                return 'Unknown';
        }
    }
    return (
        <div className="trans-cards-container">
            <div className="trans-cards-header">
                <h2>Transformers </h2>
            </div>
            <div className="trans-cards-body">
                {CARDS.map((card) => (
                    <article
                        key={card.id}
                        className="trans-card"
                        style={{ background: card.status === 1 ? 'var(--gradient-green)' : card.status === 2 ? 'var(--gradient-orange)' : 'var(--gradient-red)' }}
                    >
                        <div className="trans-card__top">
                            <div className="trans-card__logo">
                                <img src={trWhiteIcon.src} alt="transformer" className="trans-card__logo-img" />
                            </div>
                            <div className="trans-card__service">
                                <span className="trans-card__name">{card.sn || "N/A"} </span>
                                <span className="trans-card__plan">{card.name || "N/A"}</span>
                            </div>
                        </div>
                        <div className="trans-card__glass">
                            <div className="trans-card__glass-name">Transormer Name : {card.name || "N/A"}</div>
                            <div className="trans-card__glass-head">
                                <span className="trans-card__glass-label">SN : {card.sn || "N/A"}</span>
                                <span className="trans-card__glass-issuer" aria-hidden>
                                    ●●
                                </span>
                            </div>
                            <span className="trans-card__glass-number">Year Of Manufacture : {card.yearOfManufacture || "N/A"}</span>
                            <span className="trans-card__glass-number">Capacity : {card.capacity || "N/A"}</span>
                        </div>
                        <div className="trans-card__footer">
                            <span className="trans-card__date"> Status : {trStatus(card.status) || "N/A"}</span>
                            <div className="trans-card__footer-left">
                                <span className="trans-card__action" aria-hidden>
                                    ↗
                                </span>
                            </div>

                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
