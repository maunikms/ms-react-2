import React from 'react';
import EmailImg from "../../assets/images/email.png";
import PhoneImg from "../../assets/images/phone.png";
import EditImg from "../../assets/images/edit.png";
import FillHeartImg from "../../assets/images/fill-heart.png";
import HeartImg from "../../assets/images/heart.png";
import WebImg from "../../assets/images/web.png";
import DeleteImg from "../../assets/images/delete.png";

const UserCard = ({ userData, deleteRecord, likeDisLike, handleEdit }) => {
    return (
        <div className='m-4 p-0 leading-4 list-none relative bg-white rounded-sm border w-auto text-sm text-gray-500 font-light'>
            <div className='justify-center flex items-center bg-gray-100'>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${userData.username}.svg`} alt="user icon" width={200} height={200} />
            </div>
            <div className='p-6'>
                <h1 className='font-medium text-base text-start mb-2 text-black'>{userData?.name}</h1>
                <div className='flex items-center mb-1'>
                    <img src={EmailImg} alt="email icon" width={20} height={24} />
                    <span className='text-sm ml-1.5'>{userData?.email}</span>
                </div>
                <div className='flex items-center mb-1'>
                    <img src={PhoneImg} alt="phone icon" width={20} height={24} />
                    <span className='text-sm ml-1.5'>{userData?.phone}</span>
                </div>
                <div className='flex items-center mb-1'>
                    <img src={WebImg} alt="web icon" width={20} height={24} />
                    <span className='text-sm ml-1.5'>{userData?.website}</span>
                </div>
            </div>
            <ul className='flex m-0 p-0 list-none bg-gray-50 border-t'>
                <li className='w-2/6 my-3'>
                    {
                        userData?.isLike ?
                            <img src={FillHeartImg} alt="heart" onClick={() => likeDisLike(userData?.id, false)} width={20} height={20} className="cursor-pointer mx-auto" />
                            :
                            <img src={HeartImg} alt="heart" onClick={() => likeDisLike(userData?.id, true)} width={20} height={20} className="cursor-pointer mx-auto" />
                    }
                </li>
                <li className='w-2/6 my-3 border-x-2'>
                    <img src={EditImg} alt="edit icon" onClick={() => handleEdit(userData)} width={20} height={20} className="cursor-pointer mx-auto" />
                </li>
                <li className='w-2/6 my-3'>
                    <img src={DeleteImg} alt="delete icon" onClick={() => deleteRecord(userData?.id)} width={20} height={20} className="cursor-pointer mx-auto" />
                </li>
            </ul>
        </div>
    )
}

export default UserCard;