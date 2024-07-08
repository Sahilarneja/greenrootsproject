import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faUnlockAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import '../styles/services.css';

const servicesData = [
    {
        icon: faSolarPanel,
        heading: 'RoofTop Solar Installation',
        description: 'Rooftop solar installation harnesses sunlight to generate clean electricity, reducing energy costs and environmental impact',
    },
    {
        icon: faUnlockAlt,
        heading: 'Access Control',
        description: 'Open access solar enables consumers to choose renewable energy sources, providing greater flexibility and sustainability in electricity consumption.',
    },
    {
        icon: faMoneyBill,
        heading: 'COPEX / OPEX',
        description: 'COPEX (Capital Expenditure) refers to the upfront costs of acquiring and installing assets, while OPEX (Operational Expenditure) covers the ongoing costs of operating and maintaining them',
    },
];

function Services() {
    return (
        <div className="services-container">
            {servicesData.map((service, index) => (
                <div className="service-box" key={index}>
                    {service.icon && (
                        <div className="service-icon">
                            <FontAwesomeIcon icon={service.icon} />
                        </div>
                    )}
                    <div className="service-content">
                        <div className="service-heading">{service.heading}</div>
                        <div className="service-description">{service.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Services;
