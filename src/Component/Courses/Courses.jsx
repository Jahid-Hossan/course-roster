import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <div className=' grid grid-cols-3 gap-6'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;