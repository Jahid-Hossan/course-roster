import React from 'react';

const Course = ({ course }) => {
    const { id, title, description, price, credit_hour, img
    } = course;
    return (
        <div>
            <div className="bg-base-100 rounded-xl p-4 ">
                <img src={img} className="rounded-xl mb-4 w-full" />
                <div className=" items-center  text-center">
                    <h2 className="text-left text-lg font-semibold mb-3">{title}</h2>
                    <p className='text-left min-h-16 text-sm font-normal text-gray-500 mb-5'>{description}</p>
                    <div>
                        <p className='text-base font-medium text-gray-500 mb-5 '></p>
                    </div>
                    <div className="">
                        <button className="w-full text-lg font-semibold text-white rounded-lg py-2 bg-indigo-500">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;