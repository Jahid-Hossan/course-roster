import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Bookmark from '../Bookmark/Bookmark';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [elected, setElected] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const selectHandler = (course) => {
        const newSelected = [...elected, course];
        setElected(newSelected);
        const isSelected = elected.find(item => item.id === course.id);
        if (isSelected) {
            return alert('Already added')
        }
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-extrabold text-center my-6 bg-white py-6'>Course Registration</h2>
            <div className='flex gap-5'>
                <div className=' w-2/3 grid grid-cols-3 gap-6'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            selectHandler={selectHandler}
                            course={course}></Course>)
                    }
                </div>
                <div>
                    <Bookmark selectHandler={selectHandler}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Courses;