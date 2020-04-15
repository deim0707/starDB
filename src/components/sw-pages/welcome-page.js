import React from "react";

const WelcomePage = () => {

    const welcome =  <h2 className='mx-auto my-4'
                         style={{maxWidth: '370px',textAlign: 'center'}}>
        Welcome to StarDB.
    </h2>;

    const selectCategory = <p className='mx-auto my-4'
                              style={{maxWidth: '370px',textAlign: 'center'}}>
        Please select a category from the top menu.
    </p>;

    return (
        <React.Fragment>
            {welcome}
            {selectCategory}
        </React.Fragment>
    )
};

export default WelcomePage;