import React, { useState } from 'react';

const Bookmark = ({ selectedCourse }) => {
    const [creditHr, setCreditHr] = useState(0);
    const { id, title, description, price, credit_hour, img
    } = selectedCourse;

    // const newCreditHr = creditHr + credit_hour;
    // setCreditHr(creditHr + credit_hour);

    return (
        <div>
            <h2>Credit Hour Remaining  hr</h2>
        </div>
    );
};

export default Bookmark;