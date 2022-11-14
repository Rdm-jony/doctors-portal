import React from 'react';

const BannerCard = ({ card }) => {
    const { title, img, description, bgColor } = card;
    return (
        <div>
            <div className={`flex shadow-xl ${bgColor} text-white h-48 flex items-center px-6 rounded-md shadow-md`}>
                <figure className="w-20">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;