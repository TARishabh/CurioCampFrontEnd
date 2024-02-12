import React from 'react';
import './premiumcard.css';

const PremiumCard = ({ title, description, imageUrl }) => {
    return (
    <div className="container">
        <div className="card" style={{ '--clr': '#009688' }}>
            <div className="imgBx">
                <img src={imageUrl} alt="Image 1"/>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="card" style={{ '--clr': '#ff3e7f' }}>
            <div className="imgBx">
                <img src="img2.jpg" alt="Image 2"/>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="card" style={{ '--clr': '#03a9f4' }}>
            <div className="imgBx">
                <img src="img3.jpg" alt="Image 3"/>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default PremiumCard;
