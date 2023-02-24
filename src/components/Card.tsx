import React from 'react';

type PostDetails = {
    children: React.ReactNode;
}

const Card = (props: PostDetails) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    );
};

export default Card;