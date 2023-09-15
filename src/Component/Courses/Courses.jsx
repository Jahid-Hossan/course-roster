import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    const creditLimit = 20;
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([])
    const [creditHr, setCreditHr] = useState(creditLimit);
    const [totalCrHr, setTotalCrHr] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);



    const selectHandler = (course) => {
        const isSelected = selectedCourses.find(item => item.id === course.id);
        if (isSelected) {
            toast.error('Already added', {
                position: "top-center",
                autoClose: 5000,
                theme: "colored",
            });
        } else {
            const checkCr = creditHr - course.credit_hour;
            if (checkCr >= 0) {
                const newSelected = [...selectedCourses, course];
                setSelectedCourses(newSelected);
                console.log(creditHr);
                const rest = creditHr - course.credit_hour;
                setCreditHr(rest)
                const newtotalCrHr = totalCrHr + course.credit_hour;
                setTotalCrHr(newtotalCrHr);
                const newTotalPrice = totalPrice + course.price;
                setTotalPrice(newTotalPrice);
            } else {
                toast.error('Credit hour limit exceeded', {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "colored",
                });
            }


        }
    }


    return (
        <div className='container p-8  mx-auto'>
            <h2 className='text-3xl font-extrabold text-center rounded-lg mb-6 py-6'>Course Registration</h2>
            <div className='flex gap-4'>
                <div className=' w-3/4 grid grid-cols-3 gap-4'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            selectHandler={selectHandler}
                            course={course}></Course>)
                    }
                </div>
                <div className=' bg-white p-4 rounded-xl'>
                    <h2 className='font-bold text-lg text-blue-500 border-b-2 pb-4'>Credit Hour Remaining {creditHr} hr</h2>
                    <h2 className='font-bold text-xl pt-4'>Course Name</h2>
                    <ul className='p-4'>
                        {
                            selectedCourses.map(selectedCourse => <Bookmark
                                key={selectedCourse.id}
                                selectedCourse={selectedCourse}></Bookmark>)
                        }
                    </ul>
                    <h4 className='py-4 border-y-2 font-medium text-base text-gray-700'>Total Credit Hour : {totalCrHr}</h4>
                    <h2 className='py-4  font-semibold text-base text-gray-700'>Total Price : {totalPrice}USD</h2>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Courses;