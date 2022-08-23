import React, { useEffect, useState } from 'react';
import CloseIcon from "../../assets/images/close.png";

const EditModal = ({ open, toggleModal, editData, handleSaveEditData }) => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        website: ""
    })
    useEffect(() => {
        setData(editData)
    }, [editData])


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleOk = (userData) => {
        if (userData.name !== "" && userData.email !== "" && userData.phone !== "" && userData.website !== "") {
            handleSaveEditData(userData)
        }
    }

    return (
        <div className={`fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full text-black bg-zinc-900/75 flex items-center justify-center ${open ? '' : 'hidden'}`}>
            <div className='w-[500px] rounded-md bg-white modal_content'>
                <div className='flex justify-between items-center py-4 px-6 border-b'>
                    <h1 className='m-0 text-gray-800 font-medium text-base'>Basic Modal</h1>
                    <img src={CloseIcon} alt="close" onClick={toggleModal} width={16} height={16} className="cursor-pointer" />
                </div>
                <div className='p-6 text-sm leading-4 modal_body'>
                    <div className='relative flex mb-6 items-center'>
                        <label className='w-20 text-sm text-gray-800 text-end mr-2.5'>Name :</label>
                        <input type="text" name="name" className={`m-0 list-none relative inline-block w-full h-8 py-1 px-2.5 text-sm leading-4  bg-white border rounded ${data.name !== "" ? 'border-gray-400 text-gray-600' : ' border-red-500 shadow-none outline-none'}`} value={data?.name} onChange={handleChange} />
                        {
                            data.name === "" && <div className='absolute text-red-500 text-sm leading-4 left-20 -bottom-5'>This field is required</div>
                        }
                    </div>
                    <div className='relative flex mb-6 items-center'>
                        <label className='w-20 text-sm text-gray-800 text-end mr-2.5'>Email :</label>
                        <input type="email" name="email" className={`m-0 list-none relative  inline-block  w-full h-8 py-1 px-2.5 text-sm leading-4  bg-white border  rounded ${data.email !== "" ? 'border-gray-400 text-gray-600' : ' border-red-500 shadow-none outline-none'}`} value={data?.email} onChange={handleChange} />
                        {
                            data.email === "" && <div className='absolute text-red-500 text-sm leading-4 left-20 -bottom-5'>This field is required</div>
                        }
                    </div>
                    <div className='relative flex mb-6 items-center'>
                        <label className='w-20 text-sm text-gray-800 text-end mr-2.5'>Phone :</label>
                        <input type="text" name="phone" className={`m-0 list-none relative  inline-block  w-full h-8 py-1 px-2.5 text-sm leading-4  bg-white border  rounded ${data.phone !== "" ? 'border-gray-400 text-gray-600' : ' border-red-500 shadow-none outline-none'}`} value={data?.phone} onChange={handleChange} />
                        {
                            data.phone === "" && <div className='absolute text-red-500 text-sm leading-4 left-20 -bottom-5'>This field is required</div>
                        }
                    </div>
                    <div className='relative flex mb-6 items-center'>
                        <label className='w-20 text-sm text-gray-800 text-end mr-2.5'>Website :</label>
                        <input type="text" name="website" className={`m-0 list-none relative  inline-block  w-full h-8 py-1 px-2.5 text-sm leading-4  bg-white border  rounded ${data.website !== "" ? 'border-gray-400 text-gray-600' : ' border-red-500 shadow-none outline-none'}`} value={data?.website} onChange={handleChange} />
                        {
                            data.website === "" && <div className='absolute text-red-500 text-sm leading-4 left-20 -bottom-5'>This field is required</div>
                        }
                    </div>
                </div>
                <div className='py-2.5 px-4 text-right bordet-t rounded-b'>
                    <button className='leading-4 relative inline-block font-normal text-center cursor-pointer h-8 px-3.5 text-sm rounded text-gray-800 bg-white border border-slate-300' onClick={toggleModal}>Cancel</button>
                    <button className='text-white bg-sky-500 border-sky-500 border leading-4 relative  inline-block font-normal text-center cursor-pointer h-8 px-3.5 text-sm rounded ml-2.5' onClick={() => handleOk(data)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;