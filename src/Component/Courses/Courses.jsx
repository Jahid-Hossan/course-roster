import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    /*Credit Limit*/
    const creditLimit = 20;
    // to store and update courses
    const [courses, setCourses] = useState([]);
    // store selected courses to show in bookmark section
    const [selectedCourses, setSelectedCourses] = useState([])
    // this state for calculate remaining credit hour 
    const [creditHr, setCreditHr] = useState(creditLimit);
    // this state for calculate total credit hour 
    const [totalCrHr, setTotalCrHr] = useState(0)
    // this state for calculate total price 
    const [totalPrice, setTotalPrice] = useState(0)


    // effect hook for load the data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    // select button handler
    const selectHandler = (course) => {
        const isSelected = selectedCourses.find(item => item.id === course.id);
        //   condition to check the cource already selected or not.
        if (isSelected) {
            // toast notification for Already added course
            toast.error('Already added', {
                position: "top-center",
                autoClose: 5000,
                theme: "colored",
            });
        } else {
            // credit calculation
            const checkCr = creditHr - course.credit_hour;
            // checking the credit limit is it below 20 or not.
            if (checkCr >= 0) {
                // set and updateing selected course
                const newSelected = [...selectedCourses, course];
                setSelectedCourses(newSelected);

                //   calculation of remaining credit hour
                const rest = creditHr - course.credit_hour;
                setCreditHr(rest)

                //   calculation of total credit hour
                const newtotalCrHr = totalCrHr + course.credit_hour;
                setTotalCrHr(newtotalCrHr);
                //   calculation of Total price
                const newTotalPrice = totalPrice + course.price;
                setTotalPrice(newTotalPrice);
            } else {
                // toast notification for credit limit
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
            <h2 className='text-2xl md:text-3xl font-extrabold md:text-center rounded-lg mb-6'>Course Registration</h2>
            {/* course card section */}
            <div className='md:flex gap-4'>
                <div className=' w-3/4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto gap-4'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            selectHandler={selectHandler}
                            course={course}></Course>)
                    }
                </div>
                {/* bookmark secton */}
                <div className=' bg-white p-4 rounded-xl'>
                    {/* remaining credit section */}
                    <h2 className='font-bold text-base md:text-lg text-blue-500 border-b-2 pb-4'>Credit Hour Remaining {creditHr} hr</h2>
                    {/* course name and course list section */}
                    <h2 className='font-bold text-xl pt-4'>Course Name</h2>
                    <ul className='p-4'>
                        {
                            selectedCourses.map(selectedCourse => <Bookmark
                                key={selectedCourse.id}
                                selectedCourse={selectedCourse}></Bookmark>)
                        }
                    </ul>
                    {/* total credit section */}
                    <h4 className='py-4 border-y-2 font-medium text-base text-gray-700'>Total Credit Hour : {totalCrHr}</h4>
                    {/* total price section */}
                    <h2 className='py-4  font-semibold text-base text-gray-700'>Total Price : {totalPrice}USD</h2>
                </div>
            </div>
            {/* toast conteiner */}
            <ToastContainer />
        </div>
    );
};

export default Courses;