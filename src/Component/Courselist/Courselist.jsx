import React from 'react';

const Courselist = ({ selectedCourse }) => {

    const { id, title, description, price, credit_hour, img
    } = selectedCourse;
    console.log(title);
    return (
        <>
            <li className='list-disc'>{title}</li>
        </>
    );
};

export default Courselist;