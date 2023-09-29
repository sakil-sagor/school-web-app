import React from 'react';

const TopSection = ({ headline, paragraph }) => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-green-800 text-4xl font-bold'>{headline}</h2>
                <hr className='w-1/4 mx-auto my-4 border border-red-800' />
                <p className='text-green-800  font-bold'>{paragraph}</p>
            </div>
        </div>
    );
};

export default TopSection;