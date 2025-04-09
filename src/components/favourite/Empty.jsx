import React from 'react';

const Empty = () => {
    return (
        <div>
            <div className="">
                <h1 className='text-xl font-bold'>No favourites yet</h1>
                <p className='text-gray-600'>Click the heart icon on any item to add it to your favorites</p>
            </div>
        </div>
    );
};

export default Empty;