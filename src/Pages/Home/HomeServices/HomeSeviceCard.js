import React from 'react';

const HomeSeviceCard = ({ homeService }) => {
    const { img, title,description } = homeService;
    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default HomeSeviceCard;