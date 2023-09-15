import React, { useState } from 'react';
import Courselist from '../Courselist/Courselist';

const Bookmark = ({ selectedCourse }) => {
    console.log(selectedCourse);
    return (
        <ul className='px-4'>
            <Courselist selectedCourse={selectedCourse}></Courselist>
        </ul>
    );
};

export default Bookmark;