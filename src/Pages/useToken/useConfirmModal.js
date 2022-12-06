import React from 'react';
import toast from 'react-hot-toast';

const UseConfirmModal = ({ deleteDoctor, setDeleteDoctor, refetch }) => {

    const handleDelete = (id, name) => {
        fetch(`https://doctor-portal-server-alpha.vercel.app/doctors/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Dr ${name} successfully deletet`)
                    refetch()
                }
            })
            .catch(er => console.log(er))
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{`Are you sure to delte Dr ${deleteDoctor.name} sepeciality on ${deleteDoctor.speciality}`}</h3>

                    <div className="modal-action">
                        <label onClick={() => handleDelete(deleteDoctor._id, deleteDoctor.name)} htmlFor="my-modal" className="btn">Yay!</label>
                        <button onClick={() => setDeleteDoctor(null)} className='btn btn-primary'>Cancel</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default UseConfirmModal;