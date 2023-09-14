import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Bookmark from '../Bookmark/Bookmark';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([])
    // const [creditHr, setCreditHr] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const selectHandler = (course) => {
        const isSelected = selectedCourses.find(item => item.id === course.id);

        if (isSelected) {
            return alert('Already added')
        } else {

            const newSelected = [...selectedCourses, course];
            setSelectedCourses(newSelected);
            let creditHr = 0;
            selectedCourses.map(course => {
                creditHr = creditHr + course.credit_hour;
                console.log(creditHr);
            })

        }
    }

    let creditHr = 0;
    selectedCourses.map(course => {
        creditHr = creditHr + course.credit_hour;
    })

    return (
        <div className='container px-16 mx-auto'>
            <h2 className='text-3xl font-extrabold text-center rounded-lg mb-6 bg-white py-6'>Course Registration</h2>
            <div className='flex gap-5'>
                <div className=' w-3/4 grid grid-cols-3 gap-4'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            selectHandler={selectHandler}
                            course={course}></Course>)
                    }
                </div>
                <div>
                    <h2>Credit Hour Remaining {creditHr} hr</h2>
                    {
                        selectedCourses.map(selectedCourse => <Bookmark
                            key={selectedCourse.id}
                            selectedCourse={selectedCourse}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;