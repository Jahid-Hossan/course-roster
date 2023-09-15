import React, { useState } from 'react';

// getting data as props
const Bookmark = ({ selectedCourse }) => {
    // destructuring data
    const { id, title, description, price, credit_hour, img
    } = selectedCourse;
    console.log(title);
    return (
        // list item
        <>
            <li className='list-disc font-normal text-base text-gray-500'>{title}</li>
        </>
    );
};

export default Bookmark;