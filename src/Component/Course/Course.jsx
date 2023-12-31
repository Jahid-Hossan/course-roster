import React from 'react';
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

// getting data as props
const Course = ({ course, selectHandler }) => {
    // destructing data
    const { id, title, description, price, credit_hour, img
    } = course;
    return (
        // cards
        <div>
            <div className="bg-base-100 w-full rounded-xl p-4 ">
                <img src={img} className="rounded-xl mb-4 w-full" />
                <div className=" items-center  text-center">
                    <h2 className="text-left h-6 overflow-hidden text-lg font-semibold mb-3">{title}</h2>
                    <p className='text-left overflow-hidden h-16 text-sm font-normal text-gray-500 mb-5'>{description}</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-0.5'>
                            <FiDollarSign className='text-xl'></FiDollarSign>
                            <p className='text-base font-normal text-gray-500 mb-5 '>Price: {price}$</p>
                        </div>
                        <div className='flex gap-0.5 '>
                            <BsBook className='text-xl'></BsBook><p className='text-base font-normal text-gray-500 mb-5 '> Credit: {credit_hour}hr</p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => selectHandler(course)} className="w-full text-lg font-semibold text-white rounded-lg py-2 bg-indigo-500">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;