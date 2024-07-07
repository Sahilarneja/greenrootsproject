import React from 'react';
import '../styles/services.css';


const servicesData = [
    {
        
        heading: 'RoofTop Solar Installation',
        description: 'Rooftop solar installation harnesses sunlight to generate clean electricity, reducing energy costs and environmental impact',
    },
    {
        
        heading: 'Access Control',
        description: 'Open access solar enables consumers to choose renewable energy sources, providing greater flexibility and sustainability in electricity consumption.',
    },
    {
       
        heading: 'COPEX /OPEX',
        description: 'COPEX (Capital Expenditure) refers to the upfront costs of acquiring and installing assets, while OPEX (Operational Expenditure) covers the ongoing costs of operating and maintaining them',
    },
];

function Services() {
    return (
        <div className="services-container">
            {servicesData.map((service, index) => (
                <div className="service-box" key={index}>
                    {service.icon && <div className="service-icon">{service.icon}</div>}
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
