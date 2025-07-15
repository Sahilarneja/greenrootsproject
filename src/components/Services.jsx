import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel, faUnlockAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import '../styles/services.css';

const servicesData = [
    {
        icon: faSolarPanel,
        heading: 'Rooftop Solar Installation',
        description: 'Rooftop solar installations harness sunlight to generate clean electricity by using photovoltaic (PV) cells in solar panels, which convert sunlight directly into direct current (DC) electricity. This DC electricity is then transformed into alternating current (AC) by an inverter, making it usable for household or business needs. By generating their own electricity, users can significantly reduce energy costs and dependence on fossil fuels, thereby lowering their carbon footprint and contributing to environmental sustainability. Additionally, excess electricity can be stored in batteries or fed back into the grid, providing further economic benefits through incentives like net metering.',
    },
    {
        icon: faUnlockAlt,
        heading: 'Open Access',
        description: 'Open access solar enables consumers to choose renewable energy sources, providing greater flexibility and sustainability in electricity consumption. By allowing individuals and businesses to select solar energy from a variety of providers, this system promotes competition and innovation in the renewable energy market. Consumers benefit from potentially lower energy costs, while also supporting the transition to a more sustainable energy grid. Open access solar helps to decentralize energy production, reducing reliance on traditional fossil fuel power plants and decreasing overall carbon emissions, thus contributing to a cleaner and more resilient energy infrastructure',
    },
    {
        icon: faMoneyBill,
        heading: 'CAPEX / OPEX',
        description: 'The Operational Expenditure (OpEx) model shifts solar plant setup and maintenance to a third party, addressing the high costs of the Capital Expenditure (CapEx) model. Partnering with a Renewable Energy Service Company (RESCO), consumers provide space while the RESCO handles equipment, installation, and maintenance, offering cheaper electricity through a Power Purchase Agreement (PPA). Conversely, the CapEx model requires consumers to cover the full cost of the solar system but grants complete ownership, tax benefits, and the ability to sell excess energy back to the grid. For those with sufficient capital, the CapEx model allows full control, with potential energy savings recovering the initial investment within 5-6 years, and solar loans can reduce the financial burden.'
    }
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
