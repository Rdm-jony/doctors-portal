import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const OptionModal = ({ modalData, selectedDate, setModalData, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots } = modalData;

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const date = form.date.value;
        const patient = form.displayName.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const treatmantName = name;

        const bookingsInfo = {
            date, patient, slot, email, phone, treatmantName
        }
        console.log(bookingsInfo)
        fetch("https://doctor-portal-server-alpha.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingsInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("succefully added!")
                    refetch()
                    setModalData(null)
                }
                else {
                    toast.error(data.message)
                }

            })
            .catch(er => console.log(er))

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h2 className='text-xl font-bold mb-5'>{name}</h2>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                        <div className="form-control">
                            <input name='date' value={format(selectedDate, "PP")} type="text" className="input input-bordered font-semibold" disabled />
                        </div>
                        <div className="form-control">
                            <select name='slot' className="select select-bordered w-full">
                                {
                                    slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                }
                            </select>

                        </div>
                        <div className="form-control">
                            <input name='displayName' defaultValue={user?.displayName} disabled type="text" placeholder='Full Name' className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <input name='email' defaultValue={user?.email} disabled type="email" placeholder='Email' className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <input name='phone' type="number" placeholder='Phone Number' className="input input-bordered " required />
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-accent text-white' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OptionModal;