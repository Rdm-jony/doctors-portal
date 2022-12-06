import React from 'react';

const SingleOption = ({ option,setModalData }) => {
    const{name,slots}=option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl py-4">
                <div className="flex flex-col items-center gap-y-4">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p className='text-sm font-semibold'>{slots.length>0?slots[0]:"Try another day"}</p>
                    <p className='text-sm'>{slots.length} {slots.length>1?"SPACES":"SPACE"} AVAILABLE</p>
                    <div className="card-actions">
                        <label disabled={slots.length===0}
                         onClick={()=>setModalData(option)} htmlFor="my-modal-3" className="btn btn-primary text-white">
                            Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOption;