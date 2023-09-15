import React, { useState } from 'react';

const Bookmark = ({ selectedCourse }) => {
    const { id, title, description, price, credit_hour, img
    } = selectedCourse;
    console.log(title);
    return (
        <>
            <li className='list-disc font-normal text-base text-gray-500'>{title}</li>
        </>
    );
};

export default Bookmark;